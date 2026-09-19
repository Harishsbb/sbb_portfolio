import React from 'react';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { sound } from '../utils/audio';
import { SOCIAL_LINKS } from '../data/socials';

export const Hero: React.FC = () => {
  const youtubeLink = SOCIAL_LINKS.find((s) => s.id === 'youtube')?.url || 'https://www.youtube.com/@sbbgamingff2001';

  const scrollToSection = (id: string) => {
    sound.playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-sequence"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '100px clamp(16px, 4vw, 40px) 24px',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* =========================================================================
          FLANKING HUD ROLES (Matching Screenshot)
          ========================================================================= */}
      <div className="hero-flank-container">
        {/* Left Column */}
        <div className="hero-flank-column">
          {/* 01 GAMER */}
          <div
            className="hero-role-item left"
            onClick={() => scrollToSection('gaming')}
            onMouseEnter={() => sound.playHover()}
          >
            <div className="hero-role-header">
              <span className="hero-role-num">01</span>
              <span className="hero-role-name">GAMER</span>
            </div>
            <div className="hero-role-line" />
            <div className="hero-role-subtext">
              <span>PLAY</span>
              <span>COMPETE</span>
              <span>CONQUER</span>
            </div>
          </div>
        </div>

        {/* Right Column: 03 EDITOR, 02 DEVELOPER, 04 TECH */}
        <div className="hero-flank-column" style={{ alignItems: 'flex-end', gap: '22px' }}>
          {/* 03 EDITOR */}
          <div
            className="hero-role-item right"
            onClick={() => scrollToSection('editing')}
            onMouseEnter={() => sound.playHover()}
          >
            <div className="hero-role-header">
              <span className="hero-role-num">03</span>
              <span className="hero-role-name">EDITOR</span>
            </div>
            <div className="hero-role-line" />
            <div className="hero-role-subtext">
              <span>CODE</span>
              <span>ARCHITECT</span>
              <span>CREATE</span>
            </div>
          </div>

          {/* 02 DEVELOPER */}
          <div
            className="hero-role-item right"
            onClick={() => scrollToSection('development')}
            onMouseEnter={() => sound.playHover()}
          >
            <div className="hero-role-header">
              <span className="hero-role-num">02</span>
              <span className="hero-role-name">DEVELOPER</span>
            </div>
            <div className="hero-role-line" />
            <div className="hero-role-subtext">
              <span>EDIT</span>
              <span>STORYTELL</span>
              <span>INSPIRE</span>
            </div>
          </div>

          {/* 04 TECH */}
          <div
            className="hero-role-item right"
            onClick={() => scrollToSection('tech')}
            onMouseEnter={() => sound.playHover()}
          >
            <div className="hero-role-header">
              <span className="hero-role-num">04</span>
              <span className="hero-role-name">TECH</span>
            </div>
            <div className="hero-role-line" />
            <div className="hero-role-subtext">
              <span>INNOVATE</span>
              <span>OPTIMIZE</span>
              <span>EVOLVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CENTER HERO FOCUS ZONE: 3D EMBOSSED SBB + GAMING
          ========================================================================= */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pointerEvents: 'none',
          marginTop: '2vh',
          zIndex: 10,
        }}
      >
        {/* SBB GAMING: Pure High-Tier Native Gaming Typography (No image artifacts) */}
        <div className="hero-brand-block">
          <h1 className="hero-brand-sbb">
            SBB
          </h1>
          <div className="hero-brand-gaming">
            GAMING
          </div>
          <div className="hero-brand-divider">
            <span className="hero-brand-divider-line" />
            <span className="hero-brand-divider-core" />
            <span className="hero-brand-divider-line" />
          </div>
        </div>

        {/* GAMER • DEVELOPER • EDITOR • TECH: Curved Dark Glass Ribbon */}
        <div className="hero-subtitle-pillars">
          GAMER &nbsp;•&nbsp; DEVELOPER &nbsp;•&nbsp; EDITOR &nbsp;•&nbsp; TECH
        </div>

        {/* BUILD • CREATE • PLAY */}
        <div className="hero-tagline-wrap">
          <span className="hero-tagline-text">BUILD &nbsp;•&nbsp; CREATE &nbsp;•&nbsp; PLAY</span>
        </div>

        {/* Action Buttons: [ EXPLORE → ] & [ ▶ WATCH GAMING ] */}
        <div className="hero-buttons-wrap" style={{ pointerEvents: 'auto' }}>
          <button
            onClick={() => scrollToSection('about')}
            onMouseEnter={() => sound.playHover()}
            className="btn-hero-explore"
          >
            <span>EXPLORE</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>

          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="btn-hero-watch"
          >
            <Play size={14} className="btn-play-icon" fill="currentColor" />
            <span>WATCH GAMING</span>
          </a>
        </div>

        {/* SCROLL TO ENTER with Vertical Mouse Indicator & Down Chevron */}
        <div
          className="hero-scroll-cue"
          onClick={() => scrollToSection('about')}
          style={{ pointerEvents: 'auto' }}
        >
          <span className="hero-scroll-cue-text">SCROLL TO ENTER</span>
          <div className="hero-mouse-icon">
            <div className="hero-mouse-wheel" />
          </div>
          <ChevronDown size={14} color="#D6A83C" style={{ marginTop: '-2px', animation: 'bounceChevron 2s infinite' }} />
        </div>
      </div>

      {/* =========================================================================
          BOTTOM CORNER HUD BRACKETS (Matches Screenshot Reference)
          ========================================================================= */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        {/* Bottom Left Bracket */}
        <div className="hero-corner-pill left">
          <span className="bracket-dash" />
          <span className="bracket-text">TURNING IDEAS<br />INTO REAL THINGS.</span>
        </div>

        {/* Bottom Right Bracket */}
        <div className="hero-corner-pill right">
          <span className="bracket-text">LET'S<br />KEEP CREATING.</span>
          <span className="bracket-dash" />
        </div>
      </div>
    </section>
  );
};
