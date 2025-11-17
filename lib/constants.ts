export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  coverImage: string
  logo: string
  tags: string[]
  metric: {
    icon: string
    value: string
  }
  category: 'backend' | 'frontend' | 'fullstack' | 'devops'
}

export const projects: Project[] = [
  {
    slug: 'multi-tenant-dealer-platform',
    title: 'Multi-Tenant Dealer Platform',
    summary: 'Designed and developed a scalable multi-tenant platform serving 4,000+ dealer sites with website builder, CRM dashboard, and real-time inventory synchronization.',
    description: 'Full case study coming soon...',
    coverImage: '/assets/images/portfolio1.jpg',
    logo: '/assets/images/springboot.svg',
    tags: ['Spring Boot', 'Next.js', 'PostgreSQL'],
    metric: {
      icon: 'chart-line',
      value: '4,000+ dealer sites',
    },
    category: 'fullstack',
  },
  {
    slug: 'inventory-api-system',
    title: 'Inventory API System',
    summary: 'Built REST APIs with Spring Boot & PostgreSQL integrating vehicles, media, and leads from multiple partner systems with real-time synchronization.',
    description: 'Full case study coming soon...',
    coverImage: '/assets/images/portfolio2.jpg',
    logo: '/assets/images/react.svg',
    tags: ['Spring Boot', 'PostgreSQL', 'Redis'],
    metric: {
      icon: 'sync',
      value: 'Realtime sync',
    },
    category: 'backend',
  },
  {
    slug: 'nextjs-frontend-platform',
    title: 'Next.js 15 Frontend Platform',
    summary: 'Engineered SSR, dynamic routes, i18n, and SEO optimization for dealer websites with 40% reduction in Time to First Byte.',
    description: 'Full case study coming soon...',
    coverImage: '/assets/images/portfolio3.jpg',
    logo: '/assets/images/react.svg',
    tags: ['Next.js', 'React', 'SEO'],
    metric: {
      icon: 'tachometer-alt',
      value: '-40% TTFB',
    },
    category: 'frontend',
  },
]

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

export interface TechStackItem {
  name: string
  icon: string
  description: string
}

export const techStack: TechStackItem[] = [
  {
    name: 'Spring Boot',
    icon: '/assets/images/springboot.svg',
    description: 'REST APIs · services · security',
  },
  {
    name: 'Next.js / React',
    icon: '/assets/images/react.svg',
    description: 'SSR · SEO · dashboards',
  },
  {
    name: 'PostgreSQL / MySQL',
    icon: '/assets/images/postgresql.svg',
    description: 'schema design · migrations',
  },
  {
    name: 'Docker & CI/CD',
    icon: '/assets/images/docker.svg',
    description: 'pipelines · zero-downtime',
  },
  {
    name: 'Redis / Caching',
    icon: '/assets/images/redis.svg',
    description: 'speed · scale · stability',
  },
  {
    name: 'Typesense Search',
    icon: '/assets/images/typesense.svg',
    description: 'instant search · filters',
  },
]

