import { absoluteUrl, canonicalUrl, personJobTitle, personName, siteName, siteUrl, socialProfiles } from './seo'
import type { Locale } from './i18n'

/**
 * Schema.org JSON-LD builders. Every node links to one Person and one WebSite
 * entity through stable @id values, so search engines can connect all pages
 * of remmani.dev to the same person.
 */
export const PERSON_ID = `${siteUrl}/#person`
export const WEBSITE_ID = `${siteUrl}/#website`

type Node = Record<string, unknown>
type Breadcrumb = { name: string; url: string }

const personRef = { '@id': PERSON_ID }
const websiteRef = { '@id': WEBSITE_ID }

export function graph(...nodes: Node[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}

const personDescription: Record<Locale, string> = {
  en: 'Yassine Remmani is a Senior Full-Stack Developer and software engineer based in Casablanca, Morocco, with 6+ years of experience building production web platforms with Java, Spring Boot, React, Next.js, PostgreSQL, Kafka, Docker and AWS.',
  fr: 'Yassine Remmani est développeur full-stack senior et ingénieur logiciel basé à Casablanca, au Maroc, avec plus de 6 ans d’expérience dans la conception de plateformes web en production avec Java, Spring Boot, React, Next.js, PostgreSQL, Kafka, Docker et AWS.',
}

export function personNode(locale: Locale): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: personName,
    alternateName: 'Yassine REMMANI',
    givenName: 'Yassine',
    familyName: 'Remmani',
    jobTitle: personJobTitle,
    description: personDescription[locale],
    url: `${siteUrl}/`,
    mainEntityOfPage: canonicalUrl(`/${locale}`),
    image: {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#person-image`,
      url: absoluteUrl('/images/me.png'),
      width: 556,
      height: 449,
      caption: personName,
    },
    email: 'mailto:remmanidev@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    sameAs: [socialProfiles.linkedin, socialProfiles.github],
    worksFor: {
      '@type': 'Organization',
      name: 'Auto Dealers Digital',
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Ibn Tofail University' },
      { '@type': 'CollegeOrUniversity', name: 'EST Safi' },
      { '@type': 'CollegeOrUniversity', name: 'EST Meknes' },
    ],
    knowsLanguage: ['ar', 'fr', 'en'],
    knowsAbout: [
      'Software Engineering',
      'Full-Stack Development',
      'Backend Development',
      'Java',
      'Spring Boot',
      'REST APIs',
      'Apache Kafka',
      'Event-driven architecture',
      'Microservices',
      'Multi-tenant SaaS',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'React',
      'Next.js',
      'TypeScript',
      'Docker',
      'Amazon Web Services',
      'CI/CD',
      'Keycloak',
      'OAuth2',
      'AI integration',
      'Retrieval-Augmented Generation',
      'AWS Bedrock',
    ],
  }
}

export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${siteUrl}/`,
    name: siteName,
    alternateName: ['remmani.dev', 'Yassine Remmani — Software Engineer'],
    inLanguage: ['en', 'fr'],
    author: personRef,
    publisher: personRef,
    about: personRef,
  }
}

export function breadcrumbNode(pageUrl: string, breadcrumbs: Breadcrumb[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  }
}

/** WebPage node (+ BreadcrumbList when breadcrumbs are given). */
export function webPageNodes(options: {
  type?: 'WebPage' | 'ProfilePage' | 'AboutPage' | 'CollectionPage' | 'ContactPage'
  name: string
  description: string
  pathname: string
  locale: Locale
  breadcrumbs?: Breadcrumb[]
  image?: string
}): Node[] {
  const { type = 'WebPage', name, description, pathname, locale, breadcrumbs, image } = options
  const url = canonicalUrl(pathname)
  const isProfile = type === 'ProfilePage' || type === 'AboutPage'

  const page: Node = {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: websiteRef,
    about: personRef,
    author: personRef,
    primaryImageOfPage: image ? absoluteUrl(image) : { '@id': `${siteUrl}/#person-image` },
    ...(isProfile ? { mainEntity: personRef } : {}),
  }

  if (!breadcrumbs?.length) return [page]
  page.breadcrumb = { '@id': `${url}#breadcrumb` }
  return [page, breadcrumbNode(url, breadcrumbs)]
}

/** ItemList schema for the projects/case studies index page */
export function projectsItemListNode(
  projects: readonly { slug: string; title: string }[],
  locale: Locale,
  listName: string
): Node {
  const listUrl = canonicalUrl(`/${locale}/projects`)
  return {
    '@type': 'ItemList',
    '@id': `${listUrl}#projects`,
    name: listName,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: canonicalUrl(`/${locale}/projects/${p.slug}`),
    })),
  }
}

export function caseStudyNode(options: {
  name: string
  description: string
  url: string
  image: string
  keywords: string[]
  locale: Locale
}): Node {
  const { name, description, url, image, keywords, locale } = options
  return {
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: name,
    description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    image: absoluteUrl(image),
    keywords: keywords.join(', '),
    inLanguage: locale,
    author: personRef,
    publisher: personRef,
  }
}

/** BlogPosting schema for blog article pages */
export function blogPostingNode(options: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  keywords?: string[]
  image?: string
  locale: Locale
}): Node {
  const { headline, description, url, datePublished, dateModified, keywords, image, locale } = options
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: locale,
    author: { '@id': PERSON_ID, '@type': 'Person', name: personName, url: `${siteUrl}/` },
    publisher: personRef,
    isPartOf: websiteRef,
    ...(image ? { image: absoluteUrl(image) } : {}),
    ...(keywords?.length ? { keywords: keywords.join(', ') } : {}),
  }
}
