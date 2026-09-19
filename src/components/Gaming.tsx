import React, { useState } from 'react';
import { Play, Flame, Trophy, Eye, Clock, ExternalLink, X, Gamepad2, Radio, CheckCircle2 } from 'lucide-react';
import { YoutubeIcon } from './Icons';
import { GAMING_HIGHLIGHTS, GAMING_STATS, GAME_TITLES, GamingHighlight, GameTitle } from '../data/gaming';
import { SOCIAL_LINKS } from '../data/socials';
import { sound } from '../utils/audio';

export const Gaming: React.FC = () => {
  const [gameStatusFilter, setGameStatusFilter] = useState<'All' | 'Currently Playing' | 'Played'>('All');
  const [activeHighlightFilter, setActiveHighlightFilter] = useState<string>('All');
  const [selectedHighlight, setSelectedHighlight] = useState<GamingHighlight | null>(null);

  const youtubeUrl = SOCIAL_LINKS.find((s) => s.id === 'youtube')?.url || 'https://www.youtube.com/@sbbgamingff2001';

  const filterOptions = ['All', 'Gameplay', 'Highlight', 'Cinematic Montage', 'Short'];

  const filteredGames =
    gameStatusFilter === 'All'
      ? GAME_TITLES
      : GAME_TITLES.filter((g) => g.status === gameStatusFilter);

  const filteredHighlights =
    activeHighlightFilter === 'All'
      ? GAMING_HIGHLIGHTS
      : GAMING_HIGHLIGHTS.filter((item) => item.type === activeHighlightFilter || item.game.toLowerCase().includes(activeHighlightFilter.toLowerCase()));

  const openPreview = (item: GamingHighlight) => {
    sound.playClick();
    setSelectedHighlight(item);
  };

  const closePreview = () => {
    sound.playClick();
    setSelectedHighlight(null);
  };

  return (
    <section id="gaming" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 80px 0' }}>
      <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
            <Flame size={14} /> // 02 • BATTLEFIELD DOMINANCE
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
            GAMING
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
            Where the journey began. Tactical mechanics, competitive grit, and high-voltage execution across competitive and atmospheric titles.
          </p>
        </div>

        {/* Channel Quick Telemetry Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(20px, 4vw, 48px)',
            flexWrap: 'wrap',
            padding: '16px 28px',
            background: 'rgba(5, 5, 5, 0.45)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(200, 16, 24, 0.22)',
            borderRadius: '8px',
            maxWidth: '900px',
            margin: '0 auto 48px',
          }}
        >
          {GAMING_STATS.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                  fontWeight: 800,
                  color: '#F5F5F5',
                  textShadow: '0 0 12px rgba(200, 16, 24, 0.3)',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: '#8A8A8A',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            1. GAME LIBRARY: PLAYED & CURRENTLY PLAYING ROSTER
            ========================================================================= */}
        <div style={{ marginBottom: '64px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Gamepad2 size={18} color="var(--gold-primary)" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: '#ffffff',
                }}
              >
                GAME ARSENAL // PLAYED & CURRENTLY PLAYING
              </span>
            </div>

            {/* Status Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['All', 'Currently Playing', 'Played'] as const).map((status) => {
                const isActive = gameStatusFilter === status;
                return (
                  <button
                    key={status}
                    onClick={() => {
                      sound.playHover();
                      setGameStatusFilter(status);
                    }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '4px',
                      background: isActive ? 'rgba(200, 16, 24, 0.20)' : 'rgba(5, 5, 5, 0.45)',
                      border: isActive ? '1px solid var(--crimson-light)' : '1px solid rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {status === 'All' ? 'ALL TITLES (9)' : status.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of 9 Game Cards: Transparent Dark Glass (rgba(5, 5, 5, 0.50)) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '20px',
            }}
          >
            {filteredGames.map((game) => {
              const isPlayingNow = game.status === 'Currently Playing';
              return (
                <div
                  key={game.id}
                  onMouseEnter={() => sound.playHover()}
                  style={{
                    borderRadius: '8px',
                    background: 'rgba(5, 5, 5, 0.50)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: isPlayingNow
                      ? '1px solid rgba(200, 16, 24, 0.35)'
                      : '1px solid rgba(214, 168, 60, 0.25)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                  }}
                  className="game-roster-card"
                >
                  {/* Game Banner Visual */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img
                      src={game.coverImage}
                      alt={game.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className="game-cover-img"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(5, 5, 5, 0.9) 0%, rgba(5, 5, 5, 0.2) 60%, transparent 100%)',
                      }}
                    />

                    {/* Status Beacon Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '3px 9px',
                        borderRadius: '20px',
                        background: isPlayingNow ? 'rgba(200, 16, 24, 0.85)' : 'rgba(214, 168, 60, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#ffffff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        boxShadow: isPlayingNow ? '0 0 10px rgba(200, 16, 24, 0.5)' : '0 0 10px rgba(214, 168, 60, 0.4)',
                      }}
                    >
                      {isPlayingNow ? <Radio size={10} /> : <CheckCircle2 size={10} />}
                      <span>{isPlayingNow ? 'CURRENTLY PLAYING' : 'PLAYED'}</span>
                    </div>

                    {/* Platform Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '12px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--gold-light)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {game.platform}
                    </div>
                  </div>

                  {/* Details */}
                  <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.70rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          marginBottom: '4px',
                        }}
                      >
                        {game.genre}
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          margin: '0 0 8px 0',
                          lineHeight: 1.3,
                        }}
                      >
                        {game.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.84rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                          margin: '0 0 14px 0',
                        }}
                      >
                        {game.highlight}
                      </p>
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      {game.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            color: '#a0a0a0',
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '2px 6px',
                            borderRadius: '3px',
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            2. VIDEO HIGHLIGHTS: MAX 3 CARDS PER ROW
            (Transparent dark glass: rgba(5, 5, 5, 0.55))
            ========================================================================= */}
        <div style={{ marginBottom: '56px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Play size={18} color="var(--crimson-light)" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: '#ffffff',
                }}
              >
                FEATURED GAMEPLAY & HIGHLIGHTS
              </span>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {filterOptions.map((f) => {
                const isActive = activeHighlightFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => {
                      sound.playHover();
                      setActiveHighlightFilter(f);
                    }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '4px',
                      border: isActive ? '1px solid var(--crimson-light)' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isActive ? 'rgba(200, 16, 24, 0.20)' : 'rgba(5, 5, 5, 0.45)',
                      color: isActive ? '#fff' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {f.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3 Large Video Cards Max Per Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {filteredHighlights.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => sound.playHover()}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: 'rgba(5, 5, 5, 0.55)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(200, 16, 24, 0.28)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                }}
                className="video-card-hover"
              >
                {/* Thumbnail */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    className="card-thumb-img"
                  />

                  {/* Badge */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.70rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(200, 16, 24, 0.85)',
                        color: '#ffffff',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Duration */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      padding: '3px 8px',
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      borderRadius: '4px',
                      fontSize: '0.70rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Clock size={11} /> {item.duration}
                  </div>

                  {/* Play Button Trigger */}
                  <button
                    onClick={() => openPreview(item)}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label={`Play ${item.title}`}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(200, 16, 24, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(200, 16, 24, 0.6)',
                        transition: 'transform 0.2s ease',
                      }}
                      className="play-btn-circle"
                    >
                      <Play size={22} color="#fff" fill="#fff" style={{ marginLeft: '3px' }} />
                    </div>
                  </button>
                </div>

                {/* Details */}
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.82rem',
                          color: 'var(--gold-primary)',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {item.game.toUpperCase()}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#8A8A8A', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                        <Eye size={12} /> {item.views}
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.08rem',
                        fontWeight: 700,
                        lineHeight: 1.4,
                        color: '#F5F5F5',
                        margin: '0 0 10px 0',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.86rem',
                        lineHeight: 1.55,
                        color: 'var(--text-muted)',
                        margin: '0 0 16px 0',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: '#8A8A8A',
                            padding: '2px 7px',
                            borderRadius: '3px',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openPreview(item)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid rgba(200, 16, 24, 0.4)',
                        backgroundColor: 'rgba(200, 16, 24, 0.15)',
                        color: '#F5F5F5',
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Play size={13} fill="currentColor" />
                      <span>PREVIEW CLIP</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            3. YOUTUBE CHANNEL BANNER — Transparent Dark Glass
            ========================================================================= */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '36px 24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '8px',
            background: 'rgba(5, 5, 5, 0.50)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(200, 16, 24, 0.35)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
          }}
        >
          <YoutubeIcon size={40} color="#ff3340" style={{ marginBottom: '14px' }} />
          
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '6px',
            }}
          >
            OFFICIAL YOUTUBE CHANNEL • @sbbgamingff2001
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 800,
              color: '#F5F5F5',
              marginBottom: '10px',
              letterSpacing: '0.08em',
            }}
          >
            SBB GAMING FF
          </h3>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '16px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(200, 16, 24, 0.2)', border: '1px solid rgba(200, 16, 24, 0.4)', color: '#ff4d55' }}>
              1.06K+ SUBSCRIBERS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(214, 168, 60, 0.15)', border: '1px solid rgba(214, 168, 60, 0.3)', color: 'var(--gold-light)' }}>
              155+ VIDEOS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#d0d0d0' }}>
              FREE FIRE • COD • TACTICAL
            </span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.94rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}
          >
            Catch regular live streams, custom room competitive duels, and rank-push gameplay. Join the official SBB Gaming squad.
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
              padding: '14px 32px',
              backgroundColor: '#C81018',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(200, 16, 24, 0.45)',
            }}
          >
            <YoutubeIcon size={18} />
            <span>VISIT SBB GAMING YOUTUBE</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>

      {/* Video Modal Preview */}
      {selectedHighlight && (
        <div
          onClick={closePreview}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(16px)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(860px, 95vw)',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(8, 8, 8, 0.95)',
              border: '1px solid rgba(200, 16, 24, 0.4)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
            }}
          >
            <button
              onClick={closePreview}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
              <img
                src={selectedHighlight.thumbnail}
                alt={selectedHighlight.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.45)',
                  gap: '14px',
                }}
              >
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    backgroundColor: '#C81018',
                    borderRadius: '6px',
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    boxShadow: '0 0 25px rgba(200, 16, 24, 0.6)',
                  }}
                >
                  <Play size={18} fill="#fff" />
                  <span>WATCH ON YOUTUBE</span>
                </a>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#ccc' }}>
                  Duration: {selectedHighlight.duration} • Views: {selectedHighlight.views}
                </span>
              </div>
            </div>

            <div style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--crimson-light)' }}>
                  {selectedHighlight.badge}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gold-primary)' }}>
                  {selectedHighlight.game}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#fff', margin: '0 0 10px 0' }}>
                {selectedHighlight.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {selectedHighlight.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .game-roster-card:hover {
          transform: translateY(-4px);
          border-color: rgba(200, 16, 24, 0.6) !important;
          box-shadow: 0 12px 32px rgba(200, 16, 24, 0.25) !important;
        }
        .game-roster-card:hover .game-cover-img {
          transform: scale(1.05);
        }
        .video-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(200, 16, 24, 0.55) !important;
        }
        .video-card-hover:hover .card-thumb-img {
          transform: scale(1.04);
        }
        .video-card-hover:hover .play-btn-circle {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
