export interface CreationItem {
  id: string;
  title: string;
  category: 'Gaming' | 'Development' | 'Editing' | 'Technology';
  type: 'image' | 'video' | 'interactive';
  mediaUrl: string;
  previewUrl: string;
  description: string;
  tags: string[];
  meta: string;
}

export const CREATION_CATEGORIES = [
  'All',
  'Gaming',
  'Development',
  'Editing',
  'Technology',
] as const;

export const CREATIONS: CreationItem[] = [
  {
    id: 'creation-dragon-reveal',
    title: 'SBB Golden Dragon Emblem Cinema',
    category: 'Editing',
    type: 'image',
    mediaUrl: '/frames/ezgif-frame-250.webp',
    previewUrl: '/frames/ezgif-frame-250.webp',
    description: 'The definitive SBB brand emblem forged in gold, crimson dragon wings, and cybernetic smoke particles.',
    tags: ['Brand Identity', '3D Motion', 'Cinematic'],
    meta: '4K Ultra HD • Premiere / Blender',
  },
  {
    id: 'creation-apriltag-vision',
    title: 'AprilTag Computer Vision Tracking HUD',
    category: 'Development',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    previewUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    description: 'Live fiducial marker tracking pipeline showing real-time 6-DOF coordinate vector overlays and behavioral metrics.',
    tags: ['Computer Vision', 'OpenCV', 'Python'],
    meta: '30+ FPS Edge Processing',
  },
  {
    id: 'creation-radiant-gameplay',
    title: 'Precision Tactical Apex Clutch',
    category: 'Gaming',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    previewUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    description: 'Tournament-tier clutch sequence showcasing split-second target acquisition, crosshair placement, and movement tech.',
    tags: ['Valorant', 'Competitive', 'High ELO'],
    meta: 'Rank: Immortal / Top 1%',
  },
  {
    id: 'creation-smart-trolley-hardware',
    title: 'IoT Smart Trolley Sensor Matrix',
    category: 'Technology',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    previewUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    description: 'Custom micro-controller board integrating RFID reader coils, load cell amplifiers, and WebSocket transmission modules.',
    tags: ['IoT', 'ESP32', 'Sensors'],
    meta: 'Hardware Architecture',
  },
  {
    id: 'creation-neon-timeline',
    title: 'Cyberpunk Sound & Velocity Montage',
    category: 'Editing',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1200&auto=format&fit=crop',
    previewUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Multi-layer composite video with heavy bass-synchronized camera tremors, RGB chromatic shifts, and 3D kinetic typography.',
    tags: ['Beat Sync', 'Speed Ramp', 'Visual FX'],
    meta: '120 FPS High Refresh Export',
  },
  {
    id: 'creation-bank-engine',
    title: 'Core Banking ACID Transaction Architecture',
    category: 'Development',
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    previewUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    description: 'Enterprise data flow telemetry visualizing concurrent lock-free balance deductions and real-time fraud detection alerts.',
    tags: ['Java', 'Spring Boot', 'ACID SQL'],
    meta: '2,500+ TPS Tested Load',
  },
];
