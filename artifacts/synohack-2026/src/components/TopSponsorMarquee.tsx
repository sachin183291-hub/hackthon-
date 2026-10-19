import React from 'react';
import { GoogleLogo, MetaLogo, IBMLogo } from './CertificationBadges';
import { SynoversLogoMark } from './SynoversLogo';

interface SponsorItem {
  id: string;
  badge: string;
  badgeColor: string;
  name: string;
  nameColor?: string;
  subtitle: string;
  logo: React.ReactNode;
}

const SPONSORS: SponsorItem[] = [
  {
    id: 'google',
    badge: 'SPONSORED BY',
    badgeColor: '#4285F4',
    name: 'Google Cloud & AI',
    subtitle: 'Vertex AI · TensorFlow · Firebase Ecosystem',
    logo: <GoogleLogo size={32} />,
  },
  {
    id: 'meta',
    badge: 'PRESENTED WITH',
    badgeColor: '#0081FB',
    name: 'Meta Developer Circles',
    nameColor: '#0081FB',
    subtitle: 'Llama 3 AI · PyTorch · Open Source Tech',
    logo: <MetaLogo size={30} />,
  },
  {
    id: 'ibm',
    badge: 'SPONSORED BY',
    badgeColor: '#0F62FE',
    name: 'IBM Developer',
    nameColor: '#0F62FE',
    subtitle: 'watsonx AI · Hybrid Cloud · Security',
    logo: <IBMLogo size={24} />,
  },
  {
    id: 'synovers',
    badge: 'PRESENTED & HOSTED BY',
    badgeColor: 'var(--lime)',
    name: 'Synovers Technologies',
    subtitle: 'Dream it.. Do it.. · MSME & ISO 9001:2015',
    logo: <SynoversLogoMark size={30} />,
  },
];

export const TopSponsorMarquee: React.FC = () => {
  // Duplicate array 3 times for a continuous, seamless infinite scrolling animation
  const marqueeList = [...SPONSORS, ...SPONSORS, ...SPONSORS];

  return (
    <div
      className="top-sponsor-marquee-section"
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        overflow: 'hidden',
        height: 56,
        boxSizing: 'border-box',
        width: '100%',
        position: 'relative',
        zIndex: 40,
      }}
      aria-label="Official Event Sponsors and Technology Partners"
    >
      <div
        className="marquee-label-pill"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          height: '100%',
        }}
      >
        <span className="marquee-pulsing-dot" />
        <span className="marquee-label-text">PARTNERS & SPONSORS</span>
      </div>

      <div
        className="marquee-outer-container"
        style={{
          flex: '1 1 auto',
          minWidth: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            width: 'max-content',
            gap: 28,
          }}
        >
          {marqueeList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="marquee-item-card"
              style={{
                display: 'inline-flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                gap: 14,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              title={`${item.badge} ${item.name}`}
            >
              <div className="marquee-logo-box" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {item.logo}
              </div>
              <div className="marquee-item-content" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div className="marquee-badge-row" style={{ display: 'flex', alignItems: 'center' }}>
                  <span
                    className="marquee-badge"
                    style={{
                      borderColor: item.badgeColor,
                      color: item.badgeColor,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="marquee-name-row" style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <strong
                    className="marquee-brand-name"
                    style={item.nameColor ? { color: item.nameColor } : undefined}
                  >
                    {item.name}
                  </strong>
                  <span className="marquee-brand-sub">{item.subtitle}</span>
                </div>
              </div>
              <div className="marquee-item-separator" aria-hidden="true" style={{ opacity: 0.3, margin: '0 4px' }}>
                •
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
