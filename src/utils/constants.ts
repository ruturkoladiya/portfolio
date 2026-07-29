export const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
] as const;

// Hero 
export const HERO_STATS = [
  { num: "1+ Year", label: "Professional Experience" },
  { num: "30+", label: "LIMS Features Delivered" },
  { num: "25+", label: "REST APIs Integrated" },
] as const;

// Philosophy
export const PHILOSOPHY_BLOCKS = [
  {
    title: "Thinking in Systems",
    body: "I don't just write code; I design systems. Before starting a feature, I map out data flows, state structure, and edge cases to ensure the implementation is solid and maintainable.",
  },
  {
    title: "Writing Readable Code",
    body: "Readable code is code that survives. I prioritize clean naming, simple logic, and clear documentation over clever hacks. If a teammate can't understand it in a quick glance, it needs refactoring.",
  },
  {
    title: "Understanding the 'Why'",
    body: "I build products, not just tickets. Understanding the business goals behind a feature helps me make better technical decisions, identify logical gaps early, and build a better user experience.",
  },
  {
    title: "Performance by Default",
    body: "Performance isn't an afterthought. I actively audit bundle sizes, optimize rendering cycles, and design APIs for speed, because a slow interface is a broken interface.",
  },
] as const;

// Expertise 
export const EXPERTISE_CARDS = [
  {
    icon: "⬡",
    color: "purple" as const,
    title: "Frontend Development",
    body: "I build clean, responsive user interfaces using React.js and Next.js. I focus on solid state management (Redux Toolkit, RTK Query), fast loading times, and clean UI components built with Tailwind CSS, Material UI, Ant Design, and Shadcn UI.",
    tags: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Shadcn UI", "Material UI", "Ant Design"],
  },
  {
    icon: "◈",
    color: "teal" as const,
    title: "Backend & APIs",
    body: "I design and scale backend services using Node.js and Express.js. I write clean database schemas, implement secure authentication, and optimize queries across PostgreSQL and MongoDB using Prisma ORM.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "JWT Auth"],
  },
  {
    icon: "◎",
    color: "amber" as const,
    title: "AI & Integrations",
    body: "I integrate AI capabilities into products using OpenAI and Gemini APIs to automate tasks and build smart features. I also handle asset hosting and processing using Cloudinary.",
    tags: ["OpenAI API", "Google Gemini API", "AI-Powered Apps", "Cloudinary"],
  },
  {
    icon: "◇",
    color: "pink" as const,
    title: "Tooling & Workflow",
    body: "I work in Agile environments using Git, Postman, and Vite. I focus on team collaboration, thorough code reviews, and performance optimizations like code splitting and lazy loading.",
    tags: ["Vite", "Figma", "Git/GitHub", "Postman", "Agile/Scrum", "Vercel"],
  },
] as const;

