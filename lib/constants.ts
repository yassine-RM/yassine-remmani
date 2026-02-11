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
    summary: 'Travel discovery platform. Spring Boot REST APIs, PostgreSQL, Redis. Next.js SSR for SEO. Production deployment with CI/CD and observability.',
    description: 'Travel content platform built as a production system. Backend-led: Spring Boot APIs, relational data, caching. Frontend: Next.js for SEO and performance.',
    role: 'Founder & Lead Engineer',
    problem: 'Need for a fast, discoverable travel content platform with strong SEO and backend control.',
    solution: 'Spring Boot backend for content and APIs; PostgreSQL with migrations; Redis for response time. Next.js App Router for SSR and SEO. Keycloak-ready auth. Docker and CI/CD.',
    architecture: 'Backend: Spring Boot, layered design, JWT/OAuth2-ready, Keycloak-compatible. PostgreSQL with Flyway. Docker for parity. Frontend: Next.js server components, Redis-backed performance. CI/CD and observability.',
    coverImage: '/images/projects/travelos.png',
    logo: '/images/tech/springboot.svg',
    tags: ['Spring Boot', 'PostgreSQL', 'Redis', 'Next.js', 'Docker'],
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
    summary: 'Multi-tenant platform: inventory, CRM, dealer sites, ad campaigns. Spring Boot APIs, Kafka event-driven workflows. 4,000+ sites.',
    description: 'Central backend for automotive operations: inventory sync, CRM, dealer websites, and digital advertising. High-traffic APIs and event pipelines.',
    role: 'Senior Backend Engineer',
    problem: 'Unified backend for inventory, CRM, dealer sites, and ad campaigns. Scale, consistency, and reliability required.',
    solution: 'Spring Boot REST APIs with domain boundaries. Kafka for event-driven sync and attribution. Campaign backend with budgets, targeting, KPIs. PostgreSQL, Redis, JWT/RBAC, Keycloak. CI/CD and monitoring.',
    architecture: 'Event-driven microservices: Spring Boot stateless APIs, Kafka for async workflows. PostgreSQL with tenant-aware schema and indexing. Redis for cache and rate limiting. Docker and CI/CD. Auth (JWT, RBAC, Keycloak) across domains.',
    coverImage: '/images/projects/automotive-platform.webp',
    logo: '/images/tech/springboot.svg',
    tags: ['Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'Keycloak', 'Docker'],
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
    summary: 'Multi-tenant classified ads backend. Spring Boot APIs, tenant isolation, Typesense search. Read-heavy optimization.',
    description: 'SaaS backend for dealer classified listings. Tenant-scoped data, high-volume reads, and real-time search.',
    role: 'Senior Backend Engineer',
    problem: 'Shared platform for classified listings with tenant isolation, fast search, and high-volume read traffic.',
    solution: 'Spring Boot multi-tenant APIs with tenant-id scoping. Typesense for search and autocomplete. PostgreSQL indexing and Redis caching. JWT with tenant context. Docker deployment.',
    architecture: 'Spring Boot APIs with tenant-id scoping and row-level isolation. PostgreSQL with indexes for listing and filter queries. Redis for hot data. Typesense for search. Auth and tenant context at API layer.',
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
  { name: 'Kafka', icon: '/images/tech/springboot.svg', description: 'event streams · async workflows' },
  { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg', description: 'schema · migrations · tuning' },
  { name: 'Redis', icon: '/images/tech/redis.svg', description: 'cache · rate limit · sessions' },
  { name: 'Keycloak', icon: '/images/tech/springboot.svg', description: 'SSO · RBAC · multi-tenant auth' },
  { name: 'Next.js', icon: '/images/tech/react.svg', description: 'SSR · dashboards · back-office' },
  { name: 'Docker', icon: '/images/tech/docker.svg', description: 'containers · CI/CD' },
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
