export interface GameTitle {
  id: string;
  title: string;
  status: 'Currently Playing' | 'Played';
  genre: string;
  platform: string;
  highlight: string;
  coverImage: string;
  tags: string[];
}

export interface GamingHighlight {
  id: string;
  title: string;
  game: string;
  type: 'Highlight' | 'Gameplay' | 'Short' | 'Cinematic Montage' | 'Live Broadcast';
  duration: string;
  views: string;
  date: string;
  badge: string;
  description: string;
  tags: string[];
  thumbnail: string;
  youtubeId?: string;
}

export const GAMING_STATS = [
  { label: 'YouTube Subscribers', value: '1.06K+' },
  { label: 'Videos Uploaded', value: '155+' },
  { label: 'Free Fire UID', value: '591716261' },
  { label: 'Core Arsenal', value: '9 TITLES PLAYED' },
];

export const GAME_TITLES: GameTitle[] = [
  {
    id: 'free-fire',
    title: 'Free Fire / FF MAX',
    status: 'Currently Playing',
    genre: 'Battle Royale / Competitive Mobile',
    platform: 'Mobile / PC Emulation',
    highlight: 'Main YouTube Channel focus. High-ELO ranked push, 1v1 custom room friendly challenges, and fast gloo-wall one-taps.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    tags: ['Main Game', 'Battle Royale', 'One-Tap', 'Rank Push'],
  },
  {
    id: 'pubg',
    title: 'PUBG: BATTLEGROUNDS',
    status: 'Currently Playing',
    genre: 'Tactical Battle Royale',
    platform: 'PC / Mobile',
    highlight: 'Classic squad battle royale, long-range sniper engagements, zone positioning, and high-stakes Chicken Dinners.',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop',
    tags: ['Tactical BR', 'Sniping', 'Squad Rotations', 'Chicken Dinner'],
  },
  {
    id: 'cod',
    title: 'Call of Duty',
    status: 'Currently Playing',
    genre: 'FPS / Warzone / Tactical Shooter',
    platform: 'PC / Mobile',
    highlight: 'High-intensity gunfights, Search & Destroy tactical clutches, custom loadouts, and Warzone battle royale extraction.',
    coverImage: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200&auto=format&fit=crop',
    tags: ['FPS', 'Warzone', 'Gunsmith', 'Multiplayer'],
  },
  {
    id: 'repo',
    title: 'R.E.P.O.',
    status: 'Currently Playing',
    genre: 'Co-op Physics Horror / Extraction',
    platform: 'PC',
    highlight: 'Adrenaline-packed industrial facility salvage missions, physics-based monster evasion, and team extraction survival.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    tags: ['Co-op Horror', 'Physics Salvage', 'Extraction', 'Survival'],
  },
  {
    id: 'phasmophobia',
    title: 'Phasmophobia',
    status: 'Currently Playing',
    genre: 'Psychological Horror Investigation',
    platform: 'PC / VR',
    highlight: 'Ghost identification, EMF & spirit box evidence gathering, sanity management, and surviving ghost hunts on Nightmare.',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    tags: ['Ghost Hunt', 'Investigation', 'Horror', 'Voice Recon'],
  },
  {
    id: 'hogwarts-legacy',
    title: 'Hogwarts Legacy',
    status: 'Played',
    genre: 'Action RPG / Open-World Fantasy',
    platform: 'PC / Console',
    highlight: 'Ancient magic spell combos, broom flight navigation across the highlands, magical beast taming, and Dark Arts mastery.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    tags: ['Action RPG', 'Magic Duels', 'Open World', 'Wizarding World'],
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    status: 'Played',
    genre: 'Sandbox / Survival & Redstone',
    platform: 'PC',
    highlight: 'Hardcore survival worlds, automated redstone machinery, fortress architecture, and Nether/End expedition raids.',
    coverImage: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1200&auto=format&fit=crop',
    tags: ['Sandbox', 'Survival', 'Redstone', 'Architecture'],
  },
  {
    id: 'spiderman',
    title: "Marvel's Spider-Man",
    status: 'Played',
    genre: 'Action-Adventure / Superhero',
    platform: 'PlayStation / PC',
    highlight: 'High-momentum web swinging across Manhattan, acrobatic air combat combos, gadget synthesis, and cinematic boss battles.',
    coverImage: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1200&auto=format&fit=crop',
    tags: ['Superhero', 'Web-Swinging', 'Acrobatic Combat', 'Cinematic'],
  },
  {
    id: 'ben10',
    title: 'Ben 10: Alien Combat Adventure',
    status: 'Played',
    genre: 'Action Adventure / Sci-Fi Brawler',
    platform: 'PC / Console',
    highlight: 'Omnitrix alien shifting, Four Arms brutal melee, Heatblast ranged pyrotechnics, and fast XLR8 velocity puzzles.',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    tags: ['Omnitrix', 'Alien Forms', 'Brawler', 'Sci-Fi Action'],
  },
];

