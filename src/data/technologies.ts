export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud / Tools';
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon: string;
  description: string;
}

export const TECH_CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Cloud / Tools',
] as const;

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 'Expert', icon: 'Atom', description: 'Component architecture, hooks, concurrent rendering, virtual DOM optimization.' },
  { name: 'TypeScript', category: 'Frontend', level: 'Expert', icon: 'Code', description: 'Strong static typing, generics, strict type safety, modern ECMAScript.' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', icon: 'Palette', description: 'Utility-first styling, design system tokens, responsive responsive layouts.' },
  { name: 'Three.js / WebGL', category: 'Frontend', level: 'Advanced', icon: 'Boxes', description: '3D scene graphs, custom GLSL shaders, camera physics, canvas optimization.' },
  { name: 'GSAP', category: 'Frontend', level: 'Advanced', icon: 'Sparkles', description: 'ScrollTrigger, timeline orchestrations, kinetic SVG and canvas morphing.' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Expert', icon: 'Server', description: 'Non-blocking event loop, microservices, streaming pipelines.' },
  { name: 'Express', category: 'Backend', level: 'Expert', icon: 'Network', description: 'RESTful API architectures, middleware composition, JWT authentication.' },
  { name: 'Java', category: 'Backend', level: 'Advanced', icon: 'Coffee', description: 'Object-oriented patterns, multi-threaded concurrency, JVM performance.' },
  { name: 'Spring Boot', category: 'Backend', level: 'Advanced', icon: 'Layers', description: 'Enterprise REST APIs, Spring Security, dependency injection, JPA.' },
  { name: 'Go (Golang)', category: 'Backend', level: 'Proficient', icon: 'Cpu', description: 'High-throughput goroutines, channels, lightweight microservices.' },
  { name: 'Python', category: 'Backend', level: 'Expert', icon: 'FileCode', description: 'OpenCV computer vision, data analysis, scripting, algorithm design.' },
  { name: 'Flask', category: 'Backend', level: 'Advanced', icon: 'Globe', description: 'Lightweight microservice backends and rapid ML model serving.' },

  // Database
  { name: 'MySQL', category: 'Database', level: 'Advanced', icon: 'Database', description: 'Relational data modeling, ACID transactions, complex indexing.' },
  { name: 'PostgreSQL', category: 'Database', level: 'Advanced', icon: 'HardDrive', description: 'Advanced SQL, JSONB querying, partitioning, connection pooling.' },
  { name: 'MongoDB', category: 'Database', level: 'Advanced', icon: 'FileSpreadsheet', description: 'Document schemas, aggregation pipelines, replica sets.' },

  // Cloud / Tools
  { name: 'AWS', category: 'Cloud / Tools', level: 'Proficient', icon: 'Cloud', description: 'EC2, S3 asset distribution, Lambda serverless, IAM security policies.' },
  { name: 'Docker', category: 'Cloud / Tools', level: 'Advanced', icon: 'Container', description: 'Multi-stage container builds, Docker Compose orchestration, CI/CD.' },
  { name: 'Git', category: 'Cloud / Tools', level: 'Expert', icon: 'GitBranch', description: 'Branch management, interactive rebasing, merge strategies.' },
  { name: 'GitHub', category: 'Cloud / Tools', level: 'Expert', icon: 'Github', description: 'Actions automation, repository governance, collaborative workflows.' },
];
