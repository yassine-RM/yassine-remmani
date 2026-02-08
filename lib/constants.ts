export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  role?: string
  problem: string
  solution: string
  architecture: string
  coverImage: string
  logo: string
  tags: string[]
  metric: {
    icon: string
    value: string
  }
  category: 'backend' | 'frontend' | 'fullstack' | 'devops'
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'travelos',
    title: 'TravelOS',
    summary: 'Travel discovery & content platform. SEO-first architecture, high-performance REST APIs, and production-ready deployment with Spring Boot & Next.js.',
    description: 'TravelOS is a travel discovery platform designed to deliver high-quality, SEO-optimized travel content with a strong focus on performance, scalability, and user experience. Built as a production-grade platform from the ground up.',
    role: 'Founder & Lead Full-Stack Engineer',
    problem: 'Travelers needed a fast, discoverable platform for high-quality destination content. Generic solutions lacked SEO depth, performance at scale, and a polished content experience.',
    solution: 'Built an SEO-first travel platform with Spring Boot REST APIs, Next.js App Router with server components, Redis caching for fast page loads, and structured data for search visibility. Mobile-first, content-focused UI with dynamic CMS capabilities.',
    architecture: 'Backend: Spring Boot with clean architecture (REST APIs, domain-driven design). Frontend: Next.js App Router with server components. Database: PostgreSQL. Cache: Redis. DevOps: Docker, CI/CD. SEO: SSR, metadata optimization, OpenGraph, Schema.org structured data.',
    coverImage: '/images/projects/travelos.png',
    logo: '/images/tech/springboot.svg',
    tags: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    metric: {
      icon: 'rocket',
      value: 'Production-ready',
    },
    category: 'fullstack',
    github: undefined,
    demo: undefined,
  },
  {
    slug: 'automotive-digital-platform',
    title: 'Automotive Digital Platform',
    summary: 'Large-scale platform powering inventory management, CRM workflows, dealer websites, and digital advertising campaigns. Event-driven architecture with Kafka.',
    description: 'Production automotive business platform serving inventory management, CRM workflows, dealer websites, and digital advertising campaigns. Designed and maintained high-traffic REST APIs and event-driven workflows at scale.',
    role: 'Senior Backend Engineer',
    problem: 'The automotive ecosystem required unified systems for inventory, CRM, dealer sites, and ad campaigns. Scale, data consistency, and production stability were non-negotiable.',
    solution: 'Designed high-traffic REST APIs, implemented event-driven workflows with Kafka for async processing and inter-service communication. Built campaign management systems for budgets, targeting, and KPIs. Optimized database performance and maintained production stability.',
    architecture: 'Event-driven architecture with Kafka. High-traffic REST APIs. Campaign management: budgets, targeting, performance tracking, lead attribution. PostgreSQL optimization for high-volume workloads. Redis for caching and rate limiting. Docker and CI/CD for deployments.',
    coverImage: '/images/projects/automotive-platform.webp',
    logo: '/images/tech/springboot.svg',
    tags: ['Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'Docker'],
    metric: {
      icon: 'chart-line',
      value: '4,000+ dealer sites',
    },
    category: 'backend',
    github: undefined,
    demo: undefined,
  },
  {
    slug: 'multi-tenant-classified-ads',
    title: 'Multi-Tenant Classified Ads Platform',
    summary: 'Multi-tenant classified ads platform for car dealerships with real-time search, autocomplete, and optimized APIs for high-volume listings.',
    description: 'Multi-tenant classified ads platform for car dealerships, supporting high-volume listings and intelligent search. Backend APIs with PostgreSQL, Redis, and Typesense for instant search and autocomplete.',
    role: 'Backend Engineer',
    problem: 'Dealers needed a shared platform for classified listings with fast search, tenant isolation, and support for high-volume data. Read-heavy workloads demanded optimization.',
    solution: 'Multi-tenant backend architecture with tenant-id scoping. Real-time search and autocomplete using Typesense. Optimized REST APIs for large read workloads with proper indexing and caching strategies.',
    architecture: 'Multi-tenant backend APIs. PostgreSQL for data storage with tenant isolation. Redis for caching. Typesense for real-time search, autocomplete, and filtering. High-volume read optimization. Professional, minimal internal-tool aesthetic.',
    coverImage: '/images/projects/classified-ads.webp',
    logo: '/images/tech/springboot.svg',
    tags: ['Spring Boot', 'PostgreSQL', 'Redis', 'Typesense'],
    metric: {
      icon: 'search',
      value: 'Real-time search',
    },
    category: 'backend',
    github: undefined,
    demo: undefined,
  },
]