export const GAMING_HIGHLIGHTS: GamingHighlight[] = [
  {
    id: 'ff-friendly-challenge',
    title: 'FREE FIRE Friendly Challenge — SBB GAMING vs Kutty Raister',
    game: 'Free Fire',
    type: 'Gameplay',
    duration: '17:57',
    views: '12.4K',
    date: 'Popular',
    badge: 'CHALLENGE',
    description:
      'High-voltage friendly 1v1 and squad duel featuring fast gloo-wall placements, drag headshots, and clutch decision-making.',
    tags: ['Free Fire', 'Friendly Challenge', 'Custom Room', 'Raister'],
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    youtubeId: 'sbbgamingff2001',
  },
  {
    id: 'cod-tamil-first-play',
    title: 'FAM First Time Play Call of Duty தமிழில் (Tamil)',
    game: 'Call of Duty',
    type: 'Gameplay',
    duration: '16:21',
    views: '8.9K',
    date: 'Recent',
    badge: 'TAMIL GAMING',
    description:
      'Squad exploration in Call of Duty with live Tamil commentary, tactical weapon recoil control, and final victory extraction.',
    tags: ['Call of Duty', 'Tamil Gaming', 'Battle Royale', 'Multiplayer'],
    thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200&auto=format&fit=crop',
    youtubeId: 'sbbgamingff2001',
  },
  {
    id: 'pubg-chicken-dinner',
    title: 'PUBG Long-Range Sniping & Squad Chicken Dinner',
    game: 'PUBG',
    type: 'Highlight',
    duration: '14:35',
    views: '11.8K',
    date: 'Top Play',
    badge: 'CHICKEN DINNER',
    description:
      'Pinpoint Kar98k sniper headshots across military base ridges, smoke grenade cover pushes, and squad wipe to claim dinner.',
    tags: ['PUBG', 'Sniping', 'Tactical BR', 'Winner Winner'],
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop',
    youtubeId: 'sbbgamingff2001',
  },
  {
    id: 'ff-drag-headshots-montage',
    title: 'SBB GAMING FF — One Tap & Drag Headshots Montage',
    game: 'Free Fire',
    type: 'Cinematic Montage',
    duration: '03:45',
    views: '24.7K',
    date: 'Highlight',
    badge: 'HEADSHOTS',
    description:
      'Clean M1887 and Desert Eagle one-tap montage synced to heavy bass beats with smooth cinematic pan transitions.',
    tags: ['One Tap', 'M1887', 'Montage', 'Drag Headshots'],
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    youtubeId: 'sbbgamingff2001',
  },
  {
    id: 'phasmophobia-nightmare',
    title: 'Phasmophobia Nightmare Hunt — Surviving Demon in Asylum',
    game: 'Phasmophobia',
    type: 'Gameplay',
    duration: '21:10',
    views: '9.2K',
    date: 'Horror Night',
    badge: 'HORROR INVESTIGATION',
    description:
      'Zero-sanity ghost hunt evasion, parabolic mic audio tracking, and identifying a dangerous Demon right before smudge stick runs out.',
    tags: ['Phasmophobia', 'Horror', 'Ghost Hunting', 'Survive'],
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    youtubeId: 'sbbgamingff2001',
  },
  {
    id: 'spiderman-web-swing-flow',
    title: "Marvel's Spider-Man — High Velocity Web-Swing & Aerial Combat",
    game: 'Spider-Man',
    type: 'Short',
    duration: '00:58',
    views: '19.4K',
    date: 'Acrobatic',
    badge: 'CINEMATIC FLOW',
    description:
      'Seamless momentum conservation swinging through Manhattan avenues with ground-to-air juggle combinations against heavy brutes.',
    tags: ['Spider-Man', 'Web Swing', 'Marvel', 'Combat Flow'],
    thumbnail: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1200&auto=format&fit=crop',
    youtubeId: 'sbbgamingff2001',
  },
];
