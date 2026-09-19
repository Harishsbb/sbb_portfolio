import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, ExternalLink, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { sound } from '../utils/audio';
import { SOCIAL_LINKS } from '../data/socials';

const SECTIONS = [
  { id: 'hero-sequence', num: '01', code: 'HOME', title: 'CINEMATIC HERO', desc: 'Dragon Genesis & Role Flanks' },
  { id: 'about', num: '02', code: 'ABOUT', title: 'THE 4 PILLARS', desc: 'Gamer • Developer • Editor • Tech' },
  { id: 'gaming', num: '03', code: 'GAMING', title: 'VALORANT & HIGHLIGHTS', desc: 'Ranked Gameplay & YouTube Vault' },
  { id: 'development', num: '04', code: 'DEV', title: 'PROJECT SHOWCASE', desc: 'Computer Vision, IoT & Full-Stack' },
  { id: 'editing', num: '05', code: 'EDITOR', title: 'MOTION STUDIO', desc: 'Video Preview, Waveform & Timeline' },
  { id: 'tech', num: '06', code: 'TECH', title: 'ARSENAL CAPABILITIES', desc: 'Frontend, Backend, Database & Cloud' },
  { id: 'creations', num: '07', code: 'ARCHIVE', title: 'CURATED ARCHIVE', desc: 'Cross-Disciplinary Cinema Gallery' },
  { id: 'contact', num: '08', code: 'CLIMAX', title: 'FRAME 250 PAYOFF', desc: 'Full Dragon Reveal & Summit' },
];

