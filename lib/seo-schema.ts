import { canonicalUrl } from './seo'

export function personSchema(options?: { pathname?: string }) {
  const pathname = options?.pathname ?? '/'
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yassine REMMANI',
    jobTitle: 'Full-Stack Engineer',
    description: 'Full-Stack Engineer specializing in Spring Boot and Next.js, with AI integration (LLM APIs, AWS Bedrock). Scalable APIs, event-driven systems, multi-tenant platforms. Production-grade systems that match high-impact job offers.',
    url: canonicalUrl(pathname),
    sameAs: [
      'https://www.linkedin.com/in/yassine-remmani/',
      'https://github.com/yassine-RM',
    ],
    email: 'remmanidev@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'Morocco',
    },
    knowsAbout: [
      'Spring Boot',
      'Java',
      'Microservices',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'Keycloak',
      'REST APIs',
      'Event-driven architecture',
      'Multi-tenant systems',
      'Next.js',
      'AI integration',
      'OpenAI',
      'RAG',
      'Docker',
      'CI/CD',
    ],
    image: `${canonicalUrl('')}/images/me.png`,
    worksFor: {
      '@type': 'Organization',
      name: 'Auto Dealers Digital',
    },
  }
}

export function webSiteSchema(options?: { pathname?: string }) {
  const pathname = options?.pathname ?? '/'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yassine REMMANI — Full-Stack Engineer (Spring Boot & Next.js)',
    url: canonicalUrl(pathname),
    description: 'Full-Stack Engineer. Spring Boot, Next.js, AI integration. Scalable APIs, event-driven systems, multi-tenant platforms. PostgreSQL, Docker, Kafka, AWS.',
    publisher: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', url: `${canonicalUrl(pathname)}/?s={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webPageSchema(options: {
  name: string
  description: string
  pathname: string
  breadcrumbs?: { name: string; url: string }[]
}) {
  const { name, description, pathname, breadcrumbs } = options
  const url = canonicalUrl(pathname)

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    primaryImageOfPage: `${canonicalUrl('')}/images/me.png`,
    author: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
  }

  if (breadcrumbs?.length) {
    schema.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    }
  }

  return schema
}

export function softwareApplicationSchema(options: {
  name: string
  description: string
  url: string
  image?: string
  applicationCategory?: string
}) {
  const { name, description, url, image, applicationCategory = 'WebApplication' } = options
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: 'Web',
    image: image || `${canonicalUrl('')}/images/projects/travelos.png`,
    author: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
  }
}

/** ItemList schema for projects/case studies index page */
export function projectsItemListSchema(
  projects: { slug: string; title: string; summary: string }[],
  pathPrefix = ''
) {
  const prefix = pathPrefix && !pathPrefix.endsWith('/') ? pathPrefix : pathPrefix
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projects & Case Studies',
    description: 'Production-grade platforms: TravelOS, Automotive Digital Platform, Multi-Tenant Classified Ads.',
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      description: p.summary,
      url: canonicalUrl(`${prefix}/projects/${p.slug}`),
    })),
  }
}

export function caseStudySchema(options: {
  name: string
  description: string
  url: string
  image: string
  keywords: string[]
}) {
  const { name, description, url, image, keywords } = options
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: name,
    description,
    url,
    image: image.startsWith('http') ? image : `${canonicalUrl('')}${image}`,
    keywords: keywords.join(', '),
    author: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
  }
}

/** BlogPosting schema for blog article pages */
export function blogPostingSchema(options: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  keywords?: string[]
}) {
  const { headline, description, url, datePublished, dateModified, keywords } = options
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
    publisher: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
  }
  if (dateModified) schema.dateModified = dateModified
  if (keywords?.length) schema.keywords = keywords.join(', ')
  return schema
}
