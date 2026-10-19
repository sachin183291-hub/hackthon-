import React, { useEffect } from 'react';
import { ArrowRight, Cpu, HeartPulse, Layers, Lightbulb, ShieldCheck, Sprout, X } from 'lucide-react';
import type { HackathonDomain } from '@workspace/api-client-react';
import { SynoversLogoMark } from './SynoversLogo';

export interface DomainDetailInfo {
  name: HackathonDomain;
  shortCode: string;
  badge: string;
  tagline: string;
  overview: string;
  techStack: string[];
  evaluationFocus: {
    title: string;
    description: string;
  }[];
}

export const DOMAINS_DATA: DomainDetailInfo[] = [
  {
    name: 'AI & Machine Learning',
    shortCode: 'AI',
    badge: 'INTELLIGENT SYSTEMS & AUTOMATION',
    tagline: 'Build systems that learn, reason, predict, or automate real-world decision making.',
    overview:
      'Harness deep learning, computer vision, natural language processing, and predictive analytics to solve critical friction points in education, industry, automation, and vernacular accessibility. Teams have full freedom to define and build their own software solution within this track.',
    techStack: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'Hugging Face',
      'FastAPI',
      'ONNX Runtime',
      'scikit-learn',
      'LangChain / LlamaIndex',
    ],
    evaluationFocus: [
      {
        title: 'Prototype Execution',
        description: 'A functioning model pipeline or interactive inference demo (not just a slide deck).',
      },
      {
        title: 'Inference Efficiency',
        description: 'Optimization for latency, resource usage, and realistic offline/edge operation.',
      },
      {
        title: 'Practical Impact',
        description: 'Demonstrable utility for the target demographic and clear problem alignment.',
      },
    ],
  },
  {
    name: 'Cybersecurity & Privacy',
    shortCode: 'CY',
    badge: 'DEFENSIVE TECH & DATA VAULT',
    tagline: 'Protect people, infrastructure, and sensitive data in an interconnected world.',
    overview:
      'Architect defensive mechanisms, privacy-preserving authentication, vulnerability sentinels, and intrusion detection frameworks to combat modern cyber threats and surveillance. Teams are free to choose and tackle any cybersecurity challenge.',
    techStack: [
      'Go / Rust',
      'Python',
      'Web Crypto API',
      'Wireshark / tshark',
      'Snort / Suricata',
      'OAuth2 / OIDC',
      'Docker',
      'OWASP ZAP',
    ],
    evaluationFocus: [
      {
        title: 'Threat Model Rigor',
        description: 'Clear understanding of attack vectors, attack surface, and security boundaries.',
      },
      {
        title: 'Exploit Defense Live Demo',
        description: 'Live demonstration showing attacks being thwarted by your defense tool.',
      },
      {
        title: 'Cryptographic Integrity',
        description: 'Adherence to established cryptographic standards and defensive code hygiene.',
      },
    ],
  },
  {
    name: 'Healthcare & MedTech',
    shortCode: 'HM',
    badge: 'PATIENT CARE & HEALTH SYSTEMS',
    tagline: 'Make medical care and diagnostics more accessible, timely, accurate, and human.',
    overview:
      'Engineer software that enhances patient monitoring, simplifies clinical triage, streamlines hospital workflows, and brings timely assistance to underserved communities. Teams are encouraged to address a real clinical or wellness friction point of their choice.',
    techStack: [
      'React / React Native',
      'Node.js / Python',
      'WebRTC',
      'OpenCV',
      'FHIR / HL7 guidelines',
      'DICOM Web Viewers',
      'PostgreSQL / SQLite',
    ],
    evaluationFocus: [
      {
        title: 'Clinical Usability',
        description: 'Clean, panic-free interfaces intuitive for both medical practitioners and patients.',
      },
      {
        title: 'Reliability & Safety',
        description: 'Fail-safe behaviors, privacy safeguards, and accurate health data representation.',
      },
      {
        title: 'Real-World Feasibility',
        description: 'Potential for real deployment in clinics, ambulances, or mobile health camps.',
      },
    ],
  },
  {
    name: 'AgriTech & Sustainability',
    shortCode: 'AS',
    badge: 'EARTH TECH & RESILIENT ECOSYSTEMS',
    tagline: 'Innovate for regenerative agriculture, climate resilience, and sustainable living.',
    overview:
      'Create solutions that help farmers detect crop blights, conserve water and energy, optimize supply chains, and enable measurable climate sustainability. Teams can formulate and build solutions for any impactful agrarian or environmental challenge.',
    techStack: [
      'React',
      'Node.js / Python',
      'MQTT / WebSockets',
      'Leaflet / Mapbox',
      'OpenWeather API',
      'Chart.js / Recharts',
      'FastAPI',
    ],
    evaluationFocus: [
      {
        title: 'Farmer / Eco Utility',
        description: 'Straightforward interface usable on low-end smartphones with minimal bandwidth.',
      },
      {
        title: 'Measurable Impact',
        description: 'Clear quantification of water saved, harvest yield boosted, or emissions curtailed.',
      },
      {
        title: 'Working Demonstration',
        description: 'Live sensor simulation or image upload working seamlessly end-to-end.',
      },
    ],
  },
  {
    name: 'Others (Open Innovation)',
    shortCode: 'OT',
    badge: 'WILDCARD & OPEN TECH INNOVATION',
    tagline: 'Got a bold idea that defies categories? Build any disruptive software solution.',
    overview:
      'The Open Innovation track welcomes innovative software concepts that span developer tools, FinTech, Web3, EdTech, accessibility utilities, automation, productivity suites, or cross-domain breakthroughs. Teams have complete freedom to define their problem statement and deliver an impactful working prototype within our 8-hour sprint.',
    techStack: [
      'Full-Stack Web (React / Next.js / Vue)',
      'Backend (Python / Go / Rust / Node.js)',
      'Mobile App (Flutter / React Native)',
      'Databases (PostgreSQL / Supabase / Redis)',
      'APIs & Integrations (REST / GraphQL / WebSockets)',
      'Docker / Microservices / Serverless',
    ],
    evaluationFocus: [
      {
        title: 'Vision & Originality',
        description: 'Fresh perspective on an impactful real-world problem and creative solution design.',
      },
      {
        title: 'Functional Demo Execution',
        description: 'A genuine, operational software demonstration built within the 8-hour sprint.',
      },
      {
        title: 'User Value & Feasibility',
        description: 'Clear utility for target end-users with intuitive usability and scalability.',
      },
    ],
  },
];

