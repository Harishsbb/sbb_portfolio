import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { GlobalFrameSequence } from './components/Intro/GlobalFrameSequence';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gaming } from './components/Gaming';
import { Development } from './components/Development';
import { Editing } from './components/Editing';
import { Tech } from './components/Tech';
import { Creations } from './components/Creations';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll linked with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh', color: '#fff', position: 'relative' }}>
      {/* 1. 250-FRAME GLOBAL BACKGROUND CANVAS (z-index: 0) */}
      <GlobalFrameSequence />

      {/* 2. DARK CINEMATIC OVERLAY (z-index: 1 - Between canvas and all website content) */}
      <div
        id="cinematic-overlay-layer"
        className="cinematic-dark-overlay"
        aria-hidden="true"
      />

      {/* 3. MAIN CONTENT LAYER (Positioned above the cinematic overlay, z-index: 10) */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* HERO: FIRST PAGE VIEWPORT (Exact Reference Mockup) */}
        <Hero />

        {/* ABOUT: THE WORLD OF SBB */}
        <About />

        {/* GAMING: HIGHLIGHTS & YOUTUBE CONTENT */}
        <Gaming />

        {/* DEVELOPMENT: FULL-STACK, COMPUTER VISION & IOT */}
        <Development />

        {/* EDITING: FUTURISTIC TIMELINE & STUDIO */}
        <Editing />

        {/* TECH: ARSENAL CAPABILITIES */}
        <Tech />

        {/* CREATIONS: MULTI-DISCIPLINARY ARCHIVE */}
        <Creations />

        {/* FINAL CONTACT & SBB DRAGON CLIMAX */}
        <Footer />
      </main>

      {/* 5. FIXED NAVBAR (Top Layer, z-index: 100) */}
      <Navbar visible={true} />
    </div>
  );
};

export default App;

