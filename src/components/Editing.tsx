import React, { useState, useEffect } from 'react';
import { Film, Play, Pause, Scissors, Volume2, Sparkles } from 'lucide-react';
import { EDIT_PROJECTS, EDITING_CATEGORIES, TIMELINE_TRACKS, EditProject } from '../data/editing';
import { SOCIAL_LINKS } from '../data/socials';
import { sound } from '../utils/audio';

const MEDIA_KEYFRAMES = [
  { frame: '034', timecode: '00:00:14', label: 'IGNITION', src: '/ezgif-845a2d8ad4709186-png-split/ezgif-frame-034.png' },
  { frame: '110', timecode: '00:00:44', label: 'PARTICLE FLOW', src: '/ezgif-845a2d8ad4709186-png-split/ezgif-frame-110.png' },
  { frame: '175', timecode: '00:01:10', label: 'CREST IMPACT', src: '/ezgif-845a2d8ad4709186-png-split/ezgif-frame-175.png' },
  { frame: '240', timecode: '00:01:36', label: 'SHIELD REVEAL', src: '/ezgif-845a2d8ad4709186-png-split/ezgif-frame-240.png' },
];

export const Editing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Cinematic Edits');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playhead, setPlayhead] = useState<number>(45);

  const youtubeUrl = SOCIAL_LINKS.find((s) => s.id === 'youtube')?.url || 'https://www.youtube.com/@sbbgamingff2001';

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlayhead((prev) => (prev >= 98 ? 2 : prev + 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayback = () => {
    sound.playClick();
    setIsPlaying(!isPlaying);
  };

  const selectedProject: EditProject =
    EDIT_PROJECTS.find((p) => p.category === activeCategory) || EDIT_PROJECTS[0];

  return (
    <section id="editing" style={{ position: 'relative', padding: '120px 0', overflow: 'hidden' }}>
      <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--crimson-light)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Scissors size={14} /> // 04 • MOTION & POST-PRODUCTION
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0 0 16px 0',
            }}
          >
            EDITOR
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Stories, velocity, and visual impact. Transforming raw sequences into adrenaline-charged cinematic experiences.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '36px',
          }}
        >
          {EDITING_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playHover();
                  setActiveCategory(cat);
                }}
                style={{
                  padding: '8px 20px',
                  background: isActive ? 'rgba(200, 16, 24, 0.18)' : 'rgba(5, 5, 5, 0.50)',
                  backdropFilter: 'blur(10px)',
                  border: isActive ? '1px solid var(--crimson-light)' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* SINGLE LARGE CINEMATIC EDITING SHOWCASE */}
        <div
          style={{
            background: 'rgba(5, 5, 5, 0.50)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(214, 168, 60, 0.22)',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
            overflow: 'hidden',
            marginBottom: '48px',
          }}
        >
          {/* STUDIO STATUS BAR */}
          <div
            style={{
              padding: '14px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Film size={18} color="var(--crimson-light)" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#ffffff',
                }}
              >
                SBB CINEMATIC MOTION STUDIO // {activeCategory.toUpperCase()}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--gold-primary)' }}>
                TIMECODE: 00:01:{String(Math.floor(playhead * 0.6)).padStart(2, '0')}:18
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '3px 10px',
                  background: 'rgba(214, 168, 60, 0.12)',
                  border: '1px solid rgba(214, 168, 60, 0.3)',
                  borderRadius: '4px',
                  color: 'var(--gold-light)',
                  letterSpacing: '0.08em',
                }}
              >
                {selectedProject.resolution} @ {selectedProject.fps}
              </span>
            </div>
          </div>

          {/* 1. VIDEO PREVIEW & WAVEFORM SPLIT */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* VIDEO PREVIEW MONITOR */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: 'rgba(0, 0, 0, 0.40)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Status Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 3,
                  background: 'rgba(5, 5, 5, 0.7)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isPlaying ? '#27c93f' : '#ff5f56',
                    boxShadow: isPlaying ? '0 0 10px #27c93f' : 'none',
                  }}
                />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#fff' }}>
                  {isPlaying ? 'REC • PREVIEW LIVE' : 'PAUSED'}
                </span>
              </div>

              {/* Play / Pause Toggle Button */}
              <button
                onClick={togglePlayback}
                style={{
                  position: 'absolute',
                  zIndex: 4,
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(5, 5, 5, 0.75)',
                  border: '1.5px solid var(--crimson-light)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 25px rgba(200, 16, 24, 0.45)',
                  backdropFilter: 'blur(8px)',
                  transition: 'transform 0.2s ease',
                }}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
              </button>

              {/* Viewport Safe Margin Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: '8%',
                  border: '1px dashed rgba(255, 255, 255, 0.12)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* LIVE AUDIO WAVEFORM & SUITE INTEL */}
            <div
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(5, 5, 5, 0.35)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--crimson-light)',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  FEATURED EDIT CASE // 0{EDIT_PROJECTS.findIndex((p) => p.category === activeCategory) + 1}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 12px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {selectedProject.title}
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
                  {selectedProject.description}
                </p>

                {/* Software suite badges */}
                <div style={{ marginBottom: '16px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '8px',
                    }}
                  >
                    SOFTWARE STACK:
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {selectedProject.software.map((sw, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          padding: '3px 9px',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#e0e0e0',
                        }}
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Techniques */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '8px',
                    }}
                  >
                    KEY TECHNIQUES:
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {selectedProject.techniques.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          padding: '3px 9px',
                          borderRadius: '4px',
                          background: 'rgba(200, 16, 24, 0.10)',
                          border: '1px solid rgba(200, 16, 24, 0.25)',
                          color: 'var(--crimson-light)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. DYNAMIC LIVE WAVEFORM */}
              <div style={{ marginTop: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--gold-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Volume2 size={13} /> MASTER AUDIO WAVEFORM
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#27c93f' }}>-0.2 dB PEAK</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', height: '34px', gap: '3px' }}>
                  {Array.from({ length: 36 }).map((_, i) => {
                    const h = isPlaying
                      ? 14 + Math.sin(i * 0.5 + playhead * 0.3) * 12 + Math.random() * 8
                      : 8 + Math.sin(i * 0.3) * 6;
                    return (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${Math.max(4, Math.min(32, h))}px`,
                          backgroundColor: i > 30 ? 'var(--crimson-primary)' : i > 22 ? 'var(--gold-primary)' : '#5bc0be',
                          borderRadius: '1px',
                          transition: 'height 0.1s ease',
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 3. MEDIA FRAMES FILMSTRIP */}
          <div
            style={{
              padding: '20px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(5, 5, 5, 0.25)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={13} color="var(--gold-primary)" />
              MEDIA FRAMES // CINEMATIC KEYFRAME STRIP
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '14px',
              }}
            >
              {MEDIA_KEYFRAMES.map((kf, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: 'rgba(5, 5, 5, 0.55)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img
                      src={kf.src}
                      alt={kf.label}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '6px',
                        left: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: '#ffffff',
                        background: 'rgba(0, 0, 0, 0.7)',
                        padding: '2px 6px',
                        borderRadius: '3px',
                      }}
                    >
                      {kf.timecode}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: '8px 10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(5, 5, 5, 0.65)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {kf.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--gold-primary)',
                      }}
                    >
                      #{kf.frame}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. MULTI-TRACK SEQUENCE TIMELINE */}
          <div style={{ padding: '24px', background: 'rgba(5, 5, 5, 0.40)', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.12em',
                }}
              >
                MULTI-TRACK TIMELINE // FRAME SEQUENCE
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                ZOOM: 100% • FRAMES: 2,400
              </span>
            </div>

            {/* Timeline Workspace */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Playhead Needle */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${playhead}%`,
                  width: '2px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 10px #ffffff',
                  zIndex: 10,
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '-5px',
                    width: '12px',
                    height: '10px',
                    backgroundColor: '#ffffff',
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  }}
                />
              </div>

              {/* Tracks */}
              {TIMELINE_TRACKS.map((track) => (
                <div
                  key={track.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '34px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '130px',
                      padding: '0 12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: track.color,
                      fontWeight: 700,
                      flexShrink: 0,
                      borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {track.name}
                  </div>

                  <div style={{ position: 'relative', flex: 1, height: '100%' }}>
                    {track.items.map((clip, i) => (
                      <div
                        key={i}
                        style={{
                          position: 'absolute',
                          left: `${clip.start}%`,
                          width: `${clip.width}%`,
                          top: '4px',
                          bottom: '4px',
                          backgroundColor: `${track.color}28`,
                          border: `1px solid ${track.color}88`,
                          borderRadius: '3px',
                          padding: '0 10px',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#fff',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {clip.label}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button: VIEW EDITS ON YOUTUBE */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 36px',
              backgroundColor: '#0B0B0B',
              border: '1px solid rgba(214, 168, 60, 0.35)',
              borderBottom: '3px solid #C81018',
              borderRadius: '6px',
              color: '#F5F5F5',
              fontFamily: 'var(--font-display)',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Film size={18} color="var(--crimson-light)" />
            <span>VIEW EDITS ON YOUTUBE</span>
          </a>
        </div>

      </div>
    </section>
  );
};
