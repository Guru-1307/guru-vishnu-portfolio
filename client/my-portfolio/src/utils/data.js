export const profile = {
  name: "Guruvishnu Arunagiri",
  initials: "GA",
  title: "Front-End Developer",
  tagline: "Frontend Engineer · Micro-Frontends · Performance at Scale",
  email: "guruvisnu92@gmail.com",
  phone: "+91 7092148153",
  location: "Bangalore, India",
  linkedin: "https://www.linkedin.com/in/guruvishnu-arunagiri-62a21b160",
  github: "https://github.com/Guru-1307",
  summary:
    "Passionate Frontend Developer with 4.5 + years of experience specialising in building performant, scalable, and " +
    "intuitive web applications using React.js, TypeScript, and modern UI libraries. Skilled in micro-frontend architecture, " +
    "web performance optimisation, and AI-assisted development workflows. Adept at solving complex UI challenges and " +
    "collaborating across teams to deliver clean, maintainable code.",
};

export const stats = [
  { value: "4+", label: "Years Exp.", color: "#E85D04" },
  { value: "2", label: "Companies", color: "#264653" },
  { value: "85%+", label: "Test Coverage", color: "#2A9D8F" },
  { value: "35%", label: "Error Reduction", color: "#D4A017" },
  { value: "60%", label: "Manual Effort Cut", color: "#E76F51" },
];

export const skillCategories = [
  {
    id: "lang",
    label: "Languages & Frameworks",
    color: "#E85D04",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Node.js",
      "Next.js",
      "HTML/CSS",
      "SCSS",
      "TailwindCSS",
      "Bootstrap",
    ],
  },
  {
    id: "state",
    label: "State Management",
    color: "#264653",
    skills: ["Redux", "Redux Toolkit", "Context API", "React Query"],
  },
  {
    id: "test",
    label: "Testing",
    color: "#2A9D8F",
    skills: ["Jest", "React Testing Library"],
  },
  {
    id: "ui",
    label: "UI Libraries",
    color: "#E76F51",
    skills: [
      "Material UI",
      "Ant Design",
      "AntD Charts",
      "Chart.js",
      "Tailwind UI",
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    color: "#457B9D",
    skills: [
      "Git",
      "Postman",
      "Bitbucket",
      "GitLab",
      "VS Code",
      "JIRA",
      "Figma",
    ],
  },
  {
    id: "opt",
    label: "Optimization",
    color: "#2A9D8F",
    skills: [
      "Lazy Loading",
      "Virtualization",
      "Memoization",
      "Debouncing",
      "Code Splitting",
      "React Hook Form",
    ],
  },
  {
    id: "ai",
    label: "AI Tools",
    color: "#E76F51",
    skills: ["Claude Sonnet 4.6", "GPT-4o", "Gemini 2.0 Pro", "Cursor AI"],
  },
];
export const experience = [
  {
    id: 1,
    role: "Senior Associate Consultant",
    company: "Infosys",
    client: "Bank of America",
    period: "Feb 2025 – Present",
    location: "Bangalore, India",
    type: "current",
    project: "CMT Party Application",
    projectDesc:
      "Enterprise micro-frontend platform — migrated KYC and Escalation applications from .NET to React.js as independently deployable micro-frontends.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Thunk",
      "React Hook Form",
      "Axios",
      "Jest",
      "React Testing Library",
    ],
    highlights: [
      "Migrated KYC and Escalation apps from .NET to React.js as independently deployable micro-frontends from scratch — achieving ~50% improvement in overall application performance.",
      "Designed inter-app data flow architecture for KYC and Escalation — defining shared routing context, events, and API contracts across micro-frontend boundaries, reducing cross-app integration overhead by 35%.",
      "Engineered web performance strategy for KYC using Next.js — planning FCP/LCP targets, balancing SSG and CSR rendering, and architecting the hydration lifecycle, achieving 40% improvement in initial page load speed.",
      "Optimized Escalation's 60+ field form using React Hook Form with uncontrolled components — eliminating unnecessary re-renders and reducing form rendering overhead by 45% under complex conditional field logic.",
      "Implemented lazy loading in the Escalation application — deferring non-critical UI to reduce initial bundle size, improving perceived load performance by 30%.",
      "Utilized AI coding assistants and LLMs (Claude Sonnet 4.6, GPT-4o, Gemini 2.0 Pro, Cursor AI) — designing precise prompts and applying guardrailing techniques, accelerating feature delivery by 40%.",
      "Achieved industry-standard code coverage using Jest and React Testing Library — reducing production bugs by 30% and ensuring release stability across both applications.",
      "Built custom hooks for reusable API logic using Axios and Fetch — improving response reliability by 40% and eliminating redundant code across components.",
      "Implemented Redux Thunk for centralized async API management — reducing state management complexity by 25%.",
      "Collaborated with QA, backend, and product teams to align on validation flows, field mapping, and business logic throughout the migration.",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Torry Harris Integration Solutions",
    client: null,
    period: "Sep 2021 – Feb 2025",
    location: "Bangalore, India",
    type: "past",
    project: "Lakshya",
    projectDesc: "Employee Performance Management System.",
    techStack: [
      "React.js",
      "Redux",
      "Chart.js",
      "React Query",
      "styled-components",
      "JWT",
    ],
    highlights: [
      "Created interactive dashboards using Chart.js with custom tooltips, filters, and dynamic updates — improving data visibility and speeding up business decision-making by 35%.",
      "Implemented a responsive and accessible UI using styled-components and media queries — ensuring seamless experience across all devices, improving mobile usability scores by 30%.",
      "Streamlined data fetching and API state management using React Query — enabling caching, background synchronization, and automatic retries, reducing redundant network calls by 20%.",
      "Optimized event-driven interactions with debouncing and throttling — cutting unnecessary API calls by 30% and delivering a smoother user experience during rapid input.",
      "Implemented authentication and authorization using JWT tokens and HTTP cookies — securing login flows and protected routes, reducing security vulnerabilities by 40%.",
      "Handled large list rendering using virtualization — rendering only visible DOM elements, reducing rendering workload by 60% across data-heavy views.",
    ],
  },
];
export const achievements = [
  {
    id: 1,
    title: "Team Excellence Award",
    org: "Infosys",
    year: "2024",
    icon: "🏆",
    description:
      "Honored for outstanding contributions to high-impact projects, demonstrating technical leadership, cross-functional collaboration, and consistent delivery of scalable solutions.",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.E. – Electronics and Communication Engineering",
    institution: "Karpagam College of Engineering",
    location: "Coimbatore, Tamil Nadu",
    period: "2017 – 2021",
    icon: "🎓",
  },
];
