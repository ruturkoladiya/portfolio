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
  { num: "5+", label: "Applications Shipped" },
  { num: "15+", label: "Production Modules Delivered" },
  { num: "100%", label: "Responsive & Accessible Code" },
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
    icon: "⬡",
    color: "purple" as const,
    title: "Frontend Architecture",
    body: "I build modular, component-driven UIs using React and Next.js. Focused on clean state management (Redux Toolkit, Context API), client-side caching, and structured, reusable files.",
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "Redux Toolkit", "Context API", "SSR/SSG"],
  },
  {
    icon: "◈",
    color: "teal" as const,
    title: "Backend Development",
    body: "I design and extend scalable backend APIs using Node.js and Express.js, connecting them to secure PostgreSQL databases and implementing structured data schemas.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "SQL"],
  },
  {
    icon: "◎",
    color: "amber" as const,
    title: "AI Integration",
    body: "I've integrated OpenAI APIs into production applications to automate workflows and add intelligent features. I also use AI tools daily - Cursor, ChatGPT, and Claude to write better code faster.",
    tags: ["OpenAI API", "Cursor", "ChatGPT", "Claude"],
  },
  {
    icon: "◇",
    color: "pink" as const,
    title: "UI/UX Implementation",
    body: "I translate designs into pixel-accurate, accessible interfaces. Comfortable with utility-first styling, rich text editors, and third-party component libraries to deliver polished user experiences.",
    tags: ["TailwindCSS", "Ant Design", "Jodit Editor", "Responsive UI"],
  },
] as const;

//  Experience 
export const TIMELINE_ITEMS = [
  {
    period: "Jul 2025 – Present",
    role: "Software Engineer",
    company: "Bigscale Technologies · Full-time",
    points: [
      "Contributing to Healthray Lab, a comprehensive lab information management system (LIMS) managing patient registration, pathology, billing, and report generation.",
      "Developing high-impact frontend modules including dynamic invoice generation with QR code integration, barcode scanner compatibility, and data import/export utilities.",
      "Implementing real-time data visualizations and dashboard analytics to monitor lab performance metrics.",
      "Built a modular role-based permission system managing granular access control across the application.",
      "Assisting with backend services, writing Node.js/Express.js APIs, and integrating SQL database query logic to support application data flows.",
      "Integrating specialized third-party libraries including CKEditor for rich-text reports, Day.js for date parsing, and pdfMake for dynamic client-side PDF generation.",
      "Designing and maintaining a library of highly reusable, accessible, and performant React components.",
      "Integrating secure REST APIs with comprehensive frontend error boundary handling and state synchronization.",
      "Utilizing Redux Toolkit for predictable state management across complex, asynchronous data flows.",
    ],
  },
  {
    period: "Jan 2025 – Jul 2025",
    role: "Software Engineer Trainee",
    company: "TST Technology · Full-time",
    points: [
      "Built responsive, accessible UI modules using React and Next.js aligned with modern web standards.",
      "Integrated secure REST APIs and maintained local application state using React Hooks and the Context API.",
      "Integrated OpenAI APIs to support intelligent features and automate backend workflows.",
      "Collaborated with senior engineers to implement performance optimization and automated testing practices.",
    ],
  },
  {
    period: "Jun 2024 – Dec 2024",
    role: "Software Engineer Intern",
    company: "Tech Elecon Private Limited · Internship",
    points: [
      "Developed responsive layouts using React, vanilla JavaScript, HTML5, and CSS3.",
      "Parsed API datasets and bound dynamic endpoints to interactive frontend UI components.",
      "Created reusable UI patterns and managed shared state with Context API and custom React hooks.",
      "Participated in agile code reviews, refining team development and Git collaboration workflows.",
    ],
  },
] as const;

//  Projects
export const PROJECTS = [
  {
    label: "Personal · Full Stack",
    title: "BakeFlow – Smart Order & Inquiry Manager for Bakers",
    problem: "Home bakers had no simple digital tool to manage products, handle customer inquiries, and process orders without needing any technical knowledge.",
    arch: "Built end-to-end admin panel with full CRUD for product management, unique shareable store links per baker, order acceptance/rejection workflow, search and filtering, and a fully responsive UI designed for non-technical users.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "REST API"],
    link: { label: "bake-flow-frontend.vercel.app", url: "https://bake-flow-frontend.vercel.app/welcome" },
  },
  {
    label: "Personal · Marketplace",
    title: "Exclusive Vaults – Vehicle Data & Offer Platform",
    problem: "Vehicle enthusiasts needed a public platform to explore detailed specs, interact with listings, and make direct offers with real-time communication.",
    arch: "Public data vaults for vehicle specs and images, real-time chat with admin, direct offer flow, weekly email notifications for new listings, and Algolia + HubSpot search integration for accurate discovery.",
    stack: ["React", "Algolia", "HubSpot", "Real-time Chat", "Email Notifications"],
    link: { label: "exclusivevaults.com", url: "https://www.exclusivevaults.com/" },
  },
  {
    label: "Work Project · TST Technology",
    title: "Email Marketing Tool – Bulk Campaign Manager",
    problem: "Marketing teams needed a self-serve platform to create, schedule, and track bulk email campaigns without relying on third-party tools for every step.",
    arch: "Contributed as part of the frontend team - built the overall UI, implemented the email template builder using Jodit Editor for rich-text editing, and developed the full authentication flow including login, registration, and route protection.",
    stack: ["React", "Jodit Editor", "Ant Design", "Auth Flow"],
    link: null,
  },
  {
    label: "Freelance · E-Commerce",
    title: "Beardo.in – Product Catalog Module",
    problem: "A well-known men's grooming brand needed a reliable way to manage their product catalogue across multiple categories on their e-commerce platform.",
    arch: "Contributed as a freelancer built the product management module including add, edit, delete, and organise products across grooming categories. One focused module within a larger commercial platform.",
    stack: ["React", "REST API", "E-Commerce"],
    link: { label: "beardo.in", url: "https://beardo.in/" },
  },
  {
    label: "Freelance · Real Estate",
    title: "Structa – Real Estate Analytics Platform",
    problem: "A real estate client needed an analytics platform to help users search properties, visualise location data, and make informed decisions using demographic insights.",
    arch: "Built the frontend advanced search and filtering UI, interactive maps with geospatial overlays using Google Maps API, and dynamic data visualisations (population, income, family stats) using Chart.js.",
    stack: ["React", "Google Maps API", "Chart.js", "Data Visualisation"],
    link: null,
  },
] as const;

//  testimonuals
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
