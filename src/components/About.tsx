import React from 'react';
import { Gamepad2, Code2, Film, Zap, ArrowRight, ShieldCheck, Flame, Cpu, Play } from 'lucide-react';
import { sound } from '../utils/audio';

export const About: React.FC = () => {
  const pillars = [
    {
      id: 'gamer',
      icon: Gamepad2,
      emoji: '🎮',
      title: 'GAMER',
      color: 'var(--crimson-primary)',
      glow: 'var(--crimson-glow)',
      tagline: 'Competitive Instinct & Precision Execution',
      desc: 'Active across competitive battle royale, tactical shooters, co-op horror, and open-world adventures: Free Fire, PUBG, Call of Duty, Hogwarts Legacy, R.E.P.O., Phasmophobia, Minecraft, Spider-Man, and Ben 10.',
      metrics: ['Free Fire • COD • PUBG', 'Horror, RPG & Open-World', '1.06K+ YouTube Community'],
      linkTarget: 'gaming',
    },
    {
      id: 'developer',
      icon: Code2,
      emoji: '💻',
      title: 'DEVELOPER',
      color: 'var(--gold-primary)',
      glow: 'var(--gold-glow)',
      tagline: 'Architecting Systems from Concept to Code',
      desc: 'Engineering robust full-stack web platforms, OpenCV computer vision pipelines, embedded IoT sensor matrices, and scalable databases.',
      metrics: ['4+ Core Production Projects', 'Full-Stack & Computer Vision', 'TypeScript / Python / Java'],
      linkTarget: 'development',
    },
    {
      id: 'editor',
      icon: Film,
      emoji: '🎬',
      title: 'EDITOR',
      color: '#ff3366',
      glow: 'rgba(255, 51, 102, 0.35)',
      tagline: 'Pacing, Rhythm, & Kinetic Motion Graphics',
      desc: 'Crafting adrenaline-fueled gaming edits, high-retention vertical shorts, and atmospheric cinematic motion graphics with bespoke audio design.',
      metrics: ['Frame-Accurate Beat Sync', '4K 60FPS Delivery', 'Custom Sound Design'],
      linkTarget: 'editing',
    },
    {
      id: 'tech',
      icon: Zap,
      emoji: '⚡',
      title: 'TECH',
      color: 'var(--cyan-accent)',
      glow: 'var(--cyan-glow)',
      tagline: 'Pioneering Future Paradigms & Hardware',
      desc: 'Pushing boundaries in real-time WebGL 3D, IoT microcontrollers, cloud deployment, and algorithmic edge optimization.',
      metrics: ['Real-Time 3D & Shaders', 'Hardware Sensor Fusion', 'Cloud & Containerization'],
      linkTarget: 'tech',
    },
  ];

  const scrollToPillar = (id: string) => {
    sound.playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glows */}
      <div className="ambient-glow-gold" style={{ top: '10%', left: '-10%' }} />
      <div className="ambient-glow-crimson" style={{ bottom: '15%', right: '-15%' }} />

      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-tag">
            <Flame size={16} /> PILLARS OF EXCELLENCE
          </div>
          <h2 className="section-heading text-gradient-gold">THE WORLD OF SBB</h2>
          <p className="section-subtitle">
            "SBB is a personal creative identity built around gaming, software development, video editing and technology."
          </p>
        </div>

        {/* 4 Compact Glass Cards Arranged: GAMER DEVELOPER / EDITOR TECH */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            columnGap: 'clamp(40px, 8vw, 110px)',
            rowGap: '32px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="cyber-card"
                onMouseEnter={() => sound.playHover()}
                onClick={() => scrollToPillar(pillar.linkTarget)}
                style={{
                  padding: '24px 24px',
                  background: 'rgba(5, 5, 5, 0.48)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(214, 168, 60, 0.2)',
                  borderLeft: `3px solid ${pillar.color}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div>
                  {/* Header: Icon & Title */}
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
                          width: '42px',
                          height: '42px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: `1px solid ${pillar.color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent size={20} color={pillar.color} />
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Oxanium', sans-serif",
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          letterSpacing: '0.12em',
                          color: '#F5F5F5',
                        }}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <span style={{ fontSize: '1.1rem' }}>{pillar.emoji}</span>
                  </div>

                  {/* Compact Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: 'var(--text-muted)',
                      marginBottom: '18px',
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>

                {/* Footer: Key Metric & Explore */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.74rem',
                      color: pillar.color,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {pillar.metrics[0]}
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: "'Oxanium', sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: '#F5F5F5',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>EXPLORE</span>
                    <ArrowRight size={13} color={pillar.color} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
