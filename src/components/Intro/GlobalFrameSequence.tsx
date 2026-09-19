import React, { useEffect, useRef } from 'react';

export const START_FRAME = 11;
export const FRAME_COUNT = 240; // Frames 011 to 250 (240 total frames, skipping first 10 black frames)

export const getFramePath = (index: number): string => {
  const frame = String(START_FRAME + index).padStart(3, '0');
  return `/ezgif-845a2d8ad4709186-png-split/ezgif-frame-${frame}.png`;
};

interface GlobalFrameSequenceProps {
  onLoadedPercentage?: (pct: number) => void;
  onReady?: () => void;
}

export const GlobalFrameSequence: React.FC<GlobalFrameSequenceProps> = ({
  onLoadedPercentage,
  onReady,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const debugElemRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const loadedSetRef = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef<number>(0);
  const isReadyRef = useRef<boolean>(false);

  // Reliable Canvas Drawing with Cover Scaling and Centering
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let image = imagesRef.current[index];
    if (!image || !image.complete || image.naturalWidth === 0) {
      // Find closest loaded image as fallback
      let closestDist = Infinity;
      let closestIdx = -1;
      for (const loadedIdx of loadedSetRef.current) {
        const dist = Math.abs(loadedIdx - index);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = loadedIdx;
        }
      }
      if (closestIdx !== -1) {
        image = imagesRef.current[closestIdx];
      }
    }

    if (!image || !image.complete || image.naturalWidth === 0) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(
      canvas.width / image.naturalWidth,
      canvas.height / image.naturalHeight
    );

    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;

    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;

    ctx.drawImage(image, x, y, width, height);
  };

  // Resize canvas to match viewport and high-DPI scaling
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayW = window.innerWidth;
    const displayH = window.innerHeight;

    const newW = Math.round(displayW * dpr);
    const newH = Math.round(displayH * dpr);

    if (canvas.width !== newW || canvas.height !== newH) {
      canvas.width = newW;
      canvas.height = newH;
      canvas.style.width = `${displayW}px`;
      canvas.style.height = `${displayH}px`;
      drawFrame(currentFrameRef.current);
    }
  };

  // Preloading Pipeline
  useEffect(() => {
    let isCancelled = false;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const loadSingleImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index] && imagesRef.current[index]?.complete) {
          resolve();
          return;
        }

        const img = new Image();
        img.src = getFramePath(index);

        img.onload = () => {
          if (isCancelled) return;
          imagesRef.current[index] = img;
          loadedSetRef.current.add(index);

          // Verification for initial Frame (Frame 011)
          if (index === 0) {
            console.log('FRAME 011 LOADED (Initial Start Frame)');
            const canvas = canvasRef.current;
            if (canvas) {
              console.log('CANVAS SIZE:', canvas.width, canvas.height);
            }
            console.log('IMAGE SIZE:', img.naturalWidth, img.naturalHeight);
            drawFrame(0);
          }

          if (index === currentFrameRef.current) {
            drawFrame(index);
          }

          if (onLoadedPercentage) {
            onLoadedPercentage((loadedSetRef.current.size / FRAME_COUNT) * 100);
          }

          if (loadedSetRef.current.size >= 15 && !isReadyRef.current) {
            isReadyRef.current = true;
            if (onReady) onReady();
          }

          resolve();
        };

        img.onerror = () => {
          if (isCancelled) return;
          resolve();
        };
      });
    };

    const runPreload = async () => {
      // 1. Load Frame 001 (index 0) immediately
      await loadSingleImage(0);

      // 2. Load initial buffer index 1 to 20
      const initialBatch = Array.from({ length: 20 }, (_, i) => i + 1);
      await Promise.all(initialBatch.map((idx) => loadSingleImage(idx)));

      // 3. Progressive preloading of remaining frames (21 to 249)
      const remaining = Array.from({ length: FRAME_COUNT - 21 }, (_, i) => i + 21);
      const BATCH_SIZE = 8;
      for (let i = 0; i < remaining.length; i += BATCH_SIZE) {
        if (isCancelled) break;
        const batch = remaining.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((idx) => loadSingleImage(idx)));
      }
    };

    runPreload();

    return () => {
      isCancelled = true;
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Global Scroll Synchronization using requestAnimationFrame
  useEffect(() => {
    let targetFrame = 0;
    let currentFrame = 0;
    let ticking = false;

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
      const frameIndex = Math.round(progress * (FRAME_COUNT - 1));
      const index = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));

      targetFrame = index;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (targetFrame !== currentFrame) {
            currentFrame = targetFrame;
            currentFrameRef.current = currentFrame;
            drawFrame(currentFrame);

            // Update debug counter
            if (debugElemRef.current) {
              const padded = String(START_FRAME + currentFrame).padStart(3, '0');
              debugElemRef.current.innerText = `FRAME: ${padded} / 250`;
            }
          }
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Also trigger on wheel/touch for ultra-responsive update
    window.addEventListener('wheel', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onScroll);
      window.removeEventListener('touchmove', onScroll);
    };
  }, []);

  return (
    <>
      {/* 1. FIXED FULL-SCREEN 250-FRAME CANVAS */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block',
          filter: 'brightness(1.28) contrast(1.10) saturate(1.18)',
        }}
        aria-label="SBB GAMING Cinematic Dragon Animation"
      />

      {/* 2. CINEMATIC HUD FRAME COUNTER (Matches Screenshot Reference) */}
      <div
        ref={debugElemRef}
        style={{
          position: 'fixed',
          top: '64px',
          left: 'clamp(16px, 3.5vw, 36px)',
          zIndex: 99,
          background: 'rgba(5, 5, 5, 0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: '#F4C65A',
          border: '1px solid rgba(214, 168, 60, 0.35)',
          padding: '5px 12px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.70rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          borderRadius: '6px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
          pointerEvents: 'none',
        }}
      >
        FRAME: 011 / 250
      </div>
    </>
  );
};

