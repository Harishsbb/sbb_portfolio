import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Gamepad2, Code2, Film, Settings, Play } from 'lucide-react';
import { sound } from '../../utils/audio';

interface IntroLoaderProps {
  progress: number;
  isReady: boolean;
  onEnter: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ progress, isReady, onEnter }) => {
  const [isMuted, setIsMuted] = useState(sound.isMuted());
  const [hasEntered, setHasEntered] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);
  const targetProgressRef = useRef(progress);

  // Smoothly interpolate displayed percentage up to current real progress
  useEffect(() => {
    targetProgressRef.current = Math.max(targetProgressRef.current, progress);
  }, [progress]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        const target = isReady ? 100 : Math.max(prev, targetProgressRef.current);
        if (prev < target) {
          const step = Math.max(1, Math.ceil((target - prev) * 0.15));
          return Math.min(100, prev + step);
        }
        return prev;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [isReady]);

  const handleEnterClick = () => {
    sound.playEnter();
    setHasEntered(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  const roundedPct = Math.round(displayProgress);

  return (
    <div
      onClick={isReady ? handleEnterClick : undefined}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#030406',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px 48px',
        color: '#ffffff',
        overflow: 'hidden',
        transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s ease',
        opacity: hasEntered ? 0 : 1,
        pointerEvents: hasEntered ? 'none' : 'all',
        transform: hasEntered ? 'scale(1.05)' : 'scale(1)',
        cursor: isReady ? 'pointer' : 'default',
        userSelect: 'none',
      }}
    >
      {/* 1. CINEMATIC BACKDROP IMAGE (Clean High-Res Altar & Dragon from User Reference) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/sbb-loader-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.02)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Atmospheric dark radial vignette to deepen depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, rgba(3, 4, 6, 0.05) 0%, rgba(3, 4, 6, 0.45) 60%, rgba(2, 3, 5, 0.88) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 2. TOP BAR: Tagline on Left, Audio Toggle on Right */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {/* Top Left: MORE THAN A GAME / A JOURNEY. */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span
            className="font-tech"
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.22em',
              color: 'rgba(255, 255, 255, 0.75)',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            MORE THAN A GAME
          </span>
          <span
            className="font-tech"
            style={{
              fontSize: '0.92rem',
              letterSpacing: '0.22em',
              fontWeight: 800,
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            A JOURNEY.
          </span>
          <div
            style={{
              width: '38px',
              height: '1.5px',
              background: 'linear-gradient(90deg, #e5a93c, rgba(229, 169, 60, 0.3))',
              marginTop: '4px',
              boxShadow: '0 0 6px rgba(229, 169, 60, 0.6)',
            }}
          />
        </div>

        {/* Top Right: [ 🔊 AUDIO ON ılı ] Button (Exact Reference Match) */}
        <button
          onClick={toggleSound}
          style={{
            background: 'rgba(12, 10, 8, 0.85)',
            border: '1.5px solid rgba(229, 169, 60, 0.7)',
            borderRadius: '10px',
            padding: '9px 18px',
            color: isMuted ? 'rgba(255, 255, 255, 0.5)' : '#ffd270',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-tech)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            boxShadow: '0 0 16px rgba(229, 169, 60, 0.25)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ffca55';
            e.currentTarget.style.boxShadow = '0 0 24px rgba(229, 169, 60, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(229, 169, 60, 0.7)';
            e.currentTarget.style.boxShadow = '0 0 16px rgba(229, 169, 60, 0.25)';
          }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          <span>{isMuted ? 'AUDIO OFF' : 'AUDIO ON'}</span>
          <span
            style={{
              color: isMuted ? '#666' : 'var(--gold-primary)',
              letterSpacing: '0.12em',
              animation: isMuted ? 'none' : 'audioBarPulse 1.2s infinite alternate',
              fontSize: '1rem',
              lineHeight: 1,
            }}
          >
            ılı
          </span>
        </button>
      </div>

      {/* 3. FLANKING VERTICAL PILLARS (LEFT & RIGHT) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '48px',
          right: '48px',
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        {/* Left Vertical Words: DISCIPLINE, CREATIVITY, PROGRESS, FREEDOM */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '1.5px',
              height: '76px',
              background: 'linear-gradient(180deg, transparent, rgba(229, 169, 60, 0.7), transparent)',
              boxShadow: '0 0 8px rgba(229, 169, 60, 0.4)',
            }}
          />
          <div
            className="font-tech"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '0.76rem',
              letterSpacing: '0.25em',
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            <span>DISCIPLINE</span>
            <span>CREATIVITY</span>
            <span>PROGRESS</span>
            <span>FREEDOM</span>
          </div>
        </div>

        {/* Right Vertical Words: GAME, DEVELOP, EDIT, INNOVATE */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            className="font-tech"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '0.76rem',
              letterSpacing: '0.25em',
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
              textAlign: 'right',
              fontWeight: 600,
            }}
          >
            <span>GAME</span>
            <span>DEVELOP</span>
            <span>EDIT</span>
            <span>INNOVATE</span>
          </div>
          <div
            style={{
              width: '1.5px',
              height: '76px',
              background: 'linear-gradient(180deg, transparent, rgba(229, 169, 60, 0.7), transparent)',
              boxShadow: '0 0 8px rgba(229, 169, 60, 0.4)',
            }}
          />
        </div>
      </div>

      {/* 4. CENTER AREA: SBB GAMING + PROGRESS BAR + MOTTO + 4 HEXAGONAL BADGES */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        {/* Brand Title: SBB GAMING */}
        <div style={{ marginBottom: '10px' }}>
          <h1
            className="font-orbitron"
            style={{
              fontSize: 'clamp(3.4rem, 7.5vw, 5.8rem)',
              fontWeight: 900,
              letterSpacing: '0.14em',
              lineHeight: 1,
              margin: 0,
              background: 'linear-gradient(180deg, #ffffff 0%, #ffe090 28%, #e5a93c 60%, #9e640e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 14px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 35px rgba(229, 169, 60, 0.65))',
            }}
          >
            SBB
          </h1>
          <h2
            className="font-orbitron"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.7rem)',
              fontWeight: 900,
              letterSpacing: '0.2em',
              lineHeight: 1.1,
              margin: '3px 0 0',
              color: '#ffffff',
              textShadow: '0 0 22px rgba(229, 9, 20, 0.85), 0 0 45px rgba(229, 169, 60, 0.4)',
              textTransform: 'uppercase',
            }}
          >
            GAMING
          </h2>
        </div>

        {/* Pillars Subtitle: GAMING • DEV • EDITOR • TECH */}
        <div
          className="font-tech"
          style={{
            fontSize: 'clamp(0.82rem, 1.5vw, 0.98rem)',
            letterSpacing: '0.34em',
            color: 'rgba(230, 235, 245, 0.88)',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '6px',
            textShadow: '0 0 10px rgba(0,0,0,0.8)',
          }}
        >
          GAMING &nbsp;•&nbsp; DEV &nbsp;•&nbsp; EDITOR &nbsp;•&nbsp; TECH
        </div>

        {/* Status Tracker: INITIALIZING CINEMATIC EXPERIENCE... */}
        <div
          className="font-tech"
          style={{
            fontSize: '0.78rem',
            letterSpacing: '0.28em',
            color: 'rgba(255, 255, 255, 0.55)',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}
        >
          {roundedPct >= 100 ? 'CINEMATIC EXPERIENCE READY' : 'INITIALIZING CINEMATIC EXPERIENCE...'}
        </div>

        {/* PROGRESS BAR ROW: Glowing Track + Percentage Number (Exact Mockup Match) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: 'min(520px, 86vw)',
            marginBottom: '18px',
          }}
        >
          {/* Progress Bar Track */}
          <div
            style={{
              flex: 1,
              height: '11px',
              backgroundColor: 'rgba(15, 6, 8, 0.85)',
              borderRadius: '6px',
              padding: '1.5px',
              border: '1.5px solid rgba(229, 169, 60, 0.45)',
              boxShadow: '0 0 16px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(0, 0, 0, 0.8)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${Math.min(100, Math.max(3, roundedPct))}%`,
                background: 'linear-gradient(90deg, #ff4d00 0%, #ff9500 45%, #ffcc00 80%, #ffffff 100%)',
                borderRadius: '4px',
                boxShadow: '0 0 16px #ffb300, 0 0 32px rgba(255, 120, 0, 0.85)',
                transition: 'width 0.15s ease-out',
              }}
            />
          </div>

          {/* Percentage Number (Exact Match: 63% etc.) */}
          <div
            className="font-tech"
            style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: '#ffde85',
              minWidth: '50px',
              textAlign: 'right',
              textShadow: '0 0 14px rgba(255, 200, 50, 0.85)',
            }}
          >
            {roundedPct}%
          </div>
        </div>

        {/* MOTTO: "BUILD . CREATE . PLAY . REPEAT" */}
        <div
          className="font-tech"
          style={{
            fontSize: '0.84rem',
            letterSpacing: '0.3em',
            color: 'rgba(255, 255, 255, 0.75)',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          "BUILD &nbsp;.&nbsp; CREATE &nbsp;.&nbsp; PLAY &nbsp;.&nbsp; REPEAT"
        </div>

        {/* Red Accent Divider Line with Center Diamond (Exact Mockup Match) */}
        <div
          style={{
            position: 'relative',
            width: 'min(380px, 70vw)',
            height: '1.5px',
            background:
              'linear-gradient(90deg, transparent, rgba(229, 9, 20, 0.7) 30%, rgba(229, 169, 60, 0.9) 50%, rgba(229, 9, 20, 0.7) 70%, transparent)',
            marginBottom: '24px',
            boxShadow: '0 0 8px rgba(229, 9, 20, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: '#ff3344',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 6px #ff3344',
            }}
          />
        </div>

        {/* FOUR HEXAGONAL TECH BADGES (Exact Mockup Match) */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(18px, 4vw, 44px)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* 1. GAMING */}
          <div className="loader-hex-item">
            <div className="loader-hex-wrap">
              <svg className="loader-hex-svg" viewBox="0 0 52 58">
                <polygon
                  points="26,2 50,15.5 50,42.5 26,56 2,42.5 2,15.5"
                  className="loader-hex-poly"
                />
              </svg>
              <div className="loader-hex-icon">
                <Gamepad2 size={20} />
              </div>
            </div>
            <span className="loader-hex-text">GAMING</span>
          </div>

          {/* 2. DEVELOPMENT */}
          <div className="loader-hex-item">
            <div className="loader-hex-wrap">
              <svg className="loader-hex-svg" viewBox="0 0 52 58">
                <polygon
                  points="26,2 50,15.5 50,42.5 26,56 2,42.5 2,15.5"
                  className="loader-hex-poly"
                />
              </svg>
              <div className="loader-hex-icon">
                <Code2 size={20} />
              </div>
            </div>
            <span className="loader-hex-text">DEVELOPMENT</span>
          </div>

          {/* 3. EDITING */}
          <div className="loader-hex-item">
            <div className="loader-hex-wrap">
              <svg className="loader-hex-svg" viewBox="0 0 52 58">
                <polygon
                  points="26,2 50,15.5 50,42.5 26,56 2,42.5 2,15.5"
                  className="loader-hex-poly"
                />
              </svg>
              <div className="loader-hex-icon">
                <Film size={20} />
              </div>
            </div>
            <span className="loader-hex-text">EDITING</span>
          </div>

          {/* 4. TECH */}
          <div className="loader-hex-item">
            <div className="loader-hex-wrap">
              <svg className="loader-hex-svg" viewBox="0 0 52 58">
                <polygon
                  points="26,2 50,15.5 50,42.5 26,56 2,42.5 2,15.5"
                  className="loader-hex-poly"
                />
              </svg>
              <div className="loader-hex-icon">
                <Settings size={20} />
              </div>
            </div>
            <span className="loader-hex-text">TECH</span>
          </div>
        </div>

        {/* CLICK TO ENTER BUTTON (Appears once buffer is loaded / ready) */}
        {isReady && (
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={handleEnterClick}
              className="btn-hero-explore"
              style={{
                padding: '11px 32px',
                fontSize: '0.84rem',
                cursor: 'pointer',
                animation: 'enterPulse 2s infinite',
                boxShadow: '0 0 25px rgba(229, 9, 20, 0.7), 0 0 45px rgba(229, 169, 60, 0.4)',
              }}
            >
              <Play size={14} fill="#ffffff" />
              <span>ENTER THE SBB UNIVERSE</span>
            </button>
          </div>
        )}
      </div>

      {/* 5. BOTTOM CORNERS: POWERED BY CREATIVITY on Left, SBB GAMING OFFICIAL HUB on Right */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        {/* Bottom Left: POWERED BY CREATIVITY */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '1.5px',
              height: '28px',
              backgroundColor: 'rgba(255, 255, 255, 0.35)',
            }}
          />
          <div
            className="font-tech"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
              lineHeight: 1.35,
            }}
          >
            <div>POWERED</div>
            <div>BY CREATIVITY</div>
          </div>
        </div>

        {/* Bottom Right: SBB GAMING OFFICIAL HUB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            className="font-tech"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
              textAlign: 'right',
              lineHeight: 1.35,
            }}
          >
            <div>SBB GAMING</div>
            <div>OFFICIAL HUB</div>
          </div>
          <div
            style={{
              width: '1.5px',
              height: '28px',
              backgroundColor: 'rgba(255, 255, 255, 0.35)',
            }}
          />
        </div>
      </div>

      {/* CSS STYLES FOR HEXAGONS, AUDIO ANIMATION, AND RESPONSIVENESS */}
      <style>{`
        .loader-hex-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .loader-hex-wrap {
          position: relative;
          width: 48px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.25s ease;
        }

        .loader-hex-wrap:hover {
          transform: translateY(-3px) scale(1.08);
        }

        .loader-hex-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .loader-hex-poly {
          fill: rgba(26, 6, 10, 0.85);
          stroke: rgba(229, 9, 20, 0.85);
          stroke-width: 1.8;
          filter: drop-shadow(0 0 8px rgba(229, 9, 20, 0.65));
          transition: all 0.25s ease;
        }

        .loader-hex-wrap:hover .loader-hex-poly {
          fill: rgba(45, 10, 16, 0.95);
          stroke: #ff3344;
          filter: drop-shadow(0 0 16px rgba(229, 9, 20, 1));
        }

        .loader-hex-icon {
          position: relative;
          z-index: 2;
          color: #ff3344;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.25s ease;
        }

        .loader-hex-wrap:hover .loader-hex-icon {
          color: #ffffff;
        }

        .loader-hex-text {
          font-family: var(--font-tech);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(200, 210, 225, 0.8);
          text-transform: uppercase;
          transition: color 0.25s ease;
        }

        .loader-hex-item:hover .loader-hex-text {
          color: #ff3344;
        }

        @keyframes audioBarPulse {
          0% { opacity: 0.4; }
          100% { opacity: 1; filter: drop-shadow(0 0 6px var(--gold-primary)); }
        }

        @keyframes enterPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(229, 9, 20, 0.6), 0 0 35px rgba(229, 169, 60, 0.35);
            transform: translateY(0);
          }
          50% {
            box-shadow: 0 0 35px rgba(229, 9, 20, 0.9), 0 0 60px rgba(229, 169, 60, 0.6);
            transform: translateY(-2px);
          }
        }

        @media (max-width: 768px) {
          padding: 24px 20px !important;
        }
      `}</style>
    </div>
  );
};
