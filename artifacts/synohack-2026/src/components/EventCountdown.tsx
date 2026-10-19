import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

// Exact target dates (IST = UTC+5:30)
// Event Kickoff: 15 November 2026 at 09:00:00 AM IST
export const EVENT_START_ISO = '2026-11-15T09:00:00+05:30';
// Registration Deadline: 10 November 2026 at 23:59:59 PM IST
export const REGISTRATION_DEADLINE_ISO = '2026-11-10T23:59:59+05:30';

interface TimeLeft {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function getTimeRemaining(targetIso: string): TimeLeft {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const totalMs = Math.max(0, target - now);

  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
    isComplete: totalMs <= 0,
  };
}

export const HeaderCountdownTicker: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeRemaining(EVENT_START_ISO));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(EVENT_START_ISO));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const d = String(timeLeft.days).padStart(2, '0');
  const h = String(timeLeft.hours).padStart(2, '0');
  const m = String(timeLeft.minutes).padStart(2, '0');
  const s = String(timeLeft.seconds).padStart(2, '0');

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        background: 'rgba(101, 213, 42, 0.15)',
        border: '1px solid rgba(101, 213, 42, 0.5)',
        borderRadius: 4,
        padding: '2px 8px',
        color: '#FFFFFF',
        fontFamily: 'var(--app-font-mono)',
        fontSize: '11px',
        letterSpacing: '0.04em',
      }}
      title="Live countdown to Event Kickoff (15 Nov 2026, 09:00 AM IST)"
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--lime)',
          boxShadow: '0 0 6px var(--lime)',
          display: 'inline-block',
        }}
      />
      <span style={{ color: 'var(--lime)', fontWeight: 800 }}>LIVE COUNTDOWN:</span>
      <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
        {d}d {h}h {m}m <span style={{ color: '#65D52A' }}>{s}s</span>
      </span>
    </span>
  );
};

