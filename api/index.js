import express from 'express';
import { ZodError } from 'zod';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { desc, eq } from 'drizzle-orm';
import ws from 'ws';
import { sql } from 'drizzle-orm';
import { pgTable, text, varchar, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Schema definitions
const contactSubmissions = pgTable('contact_submissions', {
  id: varchar('id').primaryKey().default(sql`gen_random_uuid()`),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  serviceInterest: text('service_interest').notNull(),
  location: text('location'),
  productType: text('product_type'),
  documentStatus: text('document_status'),
  transactionType: text('transaction_type'),
  additionalServices: text('additional_services'),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

const insertContactSubmissionSchema = createInsertSchema(contactSubmissions)
  .omit({
    id: true,
    createdAt: true
  })
  .extend({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    serviceInterest: z.string().min(1, 'Please select a service'),
    location: z.string().optional(),
    productType: z.string().optional(),
    documentStatus: z.string().optional(),
    transactionType: z.string().optional(),
    additionalServices: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters')
  });

// Database setup
neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set. Did you forget to provision a database?');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool, schema: { contactSubmissions } });

// Storage class
class DatabaseStorage {
  async createContactSubmission(insertSubmission) {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getAllContactSubmissions() {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async getContactSubmissionById(id) {
    const [submission] = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id));
    return submission || undefined;
  }
}

const storage = new DatabaseStorage();

// Express app setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);
    
    res.json({
      success: true,
      message: "Thank you for contacting us! We'll get back to you within 24 hours.",
      id: submission.id
    });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Contact form validation error:', error.errors);
      return res.status(400).json({
        success: false,
        message: 'Please check your information and try again.',
        errors: error.errors
      });
    }
    
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting your request. Please try again later.'
    });
  }
});

// Export for Vercel
export default app;