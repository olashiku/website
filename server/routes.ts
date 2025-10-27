import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
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
        console.error("Contact form validation error:", error.errors);
        return res.status(400).json({ 
          success: false, 
          message: "Please check your information and try again.",
          errors: error.errors 
        });
      }
      
      console.error("Contact form submission error:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while submitting your request. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
