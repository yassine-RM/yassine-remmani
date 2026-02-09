/**
 * Single source of truth for CV content — recruiter & ATS friendly.
 * Used by PDF generator and any resume preview.
 */

export const cvContact = {
  fullName: 'Yassine REMMANI',
  title: 'Senior Full-Stack Developer',
  location: 'Casablanca, Morocco',
  email: 'remmanidev@gmail.com',
  phone: '+212 6 20 96 36 60',
  linkedin: 'linkedin.com/in/yassine-remmani',
  github: 'github.com/yassine-RM',
  portfolio: 'remmanidev.com',
} as const

export const cvSummary = `Senior Backend-First Full-Stack Engineer with 6+ years building and maintaining production-grade web platforms. Specialized in Spring Boot and Next.js: scalable APIs, event-driven systems, clean architecture. Experienced in multi-tenant systems, secure authentication (OAuth2/JWT), and cloud deployment with AWS and Docker. Focus on system design, performance, and maintainable software that scales.`

export const cvSkills = {
  backend: ['Spring Boot', 'Java', 'REST APIs', 'Kafka', 'JPA / Hibernate'],
  frontend: ['Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'TypeScript'],
  database: ['PostgreSQL', 'MySQL', 'Redis'],
  security: ['OAuth2', 'JWT', 'RBAC', 'Keycloak'],
  cloudDevops: ['AWS (EC2, S3, RDS, Bedrock)', 'Docker', 'Docker Compose', 'CI/CD'],
  architecture: ['Microservices', 'Multi-tenant systems', 'Event-driven architecture'],
} as const

export const cvLanguages = [
  'Arabic (Native)',
  'English (Conversational)',
  'French (Conversational)',
] as const

export const cvHobbies = ['Travelling', 'Sport', 'Reading'] as const

export interface CVExperienceItem {
  jobTitle: string
  company: string
  dates: string
  bullets: string[]
}

export const cvExperience: CVExperienceItem[] = [
  {
    jobTitle: 'Senior Full-Stack Developer',
    company: 'Auto Dealers Digital',
    dates: 'December 2019 – Present',
    bullets: [
      'Designed and developed modern full-stack web applications using Spring Boot and Next.js, delivering scalable, maintainable, and production-ready solutions.',
      'Built secure and robust systems including authentication, authorization, and role-based access control (JWT, OAuth2, Keycloak).',
      'Developed RESTful APIs and integrated them seamlessly with responsive and SEO-optimized frontend interfaces.',
      'Implemented multi-tenant architectures and modular systems designed to scale with business growth.',
      'Containerized applications using Docker and Docker Compose, ensuring consistent environments across development and production.',
      'Deployed and maintained applications on AWS (EC2, S3, RDS), with cloud-ready configurations and monitoring.',
      'Collaborated with cross-functional teams (product, design, engineering) to translate requirements into high-quality features.',
      'Improved performance, code quality, and maintainability through clean architecture and best practices.',
    ],
  },
]

export interface CVProjectItem {
  name: string
  stack: string
  description: string
  techChoices?: string
}

export const cvProjects: CVProjectItem[] = [
  {
    name: 'Ad360 — Advertising management platform for car dealers',
    stack: 'Spring Boot · PostgreSQL · Redis · Kafka',
    description: 'Spring Boot backend for ad campaigns: high-volume processing, budgets, targeting, lead tracking. Integration with Inventory/CRM. Focus on scalability and business KPIs.',
  },
  {
    name: 'Multi-tenant classified ads platform (dealers)',
    stack: 'Spring Boot · PostgreSQL · Redis · Typesense',
    description: 'Multi-tenant system with tenant-id scoping. Intelligent real-time search and autocomplete via Typesense. Spring Boot REST APIs, PostgreSQL, Redis; emphasis on read-heavy optimization.',
  },
  {
    name: 'Central automotive platform (Inventory, CRM, Websites)',
    stack: 'Spring Boot · Kafka · PostgreSQL · Docker',
    description: 'Centralized Spring Boot APIs; Kafka event-driven workflows for data consistency and async processing. Inventory, CRM, and dealer websites at scale.',
  },
]

export interface CVEducationItem {
  degree: string
  institution: string
}

export const cvEducation: CVEducationItem[] = [
  { degree: "Master's Degree — Computer Science & Artificial Intelligence (Big Data)", institution: 'Ibn Tofail University' },
  { degree: "Professional Bachelor's Degree — Software Engineering", institution: 'EST Safi' },
  { degree: 'University Diploma of Technology (DUT) — Software Engineering', institution: 'EST Meknes' },
  { degree: 'Baccalaureate — Life & Earth Sciences', institution: 'El Qods High School, Chemmaia' },
]

export const RESUME_PDF_FILENAME = 'Yassine_Remmani_Senior_Backend_Engineer.pdf'
