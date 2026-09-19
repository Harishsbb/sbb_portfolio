import React from 'react';
import { Cpu, Code2, Server, Database, Terminal, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio';

interface TechCategoryGroup {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;
  color: string;
  glow: string;
  skills: string[];
  highlight: string;
}

export const Tech: React.FC = () => {
  const techGroups: TechCategoryGroup[] = [
    {
      id: 'frontend',
      code: '01 // UI',
      name: 'FRONTEND ARCHITECTURE',
      subtitle: 'Modern component systems, kinetic motion & responsive design',
      icon: Code2,
      color: '#F4C65A',
      glow: 'rgba(244, 198, 90, 0.3)',
      highlight: 'Interactive Web & React Ecosystem',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'HTML5 / CSS3', 'Three.js'],
    },
    {
      id: 'backend',
      code: '02 // CORE',
      name: 'BACKEND SYSTEMS',
      subtitle: 'Scalable APIs, concurrent runtimes & server architectures',
      icon: Server,
      color: '#C81018',
      glow: 'rgba(200, 16, 24, 0.3)',
      highlight: 'Distributed High-Performance APIs',
      skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Go', 'Python'],
    },
    {
      id: 'database',
      code: '03 // DATA',
      name: 'DATA & STORAGE',
      subtitle: 'Persistent transactional engines & fast document databases',
      icon: Database,
      color: '#00E5FF',
      glow: 'rgba(0, 229, 255, 0.25)',
      highlight: 'ACID Transactions & Data Integrity',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'RESTful API'],
    },
    {
      id: 'cloud',
      code: '04 // OPS',
      name: 'CLOUD & ARSENAL',
      subtitle: 'Containerization, source versioning & production deployments',
      icon: Terminal,
      color: '#A855F7',
      glow: 'rgba(168, 85, 247, 0.3)',
      highlight: 'Automated CI/CD & Cloud Infrastructure',
      skills: ['AWS', 'Docker', 'Git', 'GitHub', 'Linux', 'Vite'],
    },
  ];

  return (
    <section id="tech" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh' }}>
      {/* Localized Dark Atmosphere for 100% Readability Over Fiery Frames */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(5, 5, 5, 0.65) 0%, rgba(5, 5, 5, 0.2) 60%, rgba(5, 5, 5, 0.8) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="section-container" style={{ padding: '90px 24px', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-title-wrap" style={{ marginBottom: '46px' }}>
          <div className="section-tag">
            <Cpu size={15} /> CORE CAPABILITIES & ARSENAL
          </div>
          <h2 className="section-heading text-gradient-gold">TECH ARSENAL</h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            A versatile multi-stack foundation forged for high-performance applications, low latency, and modern system architectures.
          </p>
        </div>

        {/* 4 BALANCED HUD ARSENAL CARDS (SPACIOUS 2x2 SPLIT WITH CENTER CLEARANCE) */}
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            columnGap: 'clamp(36px, 6vw, 90px)',
            rowGap: '32px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {techGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.id}
                className="cyber-card tech-card"
                onMouseEnter={() => sound.playHover()}
                style={{
                  padding: '24px 24px 20px',
                  background: 'rgba(8, 10, 15, 0.78)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(214, 168, 60, 0.24)',
                  borderTop: `3px solid ${group.color}`,
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.75)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div>
                  {/* Top HUD Header: Icon, Code & Live Status */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: `1px solid ${group.color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 0 12px ${group.glow}`,
                        }}
                      >
                        <IconComponent size={19} color={group.color} />
                      </div>
                      <div>
                        <span
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: '0.7rem',
                            color: group.color,
                            letterSpacing: '0.14em',
                            fontWeight: 700,
                            display: 'block',
                          }}
                        >
                          {group.code}
                        </span>
                        <h3
                          style={{
                            fontFamily: "'Oxanium', sans-serif",
                            fontSize: '1.06rem',
                            fontWeight: 800,
                            letterSpacing: '0.08em',
                            color: '#F5F5F5',
                            margin: 0,
                          }}
                        >
                          {group.name}
                        </h3>
                      </div>
                    </div>

                    {/* Online status indicator */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: group.color,
                          boxShadow: `0 0 6px ${group.color}`,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.64rem',
                          color: '#A0A0A0',
                          letterSpacing: '0.1em',
                        }}
                      >
                        ACTIVE
                      </span>
                    </div>
                  </div>

                  {/* Subtitle / Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.45,
                      marginBottom: '18px',
                    }}
                  >
                    {group.subtitle}
                  </p>

                  {/* Floating Skill Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '20px',
                    }}
                  >
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        onMouseEnter={() => sound.playHover()}
                        className="tech-arsenal-badge"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '7px',
                          padding: '6px 14px',
                          background: 'rgba(12, 14, 20, 0.72)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '4px',
                          color: '#EDEDED',
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          cursor: 'default',
                          transition: 'all 0.22s ease',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: group.color,
                          }}
                        />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer HUD Micro-Metric */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    CAPABILITY // {group.highlight}
                  </span>
                  <ShieldCheck size={14} color={group.color} style={{ opacity: 0.8 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tech-card:hover {
          transform: translateY(-4px);
          border-color: rgba(214, 168, 60, 0.55) !important;
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.85), 0 0 24px rgba(214, 168, 60, 0.18) !important;
        }
        .tech-arsenal-badge:hover {
          border-color: rgba(214, 168, 60, 0.65) !important;
          background: rgba(214, 168, 60, 0.15) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(214, 168, 60, 0.25) !important;
        }
      `}</style>
    </section>
  );
};

