export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: 'Computer Vision / IoT' | 'Embedded Systems' | 'Enterprise / Full-Stack' | 'Web Systems';
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  status: 'Deployed' | 'Completed' | 'Research Prototype';
  stats: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'apriltag-goat-monitoring',
    title: 'AprilTag-Based Goat Monitoring System',
    subtitle: 'Real-Time Precision Livestock Computer Vision & Identification',
    description:
      'Autonomous computer vision system utilizing high-contrast AprilTag fiducial markers for real-time tracking, pose estimation, and behavioral monitoring of livestock. Features automated health anomaly detection and edge-computed tracking metrics.',
    highlights: [
      'Sub-millimeter tag detection and 6-DOF pose estimation using OpenCV & AprilTag algorithms',
      'Multi-camera tracking pipeline with automated occlusion recovery and trajectory logging',
      'Real-time behavioral classification (feeding, resting, mobility index) with alerts',
      'Optimized edge deployment on Linux/NVIDIA Jetson running at 30+ FPS',
    ],
    techStack: ['Python', 'OpenCV', 'AprilTags', 'NumPy', 'FastAPI', 'SQLite', 'Docker'],
    category: 'Computer Vision / IoT',
    githubUrl: 'https://github.com/SBB-Gaming/apriltag-goat-monitoring',
    demoUrl: '#',
    featured: true,
    status: 'Completed',
    stats: [
      { label: 'Tracking Accuracy', value: '99.4%' },
      { label: 'Inference Latency', value: '< 28ms' },
      { label: 'Camera Feeds', value: '4 Stream Synced' },
    ],
  },
  {
    id: 'smart-trolley-system',
    title: 'Self-Shopping Smart Trolley',
    subtitle: 'Autonomous IoT Retail Cart with Automated Billing & Anti-Theft',
    description:
      'Next-generation smart retail cart integrated with RFID and Barcode scanners, weight sensor cross-validation, and instant digital cart synchronization. Eliminates physical checkout queues with real-time bill calculation and wireless payment gateway.',
    highlights: [
      'Dual-factor item verification using RFID/barcode scan coupled with load-cell weight sensors',
      'Instant billing computation displayed on integrated OLED/LCD customer dashboard',
      'Wireless MQTT and WebSocket sync with centralized store management server',
      'Automated anti-theft alert triggers for unverified basket alterations',
    ],
    techStack: ['Embedded C/C++', 'ESP32 / Arduino', 'RFID / Barcode', 'Python', 'WebSockets', 'Node.js', 'PostgreSQL'],
    category: 'Embedded Systems',
    githubUrl: 'https://github.com/SBB-Gaming/self-shopping-smart-trolley',
    demoUrl: '#',
    featured: true,
    status: 'Completed',
    stats: [
      { label: 'Checkout Time', value: 'Instant (0s Queue)' },
      { label: 'Sensor Precision', value: '± 2g Weight Validation' },
      { label: 'Battery Life', value: '14+ Hours Active' },
    ],
  },
  {
    id: 'bank-management-system',
    title: 'Bank Management System',
    subtitle: 'High-Concurrency Core Banking Engine & Security Architecture',
    description:
      'Robust enterprise banking solution featuring ACID-compliant ledger transactions, role-based access control (RBAC), automated interest accrual calculators, and an immutable cryptographic audit trail for fraud mitigation.',
    highlights: [
      'Multi-tier architecture with multi-threaded transactional integrity and lock-free balance updates',
      'Cryptographic ledger auditing ensuring non-repudiation of financial operations',
      'Comprehensive customer portal for transfers, loan underwriting, and statement exports',
      'Automated batch settlement jobs and end-of-day reconciliation algorithms',
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'RESTful API', 'JWT Security', 'Docker'],
    category: 'Enterprise / Full-Stack',
    githubUrl: 'https://github.com/SBB-Gaming/bank-management-system',
    demoUrl: '#',
    featured: true,
    status: 'Completed',
    stats: [
      { label: 'Transaction Throughput', value: '2,500+ TPS' },
      { label: 'Audit Integrity', value: '100% ACID' },
      { label: 'Response Latency', value: '< 15ms' },
    ],
  },
  {
    id: 'student-course-management',
    title: 'Student Course Management System',
    subtitle: 'Full-Stack Academic ERP & Intelligent Scheduling Platform',
    description:
      'End-to-end academic management suite serving students, professors, and administrators. Includes automated timetable conflict resolution, prerequisite validation engines, interactive gradebooks, and performance analytics.',
    highlights: [
      'Algorithmic course conflict detector preventing room and schedule overlaps',
      'Interactive grade distribution analytics and GPA trend visualization',
      'Role-based permissions with fine-grained document submission and grading workflows',
      'Responsive modern UI with instant search, filtering, and PDF transcripts generation',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS', 'Prisma'],
    category: 'Web Systems',
    githubUrl: 'https://github.com/SBB-Gaming/student-course-management',
    demoUrl: '#',
    featured: true,
    status: 'Deployed',
    stats: [
      { label: 'Active Users', value: '1,200+ Students' },
      { label: 'Course Catalog', value: '150+ Offerings' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'sbb-stream-engine',
    title: 'SBB Stream Engine HUD',
    subtitle: 'Ultra-Low Latency Interactive Gaming Overlay & Telemetry',
    description:
      'Real-time streaming toolkit displaying in-game telemetry, interactive chat widgets, and hardware performance metrics for AAA live broadcasts with hardware acceleration.',
    highlights: [
      'Hardware GPU telemetry integration with sub-1ms render overhead',
      'Dynamic OBS browser source sync with customizable cyber HUD animations',
      'Twitch & YouTube unified chat aggregator with custom sound bite triggers',
    ],
    techStack: ['TypeScript', 'Electron', 'WebSockets', 'TailwindCSS', 'OBS Studio SDK'],
    category: 'Enterprise / Full-Stack',
    githubUrl: 'https://github.com/SBB-Gaming/stream-engine-hud',
    demoUrl: '#',
    featured: false,
    status: 'Research Prototype',
    stats: [
      { label: 'Frame Overhead', value: '< 0.5 FPS' },
      { label: 'Sync Latency', value: '12ms' },
    ],
  },
];
