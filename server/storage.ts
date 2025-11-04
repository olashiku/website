import {type ContactSubmission, type InsertContactSubmission} from "@shared/schema";
// import { db } from "./db";
// import { desc, eq } from "drizzle-orm";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmissionById(id: string): Promise<ContactSubmission | undefined>;
}

// Mock storage implementation that stores data in memory
export class MockStorage implements IStorage {
    private submissions: ContactSubmission[] = [];
    private idCounter = 1;

    async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
        const submission: ContactSubmission = {
            id: `mock-${this.idCounter++}`,
            ...insertSubmission,
            createdAt: new Date(),
        };

        this.submissions.unshift(submission); // Add to beginning to simulate desc order
        console.log('Mock: Contact submission saved:', submission);
        return submission;
    }

    async getAllContactSubmissions(): Promise<ContactSubmission[]> {
        return [...this.submissions]; // Return copy to prevent external modifications
    }

    async getContactSubmissionById(id: string): Promise<ContactSubmission | undefined> {
        return this.submissions.find(submission => submission.id === id);
    }
}

// Database storage implementation (commented out)
/*
export class DatabaseStorage implements IStorage {
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async getContactSubmissionById(id: string): Promise<ContactSubmission | undefined> {
    const [submission] = await db
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id));
    return submission || undefined;
  }
}
*/

// Use mock storage instead of database storage
export const storage = new MockStorage();
