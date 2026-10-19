import React from 'react';
import { Trophy, Award, Briefcase, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { MSMEBadge, ISOBadge } from './CertificationBadges';
import { GOOGLE_FORM_URL } from '@/config/registration';

export const PrizesSection: React.FC = () => {
  return (
    <section
      id="prizes"
      className="prizes-section"
      style={{
        padding: '84px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 350,
          background: 'radial-gradient(circle, rgba(101,213,42,0.12) 0%, rgba(22,132,255,0.08) 50%, transparent 80%)',
          pointerEvents: 'none',
          filter: 'blur(70px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 52px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 30,
              background: 'rgba(101, 213, 42, 0.12)',
              border: '1px solid rgba(101, 213, 42, 0.35)',
              color: 'var(--lime)',
              font: '700 11.5px var(--app-font-mono)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            <Trophy size={15} />
            <span>₹25,000 TOTAL CASH PRIZE POOL + CAREER OFFERS</span>
          </div>

          <h2
            style={{
              font: '800 clamp(32px, 5.2vw, 54px) var(--app-font-display)',
              color: '#FFFFFF',
              letterSpacing: '-0.05em',
              lineHeight: 1.05,
              margin: '0 0 16px',
            }}
          >
            Win Cash Awards & Launch Your <br />
            <span style={{ color: 'var(--lime)' }}>Career at Synovers Technologies</span>
          </h2>

          <p style={{ fontSize: 15, color: '#9cb3c7', lineHeight: 1.7, margin: 0 }}>
            Compete in a select cohort strictly capped at <strong style={{ color: '#fff' }}>50 student teams nationwide</strong>. Every self-chosen software solution is evaluated for technical innovation, architecture, and real-world execution. The <strong style={{ color: '#fff' }}>Top 3 Teams</strong> win direct cash rewards, trophies, and guaranteed <strong style={{ color: '#fff' }}>Internship & Job Placement Offers</strong>.
          </p>
        </div>

        {/* 3 Top Prize Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            alignItems: 'stretch',
            marginBottom: 36,
          }}
        >
          {/* 1st Prize - Champion */}
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(16, 44, 74, 0.85) 0%, rgba(9, 26, 46, 0.95) 100%)',
              border: '2px solid rgba(101, 213, 42, 0.65)',
              borderRadius: 20,
              padding: '36px 28px',
              position: 'relative',
              boxShadow: '0 20px 45px rgba(101, 213, 42, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -14,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(90deg, #65D52A 0%, #1684FF 100%)',
                color: '#07182B',
                font: '800 11px var(--app-font-mono)',
                padding: '4px 16px',
                borderRadius: 20,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                boxShadow: '0 4px 12px rgba(101, 213, 42, 0.4)',
              }}
            >
              1ST PLACE · OVERALL CHAMPION
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, marginTop: 6 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'rgba(101, 213, 42, 0.15)',
                    border: '1.5px solid rgba(101, 213, 42, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--lime)',
                  }}
                >
                  <Trophy size={30} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ font: '800 11px var(--app-font-mono)', color: 'var(--lime)', letterSpacing: '0.08em' }}>
                    CASH AWARD
                  </div>
                  <div style={{ font: '800 38px var(--app-font-display)', color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    ₹12,000
                  </div>
                </div>
              </div>

              <h3 style={{ font: '800 22px var(--app-font-display)', color: '#FFFFFF', margin: '0 0 14px' }}>
                Winner Trophy & Grand Honor
              </h3>

              <div style={{ display: 'grid', gap: 10, marginBottom: 24, fontSize: 13, color: '#adc2d4' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="var(--lime)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Direct Full-time Job Placement</strong> or Paid Internship Offer at Synovers Technologies</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="var(--lime)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Official Winner Memento / Trophy</strong> + Certificate of Excellence</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="var(--lime)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Google & Meta Tech Track</strong> architecture validation & sponsorship vouchers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="var(--lime)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Incubation & Commercialization</strong> support for your product startup</span>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: 16,
                font: '700 10.5px var(--app-font-mono)',
                color: 'var(--lime)',
                letterSpacing: '0.08em',
              }}
            >
              GUARANTEED JOB & INTERNSHIP ADMIT
            </div>
          </div>

          {/* 2nd Prize - Runner Up */}
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(14, 38, 64, 0.85) 0%, rgba(8, 22, 38, 0.95) 100%)',
              border: '1.5px solid rgba(22, 132, 255, 0.55)',
              borderRadius: 20,
              padding: '36px 28px',
              position: 'relative',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -14,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#1684FF',
                color: '#FFFFFF',
                font: '800 11px var(--app-font-mono)',
                padding: '4px 16px',
                borderRadius: 20,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              2ND PLACE · 1ST RUNNER UP
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, marginTop: 6 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'rgba(22, 132, 255, 0.15)',
                    border: '1.5px solid rgba(22, 132, 255, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                  }}
                >
                  <Award size={30} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ font: '800 11px var(--app-font-mono)', color: '#38bdf8', letterSpacing: '0.08em' }}>
                    CASH AWARD
                  </div>
                  <div style={{ font: '800 38px var(--app-font-display)', color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    ₹8,000
                  </div>
                </div>
              </div>

              <h3 style={{ font: '800 22px var(--app-font-display)', color: '#FFFFFF', margin: '0 0 14px' }}>
                Runner-Up Trophy & Merit
              </h3>

              <div style={{ display: 'grid', gap: 10, marginBottom: 24, fontSize: 13, color: '#adc2d4' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Direct Paid Internship Offer</strong> + Career Placement Interview at Synovers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Runner-Up Memento</strong> + Certificate of Merit</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Industry Certification Mentorship</strong> with senior software engineers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Project Showcase</strong> featured across Synovers client networks</span>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: 16,
                font: '700 10.5px var(--app-font-mono)',
                color: '#38bdf8',
                letterSpacing: '0.08em',
              }}
            >
              PAID INTERNSHIP & CAREER TRACK
            </div>
          </div>

          {/* 3rd Prize - 2nd Runner Up */}
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(14, 38, 64, 0.85) 0%, rgba(8, 22, 38, 0.95) 100%)',
              border: '1.5px solid rgba(255, 153, 51, 0.45)',
              borderRadius: 20,
              padding: '36px 28px',
              position: 'relative',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -14,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#FF9933',
                color: '#07182B',
                font: '800 11px var(--app-font-mono)',
                padding: '4px 16px',
                borderRadius: 20,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              3RD PLACE · 2ND RUNNER UP
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, marginTop: 6 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'rgba(255, 153, 51, 0.15)',
                    border: '1.5px solid rgba(255, 153, 51, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF9933',
                  }}
                >
                  <Award size={30} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ font: '800 11px var(--app-font-mono)', color: '#FF9933', letterSpacing: '0.08em' }}>
                    CASH AWARD
                  </div>
                  <div style={{ font: '800 38px var(--app-font-display)', color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    ₹5,000
                  </div>
                </div>
              </div>

              <h3 style={{ font: '800 22px var(--app-font-display)', color: '#FFFFFF', margin: '0 0 14px' }}>
                Second Runner-Up & Honor
              </h3>

              <div style={{ display: 'grid', gap: 10, marginBottom: 24, fontSize: 13, color: '#adc2d4' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#FF9933" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Direct Technical Internship Offer</strong> at Synovers Technologies</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#FF9933" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Trophy Memento</strong> + Certificate of Commendation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#FF9933" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Live Code Review & Feedback</strong> by Senior Solution Architects</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <CheckCircle2 size={16} color="#FF9933" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span><strong>Placement Interview Fast-Track</strong> for future graduate openings</span>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: 16,
                font: '700 10.5px var(--app-font-mono)',
                color: '#FF9933',
                letterSpacing: '0.08em',
              }}
            >
              TECHNICAL INTERNSHIP OFFER
            </div>
          </div>
        </div>

        {/* Career & Recruiter Highlights Banner */}
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(8, 28, 52, 0.95) 0%, rgba(11, 38, 70, 0.95) 100%)',
            border: '1.5px solid rgba(101, 213, 42, 0.35)',
            borderRadius: 18,
            padding: '30px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 16,
                background: 'rgba(101, 213, 42, 0.14)',
                border: '1.5px solid rgba(101, 213, 42, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--lime)',
                flexShrink: 0,
              }}
            >
              <Briefcase size={28} />
            </div>
            <div>
              <div style={{ font: '800 20px var(--app-font-display)', color: '#FFFFFF', letterSpacing: '-0.03em' }}>
                Guaranteed Internship & Job Offers by Synovers Technologies
              </div>
              <p style={{ margin: '4px 0 0', color: '#9bb3c7', fontSize: 13.5, maxWidth: 650, lineHeight: 1.5 }}>
                Synovers Technologies actively hires student talent from SYNOHACK 2026. Top performers across all tracks get real enterprise project experience, paid stipends, and placement offers in Coimbatore & remote engineering teams.
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
            style={{
              padding: '13px 26px',
              fontSize: 14,
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 8px 24px rgba(101, 213, 42, 0.35)',
            }}
          >
            Register for ₹25,000 Prize Pool <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
