export interface EditProject {
  id: string;
  title: string;
  category: 'Gaming Edits' | 'Short Videos' | 'Cinematic Edits' | 'Creative Content';
  duration: string;
  fps: string;
  resolution: string;
  software: string[];
  description: string;
  techniques: string[];
  thumbnail: string;
}

export const EDITING_CATEGORIES = [
  'Gaming Edits',
  'Short Videos',
  'Cinematic Edits',
  'Creative Content',
] as const;

export const EDIT_PROJECTS: EditProject[] = [
  {
    id: 'sbb-cinematic-intro',
    title: 'SBB Dragon Genesis - 3D Cinematic Motion Sequence',
    category: 'Cinematic Edits',
    duration: '01:20',
    fps: '60 FPS',
    resolution: '4K Ultra HD',
    software: ['Adobe Premiere Pro', 'After Effects', 'Blender', 'DaVinci Resolve'],
    description:
      'The definitive brand opener featuring fluid 3D particle physics, metallic shader lighting, custom sound design, and impact velocity cuts.',
    techniques: ['Camera Projection', 'Optical Flow', 'Bass Warp Impact', 'Gold Grading'],
    thumbnail: '/ezgif-845a2d8ad4709186-png-split/ezgif-frame-200.png',
  },
  {
    id: 'cyber-sync-montage',
    title: 'Neon Velocity - Rhythmic Beat-Sync Fragshow',
    category: 'Gaming Edits',
    duration: '02:45',
    fps: '120 FPS',
    resolution: '2560x1440',
    software: ['Premiere Pro', 'After Effects', 'Sapphire Plugins'],
    description:
      'Frame-accurate kill sync tied to heavy bass drops, chromatic aberration transitions, speed ramping curves, and glitch HUD overlays.',
    techniques: ['Time Remapping', 'RGB Split FX', 'Screen Shake Impulse', 'Audio Stem Sync'],
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'retention-flow-short',
    title: 'Instant Hook - High Retention Social Vertical',
    category: 'Short Videos',
    duration: '00:45',
    fps: '60 FPS',
    resolution: '1080x1920 (9:16)',
    software: ['CapCut Pro', 'After Effects', 'Audition'],
    description:
      'Fast-paced vertical storytelling designed for maximum watch time, kinetic motion typography, zoom pulses, and seamless loop design.',
    techniques: ['Kinetic Captions', 'Sub-second B-Roll Cuts', 'Sound Punch SFX', 'Seamless Looping'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'sci-fi-title-sequence',
    title: 'Cyberpunk HUD & Hologram Compositing',
    category: 'Creative Content',
    duration: '01:10',
    fps: '60 FPS',
    resolution: '3840x2160',
    software: ['After Effects', 'Cinema 4D', 'DaVinci Resolve'],
    description:
      'Multi-plane holographic user interface overlay composite, volumetric god rays, lens distortion, and analogue CRT phosphor emulation.',
    techniques: ['3D Camera Tracker', 'Glow Diffusion Masking', 'Scanline Shaders', 'Volumetric Glow'],
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
  },
];

export const TIMELINE_TRACKS = [
  { id: 'v2', name: 'V2 - FX / OVERLAYS', color: '#e50914', items: [{ start: 0, width: 35, label: 'Glitch Flare' }, { start: 45, width: 40, label: 'Dragon Particle FX' }] },
  { id: 'v1', name: 'V1 - MAIN VIDEO', color: '#e5a93c', items: [{ start: 0, width: 25, label: 'Intro Shot' }, { start: 27, width: 38, label: 'Emblem Assembly' }, { start: 68, width: 30, label: 'Climax Reveal' }] },
  { id: 'a1', name: 'A1 - SFX / RISERS', color: '#00e5ff', items: [{ start: 5, width: 20, label: 'Whoosh Sub' }, { start: 30, width: 35, label: 'Metallic Clang' }, { start: 70, width: 25, label: 'Dragon Roar Sub' }] },
  { id: 'a2', name: 'A2 - MUSIC STEMS', color: '#a855f7', items: [{ start: 0, width: 100, label: 'AAA Orchestral Trap 140BPM' }] },
];
