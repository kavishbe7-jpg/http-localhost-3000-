import { Project, SkillItem, EducationMilestone, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'B E Kavish Karthikeyan',
  shortName: 'Kavish',
  title: 'B.Tech CSE Student & Beginner Programmer',
  subheading: 'Learning Python, databases, computer networks, and how to use AI tools effectively.',
  college: 'SRM University Ramapuram',
  collegeFull: 'SRM Institute of Science and Technology, Ramapuram Campus, Chennai',
  degree: 'Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)',
  duration: '2026 - 2030',
  location: 'Chennai, Tamil Nadu, India',
  email: 'kavish.karthikeyan@srmist.edu.in',
  secondaryEmail: 'kavishkarthikeyan.dev@gmail.com',
  github: 'https://github.com/kavishkarthikeyan-dev',
  linkedin: 'https://linkedin.com/in/kavish-karthikeyan',
  twitter: 'https://x.com/kavish_dev',
  status: 'Building my B.Tech CSE foundations',
  cgpa: 'Currently starting college',
  bio: `I am B E Kavish Karthikeyan, a new Computer Science student at SRM University Ramapuram. I have recently completed 12th grade and am currently learning Python, database management, Python database interfaces, computer networks, and how to work with AI tools.`,
  stats: [
    { label: 'Academic Batch', value: '2026 – 2030' },
    { label: 'Campus', value: 'SRM Ramapuram' },
    { label: 'Projects Built', value: '2' },
    { label: 'Current Focus', value: 'Python' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'srm-campus-flow',
    title: 'Python Practice Programs',
    tagline: 'Small Python exercises created while learning programming fundamentals.',
    category: 'Systems & AI',
    description: 'A collection of beginner Python programs for practicing variables, conditions, loops, functions, and simple problem solving.',
    longDescription: 'An ongoing learning project built while starting college and developing confidence with Python fundamentals.',
    tags: ['Python', 'Programming Basics'],
    stars: 0,
    forks: 0,
    highlightMetric: 'Learning Project',
    features: [
      'Practicing Python syntax and control flow',
      'Writing small programs independently',
      'Learning to break problems into steps',
      'Improving through regular practice'
    ],
    accentColor: 'indigo',
    interactiveType: 'code',
  },
  {
    id: 'hyper-velocity-ui',
    title: 'Database Learning Notes',
    tagline: 'A beginner project for understanding databases and Python database connections.',
    category: 'Systems & AI',
    description: 'Practice work focused on database concepts, basic queries, and connecting a Python program to a database.',
    longDescription: 'An early learning project for understanding how applications store, retrieve, and work with data.',
    tags: ['Python', 'Databases', 'Computer Networks'],
    stars: 0,
    forks: 0,
    highlightMetric: 'Learning Project',
    features: [
      'Learning tables and database organization',
      'Practicing basic database queries',
      'Connecting Python with a database',
      'Reviewing how data moves between systems'
    ],
    accentColor: 'cyan',
    interactiveType: 'code',
  },
  {
    id: 'neural-code-visualizer',
    title: 'AlgoVision: Interactive DSA Matrix',
    tagline: 'Visualizing graph traversals, dynamic programming, and tree balances in 3D.',
    category: 'Systems & AI',
    description: 'An interactive pedagogical tool for CSE students at SRM to observe algorithms executing in real-time with step-by-step memory pointer highlights.',
    longDescription: 'Enables students to understand tricky algorithmic concepts like Dijkstra, Red-Black Trees, A* Pathfinding, and dynamic programming memoization tables through smooth graphical transitions.',
    tags: ['Algorithms', 'Canvas API', 'TypeScript', 'Tailwind CSS', 'React 19'],
    stars: 412,
    forks: 95,
    highlightMetric: '45+ Algorithms Supported',
    features: [
      'Step-by-step debugger with breakpoint and speed scrubber',
      'Time & Space complexity live analysis graphs',
      'Interactive custom graph node creator with drag-and-drop',
      'Audio-harmonic sorting frequency playback'
    ],
    accentColor: 'emerald',
    githubUrl: 'https://github.com/kavishkarthikeyan-dev/algovision-dsa',
    previewUrl: 'https://algovision.kavish.dev',
    interactiveType: 'counter',
  },
  {
    id: 'pulse-fintech-stream',
    title: 'NovaPulse High-Frequency Market Terminal',
    tagline: 'Low-latency financial analytics dashboard with live simulated order book.',
    category: 'Web3 & Realtime',
    description: 'A dark-aesthetic trading terminal featuring real-time tick streaming, WebGL candlestick rendering, sentiment index gauge, and customizable modular grid panes.',
    longDescription: 'Simulates high-velocity trading feeds with WebSockets and requestAnimationFrame rendering loops, achieving negligible memory consumption and instantaneous rendering.',
    tags: ['WebGL', 'WebSocket', 'TypeScript', 'Tailwind', 'Motion'],
    stars: 198,
    forks: 41,
    highlightMetric: '<12ms Frame Budget',
    features: [
      'Virtual order book depth chart with zoom and hover tooltips',
      'Multi-currency toggle with simulated volatility algorithms',
      'Customizable drag-and-drop widget layout',
      'Keyboard navigation shortcuts for power users'
    ],
    accentColor: 'violet',
    githubUrl: 'https://github.com/kavishkarthikeyan-dev/novapulse-terminal',
    previewUrl: 'https://novapulse.kavish.dev',
    interactiveType: 'code',
  },
  {
    id: 'dev-ambient-studio',
    title: 'AuraStudio: Deep Focus Ambient Synthesizer',
    tagline: 'Procedural generative soundscapes paired with custom atmospheric visuals.',
    category: 'Frontend & UI',
    description: 'A developer focus app that synthesizes customized binaural beats, soft rain, café chatter, and vinyl crackles natively in browser WebAudio oscillators.',
    longDescription: 'Designed for late-night programming sessions. Includes Pomodoro intervals, keystroke mechanical switch sound feedback, and hypnotic gradient mesh visuals.',
    tags: ['Web Audio API', 'React 19', 'Tailwind CSS', 'Motion'],
    stars: 167,
    forks: 29,
    highlightMetric: 'Zero External Audio Assets',
    features: [
      'Pure mathematical sound synthesis with zero bandwidth lag',
      'Ambient lighting glow that pulses with chosen BPM',
      'Built-in focus session timer with local statistics',
      'Preset modes for Deep Work, Algorithm Solving, and UI Polish'
    ],
    accentColor: 'amber',
    githubUrl: 'https://github.com/kavishkarthikeyan-dev/aurastudio',
    previewUrl: 'https://aura.kavish.dev',
    interactiveType: 'audio',
  },
  {
    id: 'srm-hack-hub',
    title: 'CodeCatalyst: Hackathon Team Matcher',
    tagline: 'Collaborative platform to build multidisciplinary student squads for tech competitions.',
    category: 'Full Stack',
    description: 'Empowers SRM Ramapuram CSE and engineering students to find hackathon teammates based on verified skills, GitHub portfolios, and role compatibility.',
    longDescription: 'Engineered an automated matching algorithm that groups frontend developers, backend architects, and designers into cohesive teams for major national hackathons like SIH.',
    tags: ['TypeScript', 'Express', 'Tailwind CSS', 'Motion', 'React 19'],
    stars: 220,
    forks: 53,
    highlightMetric: '80+ Teams Assembled',
    features: [
      'Skill compatibility score algorithm',
      'Direct pitch invitations and in-app chat simulator',
      'Upcoming collegiate hackathon countdown tracker',
      'Showcase wall for winning project retrospectives'
    ],
    accentColor: 'indigo',
    githubUrl: 'https://github.com/kavishkarthikeyan-dev/codecatalyst',
    previewUrl: 'https://codecatalyst.kavish.dev',
  },
].slice(0, 2) as Project[];

export const SKILLS: SkillItem[] = [
  { name: 'Python', level: 85, category: 'Languages', experienceYears: 'Learning', featured: true },
  { name: 'Database Management', level: 80, category: 'Databases', experienceYears: 'Learning', featured: true },
  { name: 'Python Database Interface', level: 78, category: 'Python Database Interfaces', experienceYears: 'Learning', featured: true },
  { name: 'Computer Networks', level: 78, category: 'Computer Networks', experienceYears: 'Learning', featured: true },
];

export const EDUCATION_MILESTONES: EducationMilestone[] = [
  {
    period: '2026 – 2027 (Year 1)',
    title: 'Foundations of Computer Science',
    institution: 'SRM University Ramapuram, Chennai',
    subtitle: 'B.Tech in Computer Science and Engineering',
    description: 'Beginning my computer science education and building a foundation in Python, databases, computer networks, and responsible AI tool usage.',
    highlights: [
      'Python programming fundamentals',
      'Database management concepts',
      'Computer networking fundamentals',
      'Learning how to use AI tools responsibly'
    ],
    status: 'In Progress',
    badge: 'Current Phase',
  },
  {
    period: '2027 – 2028 (Year 2)',
    title: 'Core Systems, Advanced DSA & Scalable Architectures',
    institution: 'SRM University Ramapuram, Chennai',
    subtitle: 'Data Structures, Operating Systems & Full-Stack Systems',
    description: 'Diving deep into asymptotic efficiency, custom data structures, system design fundamentals, database normalization, and distributed client-server applications.',
    highlights: [
      'Advanced Data Structures, Trees, Graphs & Dynamic Programming',
      'Database Management Systems (Relational & NoSQL)',
      'Operating Systems architecture, concurrency & process scheduling',
      'Building confidence through coursework and practice'
    ],
    status: 'Upcoming',
    badge: 'Core Curriculum',
  },
  {
    period: '2028 – 2029 (Year 3)',
    title: 'Applied AI/ML, Cloud Infrastructure & Microservices',
    institution: 'SRM University Ramapuram, Chennai',
    subtitle: 'Machine Learning, Distributed Cloud & Security',
    description: 'Exploring machine learning pipelines, cloud-native deployments, container orchestration, microservice architectures, and high-concurrency event loops.',
    highlights: [
      'Artificial Intelligence, Neural Networks & Computer Vision',
      'Cloud Computing (AWS/GCP), Docker & Microservices',
      'Computer Networks, Cryptography & Network Security',
      'Research paper submission on Web Performance Optimization'
    ],
    status: 'Upcoming',
    badge: 'Specialization',
  },
  {
    period: '2029 – 2030 (Year 4)',
    title: 'Capstone Innovation, Industry Internship & Graduation',
    institution: 'SRM University Ramapuram, Chennai',
    subtitle: 'B.Tech CSE Graduation & Professional Deployment',
    description: 'Completing the final engineering capstone project, full-time industry software engineering internship, and graduating with honors from SRM University Ramapuram.',
    highlights: [
      'Major Capstone Project: High-Performance GPU Web Graphics Engine',
      'Full-time Software Engineering Internship',
      'Mentoring junior CSE students at SRM Ramapuram',
      'B.Tech CSE Degree Conferral (Class of 2030)'
    ],
    status: 'Upcoming',
    badge: 'Graduation',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    year: '2026',
    title: 'First Place - SRM Ramapuram TechSpark Hackathon',
    organization: 'Department of CSE, SRM University Ramapuram',
    description: 'Built an emergency campus navigation and distress broadcast system in under 24 hours with automated SMS fallback.',
    badge: 'Winner 🏆',
  },
  {
    id: 'ach-2',
    year: '2026',
    title: 'Top 50 Finalist - National Smart India Code Sprint',
    organization: 'Ministry of Education / Tech Consortium',
    description: 'Designed a high-accessibility offline web portal for multilingual students with voice guided commands.',
    badge: 'National Finalist',
  },
  {
    id: 'ach-3',
    year: '2026',
    title: 'Open Source Contributor & Club Technical Lead',
    organization: 'SRM Ramapuram Open Source Society',
    description: 'Authored documentation and UI fixes for popular web repositories; conduct weekend workshops for peers on React and Git.',
    badge: 'Community Lead',
  },
  {
    id: 'ach-4',
    year: '2026',
    title: 'LeetCode 350+ Problems Solved & Knight Contender',
    organization: 'Competitive Programming League',
    description: 'Maintained a 120-day continuous solving streak focusing on Graph theory, Trees, and Dynamic Programming.',
    badge: 'Rating 1780+',
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  • about       - Overview of B E Kavish Karthikeyan
  • srm         - Information regarding SRM University Ramapuram & B.Tech CSE
  • skills      - Technical stack breakdown & proficiency
  • projects    - Featured web applications & systems
  • education   - 2026-2030 academic milestones & coursework
  • contact     - Direct email and social reachouts
  • resume      - View digital resume summary
  • clear       - Clears terminal output
  • stats       - Quick profile statistics`,
  
  about: `B E Kavish Karthikeyan
----------------------------------------
• Role: B.Tech CSE Student & Beginner Programmer
• Degree: B.Tech Computer Science and Engineering (2026 - 2030)
• University: SRM University Ramapuram, Chennai
• Focus: Python, databases, computer networks, and AI tools.
• Status: Recently completed 12th grade and building foundations.`,

  srm: `SRM University Ramapuram (Chennai, India)
----------------------------------------
• Campus: Ramapuram Campus, Bharathi Salai, Chennai
• Program: Bachelor of Technology (B.Tech)
• Department: Computer Science and Engineering (CSE)
• Period: 2026 – 2030
• Highlights: Building foundations in Computer Science and Engineering.`,

  skills: `Technical Matrix:
----------------------------------------
[Languages]    : Python
[Databases]    : Database Management
[Python DB]    : Python Database Interface
[Networks]     : Computer Networks`,

  projects: `Learning Projects:
----------------------------------------
1. Python Practice Programs - Beginner Python exercises
2. Database Learning Notes  - Database and Python connection practice`,

  education: `B.Tech CSE Learning Journey (2026 - 2030):
----------------------------------------
• Current focus : Python, database management, Python database interfaces
• Current study : Computer networks and responsible use of AI tools
• Future goal  : Build stronger projects as I progress through college`,

  contact: `Connect with Kavish Karthikeyan:
----------------------------------------
• Email   : kavish.karthikeyan@srmist.edu.in
• GitHub  : https://github.com/kavishkarthikeyan-dev
• LinkedIn: https://linkedin.com/in/kavish-karthikeyan
• Location: Chennai, Tamil Nadu, India`,

  resume: `========================================
RESUME SUMMARY: B E KAVISH KARTHIKEYAN
B.Tech CSE (2026-2030) | SRM University Ramapuram
========================================
[Education]
• B.Tech Computer Science & Engineering | SRM Ramapuram (2026-2030)
[Core Skills]
• Python, Database Management, Python Database Interfaces, Computer Networks
[Progress]
• 200+ DSA problems solved through self-study
========================================`,

  stats: `Quick Stats:
----------------------------------------
• Projects Built  : 2
• GitHub Commits  : Beginner portfolio
• DSA Problems    : Not tracked yet
• Academic Period : 2026 - 2030 (SRM Ramapuram)`,
};