export interface TechStackItem {
  name: string
  icon: string
  description: string
}

export const techStack: TechStackItem[] = [
  { name: 'Spring Boot', icon: '/images/tech/springboot.svg', description: 'REST APIs · services · security' },
  { name: 'Next.js / React', icon: '/images/tech/react.svg', description: 'SSR · SEO · dashboards' },
  { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg', description: 'schema design · migrations' },
  { name: 'Docker', icon: '/images/tech/docker.svg', description: 'pipelines · zero-downtime' },
  { name: 'Redis', icon: '/images/tech/redis.svg', description: 'speed · scale · stability' },
  { name: 'Typesense', icon: '/images/tech/typesense.svg', description: 'instant search · filters' },
]

export const skills = {
  backend: [
    'Spring Boot',
    'Java',
    'REST APIs',
    'Keycloak',
    'PostgreSQL',
    'Redis',
    'JWT',
    'OpenAPI',
  ],
  frontend: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
  ],
  devops: [
    'Docker',
    'Docker Compose',
    'CI/CD',
    'Linux',
  ],
  architecture: [
    'Clean Architecture',
    'DDD basics',
    'Multi-tenant design',
    'REST best practices',
  ],
}

export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'server',
    title: 'Backend API Development',
    description: 'Spring Boot REST APIs with PostgreSQL, Redis caching, rate limiting, authentication, and partner integrations.',
  },
  {
    icon: 'code',
    title: 'Frontend Development',
    description: 'Next.js/React applications with SSR, dynamic routing, i18n, SEO optimization, and modern UX patterns.',
  },
  {
    icon: 'layer-group',
    title: 'Multi-Tenant Architecture',
    description: 'Scalable multi-tenant platforms with isolated data, theming, and tenant-specific configurations.',
  },
  {
    icon: 'rocket',
    title: 'DevOps & CI/CD',
    description: 'Docker containerization, CI/CD pipelines, automated deployments, and infrastructure as code.',
  },
]

export interface ExperienceItem {
  role: string
  company: string
  context?: string
  period: string
  location: string | null
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Backend / Full-Stack Developer',
    company: 'Auto Dealers Digital',
    context: 'Automotive digital platform (inventory, CRM, dealer websites, digital ads)',
    period: 'Dec 2019 → Present',
    location: 'Casablanca, Morocco',
    highlights: [
      'Designed and maintained high-traffic REST APIs powering a large automotive business platform.',
      'Contributed to backend architecture for campaign management systems: budgets, targeting, performance tracking, lead attribution, and business KPIs.',
      'Implemented event-driven workflows using Kafka for data consistency, async processing, and scalable inter-service communication.',
      'Built and maintained internal back-office tools for operational teams, focusing on reliability and performance.',
      'Implemented authentication and authorization (JWT, RBAC) across multiple business domains.',
      'Optimized PostgreSQL schemas, indexes, and complex queries for high-volume, high-performance workloads.',
      'Leveraged Redis for caching, job queues, and rate limiting to improve responsiveness and resilience.',
      'Dockerized services and standardized dev/prod environments. Contributed to CI/CD pipelines enabling automated testing, deployments, and safe rollbacks.',
    ],
  },
]

export interface EducationItem {
  degree: string
  institution: string
  focus?: string
}

export const education: EducationItem[] = [
  {
    degree: 'Master’s Degree — Computer Science & Artificial Intelligence (Big Data)',
    institution: 'Ibn Tofail University'
  },
  {
    degree: 'Professional Bachelor’s Degree — Software Engineering',
    institution: 'EST Safi',
  },
  {
    degree: 'University Diploma of Technology (DUT) — Software Engineering',
    institution: 'EST Meknes',
  },
  {
    degree: 'Baccalaureate — Life & Earth Sciences',
    institution: 'El Qods High School, Chemmaia',
  },
]
