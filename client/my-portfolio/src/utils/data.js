export const profile = {
  name: "Guruvishnu Arunagiri",
  initials: "GA",
  title: "Front-End Developer",
  tagline: "React.js · TypeScript · Scalable UIs",
  email: "guruvisnu92@gmail.com",
  phone: "+91 7092148153",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  summary:
    "Passionate Frontend Developer specializing in building performant, scalable, and intuitive web applications using React.js, TypeScript, and modern UI libraries. Skilled in designing reusable components, optimizing rendering, and implementing secure API integrations. Adept at solving complex UI challenges, improving user workflows, and collaborating across teams to deliver clean, maintainable code.",
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
      "Memoization",
      "Debouncing",
      "Code Splitting",
      "Dynamic Imports",
    ],
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
      "Secure platform for managing client party and account metadata.",
    techStack: ["React.js", "TypeScript", "Formik", "Yup", "Axios", "Jest"],
    highlights: [
      "Led development of a complex large-scale dynamic banking form with 60+ fields for high-sensitivity customer onboarding.",
      "Guided junior developers through code reviews, mentoring on best practices and scalable form architecture.",
      "Achieved 35% reduction in form input errors via Formik, Yup custom validation logic, and input masking.",
      "Integrated secure RESTful APIs with robust error-handling — 40% improvement in response reliability.",
      "Wrote unit & integration tests achieving 85%+ code coverage, reducing production bugs by 30%.",
      "Collaborated cross-functionally with QA, backend, and product teams to define validation flows.",
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
    ],
    highlights: [
      "Designed scalable performance management system — reduced manual review effort by 60%.",
      "Created interactive dashboards using Chart.js with custom tooltips, filters, and dynamic updates.",
      "Implemented responsive UI with styled-components ensuring seamless cross-device experience.",
      "Improved initial page load by 45% via lazy loading, code splitting, and dynamic imports.",
      "Integrated React Query for caching and background sync — reduced redundant API calls by 20%.",
      "Optimized event interactions via debouncing and throttling — cut unnecessary API calls by 30%.",
      "Utilized Redux and Context API — decreased code complexity by 25%.",
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
