import React from 'react';
import { Terminal, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/projects';
import { sound } from '../utils/audio';

export const Development: React.FC = () => {
  // Visual schematic HUD generators for each of the 4 major projects
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'apriltag-goat-monitoring':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              backgroundColor: 'rgba(5, 5, 5, 0.65)',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(214, 168, 60, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Grid overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(to right, rgba(214, 168, 60, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(214, 168, 60, 0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Target AprilTag Marker simulation */}
            <div
              style={{
                position: 'relative',
                width: '90px',
                height: '90px',
                border: '2px solid #D6A83C',
                backgroundColor: '#000',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2px',
                padding: '4px',
                boxShadow: '0 0 20px rgba(214, 168, 60, 0.35)',
              }}
            >
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#000' }} />
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#000' }} />
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#000' }} />
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#000' }} />
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#000' }} />
              <div style={{ backgroundColor: '#000' }} />
              <div style={{ backgroundColor: '#fff' }} />
              <div style={{ backgroundColor: '#000' }} />
              <div style={{ backgroundColor: '#fff' }} />
            </div>

            {/* HUD Target Overlay telemetry */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '16px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem',
                color: '#D6A83C',
                lineHeight: 1.6,
              }}
            >
              <div>TAG_ID: #0x4A_LIVESTOCK</div>
              <div>POSE_6DOF: [X: +1.42m, Y: -0.21m, Z: 2.85m]</div>
              <div>STATUS: TRACKING_LOCKED (99.4%)</div>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                right: '16px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399' }} />
              EDGE INFERENCE: 24ms (30 FPS)
            </div>
          </div>
        );

      case 'smart-trolley-system':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              backgroundColor: 'rgba(5, 5, 5, 0.65)',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(214, 168, 60, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Sensor beam simulation */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #D6A83C, transparent)',
                boxShadow: '0 0 10px #D6A83C',
              }}
            />

            {/* Central Smart Trolley Console View */}
            <div
              style={{
                padding: '16px 28px',
                background: 'rgba(10, 12, 16, 0.9)',
                border: '1px solid rgba(214, 168, 60, 0.4)',
                borderRadius: '6px',
                textAlign: 'center',
                boxShadow: '0 0 24px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#D6A83C', marginBottom: '4px' }}>
                CART #042 • OLED REAL-TIME BILLING
              </div>
              <div style={{ fontFamily: "'Oxanium', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#F5F5F5' }}>
                ₹ 2,450.00
              </div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#34d399', marginTop: '4px' }}>
                WEIGHT VERIFIED: 1,420g (±2g MATCH)
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '16px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem',
                color: '#8A8A8A',
              }}
            >
              PROTOCOL: MQTT / ESP32 WEBSOCKET BUS
            </div>
          </div>
        );

      case 'bank-management-system':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              backgroundColor: 'rgba(5, 5, 5, 0.65)',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(214, 168, 60, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '24px 32px',
            }}
          >
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#D6A83C', marginBottom: '10px' }}>
              ACID LEDGER ENGINE • HIGH-CONCURRENCY SHARD
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.66rem', color: '#8A8A8A' }}>THROUGHPUT</div>
                <div style={{ fontFamily: "'Oxanium', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#F5F5F5' }}>2,500+ TPS</div>
              </div>
              <div style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.66rem', color: '#8A8A8A' }}>LATENCY</div>
                <div style={{ fontFamily: "'Oxanium', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#34d399' }}>&lt; 15ms</div>
              </div>
              <div style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.66rem', color: '#8A8A8A' }}>SECURITY</div>
                <div style={{ fontFamily: "'Oxanium', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#F4C65A' }}>JWT + RBAC</div>
              </div>
            </div>

            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#8A8A8A' }}>
              CRYPTOGRAPHIC LEDGER AUDIT HASH: <span style={{ color: '#F5F5F5' }}>e3b0c44298fc1c149afbf4c8996fb92427ae41e4</span>
            </div>
          </div>
        );

      case 'student-course-management':
      default:
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '240px',
              backgroundColor: 'rgba(5, 5, 5, 0.65)',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(214, 168, 60, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '24px 32px',
            }}
          >
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#D6A83C', marginBottom: '12px' }}>
              ACADEMIC ERP & TIMETABLE CONFLICT ENGINE
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', padding: '4px 10px', background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.35)', color: '#34d399', borderRadius: '4px' }}>
                ✓ CONFLICT_DETECTOR: 0 OVERLAPS
              </span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', padding: '4px 10px', background: 'rgba(214, 168, 60, 0.15)', border: '1px solid rgba(214, 168, 60, 0.35)', color: '#F4C65A', borderRadius: '4px' }}>
                ✓ PREREQUISITE_GRAPH: VALIDATED
              </span>
            </div>

            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#8A8A8A' }}>
              ACTIVE MODULES: Automated Timetables • GPA Trend Visualizer • PDF Transcript Export
            </div>
          </div>
        );
    }
  };

  return (
    <section id="development" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-title-wrap" style={{ marginBottom: '60px' }}>
          <div className="section-tag">
            <Terminal size={15} /> ENGINEERING & ARCHITECTURE
          </div>
          <h2 className="section-heading">DEVELOPMENT</h2>
          <p className="section-subtitle">
            Turning concepts into production systems. Computer vision tracking, embedded IoT hardware, and high-concurrency backends.
          </p>
        </div>

        {/* CINEMATIC PROJECT SHOWCASE (One Major Project At A Time) */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {PROJECTS.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                className="cyber-card"
                onMouseEnter={() => sound.playHover()}
                style={{
                  padding: 'clamp(24px, 4vw, 36px)',
                  marginBottom: 'clamp(80px, 12vh, 130px)',
                  background: 'rgba(5, 5, 5, 0.52)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(214, 168, 60, 0.22)',
                  borderRadius: '6px',
                  boxShadow: '0 10px 36px rgba(0, 0, 0, 0.65)',
                }}
              >
                {/* Project Header & Counter */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#D6A83C',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {projectNumber} / 04
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.76rem',
                        color: '#8A8A8A',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.74rem',
                      color: '#34d399',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <CheckCircle2 size={13} /> {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontFamily: "'Oxanium', sans-serif",
                    fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    color: '#F5F5F5',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.92rem',
                    color: '#D6A83C',
                    fontWeight: 500,
                    marginBottom: '20px',
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Large Project Visual */}
                <div style={{ marginBottom: '24px' }}>
                  {renderProjectVisual(project.id)}
                </div>

                {/* Short Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    marginBottom: '20px',
                  }}
                >
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginBottom: '28px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.75rem',
                      color: '#8A8A8A',
                      marginRight: '4px',
                    }}
                  >
                    STACK:
                  </span>
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.74rem',
                        padding: '3px 9px',
                        borderRadius: '3px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(214, 168, 60, 0.2)',
                        color: '#F5F5F5',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: [GITHUB] [LIVE DEMO] */}
                <div
                  style={{
                    display: 'flex',
                    gap: '14px',
                    flexWrap: 'wrap',
                  }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    className="btn-cyber-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={project.demoUrl || '#'}
                    onClick={(e) => {
                      if (!project.demoUrl || project.demoUrl === '#') {
                        e.preventDefault();
                        sound.playClick();
                        alert(`Live demonstration and documentation for ${project.title} available in repository.`);
                      } else {
                        sound.playClick();
                      }
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="btn-cyber-primary"
                  >
                    <ExternalLink size={16} />
                    <span>LIVE DEMO</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
