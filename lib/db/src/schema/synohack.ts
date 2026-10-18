import {
  boolean,
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export type SynohackMember = {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  yearOfStudy: number;
};

export type SynohackTimelineItem = {
  date: string;
  title: string;
  detail: string;
};

export type SynohackDomainDetail = {
  name: string;
  description: string;
};

export type SynohackFaq = {
  id: string;
  question: string;
  answer: string;
};

export const synohackRegistrations = pgTable(
  "synohack_registrations",
  {
    id: text("id").primaryKey(),
    registrationId: text("registration_id").notNull().unique(),
    accessTokenHash: text("access_token_hash").notNull(),
    idempotencyKey: text("idempotency_key").notNull(),
    teamName: text("team_name").notNull(),
    leaderName: text("leader_name").notNull(),
    leaderEmail: text("leader_email").notNull(),
    leaderPhone: text("leader_phone").notNull(),
    college: text("college").notNull(),
    department: text("department").notNull(),
    yearOfStudy: integer("year_of_study").notNull(),
    members: jsonb("members").$type<SynohackMember[]>().notNull().default([]),
    domain: text("domain").notNull(),
    projectTitle: text("project_title").notNull(),
    problemStatement: text("problem_statement").notNull(),
    projectDescription: text("project_description").notNull(),
    paymentStatus: text("payment_status").notNull().default("Pending"),
    registrationStatus: text("registration_status").notNull().default("pending"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    uniqueIndex("synohack_registration_idempotency_unique").on(
      table.idempotencyKey,
    ),
    index("synohack_registration_leader_email_idx").on(table.leaderEmail),
    index("synohack_registration_status_idx").on(table.registrationStatus),
    index("synohack_registration_payment_status_idx").on(table.paymentStatus),
    index("synohack_registration_domain_idx").on(table.domain),
    index("synohack_registration_created_idx").on(table.createdAt),
  ],
);

export const synohackPayments = pgTable(
  "synohack_payments",
  {
    id: serial("id").primaryKey(),
    registrationId: text("registration_id")
      .notNull()
      .references(() => synohackRegistrations.registrationId, {
        onDelete: "cascade",
      }),
    stripeCheckoutSessionId: text("stripe_checkout_session_id").unique(),
    stripePaymentIntentId: text("stripe_payment_intent_id").unique(),
    amountPaise: integer("amount_paise").notNull(),
    currency: text("currency").notNull().default("inr"),
    status: text("status").notNull().default("Pending"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    paidAt: timestamp("paid_at", { withTimezone: true }),
  },
  (table) => [
    index("synohack_payment_registration_idx").on(table.registrationId),
    index("synohack_payment_status_idx").on(table.status),
  ],
);

export const synohackPaymentEvents = pgTable("synohack_payment_events", {
  eventId: text("event_id").primaryKey(),
  eventType: text("event_type").notNull(),
  receivedAt: timestamp("received_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const synohackContactMessages = pgTable(
  "synohack_contact_messages",
  {
    id: serial("id").primaryKey(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    subject: text("subject").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("synohack_contact_created_idx").on(table.createdAt)],
);

export const synohackEventSettings = pgTable("synohack_event_settings", {
  id: text("id").primaryKey(),
  eventName: text("event_name").notNull(),
  eventDate: timestamp("event_date", { withTimezone: true }).notNull(),
  registrationDeadline: timestamp("registration_deadline", {
    withTimezone: true,
  }).notNull(),
  timezone: text("timezone").notNull().default("Asia/Kolkata"),
  durationHours: integer("duration_hours").notNull().default(8),
  feePaise: integer("fee_paise").notNull().default(25000),
  registrationOpen: boolean("registration_open").notNull().default(true),
    registrationReopened: boolean("registration_reopened")
      .notNull()
      .default(false),
  description: text("description").notNull(),
  eligibility: text("eligibility").notNull(),
  rules: jsonb("rules").$type<string[]>().notNull(),
  timeline: jsonb("timeline")
    .$type<SynohackTimelineItem[]>()
    .notNull(),
  domains: jsonb("domains").$type<SynohackDomainDetail[]>().notNull(),
  contactEmail: text("contact_email").notNull(),
  contactPhones: jsonb("contact_phones").$type<string[]>().notNull(),
  website: text("website").notNull(),
  faqs: jsonb("faqs").$type<SynohackFaq[]>().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const synohackAnnouncements = pgTable(
  "synohack_announcements",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    body: text("body").notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("synohack_announcement_published_idx").on(table.publishedAt)],
);

export const synohackEmailLogs = pgTable(
  "synohack_email_logs",
  {
    id: serial("id").primaryKey(),
    messageType: text("message_type").notNull(),
    recipient: text("recipient").notNull(),
    status: text("status").notNull(),
    failure: text("failure"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("synohack_email_log_created_idx").on(table.createdAt)],
);