export const Navbar: React.FC<{ visible?: boolean }> = ({ visible = true }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(sound.isMuted());
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Dynamic Scroll & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / maxScroll)));
      }

      // Detection threshold: 35% down viewport
      const detectionLine = scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (detectionLine >= top) {
            setActiveSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: ESC closes the menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        sound.playClick();
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    sound.playClick();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  const currentSection = SECTIONS[activeSectionIndex] || SECTIONS[0];
  const youtubeUrl = SOCIAL_LINKS.find((s) => s.id === 'youtube')?.url || 'https://www.youtube.com/@sbbgamingff2001';

  return (
    <>
      {/* =========================================================================
          1. MINIMAL FLOATING HUD TOP BAR (No traditional solid navbar)
          Keeps the 250-frame animation as the primary focus
          ========================================================================= */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          pointerEvents: 'none',
          padding: '18px clamp(16px, 3.5vw, 36px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {/* LEFT: CINEMATIC HUD SECTION INDICATOR */}
        <div
          onClick={() => sound.playHover()}
          style={{
            pointerEvents: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(5, 5, 5, 0.60)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(214, 168, 60, 0.28)',
            borderRadius: '6px',
            padding: '7px 14px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glowing Red Status Beacon */}
          <div
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#C81018',
              boxShadow: '0 0 10px #C81018, 0 0 4px #F4C65A',
              animation: 'pulseBeacon 2s infinite',
            }}
          />

          {/* Section Indicator Label */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.12em',
                fontWeight: 700,
              }}
            >
              [ {currentSection.num} // {currentSection.code} ]
            </span>
            <span
              className="hud-sub-label"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                color: '#dcdcdc',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}
            >
              • {currentSection.title}
            </span>
          </div>

          {/* Micro Progress Line underneath */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '2px',
              width: `${((activeSectionIndex + 1) / SECTIONS.length) * 100}%`,
              background: 'linear-gradient(90deg, #D6A83C, #C81018)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        {/* CENTER: SBB GAMING (Visible when scrolled past Hero section, hidden on Hero to keep top of dragon 100% open) */}
        <a
          href="#hero-sequence"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero-sequence');
          }}
          onMouseEnter={() => sound.playHover()}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: activeSectionIndex > 0 ? 'auto' : 'none',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            opacity: activeSectionIndex > 0 ? 1 : 0,
          }}
          className="brand-center-hover"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
                fontWeight: 800,
                letterSpacing: '0.14em',
                background: 'linear-gradient(135deg, #F4C65A 0%, #D6A83C 60%, #AA7C1E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(214, 168, 60, 0.25)',
              }}
            >
              SBB
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: '#FFFFFF',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
              }}
            >
              GAMING
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginTop: '-2px',
            }}
          >
            [ 250 FRAMES ACTIVE ]
          </span>
        </a>

        {/* RIGHT: AUDIO TOGGLE + MINIMAL FLOATING MENU BUTTON */}
        <div
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Audio Synthesizer Sound Button */}
          <button
            onClick={toggleSound}
            title={isMuted ? 'Enable Audio Effects' : 'Mute Audio Effects'}
            style={{
              background: 'rgba(5, 5, 5, 0.60)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(214, 168, 60, 0.25)',
              borderRadius: '6px',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isMuted ? 'var(--text-muted)' : 'var(--gold-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* MINIMAL FLOATING MENU BUTTON */}
          <button
            onClick={() => {
              sound.playClick();
              setMenuOpen(!menuOpen);
            }}
            onMouseEnter={() => sound.playHover()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              backgroundColor: '#0B0B0B',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(214, 168, 60, 0.35)',
              borderBottom: '2.5px solid #C81018',
              borderRadius: '6px',
              color: '#F5F5F5',
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="floating-menu-btn"
            aria-label="Open HUD Navigation Menu"
          >
            <Menu size={16} color="var(--gold-primary)" />
            <span>MENU</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          2. FLOATING VERTICAL HUD MINI-RAIL (Right viewport edge)
          Ultra-minimal indicator giving continuous subtle sense of place
          ========================================================================= */}
      <div
        className="hud-vertical-rail"
        style={{
          position: 'fixed',
          right: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          pointerEvents: 'auto',
          background: 'rgba(5, 5, 5, 0.40)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '20px',
          padding: '12px 6px',
        }}
      >
        {SECTIONS.map((sec, idx) => {
          const isActive = activeSectionIndex === idx;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              onMouseEnter={() => sound.playHover()}
              title={`${sec.num} // ${sec.code} - ${sec.title}`}
              style={{
                position: 'relative',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              className="rail-dot-btn"
            >
              <div
                style={{
                  width: isActive ? '8px' : '4px',
                  height: isActive ? '8px' : '4px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? '#C81018' : 'rgba(255, 255, 255, 0.3)',
                  boxShadow: isActive ? '0 0 10px #C81018, 0 0 4px #F4C65A' : 'none',
                  transition: 'all 0.25s ease',
                }}
              />
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          3. CINEMATIC FULLSCREEN HUD MENU OVERLAY
          Black + Gold + Red aesthetic with smooth transitions
          ========================================================================= */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(5, 5, 5, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: ' clamp(20px, 4vw, 40px)',
            animation: 'fadeInMenu 0.25s ease-out forwards',
            overflowY: 'auto',
          }}
        >
          {/* MODAL TOP BAR */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Shield size={20} color="var(--gold-primary)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                SBB // CINEMATIC NAVIGATION HUD
              </span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setMenuOpen(false);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '6px',
                color: '#F5F5F5',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              className="menu-close-btn"
            >
              <X size={16} />
              <span>CLOSE [ESC]</span>
            </button>
          </div>

          {/* MAIN MENU BODY: 2 COLUMNS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              margin: 'auto 0',
              padding: '36px 0',
              maxWidth: '1200px',
              width: '100%',
              alignSelf: 'center',
            }}
          >
            {/* LEFT COLUMN: 8 CINEMATIC SECTION DESTINATIONS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                // SELECT DESTINATION
              </div>

              {SECTIONS.map((sec, idx) => {
                const isActive = activeSectionIndex === idx;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    onMouseEnter={() => sound.playHover()}
                    style={{
                      background: isActive ? 'rgba(214, 168, 60, 0.08)' : 'transparent',
                      border: 'none',
                      borderLeft: isActive ? '3px solid #C81018' : '3px solid transparent',
                      padding: '10px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      borderRadius: '0 6px 6px 0',
                      transition: 'all 0.2s ease',
                    }}
                    className="menu-section-row"
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          color: isActive ? 'var(--crimson-light)' : 'var(--gold-primary)',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {sec.num}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          color: isActive ? '#FFFFFF' : '#dcdcdc',
                          transition: 'color 0.2s ease',
                        }}
                        className="menu-section-title"
                      >
                        {sec.code}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.06em',
                        }}
                        className="menu-section-desc"
                      >
                        {sec.desc}
                      </span>
                      <ChevronRight size={14} color="var(--gold-primary)" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT COLUMN: BRAND SPOTLIGHT, YOUTUBE & SOCIAL HUBS */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(214, 168, 60, 0.22)',
                borderRadius: '12px',
                padding: '28px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--crimson-light)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  // OFFICIAL CHANNEL SPOTLIGHT
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#FFFFFF',
                    margin: '0 0 10px 0',
                  }}
                >
                  SBB GAMING FF
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                  }}
                >
                  Daily competitive highlights, ranked clutch compilations, and cinematic edits. Join the community on YouTube.
                </p>

                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    backgroundColor: '#C81018',
                    borderRadius: '6px',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(200, 16, 24, 0.45)',
                  }}
                >
                  <span>SUBSCRIBE ON YOUTUBE</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* SOCIAL LINKS ROW */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  SOCIALS & PROFILES:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      style={{
                        padding: '6px 14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.08em',
                        textDecoration: 'none',
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* TELEMETRY */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: 'var(--text-muted)' }}>
                  SCROLL PROGRESS: {Math.round(scrollProgress * 100)}%
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: 'var(--gold-primary)' }}>
                  250 FRAMES SYNCED
                </span>
              </div>
            </div>
          </div>

          {/* MODAL FOOTER */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '16px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
              }}
            >
              SBB GAMING • GAMER • DEVELOPER • EDITOR • TECH
            </span>
          </div>
        </div>
      )}

      {/* COMPONENT STYLES */}
      <style>{`
        @keyframes pulseBeacon {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.85); }
        }
        @keyframes fadeInMenu {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .floating-menu-btn:hover {
          border-color: var(--gold-light) !important;
          box-shadow: 0 0 20px rgba(214, 168, 60, 0.35), 0 0 10px rgba(200, 16, 24, 0.4) !important;
          transform: translateY(-2px);
        }
        .brand-center-hover:hover {
          transform: translateX(-50%) translateY(-1px);
        }
        .menu-close-btn:hover {
          border-color: #C81018 !important;
          color: #ffffff !important;
        }
        .menu-section-row:hover {
          background: rgba(214, 168, 60, 0.12) !important;
          border-left-color: var(--gold-primary) !important;
          transform: translateX(4px);
        }
        .menu-section-row:hover .menu-section-title {
          color: var(--gold-light) !important;
          text-shadow: 0 0 14px rgba(214, 168, 60, 0.4);
        }
        @media (max-width: 820px) {
          .hud-sub-label {
            display: none !important;
          }
          .hud-vertical-rail {
            display: none !important;
          }
          .menu-section-desc {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