// Experience 
export const TIMELINE_ITEMS = [
  {
    period: "Jul 2025 – Present",
    role: "Full Stack Developer",
    company: "Bigscal Technologies Pvt. Ltd. · Full-time",
    points: [
      "Built and shipped over 30 production features for an enterprise Laboratory Information Management System (LIMS) spanning patient registration, pathology, radiology, billing, CRM, and analytics.",
      "Developed full-stack features using React.js, Redux Toolkit, Node.js, Express.js, and SQL to support healthcare workflows.",
      "Created reusable UI components and integrated 25+ REST APIs with secure authentication, caching, data polling, and error handling.",
      "Improved application load times and responsiveness by implementing lazy loading, code splitting, debounced searches, and query optimization.",
      "Collaborated in an Agile team to deliver high-priority updates, configurable report printing workflows, refactoring, and bug fixes.",
    ],
  },
  {
    period: "Jan 2025 – Jul 2025",
    role: "Frontend Developer Trainee",
    company: "TST Technology · Full-time",
    points: [
      "Built responsive React.js and Next.js applications, including server-side rendered (SSR) layouts, translating Figma designs into clean, accessible code.",
      "Integrated OpenAI APIs to automate workflows and add AI-powered features, and built a shared UI component library used across multiple client projects.",
      "Worked closely with designers, backend engineers, and QA in Agile sprints to ship updates on time.",
    ],
  },
  {
    period: "Jun 2024 – Dec 2024",
    role: "Software Engineer Intern",
    company: "Tech Elecon Private Limited · Internship",
    points: [
      "Developed responsive layouts using React.js, JavaScript, HTML5, and CSS3.",
      "Connected backend API endpoints to dynamic frontend UI components.",
      "Built reusable UI components and managed shared state using Context API and custom hooks.",
      "Participated in code reviews and collaborated with team members using Git.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    label: "Personal · Full Stack",
    title: "BakeFlow: Smart Order & Inquiry Manager for Bakers",
    problem: "Home bakers had no simple digital tool to manage products, handle customer inquiries, and process orders without needing any technical knowledge.",
    arch: "Architected the PostgreSQL database schema, built Express.js REST APIs, and developed the React.js frontend for a full-stack bakery management platform supporting product management, inquiries, and order-approval workflows.",
    stack: ["React.js", "Redux Toolkit", "PostgreSQL", "Express.js", "Node.js", "Tailwind CSS", "REST APIs"],
    link: { label: "bake-flow-frontend.vercel.app", url: "https://bake-flow-frontend.vercel.app/welcome" },
  },
  {
    label: "Personal · Marketplace",
    title: "Exclusive Vaults: Vehicle Data & Offer Platform",
    problem: "Vehicle enthusiasts needed a platform to browse detailed specs, view listings, and submit direct offers.",
    arch: "Built specs catalog, integrated a real-time admin chat, developed an offer submission flow, and set up weekly email alerts for new listings. Added search and discovery using Algolia and HubSpot.",
    stack: ["React.js", "Algolia", "HubSpot", "REST APIs", "Tailwind CSS"],
    link: { label: "exclusivevaults.com", url: "https://www.exclusivevaults.com/" },
  },
  {
    label: "Work Project · TST Technology",
    title: "Email Marketing Tool: Bulk Campaign Manager",
    problem: "Marketing teams needed a platform to build, schedule, and manage bulk email campaigns.",
    arch: "Built the frontend UI, integrated Jodit Editor for rich-text email template building, and developed a secure authentication flow (login, registration, and protected routes).",
    stack: ["React.js", "Jodit Editor", "Ant Design", "REST APIs"],
    link: null,
  },
  {
    label: "Freelance · E-Commerce",
    title: "Beardo.in: Product Catalog Module",
    problem: "An e-commerce grooming brand needed a tool to manage and organize their product catalog across categories.",
    arch: "Developed the catalog management module, enabling admins to add, edit, delete, and group products. Integrated the frontend features with the platform's inventory APIs.",
    stack: ["React.js", "REST APIs", "Tailwind CSS"],
    link: { label: "beardo.in", url: "https://beardo.in/" },
  },
  {
    label: "Freelance · Analytics",
    title: "Structa: Real Estate Analytics Platform",
    problem: "Users needed an easy way to search properties and visualize location-based analytics/demographic insights to evaluate real estate markets faster.",
    arch: "Built a real estate analytics platform featuring interactive maps and dashboards for location-based property insights, using React.js and REST APIs. Integrated Google Maps API and Chart.js to power location-based analytics with filterable views by location and price range.",
    stack: ["React.js", "Google Maps API", "Chart.js", "REST APIs"],
    link: null,
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "Rutu Koladiya transformed our online presence with a modern, professional website. She understood our business goals and delivered exceptional results. We noticed improved lead quality and stronger brand visibility within a short period. Highly recommended.",
    name: "Deversh Construction Group",
    role: "Real Estate Developers",
    company: "Deversh Construction",
  },
  {
    quote: "Working with Rutu Koladiya was a great experience. She developed a clean, fast, and professional website that perfectly represents our consultancy services. Her attention to detail, communication, and commitment to quality exceeded our expectations.",
    name: "Nischay Consultancy",
    role: "Financial Advisory",
    company: "Nischay Consultancy",
  },
] as const;
