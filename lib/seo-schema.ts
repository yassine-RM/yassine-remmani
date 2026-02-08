import { canonicalUrl } from './seo'

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yassine REMMANI',
    jobTitle: 'Senior Full-Stack Developer',
    description: 'Senior Full-Stack Developer specializing in Spring Boot, Next.js, and scalable platform architecture. Builds production-grade APIs and multi-tenant systems.',
    url: canonicalUrl('/'),
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
      'Next.js',
      'PostgreSQL',
      'Docker',
      'React',
      'TypeScript',
      'Java',
      'Kafka',
      'Multi-tenant Architecture',
      'REST APIs',
      'Event-driven systems',
    ],
    image: `${canonicalUrl('')}/images/me.png`,
    worksFor: {
      '@type': 'Organization',
      name: 'Auto Dealers Digital',
    },
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yassine REMMANI — Senior Full-Stack Developer',
    url: canonicalUrl('/'),
    description: 'Technical authority on Spring Boot, Next.js, and scalable platform architecture. Senior Full-Stack Developer building production-grade systems.',
    publisher: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', url: `${canonicalUrl('/')}/?s={search_term_string}` },
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
    image: image || `${canonicalUrl('')}/images/projects/travelos.jpg`,
    author: {
      '@type': 'Person',
      name: 'Yassine REMMANI',
    },
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
