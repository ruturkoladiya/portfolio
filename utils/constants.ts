export const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Expertise",  href: "#expertise"  },
  { label: "Experience", href: "#experience"  },
  { label: "Projects",   href: "#projects"    },
  { label: "Contact",    href: "#cta"         },
] as const;

// Hero 
export const HERO_STATS = [
  { num: "1+",  label: "Years of Professional Experience" },
  { num: "10+", label: "Technologies & Tools"             },
  { num: "4+",  label: "Projects Shipped"                 },
] as const;

// Philosophy
export const PHILOSOPHY_BLOCKS = [
  {
    title: "Structure Before Code",
    body: "Before I write a single line, I think through the data flow, component boundaries, and state shape. It takes 20 minutes upfront and saves hours of refactoring later.",
  },
  {
    title: "Code Someone Else Can Read",
    body: "I write code like the next developer matters - because they do. Clear naming, consistent patterns, and no clever tricks that nobody else understands.",
  },
  {
    title: "I Build for the Product, Not Just the Ticket",
    body: "I try to understand why a feature exists, not just what it does. That context helps me make better decisions and flag things that don't make sense early.",
  },
  {
    title: "Performance Is Part of the Job",
    body: "Slow UIs lose users. I keep an eye on bundle size, unnecessary re-renders, and API response times not as an afterthought, but as part of how I build.",
  },
] as const;

//  Expertise 
export const EXPERTISE_CARDS = [
 {
    icon:  "⬡",
    color: "purple" as const,
    title: "Frontend Development",
    body:  "I build responsive, component-driven UIs using React and Next.js. My focus is on clean structure, reusable components, and interfaces that are fast to ship and easy to maintain.",
    tags:  ["React.js", "Next.js", "JavaScript", "TypeScript", "SSR/SSG"],
  },
  {
    icon:  "◈",
    color: "teal" as const,
    title: "State Management",
    body:  "I manage application state using Redux Toolkit and Context API - keeping data flow predictable and debugging straightforward, even as features grow.",
    tags:  ["Redux Toolkit", "RTK Query", "Context API"],
  },
  {
    icon:  "◎",
    color: "amber" as const,
    title: "AI Integration",
    body:  "I've integrated OpenAI APIs into production applications to automate workflows and add intelligent features. I also use AI tools daily - Cursor, ChatGPT, and Claude to write better code faster.",
    tags:  ["OpenAI API", "Cursor", "ChatGPT", "Claude"],
  },
  {
    icon:  "◇",
    color: "pink" as const,
    title: "UI/UX Implementation",
    body:  "I translate designs into pixel-accurate, accessible interfaces. Comfortable with utility-first styling, rich text editors, and third-party component libraries to deliver polished user experiences.",
    tags:  ["TailwindCSS", "Ant Design", "Jodit Editor", "Responsive UI"],
  },
] as const;

//  Experience 
export const TIMELINE_ITEMS = [
 {
  period:  "Jul 2025 – Present",
  role:    "Software Engineer",
  company: "Bigscale Technologies · Full-time",
  points:  [
    "Contributing to Healthray Lab - a production lab management system covering patient registration, pathology, radiology, billing, and report delivery end-to-end.",
    "Part of the frontend team building modules including bill generation with QR code integration, barcode support, and Excel import/export.",
    "implementing real-time charts on the dashboard to visualise lab data and reporting metrics.",
    "Built a role-based permission system managing access control across all modules of the application.",
    "Integrating third-party libraries like CK Editor for rich-text report editing, Day.js for date handling, and pdfMake for generating downloadable PDF reports.",
    "Developing and maintaining reusable React components across a large, multi-module application.",
    "Integrating REST APIs with proper error handling and loading state management.",
    "Workeing with Redux Toolkit for predictable state management across complex application flows.",
  ],
},
  {
    period:  "Jan 2025 – Jul 2025",
    role:    "Software Engineer Trainee",
    company: "TST Technology · Full-time",
    points:  [
      "Built responsive UI components using React.js/Next.js within an active production codebase.",
      "Integrated REST APIs and managed frontend state using React Hooks and Context API.",
      "Integrated OpenAI API to add AI-powered features and automate parts of the application workflow.",
      "Collaborated with senior developers and picked up real-world development practices hands-on.",
    ],
  },
  {
    period:  "Jun 2024 – Dec 2024",
    role:    "Software Engineer Intern",
    company: "Tech Elecon Private Limited · Internship",
    points:  [
      "Developed responsive interfaces using ReactJS, JavaScript, HTML5, and CSS3.",
      "Integrated RESTful APIs and rendered dynamic data into frontend components.",
      "Implemented reusable components and state management using React Hooks and Context API.",
      "Got my first real exposure to production codebases and team-based development workflows.",
    ],
  },
  // {
  //   period:  "Jun 2021 – Jun 2025",
  //   role:    "B.E. in Computer Engineering",
  //   company: "Charutar Vidya Mandal University · CGPA 8.20 / 10",
  //   points:  [
  //     "Studied core computer science fundamentals — data structures, algorithms, operating systems, and DBMS.",
  //     "Completed final year project and coursework with consistent academic performance.",
  //   ],
  // },
] as const;

