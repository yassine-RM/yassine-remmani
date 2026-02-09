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
    architecture: 'Backend: Spring Boot chosen for mature ecosystem, clean architecture (REST APIs, DDD), security (JWT/OAuth2-ready). PostgreSQL for relational integrity and migrations. Docker for reproducible dev/prod. Keycloak-compatible auth layer. Frontend: Next.js App Router with server components. Redis for sub-second page loads. CI/CD for zero-downtime deploys.',
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
    architecture: 'Event-driven architecture with Kafka for async processing and inter-service communication. Spring Boot REST APIs for high-traffic, stateless services. PostgreSQL with schema optimization for high-volume workloads. Redis for caching and rate limiting. Docker Compose for dev, containerized production. JWT/RBAC auth across domains. CI/CD pipelines for automated deployments.',
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
    architecture: 'Multi-tenant Spring Boot APIs with tenant-id scoping. PostgreSQL for data with proper indexing for read-heavy workloads. Redis for caching. Typesense for real-time search and autocomplete. Docker for deployment. Auth (JWT) with tenant context. Scalable system design for high-volume listings.',
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
    'Hibernate / JPA',
    'REST APIs',
    'Kafka / Event-Driven Systems',
    'PostgreSQL / MySQL',
  ],
  frontend: [
    'Next.js',
    'React',
    'TailwindCSS',
    'shadcn/ui',
  ],
  cloudDevops: [
    'AWS (EC2, S3, RDS)',
    'AWS Bedrock',
    'Docker & Docker Compose',
    'CI/CD pipelines',
  ],
  architecture: [
    'Microservices',
    'Monolith → Microservice migration',
    'Multi-tenant systems',
    'Scalable system design',
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
  /** Context (problem), Action (what I built), Tech (stack), Impact (metrics/value) */
  contextSummary?: string
  actionSummary?: string
  tech: string[]
  impact: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Backend Engineer',
    company: 'Auto Dealers Digital',
    context: 'Automotive digital platform (inventory, CRM, dealer websites, digital ads)',
    period: 'Dec 2019 → Present',
    location: 'Casablanca, Morocco',
    contextSummary: 'Unified inventory, CRM, dealer sites, and ad campaigns at scale. Data consistency, production stability, and performance were non-negotiable.',
    actionSummary: 'Designed high-traffic REST APIs, event-driven workflows with Kafka, campaign management (budgets, targeting, KPIs). Built back-office tools with Next.js. Auth (JWT, RBAC) across domains. PostgreSQL optimization, Redis caching, Dockerized CI/CD.',
    tech: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'JWT', 'Keycloak'],
    impact: [
      '4,000+ dealer sites powered by the platform',
      'Event-driven pipelines for inventory sync and campaign attribution',
      'Optimized DB performance for high-volume read workloads',
      'Zero-downtime deployments via CI/CD',
    ],
    highlights: [
      'Designed and maintained high-traffic REST APIs powering a large automotive business platform.',
      'Implemented event-driven workflows using Kafka for data consistency, async processing, and scalable inter-service communication.',
      'Built campaign management systems: budgets, targeting, performance tracking, lead attribution, and business KPIs.',
      'Built and maintained internal back-office tools with Next.js for operational teams.',
      'Implemented authentication and authorization (JWT, RBAC) across multiple business domains.',
      'Optimized PostgreSQL schemas, indexes, and complex queries for high-volume workloads.',
      'Leveraged Redis for caching, job queues, and rate limiting for resilience.',
      'Dockerized services and standardized dev/prod environments. Contributed to CI/CD pipelines for automated testing and safe rollbacks.',
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
