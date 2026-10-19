// Client-side fallback for static deployments (Render Static Sites, GitHub Pages, Vercel, Netlify)
// When APIs are requested without a running backend server, provide instant local responses.

export function initStaticApiFallback() {
  if (typeof window === 'undefined') return;

  const EVENT_SETTINGS = {
    eventName: 'SYNOHACK 2026',
    eventDate: '2026-11-15T09:00:00.000Z',
    registrationDeadline: '2026-11-10T23:59:59.000Z',
    timezone: 'Asia/Kolkata',
    durationHours: 8,
    feePaise: 25000,
    registrationOpen: true,
    description:
      'SYNOHACK brings student teams together online to build software around a problem they care about. Work on your own idea, make progress together, and share what you have built.',
    eligibility:
      'Open to student teams. The organizer may request clarification of eligibility as part of event administration.',
    rules: [
      'Strict 50 Teams Cap: Participation is strictly limited to 50 teams across all five domains on a first-come, first-served basis.',
      'Registration Deadline: Strict cut-off on 10th November 2026 at 11:59 PM IST (or earlier once 50 teams register).',
      'Teams choose a software problem to work on within one of the five event domains: AI & Machine Learning, Cybersecurity & Privacy, Healthcare & MedTech, AgriTech & Sustainability, or Others (Open Innovation).',
      'The event is an online build sprint lasting eight focused hours on 15th November 2026.',
      'Every team registration must include accurate participant and project information.',
      'Registration is complete only after confirmation via the official Google Form or secure checkout.',
      'All registered participants must be students and comply with the eligibility requirements.',
      'Teams are responsible for respecting privacy, intellectual property, and applicable laws.',
    ],
    domains: [
      { name: 'AI & Machine Learning', description: 'Build systems that learn, reason, or make useful predictions.' },
      { name: 'Cybersecurity & Privacy', description: 'Protect people, systems, and data in a connected world.' },
      { name: 'Healthcare & MedTech', description: 'Make care more accessible, precise, and human.' },
      { name: 'AgriTech & Sustainability', description: 'Use technology to support resilient food systems and a healthier planet.' },
      { name: 'Others (Open Innovation)', description: 'Build bold software solutions, developer tools, fintech, EdTech, or cross-domain wildcards.' },
    ],
    timeline: [
      { date: '10 Nov 2026 · 11:59 PM', title: 'Registration Deadline (Strict 50-Team Cap)', detail: 'Final cut-off for teams to complete registration on Google Form. Registration closes immediately once 50 teams register.' },
      { date: '15 Nov 2026 · 09:00 AM – 09:30 AM', title: 'Event Check-in & Orientation', detail: 'Briefing on hackathon rules, platform setup, and mentor introduction.' },
      { date: '15 Nov 2026 · 09:30 AM – 10:00 AM', title: 'Problem Statement Confirmation', detail: 'Teams pitch and confirm their selected software problem with mentors.' },
      { date: '15 Nov 2026 · 10:00 AM – 12:00 PM', title: 'Development Phase 1 (2 Hours)', detail: 'Build core architecture, database schemas, APIs, and primary UI layouts.' },
      { date: '15 Nov 2026 · 12:00 PM – 01:00 PM', title: 'Review Session 1 (Mid-Way Check)', detail: '1-on-1 mentor breakout check-ins to evaluate interim prototype and unblock issues.' },
      { date: '15 Nov 2026 · 01:00 PM – 02:00 PM', title: 'Lunch Break & Recharge', detail: 'Team lunch break, strategy alignment, and mental refresh.' },
      { date: '15 Nov 2026 · 02:00 PM – 04:00 PM', title: 'Development Phase 2 (Final Sprint)', detail: 'Full-stack integration, bug fixing, test runs, and polishing working demo.' },
      { date: '15 Nov 2026 · 04:00 PM – 04:30 PM', title: 'Code Freeze & Submission Prep', detail: 'Git repository commit, demo video upload, and presentation deck finalization.' },
      { date: '15 Nov 2026 · 04:30 PM – 05:30 PM', title: 'Final Review & Jury Pitching (1 Hour)', detail: 'Live 5-minute prototype demo presentation and Q&A with evaluation jury panel.' },
      { date: '15 Nov 2026 · 05:30 PM Onwards', title: 'Results & Prize Distribution', detail: 'Winner declarations across all 5 tracks, prize ceremony, and certificate roll-out.' },
    ],
    contactEmail: 'info@synovers.com',
    contactPhones: ['+91 7358096768', '+91 9344626768'],
    website: 'https://www.synovers.com',
  };

  const ANNOUNCEMENTS = [
    {
      id: 'ann-1',
      title: 'Registrations are Live for SYNOHACK 2026',
      body: 'Welcome to the online build sprint! Teams of 1 to 4 students can register today.',
      publishedAt: '2026-10-15T09:00:00.000Z',
    },
    {
      id: 'ann-2',
      title: 'Problem Statement Guidelines',
      body: 'Select any problem within the 5 tracks: AI/ML, Cybersecurity, Healthcare, AgriTech, or Open Innovation.',
      publishedAt: '2026-10-18T10:00:00.000Z',
    },
  ];

  const FAQS = [
    {
      id: 'faq-1',
      question: 'What is SYNOHACK 2026?',
      answer: 'An online eight-hour build sprint organized by Synovers Technologies where student teams select a real-world software problem and build a working first version.',
    },
    {
      id: 'faq-team-cap',
      question: 'How many teams can participate in SYNOHACK 2026?',
      answer: 'Participation is strictly limited to 50 teams only across all five domains. This strict cohort limit guarantees that every single team receives intensive 1-on-1 mentor guidance during development checkpoints and comprehensive presentation time with our evaluation jury.',
    },
    {
      id: 'faq-deadline',
      question: 'What is the registration deadline?',
      answer: 'Registration strictly closes on 10th November 2026 at 11:59 PM IST, or earlier if the 50-team maximum capacity is reached beforehand. Slots are confirmed on a first-come, first-served basis.',
    },
    {
      id: 'faq-2',
      question: 'Who can register?',
      answer: 'Students from all colleges, universities, and disciplines are welcome. Teams can consist of 1 to 4 members.',
    },
    {
      id: 'faq-3',
      question: 'What is the team registration fee?',
      answer: 'The fee is ₹250 per team, covering sprint access, mentorship, evaluation, and verified certificates.',
    },
    {
      id: 'faq-4',
      question: 'What tracks / domains can we choose?',
      answer: 'There are five tracks: AI & Machine Learning, Cybersecurity & Privacy, Healthcare & MedTech, AgriTech & Sustainability, and Others (Open Innovation).',
    },
    {
      id: 'faq-5',
      question: 'Is the event fully online?',
      answer: 'Yes, SYNOHACK 2026 is 100% online. Teams collaborate and build remotely.',
    },
  ];

  const originalFetch = window.fetch.bind(window);

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const urlStr = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;

    const makeJsonResponse = (data: unknown, status = 200) =>
      new Response(JSON.stringify(data), {
        status,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-cache',
        },
      });

    // Check if the URL is an internal /api call
    if (urlStr.includes('/api/')) {
      const cleanPath = urlStr.split('?')[0];

      if (cleanPath.endsWith('/api/public/event-settings')) {
        return makeJsonResponse(EVENT_SETTINGS);
      }
      if (cleanPath.endsWith('/api/public/announcements')) {
        return makeJsonResponse(ANNOUNCEMENTS);
      }
      if (cleanPath.endsWith('/api/public/faqs')) {
        return makeJsonResponse(FAQS);
      }
      if (cleanPath.endsWith('/api/healthz') || cleanPath.endsWith('/api/health')) {
        return makeJsonResponse({ status: 'healthy' });
      }
      if (cleanPath.endsWith('/api/public/contact')) {
        return makeJsonResponse({ received: true }, 201);
      }
    }

    try {
      const response = await originalFetch(input, init);

      // If a static host returns text/html for an API request, fallback to valid JSON
      if (urlStr.includes('/api/')) {
        const contentType = response.headers.get('content-type') || '';
        if (contentType.includes('text/html')) {
          if (urlStr.includes('announcements') || urlStr.includes('faqs')) {
            return makeJsonResponse([]);
          }
          return makeJsonResponse({});
        }
      }

      return response;
    } catch {
      if (urlStr.includes('/api/')) {
        if (urlStr.includes('announcements') || urlStr.includes('faqs')) {
          return makeJsonResponse([]);
        }
        return makeJsonResponse({});
      }
      throw new Error(`Failed to fetch ${urlStr}`);
    }
  };
}
