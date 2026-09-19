import React, { useState } from 'react';
import { Sparkles, Eye, X, ArrowUpRight } from 'lucide-react';
import { CREATIONS, CREATION_CATEGORIES, CreationItem } from '../data/creations';
import { sound } from '../utils/audio';

export const Creations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<CreationItem | null>(null);

  // Curate to max 3 large visual cards to keep density light and let the dragon breathe
  const filteredCreations =
    (activeCategory === 'All'
      ? CREATIONS
      : CREATIONS.filter((item) => item.category === activeCategory)
    ).slice(0, 3);

  const openItem = (item: CreationItem) => {
    sound.playClick();
    setActiveModalItem(item);
  };

  const closeModal = () => {
    sound.playClick();
    setActiveModalItem(null);
  };

  return (
    <section id="creations" style={{ position: 'relative', padding: '120px 0 80px 0', overflow: 'hidden' }}>
      <div className="section-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--gold-primary)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Sparkles size={14} /> // 05 • CURATED ARCHIVE
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
            CREATIONS
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            A selective visual gallery across engineering, motion media, and competitive gaming.
          </p>
        </div>

        {/* Minimal Category Selector */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {CREATION_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playHover();
                  setActiveCategory(cat);
                }}
                style={{
                  padding: '7px 18px',
                  background: isActive ? 'rgba(214, 168, 60, 0.16)' : 'rgba(5, 5, 5, 0.40)',
                  backdropFilter: 'blur(10px)',
                  border: isActive ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
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

        {/* CINEMATIC GALLERY: 3 LARGE VISUAL CARDS WITH GENEROUS SPACING */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(28px, 3.5vw, 44px)',
            marginBottom: '40px',
          }}
        >
          {filteredCreations.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openItem(item)}
              onMouseEnter={() => sound.playHover()}
              style={{
                cursor: 'pointer',
                borderRadius: '14px',
                background: 'rgba(5, 5, 5, 0.45)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(214, 168, 60, 0.20)',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="creation-card-hover"
            >
              {/* Large Visual Window */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  background: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src={item.previewUrl}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="creation-card-img"
                />

                {/* Index Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--gold-light)',
                    background: 'rgba(5, 5, 5, 0.7)',
                    backdropFilter: 'blur(8px)',
                    padding: '3px 9px',
                    borderRadius: '4px',
                    border: '1px solid rgba(214, 168, 60, 0.25)',
                    letterSpacing: '0.08em',
                  }}
                >
                  0{idx + 1} // {item.category.toUpperCase()}
                </div>

                {/* Quick inspect button */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(5, 5, 5, 0.7)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Minimal Clean Details */}
              <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      margin: '0 0 16px 0',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {item.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.70rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.70rem',
                      color: 'var(--gold-primary)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.meta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GRADUAL REDUCTION OF UI: Light cue guiding smoothly into the climax */}
        <div style={{ textAlign: 'center', marginTop: '36px', opacity: 0.65 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            APPROACHING FRAME 250 // THE FINAL EMBLEM
          </div>
          <div
            style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(to bottom, var(--gold-primary), transparent)',
              margin: '12px auto 0 auto',
            }}
          />
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      {activeModalItem && (
        <div
          onClick={closeModal}
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
              width: 'min(860px, 94vw)',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(8, 8, 8, 0.9)',
              border: '1px solid var(--gold-primary)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
            }}
          >
            <button
              onClick={closeModal}
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

            <div style={{ position: 'relative', width: '100%', maxHeight: '55vh', overflow: 'hidden' }}>
              <img
                src={activeModalItem.mediaUrl}
                alt={activeModalItem.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#05070a' }}
              />
            </div>

            <div style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--crimson-light)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {activeModalItem.category.toUpperCase()}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold-light)' }}>
                  {activeModalItem.meta}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#fff',
                  margin: '0 0 10px 0',
                }}
              >
                {activeModalItem.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                {activeModalItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .creation-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(214, 168, 60, 0.5) !important;
        }
        .creation-card-hover:hover .creation-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