interface DomainModalProps {
  selectedDomain: HackathonDomain | null;
  onClose: () => void;
  onSelectDomain: (domain: HackathonDomain) => void;
  onRegisterTrack: (domain: HackathonDomain) => void;
}

export const DomainModal: React.FC<DomainModalProps> = ({
  selectedDomain,
  onClose,
  onSelectDomain,
  onRegisterTrack,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (selectedDomain) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedDomain, onClose]);

  if (!selectedDomain) return null;

  const data = DOMAINS_DATA.find((d) => d.name === selectedDomain) || DOMAINS_DATA[0];

  const getDomainIcon = (code: string) => {
    switch (code) {
      case 'AI':
        return <Cpu size={22} color="var(--lime)" />;
      case 'CY':
        return <ShieldCheck size={22} color="#38bdf8" />;
      case 'HM':
        return <HeartPulse size={22} color="#f43f5e" />;
      case 'AS':
        return <Sprout size={22} color="#10b981" />;
      case 'OT':
        return <Lightbulb size={22} color="#fbbf24" />;
      default:
        return <Layers size={22} color="var(--lime)" />;
    }
  };

  return (
    <div
      className="domain-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="domain-modal-title"
    >
      <div
        className="domain-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="domain-modal-header">
          <div>
            <div className="eyebrow" style={{ color: 'var(--lime)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 7 }}>
              <SynoversLogoMark size={16} />
              <span>SYNOVERS TECHNOLOGIES · {data.badge}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                {getDomainIcon(data.shortCode)}
              </div>
              <div>
                <h2
                  id="domain-modal-title"
                  style={{
                    margin: 0,
                    font: '700 28px var(--app-font-display)',
                    letterSpacing: '-0.04em',
                    color: '#ffffff',
                  }}
                >
                  {data.name}
                </h2>
                <div style={{ font: '13px var(--app-font-sans)', color: '#a7bed3', marginTop: 3 }}>
                  {data.tagline}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="domain-modal-close"
            aria-label="Close domain modal"
            data-testid="button-close-domain-modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Domain Switcher Tabs */}
        <div className="domain-nav-tabs">
          {DOMAINS_DATA.map((d) => (
            <button
              key={d.name}
              className={`domain-tab-btn ${d.name === data.name ? 'active' : ''}`}
              onClick={() => onSelectDomain(d.name)}
              data-testid={`tab-domain-${d.shortCode.toLowerCase()}`}
            >
              <span>[{d.shortCode}]</span>
              {d.name}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="domain-modal-body">
          {/* Overview */}
          <div
            style={{
              background: '#f2f7fc',
              border: '1px solid #d5e4f2',
              borderRadius: 10,
              padding: '16px 20px',
              fontSize: 13,
              color: '#324a5e',
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 4 }}>
              Track Vision & Scope
            </strong>
            {data.overview}
          </div>

          {/* Recommended Tech Stacks & Tools */}
          <div>
            <div className="modal-section-title">
              <span style={{ background: 'var(--lime)' }} />
              Recommended Technologies & Tools
            </div>
            <div className="tech-pill-wrap">
              {data.techStack.map((tech) => (
                <span className="tech-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What Judges Look For */}
          <div>
            <div className="modal-section-title">
              <span style={{ background: '#f59e0b' }} />
              Evaluation Expectations for this Track
            </div>
            <div className="eval-grid">
              {data.evaluationFocus.map((ev, i) => (
                <div className="eval-card" key={i}>
                  <strong>{ev.title}</strong>
                  <span>{ev.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="domain-modal-footer">
          <div style={{ font: '12px var(--app-font-mono)', color: '#667e94', display: 'flex', alignItems: 'center', gap: 8 }}>
            <SynoversLogoMark size={18} />
            <span>SYNOHACK 2026 · Organized by Synovers Technologies (MSME & ISO Certified) · ₹25,000 Prize Pool & Job Offers</span>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button
              className="button button-light"
              onClick={onClose}
              data-testid="button-cancel-domain-modal"
            >
              Back to Overview
            </button>
            <button
              className="button button-primary"
              onClick={() => onRegisterTrack(data.name)}
              data-testid="button-register-from-modal"
            >
              Register in this Track <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
