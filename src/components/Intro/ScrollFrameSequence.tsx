import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const START_FRAME = 11;
export const TOTAL_FRAMES = 240;
const INITIAL_BUFFER_FRAMES = 25;

export const getFramePath = (index: number): string => {
  const padded = String(START_FRAME + index).padStart(3, '0');
  return `/frames/ezgif-frame-${padded}.webp`;
};

interface ScrollFrameSequenceProps {
  onProgress?: (progress: number) => void;
  onLoadedPercentage?: (percentage: number) => void;
  onReady?: () => void;
}

export const ScrollFrameSequence: React.FC<ScrollFrameSequenceProps> = ({
  onProgress,
  onLoadedPercentage,
  onReady,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // References to avoid re-renders during high-frequency scroll scrubbing
  const imagesCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const targetFrameRef = useRef<number>(1);
  const renderedFrameRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isLoadedRef = useRef<boolean>(false);
  const loadedCountRef = useRef<number>(0);

  const [isReadyTriggered, setIsReadyTriggered] = useState(false);

  // High-performance canvas drawing with 'cover' aspect ratio preservation
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Retrieve requested frame from cache or fallback to nearest loaded frame
    let img = imagesCache.current.get(frameIndex);
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame to eliminate black frames during rapid scrubbing
      let bestDist = Infinity;
      let fallbackImg: HTMLImageElement | null = null;
      for (const [idx, cachedImg] of imagesCache.current.entries()) {
        if (cachedImg.complete && cachedImg.naturalWidth > 0) {
          const dist = Math.abs(idx - frameIndex);
          if (dist < bestDist) {
            bestDist = dist;
            fallbackImg = cachedImg;
          }
        }
      }
      img = fallbackImg ?? undefined;
    }

    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderW: number;
    let renderH: number;
    let offsetX = 0;
    let offsetY = 0;

    // Object-fit: cover math
    if (canvasRatio > imgRatio) {
      renderW = canvasWidth;
      renderH = canvasWidth / imgRatio;
      offsetY = (canvasHeight - renderH) / 2;
    } else {
      renderH = canvasHeight;
      renderW = canvasHeight * imgRatio;
      offsetX = (canvasWidth - renderW) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    renderedFrameRef.current = frameIndex;
  }, []);

  // requestAnimationFrame continuous render loop
  const startRenderLoop = useCallback(() => {
    const render = () => {
      if (targetFrameRef.current !== renderedFrameRef.current) {
        drawFrame(targetFrameRef.current);
      }
      rafIdRef.current = requestAnimationFrame(render);
    };
    rafIdRef.current = requestAnimationFrame(render);
  }, [drawFrame]);

  // Resize handler respecting devicePixelRatio & mobile optimization
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth <= 768;
    // Cap DPR for optimal GPU memory and 60fps performance
    const maxDpr = isMobile ? 1.5 : 2.0;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    const newWidth = Math.round(displayWidth * dpr);
    const newHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
      // Force redraw after resize
      drawFrame(targetFrameRef.current);
    }
  }, [drawFrame]);

  // Frame loading pipeline
  useEffect(() => {
    let isCancelled = false;

    const updateProgress = () => {
      const percentage = (loadedCountRef.current / TOTAL_FRAMES) * 100;
      if (onLoadedPercentage) {
        onLoadedPercentage(percentage);
      }

      // If initial buffer frames are loaded, mark ready
      if (loadedCountRef.current >= INITIAL_BUFFER_FRAMES && !isLoadedRef.current) {
        isLoadedRef.current = true;
        setIsReadyTriggered(true);
        if (onReady) onReady();
      }
    };

    const loadSingleImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesCache.current.has(index)) {
          resolve();
          return;
        }

        const img = new Image();
        img.src = getFramePath(index);

        img.onload = () => {
          if (isCancelled) return;
          imagesCache.current.set(index, img);
          loadedCountRef.current += 1;
          updateProgress();

          // If this is the initial frame, draw immediately
          if (index === 1 && renderedFrameRef.current === 0) {
            drawFrame(1);
          }
          resolve();
        };

        img.onerror = () => {
          // Resolve anyway to prevent queue stall
          if (isCancelled) return;
          loadedCountRef.current += 1;
          updateProgress();
          resolve();
        };
      });
    };

    const runPreloadPipeline = async () => {
      // Step 1: Immediately fetch Frame 001
      await loadSingleImage(1);
      drawFrame(1);

      // Step 2: Prioritize initial frames 2 to 25 concurrently
      const initialIndices = Array.from({ length: INITIAL_BUFFER_FRAMES - 1 }, (_, i) => i + 2);
      await Promise.all(initialIndices.map((idx) => loadSingleImage(idx)));

      // Step 3: Progressively fetch remaining frames in balanced batches
      const remainingIndices = Array.from({ length: TOTAL_FRAMES - INITIAL_BUFFER_FRAMES }, (_, i) => i + INITIAL_BUFFER_FRAMES + 1);
      const BATCH_SIZE = 6;

      for (let i = 0; i < remainingIndices.length; i += BATCH_SIZE) {
        if (isCancelled) break;
        const batch = remainingIndices.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((idx) => loadSingleImage(idx)));
      }
    };

    runPreloadPipeline();

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, onLoadedPercentage, onReady]);

  // Setup GSAP ScrollTrigger & render loop
  useEffect(() => {
    resizeCanvas();
    startRenderLoop();

    window.addEventListener('resize', resizeCanvas);

    const container = containerRef.current;
    if (!container) return;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5, // 0.5s smooth inertial scrub
      onUpdate: (self) => {
        const progress = self.progress;
        const frameIndex = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
        );
        targetFrameRef.current = frameIndex;

        if (onProgress) {
          onProgress(progress);
        }
      },
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      scrollTriggerInstance.kill();
    };
  }, [resizeCanvas, startRenderLoop, onProgress]);

  return (
    <div ref={containerRef} className="frame-sequence-section" id="hero-sequence">
      <div className="frame-sequence-sticky">
        <canvas
          ref={canvasRef}
          className="frame-sequence-canvas"
          aria-label="SBB GAMING Cinematic Dragon Reveal Animation"
        />
        <div className="canvas-vignette" />
      </div>
    </div>
  );
};
