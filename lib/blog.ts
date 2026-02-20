import { readFileSync } from 'fs'
import path from 'path'

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime?: string
  keywords?: string[]
  /** Cover image filename under /images/blogs (e.g. "Build production-ready RAG systems.webp") */
  coverImage?: string
}

const postsCatalog: BlogPostMeta[] = [
  {
    slug: 'building-production-ready-rag-systems-saas',
    title: 'Building Production-Ready RAG Systems for SaaS Applications (Spring Boot + Next.js)',
    excerpt:
      'Architecture-focused guide to Retrieval-Augmented Generation: orchestration with Spring Boot, vector stores, ingestion pipelines, and production concerns for multi-tenant SaaS.',
    date: '2025-02-15',
    readingTime: '12 min read',
    keywords: ['RAG', 'Spring Boot', 'Next.js', 'vector database', 'LLM', 'embeddings', 'SaaS'],
    coverImage: 'Build production-ready RAG systems.webp',
  },
  {
    slug: 'ai-travel-saas-architecture',
    title: 'Designing an AI-Powered Travel SaaS: From Data Ingestion to Intelligent Itineraries',
    excerpt:
      'Architecture-focused walkthrough of building an intelligent travel platform: Spring Boot backend, Next.js frontend, RAG for context-aware recommendations, and production considerations for multi-tenant SaaS.',
    date: '2025-02-20',
    readingTime: '14 min read',
    keywords: ['AI', 'travel SaaS', 'RAG', 'Spring Boot', 'Next.js', 'embeddings', 'itinerary', 'LLM', 'vector database'],
    coverImage: 'Designing an AI-Powered Travel SaaS- From Data Ingestion to Intelligent Itineraries.png',
  },
  {
    slug: 'ai-tools-developer-productivity',
    title: 'AI Tools That Help Developers Build Faster and Smarter',
    excerpt:
      'A practical, architecture-level guide to using AI tools across coding, testing, documentation, and DevOps to accelerate full-stack SaaS delivery without sacrificing quality.',
    date: '2026-02-20',
    readingTime: '11 min read',
    keywords: ['AI developer tools', 'developer productivity', 'Spring Boot', 'Next.js', 'RAG', 'SaaS engineering', 'DevOps automation'],
    coverImage: 'AI Tools That Help Developers Build Faster and Smarter.webp',
  },
]

const contentDir = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): BlogPostMeta[] {
  return postsCatalog
}

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return postsCatalog.find((p) => p.slug === slug)
}

/** locale: prefer content/blog/{slug}.{locale}.mdx, fallback to content/blog/{slug}.mdx */
export function getPostRawContent(slug: string, locale?: string): string | null {
  const meta = getPostBySlug(slug)
  if (!meta) return null

  if (locale) {
    const localePath = path.join(contentDir, `${slug}.${locale}.mdx`)
    try {
      return readFileSync(localePath, 'utf-8')
    } catch {
      // fallback to default
    }
  }
  const filePath = path.join(contentDir, `${slug}.mdx`)
  try {
    return readFileSync(filePath, 'utf-8')
  } catch {
    return null
  }
}

/** Strips YAML frontmatter (--- ... ---) and returns the markdown body. */
export function stripFrontmatter(raw: string): string {
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/)
  return match ? match[1].trim() : raw
}

/** Full URL path for a blog cover image (public/images/blogs). */
export function blogCoverImageSrc(filename: string): string {
  return `/images/blogs/${encodeURIComponent(filename)}`
}
