import React from 'react';
import { Award, CheckCircle2, Clock, Code2, Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { SynoversLogoMark } from './SynoversLogo';
import { GOOGLE_FORM_URL } from '@/config/registration';

export interface AgendaBlock {
  time: string;
  duration: string;
  phase: string;
  title: string;
  description: string;
  type: 'intro' | 'kickoff' | 'confirmation' | 'sprint' | 'review' | 'lunch' | 'freeze' | 'evaluation' | 'valedictory';
  chips: string[];
}

export const AGENDA_SCHEDULE: AgendaBlock[] = [
  {
    time: '09:00 AM – 09:30 AM',
    duration: '30 Mins',
    phase: '01 / INAUGURATION',
    title: 'Event Check-in & Welcome Orientation',
    description:
      'Introductory welcome address, briefing on hackathon rules, judging criteria, discord server orientation, and introduction of jury mentors.',
    type: 'intro',
    chips: ['Welcome Briefing', 'Rules Walkthrough', 'Mentor Introduction'],
  },
  {
    time: '09:30 AM',
    duration: 'Official Start',
    phase: '02 / SPRINT KICKOFF',
    title: 'SYNOHACK 2026 Officially Begins!',
    description:
      'The 8-hour live build timer begins! Teams unlock their development rooms, initialize git repositories, and start collaborating.',
    type: 'kickoff',
    chips: ['8-Hour Countdown Starts', 'Repository Init', 'Team Workspace'],
  },
  {
    time: '09:30 AM – 10:00 AM',
    duration: 'First 30 Mins',
    phase: '03 / PROBLEM ALIGNMENT',
    title: 'Problem Statement Confirmation & Discussion',
    description:
      'Teams pitch and confirm their selected software problem within their chosen domain with mentors. Mentors validate scope feasibility for the 8-hour sprint.',
    type: 'confirmation',
    chips: ['Problem Confirmation', 'Scope Validation', 'Mentor Approval'],
  },
  {
    time: '10:00 AM – 12:00 PM',
    duration: '2 Focused Hours',
    phase: '04 / DEVELOPMENT BLOCK 1',
    title: 'Development Phase 1: Core Architecture & Prototyping',
    description:
      'Sprint block one: Scaffold database schema, configure backend APIs, set up core application state, and implement primary UI layouts.',
    type: 'sprint',
    chips: ['Backend Scaffolding', 'Core Business Logic', 'Frontend Foundation'],
  },
  {
    time: '12:00 PM – 01:00 PM',
    duration: '1 Hour Checkpoint',
    phase: '05 / MENTOR REVIEW',
    title: 'Review Session 1: Mid-Way Milestone Check',
    description:
      'Mentors conduct 1-on-1 breakout check-ins with every team. They assess running prototypes, unblock technical roadblocks, and refine priority backlogs.',
    type: 'review',
    chips: ['Progress Audit', 'Technical Unblocking', 'Mid-Sprint Feedback'],
  },
  {
    time: '01:00 PM – 02:00 PM',
    duration: '1 Hour Break',
    phase: '06 / RECHARGE',
    title: 'Lunch Break & Strategy Sync',
    description:
      'Step back from screens, refuel energy, catch lunch with teammates, and align on post-lunch feature completion roadmap.',
    type: 'lunch',
    chips: ['Team Lunch', 'Mental Refresh', 'Afternoon Strategy'],
  },
  {
    time: '02:00 PM – 04:00 PM',
    duration: '2 Focused Hours',
    phase: '07 / DEVELOPMENT BLOCK 2',
    title: 'Development Phase 2: Feature Integration & Final Polish',
    description:
      'Final intense coding sprint: Complete end-to-end user journeys, integrate APIs with UI, fix responsiveness bugs, and prepare demo test accounts.',
    type: 'sprint',
    chips: ['API Integration', 'UI/UX Polish', 'End-to-End Testing'],
  },
  {
    time: '04:00 PM – 04:30 PM',
    duration: '30 Mins',
    phase: '08 / CODE FREEZE',
    title: 'Short Break & Code Submission Wrap-up',
    description:
      'Development halts. Teams commit code to GitHub, prepare a concise slide deck, record a fallback demo clip, and submit repository links.',
    type: 'freeze',
    chips: ['Git Code Freeze', 'Slide Deck Upload', 'Demo Video Prep'],
  },
  {
    time: '04:30 PM – 05:30 PM',
    duration: 'Final 1 Hour',
    phase: '09 / JURY EVALUATION',
    title: 'Final Review Session: Live Jury Pitching (1 Hour)',
    description:
      'Each team presents a live 5-minute walkthrough of their functioning software prototype to the evaluation panel, followed by jury Q&A.',
    type: 'evaluation',
    chips: ['Live Working Prototype', '5-Min Pitch Demo', 'Jury Q&A & Scoring'],
  },
  {
    time: '05:30 PM Onwards',
    duration: 'Closing Ceremony',
    phase: '10 / VALEDICTORY',
    title: 'Results Announcement & Prize Distribution',
    description:
      'Live declaration of winning teams across all 5 tracks (AI, Cybersecurity, Healthcare, AgriTech, and Open Innovation), distribution of prizes, and verified digital certificates.',
    type: 'valedictory',
    chips: ['Winners Declared', 'Prize Awards', 'Verified Certificates'],
  },
];

export const AgendaSection: React.FC = () => {
  return (
    <section className="agenda-section" id="agenda">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: 680 }}>
          <div className="eyebrow" style={{ color: 'var(--lime)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <SynoversLogoMark size={18} />
            <span>SYNOHACK 2026 · SYNOVERS TECHNOLOGIES</span>
          </div>
          <h2
            style={{
              font: '700 clamp(38px, 5.5vw, 56px)/0.96 var(--app-font-display)',
              letterSpacing: '-0.06em',
              color: '#ffffff',
              margin: '16px 0 12px',
            }}
          >
            Eight Hours.
            <br />
            <span style={{ color: 'var(--lime)' }}>Minute by Minute.</span>
          </h2>
          <p style={{ color: '#a7bed3', fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
            Strict cohort limited to <strong style={{ color: '#ffffff' }}>50 teams nationwide</strong>. From morning problem statement confirmation to live jury pitching. The official 8-hour agenda organized by <strong>Synovers Technologies</strong> to take your team from idea to working software.
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="agenda-highlight-bar" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          <div className="agenda-highlight-cell">
            <small>EVENT DATE</small>
            <strong>
              15 <span>NOV 2026</span>
            </strong>
            <span style={{ font: '10.5px var(--app-font-mono)', color: '#8ca5b9' }}>
              SUNDAY · 100% ONLINE
            </span>
          </div>
          <div className="agenda-highlight-cell">
            <small>REGISTRATION CUT-OFF</small>
            <strong style={{ color: '#fdba74' }}>
              10 <span>NOV 2026</span>
            </strong>
            <span style={{ font: '10.5px var(--app-font-mono)', color: '#fdba74' }}>
              11:59 PM IST STRICT DEADLINE
            </span>
          </div>
          <div className="agenda-highlight-cell">
            <small>PARTICIPATION CAP</small>
            <strong>
              50 <span>TEAMS ONLY</span>
            </strong>
            <span style={{ font: '10.5px var(--app-font-mono)', color: 'var(--lime)' }}>
              FIRST-COME, FIRST-SERVED
            </span>
          </div>
          <div className="agenda-highlight-cell">
            <small>SPRINT DURATION</small>
            <strong>
              8.0 <span>HOURS</span>
            </strong>
            <span style={{ font: '10.5px var(--app-font-mono)', color: '#8ca5b9' }}>
              TWO CODING SPRINT BLOCKS
            </span>
          </div>
          <div className="agenda-highlight-cell">
            <small>FINAL JURY REVIEW</small>
            <strong>
              04:30 <span>PM</span>
            </strong>
            <span style={{ font: '10.5px var(--app-font-mono)', color: '#8ca5b9' }}>
              1 HOUR LIVE EVALUATION
            </span>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="agenda-timeline-grid">
          {AGENDA_SCHEDULE.map((item, idx) => {
            const isMilestone =
              item.type === 'kickoff' || item.type === 'evaluation' || item.type === 'valedictory';
            const isBreak = item.type === 'lunch' || item.type === 'freeze';

            return (
              <div
                className={`agenda-card ${isMilestone ? 'milestone' : ''} ${isBreak ? 'break-card' : ''}`}
                key={idx}
                data-testid={`agenda-item-${idx}`}
              >
                {/* Time column */}
                <div className="agenda-time-col">
                  <div className="agenda-time-text">{item.time}</div>
                  <div className="agenda-duration">{item.duration}</div>
                </div>

                {/* Content column */}
                <div className="agenda-content-col">
                  <div
                    className="agenda-phase-tag"
                    style={{
                      color:
                        item.type === 'valedictory'
                          ? '#f59e0b'
                          : item.type === 'evaluation'
                            ? 'var(--lime)'
                            : item.type === 'kickoff'
                              ? '#38bdf8'
                              : 'var(--blue)',
                    }}
                  >
                    {item.phase}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="agenda-tags-row">
                    {item.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className={`agenda-chip ${cIdx === 0 && isMilestone ? 'accent' : ''}`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div
          style={{
            marginTop: 40,
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 12,
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: 'var(--lime)', marginBottom: 4 }}>
              JOIN THE SPRINT
            </div>
            <strong style={{ fontSize: 18, color: '#fff' }}>
              Ready to build working software in eight focused hours?
            </strong>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
            data-testid="button-agenda-register"
          >
            Register Your Team <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
