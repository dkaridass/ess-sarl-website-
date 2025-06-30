import { 
  users, 
  type User, 
  type InsertUser,
  contactSubmissions,
  type Contact,
  type InsertContact,
  newsletters,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// Interface with CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submissions
  createContactSubmission(submission: InsertContact): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
  
  // Newsletter subscriptions
  createNewsletterSubscription(subscription: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
}

export class DatabaseStorage implements IStorage {
  // Helper to check db
  private ensureDb() {
    if (!db) throw new Error("Database is not configured. Set DATABASE_URL to enable database features.");
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    this.ensureDb();
    const [user] = await db!.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    this.ensureDb();
    const [user] = await db!.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    this.ensureDb();
    const [user] = await db!.insert(users).values(insertUser).returning();
    return user;
  }

  // Contact form submissions
  async createContactSubmission(submission: InsertContact): Promise<Contact> {
    this.ensureDb();
    console.log("[DEBUG] Inserting contact submission:", submission);
    const [contact] = await db!.insert(contactSubmissions).values({
      ...submission,
      createdAt: new Date()
    }).returning();
    console.log("[DEBUG] Inserted contact:", contact);
    return contact;
  }

  async getContactSubmissions(): Promise<Contact[]> {
    this.ensureDb();
    return await db!.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  // Newsletter subscriptions
  async createNewsletterSubscription(subscription: InsertNewsletter): Promise<Newsletter> {
    this.ensureDb();
    const [newsletter] = await db!.insert(newsletters).values({
      ...subscription,
      createdAt: new Date()
    }).returning();
    return newsletter;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    this.ensureDb();
    return await db!.select().from(newsletters).orderBy(desc(newsletters.createdAt));
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    this.ensureDb();
    const [newsletter] = await db!.select().from(newsletters).where(eq(newsletters.email, email));
    return newsletter || undefined;
  }
}

// Use DatabaseStorage for persistent data storage with PostgreSQL
export const storage = new DatabaseStorage();