export const EventCountdownHero: React.FC = () => {
  const [mode, setMode] = useState<'event' | 'deadline'>('event');
  const targetIso = mode === 'event' ? EVENT_START_ISO : REGISTRATION_DEADLINE_ISO;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeRemaining(targetIso));
  const [deadlineLeft, setDeadlineLeft] = useState<TimeLeft>(() => getTimeRemaining(REGISTRATION_DEADLINE_ISO));

  useEffect(() => {
    const update = () => {
      setTimeLeft(getTimeRemaining(targetIso));
      setDeadlineLeft(getTimeRemaining(REGISTRATION_DEADLINE_ISO));
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetIso]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div
      className="event-countdown-box"
      style={{
        background: 'linear-gradient(135deg, rgba(11,35,64,0.92) 0%, rgba(7,24,43,0.96) 100%)',
        border: '1.5px solid rgba(101, 213, 42, 0.4)',
        borderRadius: 16,
        padding: '20px 22px',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45), 0 0 24px rgba(101, 213, 42, 0.12)',
        marginTop: 26,
        marginBottom: 10,
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Decorative background glow */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 140,
          height: 140,
          background: 'radial-gradient(circle, rgba(101,213,42,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header bar with Mode Toggles */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          paddingBottom: 14,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(101, 213, 42, 0.15)',
              border: '1px solid rgba(101, 213, 42, 0.4)',
              borderRadius: 20,
              padding: '4px 10px',
              color: 'var(--lime)',
              font: '700 10.5px var(--app-font-mono)',
              letterSpacing: '0.08em',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--lime)',
                boxShadow: '0 0 8px #65D52A',
                display: 'inline-block',
              }}
            />
            LIVE TIMER
          </div>
          <span
            style={{
              font: '700 13px var(--app-font-display)',
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            {mode === 'event' ? 'Countdown to Hackathon Kickoff' : 'Countdown to Registration Cut-Off'}
          </span>
        </div>

        {/* Toggle Pills */}
        <div
          style={{
            display: 'inline-flex',
            background: 'rgba(0, 0, 0, 0.35)',
            borderRadius: 8,
            padding: 3,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <button
            type="button"
            onClick={() => setMode('event')}
            style={{
              background: mode === 'event' ? 'var(--lime)' : 'transparent',
              color: mode === 'event' ? 'var(--navy)' : '#8fa4b6',
              fontWeight: 800,
              fontSize: 11,
              fontFamily: 'var(--app-font-mono)',
              padding: '5px 11px',
              borderRadius: 6,
              border: 0,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            15 Nov Event
          </button>
          <button
            type="button"
            onClick={() => setMode('deadline')}
            style={{
              background: mode === 'deadline' ? '#ea580c' : 'transparent',
              color: mode === 'deadline' ? '#ffffff' : '#8fa4b6',
              fontWeight: 800,
              fontSize: 11,
              fontFamily: 'var(--app-font-mono)',
              padding: '5px 11px',
              borderRadius: 6,
              border: 0,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            10 Nov Deadline
          </button>
        </div>
      </div>

      {/* 50 Teams Strictly Allowed Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          background: 'rgba(234, 88, 12, 0.14)',
          border: '1px solid rgba(234, 88, 12, 0.45)',
          borderRadius: 8,
          padding: '8px 12px',
          marginBottom: 16,
          fontSize: 11.5,
          fontFamily: 'var(--app-font-mono)',
          color: '#fdba74',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ color: '#f97316', fontWeight: 900 }}>⚡</span>
          <span>
            <strong style={{ color: '#ffffff' }}>STRICT CAPACITY:</strong> ONLY <strong style={{ color: '#fcd34d' }}>50 TEAMS ALLOWED</strong>
          </span>
        </div>
        <span style={{ fontSize: 11, color: '#fed7aa', fontWeight: 600 }}>
          First-Come, First-Served · Cut-off: 10 Nov 2026 11:59 PM IST
        </span>
      </div>

      {/* Main 4 Digital Counter Blocks */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(6px, 2vw, 12px)',
          textAlign: 'center',
        }}
      >
        {/* Days */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 12,
            padding: '12px 6px 10px',
            position: 'relative',
          }}
        >
          <div
            style={{
              font: '800 clamp(26px, 4vw, 38px) var(--app-font-mono)',
              color: '#FFFFFF',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-0.02em',
              textShadow: '0 0 16px rgba(255,255,255,0.2)',
            }}
          >
            {pad(timeLeft.days)}
          </div>
          <div
            style={{
              font: '700 9.5px var(--app-font-mono)',
              color: 'var(--lime)',
              letterSpacing: '0.14em',
              marginTop: 6,
              textTransform: 'uppercase',
            }}
          >
            DAYS
          </div>
        </div>

        {/* Hours */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 12,
            padding: '12px 6px 10px',
          }}
        >
          <div
            style={{
              font: '800 clamp(26px, 4vw, 38px) var(--app-font-mono)',
              color: '#FFFFFF',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-0.02em',
              textShadow: '0 0 16px rgba(255,255,255,0.2)',
            }}
          >
            {pad(timeLeft.hours)}
          </div>
          <div
            style={{
              font: '700 9.5px var(--app-font-mono)',
              color: 'var(--lime)',
              letterSpacing: '0.14em',
              marginTop: 6,
              textTransform: 'uppercase',
            }}
          >
            HOURS
          </div>
        </div>

        {/* Minutes */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 12,
            padding: '12px 6px 10px',
          }}
        >
          <div
            style={{
              font: '800 clamp(26px, 4vw, 38px) var(--app-font-mono)',
              color: '#FFFFFF',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-0.02em',
              textShadow: '0 0 16px rgba(255,255,255,0.2)',
            }}
          >
            {pad(timeLeft.minutes)}
          </div>
          <div
            style={{
              font: '700 9.5px var(--app-font-mono)',
              color: 'var(--lime)',
              letterSpacing: '0.14em',
              marginTop: 6,
              textTransform: 'uppercase',
            }}
          >
            MINUTES
          </div>
        </div>

        {/* Seconds (Pulsing highlight) */}
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(101,213,42,0.12) 0%, rgba(22,132,255,0.08) 100%)',
            border: '1.5px solid rgba(101, 213, 42, 0.65)',
            borderRadius: 12,
            padding: '12px 6px 10px',
            boxShadow: '0 0 18px rgba(101, 213, 42, 0.25)',
          }}
        >
          <div
            style={{
              font: '800 clamp(26px, 4vw, 38px) var(--app-font-mono)',
              color: 'var(--lime)',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
              letterSpacing: '-0.02em',
              textShadow: '0 0 18px rgba(101,213,42,0.6)',
            }}
          >
            {pad(timeLeft.seconds)}
          </div>
          <div
            style={{
              font: '700 9.5px var(--app-font-mono)',
              color: '#FFFFFF',
              letterSpacing: '0.14em',
              marginTop: 6,
              textTransform: 'uppercase',
            }}
          >
            SECONDS
          </div>
        </div>
      </div>

      {/* Progress & Target Details Footer */}
      <div
        style={{
          marginTop: 14,
          paddingTop: 12,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          fontSize: 11.5,
          fontFamily: 'var(--app-font-mono)',
        }}
      >
        <div style={{ color: '#9bb1c4', display: 'flex', alignItems: 'center', gap: 7 }}>
          <Calendar size={13} style={{ color: 'var(--lime)' }} />
          <span>
            {mode === 'event' ? (
              <>
                <strong style={{ color: '#FFFFFF' }}>15 November 2026</strong> · 09:00 AM IST Kick-off
              </>
            ) : (
              <>
                <strong style={{ color: '#fdba74' }}>10 November 2026</strong> · 11:59 PM IST Cut-off
              </>
            )}
          </span>
        </div>

        {/* Secondary reminder if in event mode */}
        {mode === 'event' && (
          <div
            style={{
              color: '#fdba74',
              background: 'rgba(234, 88, 12, 0.15)',
              border: '1px solid rgba(234, 88, 12, 0.4)',
              padding: '3px 8px',
              borderRadius: 6,
              fontSize: 11,
            }}
          >
            ⏳ Registration cut-off in: <strong>{deadlineLeft.days}d {deadlineLeft.hours}h {deadlineLeft.minutes}m</strong>
          </div>
        )}

        <div style={{ color: '#68859e', fontSize: 10.5 }}>
          Timezone: Asia/Kolkata (IST) · Real-Time Precision
        </div>
      </div>
    </div>
  );
};
