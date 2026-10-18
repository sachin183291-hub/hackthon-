import { eq } from "drizzle-orm";
import {
  db,
  synohackEventSettings,
  type SynohackDomainDetail,
  type SynohackFaq,
  type SynohackTimelineItem,
} from "@workspace/db";

const DOMAIN_DETAILS: SynohackDomainDetail[] = [
  {
    name: "AI & Machine Learning",
    description: "Software ideas shaped by intelligent systems and useful data.",
  },
  {
    name: "Cybersecurity & Privacy",
    description: "Software that helps people and organizations protect digital life.",
  },
  {
    name: "Healthcare & MedTech",
    description: "Digital tools that address meaningful healthcare needs.",
  },
  {
    name: "AgriTech & Sustainability",
    description: "Software for more sustainable agriculture and resource use.",
  },
];

const DEFAULT_FAQS: SynohackFaq[] = [
  {
    id: "what-is-synohack",
    question: "What is SYNOHACK 2026?",
    answer:
      "An eight-hour online open-statement software hackathon organized by Synovers Technologies.",
  },
  {
    id: "who-can-participate",
    question: "Who can participate?",
    answer: "Eligible students from First Year to Fourth Year.",
  },
  {
    id: "registration-fee",
    question: "What is the registration fee?",
    answer: "₹250 per team.",
  },
  {
    id: "team-size",
    question: "What is the maximum team size?",
    answer: "Four members per team.",
  },
  {
    id: "event-mode",
    question: "Is this an online or offline event?",
    answer: "The hackathon is conducted 100% online.",
  },
  {
    id: "domains",
    question: "What are the available domains?",
    answer:
      "AI & Machine Learning, Cybersecurity & Privacy, Healthcare & MedTech, and AgriTech & Sustainability.",
  },
  {
    id: "problem-statement",
    question: "Can we choose our own problem statement?",
    answer:
      "Yes. Teams can choose their own problem statement, but it must belong to one of the four official domains.",
  },
  {
    id: "hardware",
    question: "Are hardware-only projects allowed?",
    answer: "No. Only software development projects are allowed.",
  },
  {
    id: "deadline",
    question: "What is the registration deadline?",
    answer: "13 November 2026.",
  },
  {
    id: "winner-opportunities",
    question: "What opportunities are available for winners?",
    answer:
      "The top three winning teams will be considered for internship and career opportunities at Synovers Technologies, subject to selection and availability.",
  },
  {
    id: "contact",
    question: "How can we contact the organizers?",
    answer:
      "Call +91 7358096768 or +91 9344626768, or email info@synovers.com.",
  },
];

const DEFAULT_RULES = [
  "The event is conducted completely online.",
  "The hackathon duration is eight hours.",
  "Registration fee is ₹250 per team.",
  "Maximum team size is four members.",
  "First-year to fourth-year students are eligible.",
  "Projects must belong to one of the four official hackathon domains.",
  "Only software development projects are allowed.",
  "Participants may choose their own problem statement.",
  "Registration must be completed before the deadline.",
  "Participants must provide accurate registration data.",
  "Participants must comply with the organizer's published instructions.",
];

const DEFAULT_TIMELINE: SynohackTimelineItem[] = [
  {
    date: "13 November 2026",
    title: "Registration deadline",
    detail: "Registration closes at the end of the date in Asia/Kolkata.",
  },
  {
    date: "15 November 2026",
    title: "SYNOHACK 2026",
    detail: "Eight-hour online hackathon. Detailed event instructions and the final schedule will be communicated to registered participants.",
  },
];

const DEFAULT_DESCRIPTION =
  "SYNOHACK 2026 is an online open-statement software hackathon organized by Synovers Technologies. Identify a meaningful problem, build a practical software solution, and showcase your technical and creative abilities in eight hours.";

const DEFAULT_ELIGIBILITY =
  "SYNOHACK 2026 welcomes eligible students currently studying in First, Second, Third, or Fourth Year. Teams may have up to four members, must designate one team leader, and must build software projects within one of the four official domains.";

export async function getSynohackSettings() {
  await db
    .insert(synohackEventSettings)
    .values({
      id: "synohack-2026",
      eventName: "SYNOHACK 2026",
      eventDate: new Date("2026-11-15T00:00:00+05:30"),
      registrationDeadline: new Date("2026-11-13T23:59:59.999+05:30"),
      timezone: "Asia/Kolkata",
      durationHours: 8,
      feePaise: 25000,
      registrationOpen: true,
      registrationReopened: false,
      description: DEFAULT_DESCRIPTION,
      eligibility: DEFAULT_ELIGIBILITY,
      rules: DEFAULT_RULES,
      timeline: DEFAULT_TIMELINE,
      domains: DOMAIN_DETAILS,
      contactEmail: "info@synovers.com",
      contactPhones: ["+91 7358096768", "+91 9344626768"],
      website: "https://www.synovers.com",
      faqs: DEFAULT_FAQS,
    })
    .onConflictDoNothing();

  const [settings] = await db
    .select()
    .from(synohackEventSettings)
    .where(eq(synohackEventSettings.id, "synohack-2026"))
    .limit(1);

  if (!settings) {
    throw new Error("SYNOHACK event settings could not be loaded");
  }
  return settings;
}

export function isRegistrationOpen(settings: {
  registrationOpen: boolean;
  registrationReopened: boolean;
  registrationDeadline: Date;
}): boolean {
  const beforeDeadline = Date.now() <= settings.registrationDeadline.getTime();
  return settings.registrationOpen && (beforeDeadline || settings.registrationReopened);
}

export function toPublicEventSettings(settings: Awaited<
  ReturnType<typeof getSynohackSettings>
>) {
  return {
    eventName: settings.eventName,
    eventDate: settings.eventDate.toISOString(),
    registrationDeadline: settings.registrationDeadline.toISOString(),
    timezone: settings.timezone,
    durationHours: settings.durationHours,
    feePaise: settings.feePaise,
    registrationOpen: isRegistrationOpen(settings),
    description: settings.description,
    eligibility: settings.eligibility,
    rules: settings.rules,
    timeline: settings.timeline,
    domains: settings.domains,
    contactEmail: settings.contactEmail,
    contactPhones: settings.contactPhones,
    website: settings.website,
  };
}

export { DEFAULT_FAQS, DEFAULT_RULES, DEFAULT_TIMELINE };
