import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceInterest: text("service_interest").notNull(),
  location: text("location"),
  productType: text("product_type"),
  documentStatus: text("document_status"),
  transactionType: text("transaction_type"),
  additionalServices: text("additional_services"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  serviceInterest: z.string().min(1, "Please select a service"),
  location: z.string().optional(),
  productType: z.string().optional(),
  documentStatus: z.string().optional(),
  transactionType: z.string().optional(),
  additionalServices: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// AWS API Contact Form Schema
export const awsContactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phoneNumber: z.string().min(10, "Valid phone number is required"),
  interestType: z.string().min(1, "Interest type is required"),
  budgetRange: z.string().min(1, "Budget range is required"),
  preferredLocation: z.string().min(1, "Preferred location is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  propertyType: z.string().min(1, "Property type is required"),
  timeframe: z.string().min(1, "Timeframe is required"),
});

export type AwsContactFormValues = z.infer<typeof awsContactFormSchema>;
