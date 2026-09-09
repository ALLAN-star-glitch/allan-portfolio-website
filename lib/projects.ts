// lib/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
  category: "Full Stack" | "Mobile" | "Backend" | "Frontend" | "DevOps";
  image?: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "PivotaConnect API",
    description:
      "A unified pan-African digital marketplace API connecting users to employment, housing, and social support opportunities. Built with microservices architecture serving both formal and informal economies.",
    tech: ["NestJS", "GraphQL", "gRPC", "PostgreSQL", "Redis", "Kafka"],
    github: "https://github.com/ALLAN-star-glitch/pivota-api",
    category: "Backend",
    featured: true,
  },
  {
    id: 2,
    title: "PivotaConnect Web",
    description:
      "Monorepo frontend for the PivotaConnect platform using Next.js and TurboRepo. Features a microservices backend with gRPC, Kafka, and RabbitMQ for seamless communication.",
    tech: ["Next.js", "TurboRepo", "NestJS", "gRPC", "Kafka", "Docker"],
    github: "https://github.com/ALLAN-star-glitch/pivota-frontend-turbo-repo.git",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "PivotaConnect Android",
    description:
      "Native Android app built with Jetpack Compose and Kotlin. Follows Clean Architecture with MVVM pattern, featuring offline support and M-PESA integration.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Ktor", "Coil"],
    github: "https://github.com/ALLAN-star-glitch/AndroidPivotaApp",
    category: "Mobile",
    featured: true,
  },
  {
    id: 4,
    title: "Nuruvent API",
    description:
      "Training and professional development event platform backend built with Go. Uses Hexagonal Architecture with Fiber framework, Casbin RBAC, and Asynq for background jobs.",
    tech: ["Go", "Fiber", "PostgreSQL", "Redis", "Casbin", "Hexagonal Architecture"],
    github: "https://github.com/ALLAN-star-glitch/nuruvent_backend",
    live: "https://nuruvent.com",
    category: "Backend",
    featured: true,
  },
  {
    id: 5,
    title: "Nuruvent Web",
    description:
      "Event management and training discovery platform frontend. Enables trainers to create events, manage registrations, and issue QR-verified certificates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/ALLAN-star-glitch/nuruvent",
    live: "https://nuruvent.com",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 6,
    title: "Flownatty API",
    description:
      "E-commerce marketplace backend built with Go and Gin framework. Features JWT authentication, M-Pesa Daraja API integration, and PostgreSQL with GORM.",
    tech: ["Go", "Gin", "PostgreSQL", "GORM", "JWT", "M-Pesa"],
    github: "https://github.com/ALLAN-star-glitch/flownatty-backend",
    category: "Backend",
    featured: true,
  },
  {
    id: 7,
    title: "Africana College Website",
    description:
      "Fullstack Next.js website for Africana College of Professionals. Features course listings, admissions, and content management with WordPress integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WordPress API"],
    github: "https://github.com/ALLAN-star-glitch/acop---africana-college-of-professionals",
    live: "https://acop.co.ke",
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Susan Gitau Foundation Website",
    description:
      "Fullstack Next.js website for Susan Gitau Counseling Foundation. Features mental health resources, events, and community outreach information.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WordPress API"],
    github: "https://github.com/ALLAN-star-glitch/sgcf---website",
    live: "https://sgcfoundation.org",
    category: "Full Stack",
  },
  {
    id: 9,
    title: "DMS - Document Management System",
    description:
      "Enterprise document management system built with Angular. Designed for E&M Tech Hub company to streamline document workflows and storage.",
    tech: ["Angular", "TypeScript", "RxJS"],
    github: "https://github.com/EMTECH-DOCUMENT-MANAGEMENT-SYSTEM",
    category: "Frontend",
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);
export const getProjectsByCategory = (category: string) =>
  allProjects.filter((p) => p.category === category);
export const getProjectById = (id: number) =>
  allProjects.find((p) => p.id === id);