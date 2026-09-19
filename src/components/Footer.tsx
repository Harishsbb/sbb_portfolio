import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { YoutubeIcon, GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { SOCIAL_LINKS } from '../data/socials';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'youtube':
        return <YoutubeIcon size={18} />;
      case 'github':
        return <GithubIcon size={18} />;
      case 'linkedin':
        return <LinkedinIcon size={18} />;
      case 'instagram':
        return <InstagramIcon size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        padding: '80px 24px 40px 24px',
      }}
    >
      {/* Subtle localized highlight behind final text */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(800px, 90vw)',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 60%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* SMALL CHAPTER NUMBER */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--gold-primary)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            opacity: 0.85,
          }}
        >
          // FRAME 250 • THE DRAGON EMBLAZONED
        </div>

        {/* CLIMAX TITLE: SBB GAMING */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7.5vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: '0 0 16px 0',
            lineHeight: 1.05,
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #F4C65A 0%, #D6A83C 60%, #AA7C1E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(214, 168, 60, 0.35)',
              marginRight: '0.25em',
            }}
          >
            SBB
          </span>
          <span
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 35px rgba(255, 255, 255, 0.25)',
            }}
          >
            GAMING
          </span>
        </h2>

        {/* PILLARS TAGLINE: GAMER • DEVELOPER • EDITOR • TECH */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.85rem, 2vw, 1.25rem)',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #F5F5F5 0%, #D6A83C 50%, #C81018 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 36px 0',
          }}
        >
          GAMER • DEVELOPER • EDITOR • TECH
        </p>

        {/* FINAL PAYOFF STATEMENT: KEEP CREATING. */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textShadow: '0 0 35px rgba(200, 16, 24, 0.65), 0 0 70px rgba(200, 16, 24, 0.3)',
            marginBottom: '54px',
          }}
        >
          KEEP CREATING.
        </div>

        {/* MINIMAL FLOATING GLASS SOCIAL PILLS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                background: 'rgba(5, 5, 5, 0.45)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(214, 168, 60, 0.22)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#F5F5F5',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
              }}
              className="social-pill-hover"
            >
              <span style={{ color: link.primary ? 'var(--crimson-light)' : 'var(--gold-primary)' }}>
                {getSocialIcon(link.name)}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* BACK TO TOP BUTTON */}
        <div style={{ marginBottom: '48px' }}>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: 'rgba(5, 5, 5, 0.50)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="back-to-top-btn"
          >
            <ArrowUp size={14} />
            <span>RETURN TO SUMMIT</span>
          </button>
        </div>

        {/* SYSTEM TELEMETRY / COPYRIGHT */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} SBB GAMING • ALL RIGHTS RESERVED
          </p>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'rgba(214, 168, 60, 0.65)',
              letterSpacing: '0.16em',
            }}
          >
            CINEMATIC CANVAS ENGINE // 250 FRAMES ACTIVE
          </div>
        </div>
      </div>

      <style>{`
        .social-pill-hover:hover {
          background: rgba(200, 16, 24, 0.15) !important;
          border-color: var(--crimson-light) !important;
          transform: translateY(-2px);
        }
        .back-to-top-btn:hover {
          color: #ffffff !important;
          border-color: var(--gold-primary) !important;
        }
      `}</style>
    </footer>
  );
};
