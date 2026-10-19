import type { Plugin } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';

interface StoredRegistration {
  registrationId: string;
  accessToken: string;
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  domain: string;
  memberCount: number;
  paymentStatus: 'Pending' | 'Paid' | 'Failed' | 'Refunded';
  amountPaise: number;
  createdAt: string;
}

const registrationsDb = new Map<string, StoredRegistration>([
  [
    'SYNO-2026-1001',
    {
      registrationId: 'SYNO-2026-1001',
      accessToken: 'token_1001',
      teamName: 'Alpha Creators',
      leaderName: 'Priya Sharma',
      leaderEmail: 'priya@example.com',
      domain: 'AI & Machine Learning',
      memberCount: 4,
      paymentStatus: 'Paid',
      amountPaise: 25000,
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
  ],
  [
    'SYNO-2026-1002',
    {
      registrationId: 'SYNO-2026-1002',
      accessToken: 'token_1002',
      teamName: 'Cyber Sentinels',
      leaderName: 'Karthik Raja',
      leaderEmail: 'karthik@example.com',
      domain: 'Cybersecurity & Privacy',
      memberCount: 3,
      paymentStatus: 'Paid',
      amountPaise: 25000,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ],
]);

function readBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
}

function sendJson(res: ServerResponse, status: number, data: any) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

export function devApiMockPlugin(): Plugin {
  return {
    name: 'dev-api-mock',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0] || '';
        const method = req.method?.toUpperCase() || 'GET';

        if (!url.startsWith('/api')) {
          return next();
        }

        // Health check
        if (url === '/api/healthz' || url === '/api/health') {
          return sendJson(res, 200, { status: 'healthy' });
        }

        // Public event settings
        if (url === '/api/public/event-settings') {
          return sendJson(res, 200, {
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
              {
                name: 'AI & Machine Learning',
                description: 'Build systems that learn, reason, or make useful predictions.',
              },
              {
                name: 'Cybersecurity & Privacy',
                description: 'Protect people, systems, and data in a connected world.',
              },
              {
                name: 'Healthcare & MedTech',
                description: 'Make care more accessible, precise, and human.',
              },
              {
                name: 'AgriTech & Sustainability',
                description: 'Use technology to support resilient food systems and a healthier planet.',
              },
              {
                name: 'Others (Open Innovation)',
                description: 'Build bold software solutions, developer tools, fintech, EdTech, or cross-domain wildcards.',
              },
            ],
            timeline: [
              {
                date: '09:00 AM – 09:30 AM',
                title: 'Event Check-in & Inauguration',
                detail: 'Welcome address, orientation, hackathon rules briefing, and mentor introduction.',
              },
              {
                date: '09:30 AM – 10:00 AM',
                title: 'Problem Statement Confirmation',
                detail: 'Sprint begins! Teams discuss and lock their chosen software problem with mentors.',
              },
              {
                date: '10:00 AM – 12:00 PM',
                title: 'Development Phase 1 (2 Hours)',
                detail: 'Scaffold core architecture, database schemas, APIs, and primary UI layouts.',
              },
              {
                date: '12:00 PM – 01:00 PM',
                title: 'Review Session 1 (Mid-Way Check)',
                detail: 'Mentors evaluate interim progress, unblock technical issues, and guide scope.',
              },
              {
                date: '01:00 PM – 02:00 PM',
                title: 'Lunch Break & Recharge',
                detail: 'Team lunch break, strategy alignment, and mental refresh.',
              },
              {
                date: '02:00 PM – 04:00 PM',
                title: 'Development Phase 2 (Final Sprint)',
                detail: 'Full-stack integration, bug fixing, test runs, and polishing working demo.',
              },
              {
                date: '04:00 PM – 04:30 PM',
                title: 'Code Freeze & Submission Prep',
                detail: 'Git repository commit, demo video upload, and presentation deck finalization.',
              },
              {
                date: '04:30 PM – 05:30 PM',
                title: 'Final Review & Jury Pitching (1 Hour)',
                detail: 'Live 5-minute prototype demo presentation and Q&A with evaluation jury panel.',
              },
              {
                date: '05:30 PM Onwards',
                title: 'Results & Prize Distribution',
                detail: 'Winner declarations across all 4 tracks, prize ceremony, and certificate roll-out.',
              },
            ],
            contactEmail: 'info@synovers.com',
            contactPhones: ['+91 7358096768', '+91 9344626768'],
            website: 'https://www.synovers.com',
          });
        }

        // Public announcements
        if (url === '/api/public/announcements') {
          return sendJson(res, 200, [
            {
              id: 'ann-1',
              title: 'Registrations are Live for SYNOHACK 2026',
              body: 'Welcome to the online build sprint! Teams of 1 to 4 students can register today.',
              publishedAt: '2026-10-15T09:00:00.000Z',
            },
            {
              id: 'ann-2',
              title: 'Problem Statement Guidelines',
              body: 'Select any problem within the 4 tracks: AI/ML, Cybersecurity, Healthcare, or AgriTech.',
              publishedAt: '2026-10-18T10:00:00.000Z',
            },
          ]);
        }

        // Public FAQs
        if (url === '/api/public/faqs') {
          return sendJson(res, 200, [
            {
              id: 'faq-1',
              question: 'What is SYNOHACK 2026?',
              answer:
                'An online eight-hour build sprint organized by Synovers Technologies where student teams select a real-world software problem and build a working first version.',
            },
            {
              id: 'faq-team-cap',
              question: 'How many teams can participate in SYNOHACK 2026?',
              answer:
                'Participation is strictly limited to 50 teams only across all four domains. This strict cohort limit guarantees that every single team receives intensive 1-on-1 mentor guidance during development checkpoints and comprehensive presentation time with our evaluation jury.',
            },
            {
              id: 'faq-deadline',
              question: 'What is the registration deadline?',
              answer:
                'Registration strictly closes on 10th November 2026 at 11:59 PM IST, or earlier if the 50-team maximum capacity is reached beforehand. Slots are confirmed on a first-come, first-served basis.',
            },
            {
              id: 'faq-2',
              question: 'Who can register?',
              answer:
                'Students from all colleges, universities, and disciplines are welcome. Teams can consist of 1 to 4 members.',
            },
            {
              id: 'faq-3',
              question: 'What is the team registration fee?',
              answer:
                'The fee is ₹250 per team, covering sprint access, mentorship, evaluation, and verified certificates.',
            },
            {
              id: 'faq-4',
              question: 'What tracks / domains can we choose?',
              answer:
                'There are five tracks: AI & Machine Learning, Cybersecurity & Privacy, Healthcare & MedTech, AgriTech & Sustainability, and Others (Open Innovation). Teams can choose any domain to build their software solution.',
            },
            {
              id: 'faq-5',
              question: 'Is the event fully online?',
              answer:
                'Yes, SYNOHACK 2026 is 100% online. Teams collaborate and build remotely.',
            },
          ]);
        }

        // Contact message
        if (url === '/api/public/contact' && method === 'POST') {
          return sendJson(res, 201, { received: true });
        }

        // Create registration
        if (url === '/api/registrations' && method === 'POST') {
          const body = await readBody(req);
          const rand = Math.floor(1000 + Math.random() * 9000);
          const regId = `SYNO-2026-${rand}`;
          const token = `token_${rand}`;
          const memberCount = 1 + (Array.isArray(body.members) ? body.members.length : 0);

          const item: StoredRegistration = {
            registrationId: regId,
            accessToken: token,
            teamName: body.teamName || 'Team ' + rand,
            leaderName: body.leaderName || 'Leader',
            leaderEmail: body.leaderEmail || 'leader@example.com',
            domain: body.domain || 'AI & Machine Learning',
            memberCount,
            paymentStatus: 'Paid',
            amountPaise: 25000,
            createdAt: new Date().toISOString(),
          };
          registrationsDb.set(regId, item);

          return sendJson(res, 201, {
            registrationId: regId,
            accessToken: token,
            checkoutUrl: `/registration/success?registrationId=${encodeURIComponent(regId)}&session_id=cs_mock_${rand}`,
            paymentStatus: 'Paid',
            amountPaise: 25000,
          });
        }

        // Verify registration checkout
        const verifyMatch = url.match(/^\/api\/registrations\/([^/]+)\/verify-checkout$/);
        if (verifyMatch && method === 'POST') {
          const regId = decodeURIComponent(verifyMatch[1]);
          const existing = registrationsDb.get(regId);
          if (existing) {
            existing.paymentStatus = 'Paid';
            return sendJson(res, 200, existing);
          }
          return sendJson(res, 200, {
            registrationId: regId,
            teamName: 'Your Team',
            leaderName: 'Team Leader',
            domain: 'AI & Machine Learning',
            memberCount: 3,
            paymentStatus: 'Paid',
            amountPaise: 25000,
            createdAt: new Date().toISOString(),
          });
        }

        // Get registration receipt
        const regMatch = url.match(/^\/api\/registrations\/([^/]+)$/);
        if (regMatch && method === 'GET') {
          const regId = decodeURIComponent(regMatch[1]);
          const existing = registrationsDb.get(regId);
          if (existing) {
            return sendJson(res, 200, existing);
          }
          return sendJson(res, 200, {
            registrationId: regId,
            teamName: 'Your Team',
            leaderName: 'Team Leader',
            domain: 'AI & Machine Learning',
            memberCount: 3,
            paymentStatus: 'Paid',
            amountPaise: 25000,
            createdAt: new Date().toISOString(),
          });
        }

        // Admin dashboard
        if (url === '/api/admin/dashboard') {
          return sendJson(res, 200, {
            totalRegistrations: registrationsDb.size + 40,
            paidRegistrations: registrationsDb.size + 36,
            pendingPayments: 3,
            failedPayments: 1,
            totalParticipants: (registrationsDb.size + 40) * 3,
            domainStats: [
              { domain: 'AI & Machine Learning', registrations: 16 },
              { domain: 'Cybersecurity & Privacy', registrations: 11 },
              { domain: 'Healthcare & MedTech', registrations: 8 },
              { domain: 'AgriTech & Sustainability', registrations: 5 },
              { domain: 'Others (Open Innovation)', registrations: 4 },
            ],
          });
        }

        // Admin registrations list
        if (url.startsWith('/api/admin/registrations')) {
          const items = Array.from(registrationsDb.values());
          return sendJson(res, 200, {
            items,
            total: items.length,
            page: 1,
            pageSize: 10,
          });
        }

        // Fallback for any unhandled /api
        sendJson(res, 200, { success: true });
      });
    },
  };
}
