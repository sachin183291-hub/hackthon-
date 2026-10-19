import React from 'react';

// Google Official 4-Color G Logo
export const GoogleLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Google">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// Meta Official Blue Infinity Logo
export const MetaLogo: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Meta">
    <path
      fill="#0081FB"
      d="M12.003 4.542c-4.482 0-7.464 2.766-8.877 5.45C1.884 12.35 1.5 14.86 1.5 16.5c0 2.21 1.79 4 4 4 2.21 0 4.092-1.782 5.5-4.25 1.408 2.468 3.29 4.25 5.5 4.25 2.21 0 4-1.79 4-4 0-1.64-.384-4.15-1.626-6.508-1.413-2.684-4.395-5.45-8.871-5.45zm0 2.5c3.344 0 5.458 2.052 6.574 4.17 1.054 2.001 1.423 4.194 1.423 5.288 0 1.103-.897 2-2 2-1.636 0-3.174-1.678-4.406-4.137l-.591-1.183-.591 1.183c-1.232 2.459-2.77 4.137-4.406 4.137-1.103 0-2-.897-2-2 0-1.094.369-3.287 1.423-5.288C7.545 9.094 9.659 7.042 12.003 7.042z"
    />
  </svg>
);

// IBM Official 8-Bar Logo
export const IBMLogo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => (
  <svg width={size * 1.8} height={size} viewBox="0 0 120 48" className={className} aria-label="IBM">
    <path
      fill="#0F62FE"
      d="M0 0h24v4H0zm0 7h24v4H0zm0 7h24v4H0zm0 7h24v4H0zm0 7h24v4H0zm0 7h24v4H0zm0 7h24v4H0zm0 7h24v4H0zm32-49h40v4H32zm0 7h15v4h10v-4h15v4H32zm0 7h15v4h10v-4h15v4H32zm0 7h40v4H32zm0 7h40v4H32zm0 7h15v4h10v-4h15v4H32zm0 7h15v4h10v-4h15v4H32zm0 7h40v4H32zm48-49h40v4H80zm0 7h11v4h18v-4h11v4H80zm0 7h11v4h18v-4h11v4H80zm0 7h40v4H80zm0 7h40v4H80zm0 7h11v4h18v-4h11v4H80zm0 7h11v4h18v-4h11v4H80zm0 7h40v4H80z"
    />
  </svg>
);

// MSME Govt. of India Badge (Using Official Ashoka Lion Capital Emblem)
export const MSMEBadge: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = '' }) => (
  <div
    className={className}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1.5px solid rgba(255, 153, 51, 0.5)',
      borderRadius: 12,
      padding: '8px 16px',
      color: '#FFFFFF',
      backdropFilter: 'blur(8px)',
    }}
  >
    <img
      src="/msme-logo-dark.png"
      alt="MSME - Govt. of India"
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        flexShrink: 0,
      }}
    />
    <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
      <div style={{ font: '800 13px var(--app-font-display)', color: '#FF9933', letterSpacing: '0.08em' }}>
        MSME
      </div>
      <div style={{ font: '700 8.5px var(--app-font-mono)', color: '#D9E6F2', letterSpacing: '0.06em' }}>
        GOVT. OF INDIA REGISTERED
      </div>
      <div style={{ font: '500 8px var(--app-font-mono)', color: '#A0B4C8' }}>
        सूक्ष्म, लघु एवं मध्यम उद्यम
      </div>
    </div>
  </div>
);

// ISO 9001:2015 Certified Seal
export const ISOBadge: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = '' }) => (
  <div
    className={className}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1.5px solid rgba(101, 213, 42, 0.5)',
      borderRadius: 12,
      padding: '8px 16px',
      color: '#FFFFFF',
      backdropFilter: 'blur(8px)',
    }}
  >
    <img
      src="/iso-logo.png"
      alt="ISO 9001:2015 Certified"
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        flexShrink: 0,
      }}
    />
    <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
      <div style={{ font: '800 13px var(--app-font-display)', color: '#65D52A', letterSpacing: '0.06em' }}>
        ISO 9001:2015
      </div>
      <div style={{ font: '700 8.5px var(--app-font-mono)', color: '#D9E6F2', letterSpacing: '0.06em' }}>
        CERTIFIED ENTERPRISE
      </div>
      <div style={{ font: '500 8px var(--app-font-mono)', color: '#A0B4C8' }}>
        QUALITY MANAGEMENT SYSTEM
      </div>
    </div>
  </div>
);

