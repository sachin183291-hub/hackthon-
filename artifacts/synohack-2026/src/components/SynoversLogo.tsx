import React, { useState } from 'react';
import { Link } from 'wouter';

interface LogoProps {
  size?: number;
  className?: string;
}

export const SynoversLogoMark: React.FC<LogoProps> = ({ size = 36, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/synovers-mark.png"
        alt="Synovers Technologies"
        width={size}
        height={size}
        className={className}
        onError={() => setImgError(true)}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'inline-block',
        }}
      />
    );
  }

  // Fallback vector
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Synovers Technologies Logo"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="synoGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B2340" />
          <stop offset="1" stopColor="#07182B" />
        </linearGradient>
        <linearGradient id="synoAccent" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#65D52A" />
          <stop offset="1" stopColor="#1684FF" />
        </linearGradient>
      </defs>
      <rect
        x="2.5"
        y="2.5"
        width="43"
        height="43"
        rx="11"
        fill="url(#synoGrad)"
        stroke="rgba(101,213,42,0.45)"
        strokeWidth="1.5"
      />
      <path
        d="M32 17.5C30.5 15 27.5 13.5 24 13.5C18.5 13.5 15 17 15 21C15 27.5 33 24.5 33 30.5C33 34.5 29.5 37 24 37C19 37 15.5 34.5 14 31.5"
        stroke="url(#synoAccent)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SynoversFullLogo: React.FC<{
  height?: number;
  dark?: boolean;
  className?: string;
}> = ({ height = 48, dark = true, className = '' }) => {
  const src = dark ? '/synovers-logo-dark.png' : '/synovers-logo.png';
  return (
    <img
      src={src}
      alt="Synovers - Dream it.. Do it.."
      height={height}
      className={className}
      style={{
        height,
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'contain',
        display: 'inline-block',
      }}
    />
  );
};

export const SynoHackHeaderBrand: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <Link
      href="/"
      className="wordmark"
      data-testid="link-brand"
      onClick={(e) => {
        if (window.location.pathname === '/' || window.location.pathname === '') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
    >
      <div className="header-brand-wrap" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Synovers Company Logo & Wordmark */}
        <div className="header-company-info" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <SynoversLogoMark size={36} />
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <div
              style={{
                font: '800 17px var(--app-font-display)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: light ? 'var(--navy)' : '#ffffff',
              }}
            >
              SYNO<span style={{ color: 'var(--lime)' }}>VERS</span>
            </div>
            <div
              className="header-company-subtitle"
              style={{
                font: '700 8px var(--app-font-mono)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: light ? '#5f778d' : '#8fa6bb',
                lineHeight: 1,
                marginTop: 2,
              }}
            >
              TECHNOLOGIES
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="header-brand-divider"
          style={{
            width: 1,
            height: 24,
            background: light ? 'rgba(7,24,43,0.18)' : 'rgba(255,255,255,0.22)',
          }}
        />

        {/* Event Name - SYNOHACK 2026 */}
        <div className="header-event-info" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              font: '800 16px var(--app-font-display)',
              letterSpacing: '-0.04em',
              color: light ? 'var(--navy)' : '#ffffff',
            }}
          >
            SYNOHACK
          </span>
          <span
            style={{
              font: '800 11px var(--app-font-mono)',
              padding: '2px 6px',
              borderRadius: 4,
              background: 'var(--lime)',
              color: 'var(--navy)',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            2026
          </span>
        </div>
      </div>
    </Link>
  );
};