//  Projects
export const PROJECTS = [
  {
    label:   "Personal · Full Stack",
    title:   "BakeFlow – Smart Order & Inquiry Manager for Bakers",
    problem: "Home bakers had no simple digital tool to manage products, handle customer inquiries, and process orders without needing any technical knowledge.",
    arch:    "Built end-to-end admin panel with full CRUD for product management, unique shareable store links per baker, order acceptance/rejection workflow, search and filtering, and a fully responsive UI designed for non-technical users.",
    stack:   ["React", "Node.js", "Express", "PostgreSQL", "REST API"],
    link:    { label: "bake-flow-frontend.vercel.app", url: "https://bake-flow-frontend.vercel.app/welcome" },
  },
  {
    label:   "Personal · Marketplace",
    title:   "Exclusive Vaults – Vehicle Data & Offer Platform",
    problem: "Vehicle enthusiasts needed a public platform to explore detailed specs, interact with listings, and make direct offers with real-time communication.",
    arch:    "Public data vaults for vehicle specs and images, real-time chat with admin, direct offer flow, weekly email notifications for new listings, and Algolia + HubSpot search integration for accurate discovery.",
    stack:   ["React", "Algolia", "HubSpot", "Real-time Chat", "Email Notifications"],
    link:    { label: "exclusivevaults.com", url: "https://www.exclusivevaults.com/" },
  },
 {
    label:   "Work Project · TST Technology",
    title:   "Email Marketing Tool – Bulk Campaign Manager",
    problem: "Marketing teams needed a self-serve platform to create, schedule, and track bulk email campaigns without relying on third-party tools for every step.",
    arch:    "Contributed as part of the frontend team - built the overall UI, implemented the email template builder using Jodit Editor for rich-text editing, and developed the full authentication flow including login, registration, and route protection.",
    stack:   ["React", "Jodit Editor", "Ant Design", "Auth Flow"],
    link:    null,
  },
  {
    label:   "Freelance · E-Commerce",
    title:   "Beardo.in – Product Management Module",
    problem: "A well-known men's grooming brand needed a reliable way to manage their product catalogue across multiple categories on their e-commerce platform.",
    arch:    "Contributed as a freelancer built the product management module including add, edit, delete, and organise products across grooming categories. One focused module within a larger commercial platform.",
    stack:   ["React", "REST API", "E-Commerce"],
    link:    { label: "beardo.in", url: "https://beardo.in/" },
  },
  {
    label:   "Freelance · Real Estate",
    title:   "Structa – Real Estate Analytics Platform",
    problem: "A real estate client needed an analytics platform to help users search properties, visualise location data, and make informed decisions using demographic insights.",
    arch:    "Built the frontend advanced search and filtering UI, interactive maps with geospatial overlays using Google Maps API, and dynamic data visualisations (population, income, family stats) using Chart.js.",
    stack:   ["React", "Google Maps API", "Chart.js", "Data Visualisation"],
    link:    null,
  },
] as const;

//  testimonuals
export const TESTIMONIALS = [
    {
      quote:   "Rutu is a reliable frontend developer who writes clean, well-structured code. He picks up new requirements quickly and consistently delivers on time.",
      name:    "Colleague / Senior Developer",
      role:    "Software Engineer",
      company: "Bigscale Technologies",
      // TODO: Replace above with real name, role, and company
    },
    {
      quote:   "Rutu showed strong ownership of the features he worked on. He asked the right questions, communicated blockers early, and always shipped what he committed to.",
      name:    "Manager / Team Lead",
      role:    "Engineering Lead",
      company: "TST Technology",
      // TODO: Replace above with real name, role, and company
    },
    {
      quote:   "Working with Rutu on our project was smooth from start to finish. He understood the requirements well and delivered exactly what we needed.",
      name:    "Freelance Client",
      role:    "Business Owner",
      company: "Independent",
      // TODO: Replace above with real name, role, and company
    },
] as const;
