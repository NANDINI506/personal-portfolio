export const profile = {
  name: "Nandini",
  role: "Software Engineer",
  tagline: "Full-stack developer crafting clean interfaces, solid APIs, and smart AI features.",
  bio: "MCA student and full-stack developer focused on clean UI, reliable backends, and practical AI features. I enjoy turning ideas into polished products — from responsive frontends to secure APIs.",
  email: "nandinianil1352@gmail.com",
  github: "https://github.com/NANDINI506",
  linkedin: "https://linkedin.com/in/nandini-9366592a9",
  resumeUrl: "/NANDINI.pdf",
  resumeFileName: "NANDINI.pdf",
};

export const highlights = [
  { label: "Experience", value: "1+ Yrs" },
  { label: "Projects", value: "15+" },
  { label: "Technologies", value: "25+" },
];

export const accentThemes = [
  { id: "rose", label: "Rose", primary: "#fb7185", secondary: "#a78bfa" },
  { id: "violet", label: "Violet", primary: "#a78bfa", secondary: "#38bdf8" },
  { id: "sky", label: "Sky", primary: "#38bdf8", secondary: "#34d399" },
  { id: "mint", label: "Mint", primary: "#34d399", secondary: "#fbbf24" },
  { id: "amber", label: "Amber", primary: "#fbbf24", secondary: "#fb7185" },
];

export const heroRotatingLines = [
  "I design interfaces & build products end-to-end.",
  "I turn Figma moods into React components.",
  "I love clean CSS, sharp APIs & good UX.",
  "I ship fast — but never sloppy.",
];

export const terminalScript = [
  { type: "cmd", text: "npm create vite@latest portfolio" },
  { type: "out", text: "✓ Scaffolding project..." },
  { type: "cmd", text: "npm run dev" },
  { type: "out", text: "✓ Local: http://localhost:5173" },
  { type: "cmd", text: 'git commit -m "feat: ship portfolio 🚀"' },
  { type: "out", text: "✓ 1 file changed, vibes improved" },
];

export const floatingStickers = [
  { label: "✦ pixel perfect", style: { top: "12%", left: "4%" }, delay: "0s" },
  { label: "⚡ fast loads", style: { top: "28%", right: "6%" }, delay: "-3s" },
  { label: "🎨 UI craft", style: { bottom: "32%", left: "7%" }, delay: "-6s" },
  { label: "☕ code + chai", style: { bottom: "18%", right: "5%" }, delay: "-9s" },
];

export const funQuotes = [
  "Good design is obvious. Great design is transparent.",
  "First solve the problem. Then write the code.",
  "Details aren't details — they make the design.",
  "Built with curiosity, caffeine & commit messages.",
];

export const tickerTech = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "MongoDB",
  "Docker",
  "AI/ML",
  "REST APIs",
  "Git",
  "Express.js",
  "MySQL",
];

export const skillCategories = [
  {
    title: "Frontend",
    accent: "#fb7185",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Redux", "JSON"],
    span: "lg:col-span-6",
  },
  {
    title: "Backend",
    accent: "#a78bfa",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "PHP",
      "Java",
      "C/C++",
      ".NET",
      "REST APIs",
      "Auth",
    ],
    span: "lg:col-span-6",
  },
  {
    title: "Database",
    accent: "#38bdf8",
    skills: ["MongoDB", "MySQL", "SQLite"],
    span: "lg:col-span-4",
  },
  {
    title: "AI & Integrations",
    accent: "#fbbf24",
    skills: ["AI Integrations", "Resume Analysis", "Intelligent Matching"],
    span: "lg:col-span-4",
  },
  {
    title: "Tools & DevOps",
    accent: "#34d399",
    skills: ["Git", "GitHub", "Docker", "Postman", "Netlify"],
    span: "lg:col-span-4",
  },
  {
    title: "Currently Exploring",
    accent: "#f472b6",
    skills: ["AI Agents", "RAG Systems", "Agentic Workflows", "System Design"],
    span: "lg:col-span-12",
  },
];

export const projectAccents = {
  "AI-Powered Job Portal": "#a78bfa",
  "Tourism Website": "#38bdf8",
  "Online Food Delivery": "#fb7185",
  "Event Planning Platform": "#fbbf24",
};

export const experiences = [
  {
    role: "Software Engineer",
    company: "MULTIOPS IT Solutions",
    date: "Oct 2025 — Present",
    summary:
      "Full-stack development on production web applications with a focus on performance, usability, and maintainable code.",
    points: [
      "Develop and maintain full-stack features across active client and company web projects.",
      "Improve page performance, responsiveness, and UI polish for live production sites.",
      "Build CMS-related features and content workflows for marketing and product pages.",
      "Work in Agile sprints with code reviews, Git workflows, and team collaboration.",
    ],
  },
  {
    role: "Full Stack Developer Trainee",
    company: "MULTIOPS IT Solutions",
    date: "Apr 2025 — Sep 2025",
    summary:
      "Hands-on training in MERN stack development, secure authentication, and AI-assisted application features.",
    points: [
      "Built full-stack web applications using React, Node.js, Express, and MongoDB.",
      "Implemented JWT-based authentication, REST APIs, and structured backend logic.",
      "Created an AI-powered job portal as a learning project with resume parsing and job matching.",
      "Practiced Agile delivery, version control, HTTP fundamentals, and API testing.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered Job Portal",
    summary:
      "End-to-end hiring platform with smart resume analysis and role matching for candidates and recruiters.",
    description:
      "A full-stack job portal combining a React frontend, Node/FastAPI services, and ML-assisted resume parsing. Users can upload profiles, discover relevant openings, and get intelligent match suggestions.",
    tech: ["FastAPI", "MERN Stack", "Python", "AI/ML"],
    liveUrl: null,
    githubUrl: "https://github.com/NANDINI506",
    featured: true,
  },
  {
    title: "Tourism Website",
    summary:
      "Interactive travel site helping users explore destinations with a clean, responsive layout.",
    description:
      "A frontend-focused tourism website with dynamic sections, destination highlights, and smooth navigation. Built to showcase structured content and engaging visual hierarchy without heavy frameworks.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://funvisit.netlify.app",
    githubUrl: "https://github.com/NANDINI506",
    featured: true,
  },
  {
    title: "Online Food Delivery",
    summary:
      "Responsive food ordering flow with menu browsing, cart management, and checkout.",
    description:
      "A client-side food delivery experience with real-time cart updates, category filters, and a streamlined checkout path designed for mobile-first usability.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://foodycart.netlify.app",
    githubUrl: "https://github.com/NANDINI506",
    featured: false,
  },
  {
    title: "Event Planning Platform",
    summary:
      "Event listing and booking site with a PHP + SQL backend for reliable data handling.",
    description:
      "A full-stack event management platform where users browse upcoming events and submit bookings. PHP handles server logic while SQL stores event and reservation data securely.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    liveUrl: "https://omegaparty.netlify.app",
    githubUrl: "https://github.com/NANDINI506",
    featured: false,
  },
];

export const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];