// Industry Certifications Ribbon (Google, Meta, IBM)
export const IndustryCertificationsBanner: React.FC = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, rgba(8,23,41,0.95) 0%, rgba(5,16,29,0.98) 100%)',
        borderTop: '1px solid rgba(101, 213, 42, 0.25)',
        borderBottom: '1px solid rgba(22, 132, 255, 0.25)',
        padding: '34px 0',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        {/* Accreditations Bar (MSME & ISO) + Host Statement */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
            paddingBottom: 26,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            marginBottom: 26,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img
              src="/synovers-mark.png"
              alt="Synovers Technologies Emblem"
              style={{ width: 44, height: 44, objectFit: 'contain' }}
            />
            <div>
              <div style={{ font: '800 16px var(--app-font-display)', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                SYNO<span style={{ color: 'var(--lime)' }}>VERS</span> TECHNOLOGIES PRESENTS SYNOHACK 2026
              </div>
              <div style={{ font: '600 11px var(--app-font-mono)', color: '#90a9c0', marginTop: 2 }}>
                Official Organizer · Coimbatore, Tamil Nadu, India · <em>Dream it.. Do it..</em>
              </div>
            </div>
          </div>

          {/* Govt & Quality Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <MSMEBadge />
            <ISOBadge />
          </div>
        </div>

        {/* Global Tech Partners & Certification Pathways */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div
            style={{
              font: '700 11px var(--app-font-mono)',
              letterSpacing: '0.14em',
              color: 'var(--lime)',
              textTransform: 'uppercase',
              marginBottom: 6,
            }}
          >
            INDUSTRY CERTIFICATION & CURRICULUM ALIGNMENT
          </div>
          <h3
            style={{
              font: '800 clamp(20px, 3vw, 28px) var(--app-font-display)',
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              margin: '0 0 8px',
            }}
          >
            Aligned with Global Tech Industry Standards
          </h3>
          <p style={{ color: '#8fa8be', fontSize: 13, maxWidth: 680, margin: '0 auto', lineHeight: 1.6 }}>
            Projects built at SYNOHACK 2026 reflect cutting-edge industry practices supported by Google, Meta, and IBM developer ecosystems and certification tracks.
          </p>
        </div>

        {/* Cards for Google, Meta, IBM */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {/* Google */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(66, 133, 244, 0.35)',
              borderRadius: 14,
              padding: '20px 22px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <GoogleLogo size={32} />
            </div>
            <div>
              <div style={{ font: '800 16px var(--app-font-display)', color: '#FFFFFF' }}>
                Google Cloud & AI
              </div>
              <div style={{ font: '700 9.5px var(--app-font-mono)', color: '#7bb1ff', letterSpacing: '0.06em' }}>
                GOOGLE CAREER CERTIFICATIONS
              </div>
              <div style={{ fontSize: 12, color: '#9bb1c4', marginTop: 4, lineHeight: 1.4 }}>
                Vertex AI, TensorFlow, Firebase & Google Cloud architecture standards.
              </div>
            </div>
          </div>

          {/* Meta */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 129, 251, 0.35)',
              borderRadius: 14,
              padding: '20px 22px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <MetaLogo size={32} />
            </div>
            <div>
              <div style={{ font: '800 16px var(--app-font-display)', color: '#FFFFFF' }}>
                Meta Certified
              </div>
              <div style={{ font: '700 9.5px var(--app-font-mono)', color: '#38bdf8', letterSpacing: '0.06em' }}>
                META FRONT-END & DEVELOPER TRACK
              </div>
              <div style={{ fontSize: 12, color: '#9bb1c4', marginTop: 4, lineHeight: 1.4 }}>
                React, React Native, GraphQL & production-grade UI architecture.
              </div>
            </div>
          </div>

          {/* IBM */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(15, 98, 254, 0.35)',
              borderRadius: 14,
              padding: '20px 22px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <IBMLogo size={22} />
            </div>
            <div>
              <div style={{ font: '800 16px var(--app-font-display)', color: '#FFFFFF' }}>
                IBM SkillsBuild
              </div>
              <div style={{ font: '700 9.5px var(--app-font-mono)', color: '#6ea8fe', letterSpacing: '0.06em' }}>
                IBM ENTERPRISE CLOUD & SECURITY
              </div>
              <div style={{ fontSize: 12, color: '#9bb1c4', marginTop: 4, lineHeight: 1.4 }}>
                Cybersecurity, Cloud Pak, Linux & microservices enterprise standards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
