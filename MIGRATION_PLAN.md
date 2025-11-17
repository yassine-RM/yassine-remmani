# Next.js 15 Migration Plan — remmanidev.com

**Date:** 2025-01-20  
**Status:** Planning → Implementation  
**Target:** World-class, HR-centric portfolio with Next.js 15

---

## Executive Summary

Migrate from vanilla HTML/CSS/JS to **Next.js 15 App Router** with TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Transform into a best-in-class portfolio that communicates value to HR in <5 seconds.

**Current State:**
- Vanilla HTML/CSS/JS
- Single-page with sections
- Basic SEO (needs enhancement)
- Good design system foundation

**Target State:**
- Next.js 15 App Router + TypeScript
- Multi-page with dynamic routes
- Comprehensive SEO (sitemap, OG images, JSON-LD)
- Modern SaaS aesthetic with premium UX
- Lighthouse ≥95 on all metrics
- WCAG AA compliant

---

## Final Sitemap

```
/
├── / (Home)
│   ├── Hero (name, title, value prop, proof points, CTAs)
│   ├── Project Highlights (3-6 featured)
│   ├── Services (What I do)
│   ├── Tech Stack (badges)
│   ├── Testimonials
│   └── CTA Banner
│
├── /projects
│   ├── Grid view with filters (category, tech stack)
│   └── Each project → /projects/[slug]
│
├── /projects/[slug] (Case Study Template)
│   ├── Context (problem statement)
│   ├── Constraints
│   ├── Architecture (diagrams/code snippets)
│   ├── Before/After
│   ├── Metrics (concrete numbers)
│   ├── Learnings
│   ├── Stack (badges)
│   └── Links (live site, GitHub if public)
│
├── /about
│   ├── Short story
│   ├── Experience timeline
│   ├── Certifications
│   └── Photo
│
├── /resume
│   ├── Render 1-page resume
│   └── "Download PDF" server action
│
├── /blog
│   ├── MDX posts listing
│   └── /blog/[slug] (individual posts)
│
└── /contact
    ├── Email form
    ├── Direct links (email, LinkedIn, GitHub, Calendly)
    └── Persistent contact dock (sticky)
```

---

## Component Architecture

### Core Layout Components
- `Navbar` (sticky, blur, active section highlights)
- `Footer` (simple, clean)
- `SectionWrapper` (max-width, rhythm)
- `Container` (responsive padding)

### UI Primitives
- `Button` (primary, secondary, variants)
- `Card` (base card component)
- `Badge` / `Chip` (tech stack, categories)
- `Grid` (12-column system)

### Feature Components
- `ProjectCard` (logo/cover, tags, summary, metric, link)
- `CaseStudyTemplate` (reusable for all case studies)
- `TestimonialCard` (avatar, role, quote)
- `CTABanner` (dual buttons: resume + call)
- `ContactDock` (sticky, email/LinkedIn/GitHub/Calendly)
- `Timeline` (experience, certifications)
- `TechStackPills` (interactive badges)

### SEO Components
- `SeoJsonLd` (safe JSON-LD renderer)
- `Metadata` (centralized metadata builder)
- `Breadcrumbs` (visible + structured)

---

## Design System Tokens

### Colors
```css
--color-ink: #0B1220 (primary background)
--color-slate-*: Neutral grays (900-100)
--color-teal: #27e98b (accent, dark theme)
--color-teal: #10b981 (accent, light theme)
```

### Typography
- **Font Stack:** Inter (body), Plus Jakarta Sans (headings)
- **Scale:** Responsive with `clamp()`
- **Weights:** 400, 600, 700

### Spacing
- **Base Unit:** 8px
- **Scale:** 0.25rem (4px) → 5rem (80px)

### Motion
- **Duration:** 200-300ms ease-out
- **Hover:** Subtle lift (translateY(-2px))
- **Focus:** Visible rings (2px teal)

### Shadows
- **Card:** Soft, layered
- **Accent Glow:** Teal shadow for CTAs

---

## SEO Implementation Plan

### Phase A: Technical SEO (Files & Utilities)

1. **`/app/sitemap.ts`**
   - Generate from routes/content
   - Include: home, projects, case studies, blog posts, about, resume, contact
   - Dynamic lastmod dates

2. **`/public/robots.txt`**
   - Allow crawl
   - Point to sitemap
   - Disallow non-public routes

3. **`/lib/seo.ts`**
   - `canonicalUrl(origin, pathname)` helper
   - `buildMetadata(page)` util (title, description, OG, Twitter, canonical)

4. **`/app/api/og/route.ts`**
   - Dynamic OG image generation
   - Title, subtitle, cover image
   - Use `@vercel/og` or `satori`

5. **`/components/SeoJsonLd.tsx`**
   - Safe JSON-LD renderer
   - Person, Project, BlogPosting, BreadcrumbList, WebSite + SearchAction

6. **Schema Implementation:**
   - **Home:** Person + WebSite + SearchAction + BreadcrumbList
   - **Project:** Project (name, summary, dates, role, stack, metrics, images, URL)
   - **Blog:** BlogPosting (headline, datePublished, author, tags, image)
   - **About:** Person (sameAs links)

### Phase B: On-Page SEO & Copy

1. **Hero Copy (HR-First):**
   ```
   "Yassine Remmani — Full-Stack Engineer (Spring Boot • Next.js • PostgreSQL • Docker). 
   I build resilient multi-tenant platforms and high-impact SaaS."
   ```

2. **Proof Points (Chips):**
   - "4,000+ dealer sites"
   - "Realtime inventory sync"
   - "0→1 platform"
   - "-40% TTFB"

3. **Case Study Structure:**
   - Problem → Constraints → Architecture → Before/After → Metrics → Stack → Links

4. **Internal Linking:**
   - Home → Top 3 case studies
   - Case studies → About/Contact/Related posts

### Phase C: Core Web Vitals

1. **Image Optimization:**
   - Use `next/image` with AVIF/WEBP
   - Explicit sizes
   - Preload LCP image

2. **Font Loading:**
   - Preload hero font
   - `font-display: swap`
   - Avoid FOIT

3. **Code Splitting:**
   - Dynamic import heavy components below fold
   - Minimize client components

4. **CLS Prevention:**
   - Reserve image/card sizes
   - Avoid layout shift on hydration

### Phase D: CI & Monitoring

1. **npm scripts:**
   - `seo:audit` — Check metadata, canonicals, robots/sitemap
   - `seo:lighthouse` — Run Lighthouse CI
   - `seo:validate` — JSON-LD shape tests

2. **GitHub Action:**
   - Lighthouse CI on PR
   - Fail if Performance/SEO/A11y < 95
   - Fail if LCP > 2.5s, CLS > 0.1, INP > 200ms

---

## Content Migration

### From Current Site

**Hero:**
- Name: Yassine Remmani
- Title: Full-Stack Engineer
- Tech: Spring Boot • Next.js • PostgreSQL • Docker
- Value Prop: "I build resilient multi-tenant platforms and high-impact SaaS"
- Proof Points: 4,000+ dealer sites, Realtime sync, 0→1 platform, -40% TTFB

**Projects (to migrate):**
1. Multi-Tenant Dealer Platform (4,000+ sites)
2. Inventory API System (Realtime sync)
3. Next.js 15 Frontend Platform (-40% TTFB)

**Experience:**
- Senior Full-Stack Developer @ Auto Dealers Digital (Dec 2019 → Present)
- 7 bullet points (already in index.html)

**Certifications:**
- Node.js (Bright Coding)
- Git (Bright Coding)
- React (Bright Coding)

**Contact:**
- Email: remmanidev@gmail.com
- Phone: +212 6 20 96 36 60
- LinkedIn: linkedin.com/in/yassine-remmani
- GitHub: github.com/yassine-RM
- Location: Casablanca, Morocco

---

## Implementation Checklist

### Phase 1: Setup & Foundation
- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Set up shadcn/ui
- [ ] Install Framer Motion
- [ ] Create design system tokens (colors, spacing, typography)
- [ ] Set up theme (light/dark mode)

### Phase 2: Core Components
- [ ] Navbar (sticky, blur, active highlights)
- [ ] Footer
- [ ] SectionWrapper / Container
- [ ] Button variants
- [ ] Card base
- [ ] Badge / Chip
- [ ] Grid system

### Phase 3: Feature Components
- [ ] ProjectCard
- [ ] CaseStudyTemplate
- [ ] TestimonialCard
- [ ] CTABanner
- [ ] ContactDock (sticky)
- [ ] Timeline
- [ ] TechStackPills

### Phase 4: Pages
- [ ] Home (hero, proof points, projects, services, tech, testimonials, CTA)
- [ ] Projects listing (grid + filters)
- [ ] Case study template (/projects/[slug])
- [ ] About (story, timeline, certs, photo)
- [ ] Resume (render + PDF download)
- [ ] Blog listing (MDX)
- [ ] Blog post (/blog/[slug])
- [ ] Contact (form + links)

### Phase 5: SEO Implementation
- [ ] sitemap.ts (dynamic generation)
- [ ] robots.txt
- [ ] lib/seo.ts (metadata utils)
- [ ] app/api/og/route.ts (dynamic OG images)
- [ ] SeoJsonLd component
- [ ] Add Person schema (home, about)
- [ ] Add Project schema (case studies)
- [ ] Add BlogPosting schema (blog posts)
- [ ] Add BreadcrumbList (all pages)
- [ ] Add WebSite + SearchAction (home)

### Phase 6: Content & Case Studies
- [ ] Migrate hero content
- [ ] Migrate project data
- [ ] Write flagship case study (Multi-Tenant Platform)
- [ ] Add testimonials (if available)
- [ ] Set up MDX for blog

### Phase 7: Performance & A11y
- [ ] Optimize images (next/image, AVIF/WEBP)
- [ ] Preload LCP image
- [ ] Font optimization (preload, swap)
- [ ] Code splitting (dynamic imports)
- [ ] CLS prevention (reserve sizes)
- [ ] WCAG AA compliance (contrast, keyboard nav, focus)
- [ ] Skip links, ARIA labels, semantic HTML

### Phase 8: CI & Documentation
- [ ] Set up Lighthouse CI
- [ ] Create GitHub Action
- [ ] Write README (setup, edit instructions)
- [ ] Document design system
- [ ] Document SEO setup

---

## Acceptance Criteria

### Visual & UX
- ✅ Above-the-fold communicates role + value + proof points + CTAs (mobile/desktop)
- ✅ Visual consistency (tokens), dark/light perfect parity
- ✅ Smooth motion (200-300ms ease-out)
- ✅ Responsive from 320px to 1440px+

### Performance
- ✅ Lighthouse ≥95 on mobile and desktop (Performance, SEO, A11y, Best Practices)
- ✅ LCP ≤ 2.5s
- ✅ CLS ≤ 0.1
- ✅ INP ≤ 200ms

### SEO
- ✅ Google Search Console: sitemap submitted, no critical coverage errors
- ✅ Each page: unique title, meta description, canonical, OG/Twitter, JSON-LD valid
- ✅ 3+ case studies with Project schema and internal links from Home

### Accessibility
- ✅ No obvious a11y violations (axe basic scan)
- ✅ Images have alt text
- ✅ Headings are logical (H1-H6)
- ✅ Keyboard navigation works
- ✅ Focus indicators visible
- ✅ Color contrast ≥ 4.5:1

---

## File Structure (Next.js 15)

```
/
├── app/
│   ├── layout.tsx (root layout, metadata, theme provider)
│   ├── page.tsx (home)
│   ├── projects/
│   │   ├── page.tsx (listing)
│   │   └── [slug]/
│   │       └── page.tsx (case study)
│   ├── about/
│   │   └── page.tsx
│   ├── resume/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx (listing)
│   │   └── [slug]/
│   │       └── page.tsx (post)
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   ├── og/
│   │   │   └── route.tsx (dynamic OG images)
│   │   └── resume/
│   │       └── route.tsx (PDF generation)
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── TechStack.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   ├── cards/
│   │   ├── ProjectCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── seo/
│   │   └── SeoJsonLd.tsx
│   └── ContactDock.tsx
│
├── lib/
│   ├── seo.ts (metadata utils)
│   ├── utils.ts (cn, etc.)
│   └── constants.ts (content data)
│
├── content/
│   ├── projects/
│   │   └── *.mdx (case studies)
│   └── blog/
│       └── *.mdx (blog posts)
│
├── public/
│   ├── images/
│   └── robots.txt
│
├── styles/
│   └── globals.css (Tailwind + design tokens)
│
└── package.json
```

---

## Next Steps

1. **Create this plan document** ✅
2. **Initialize Next.js 15 project**
3. **Set up design system**
4. **Build core components**
5. **Implement pages incrementally**
6. **Add SEO features**
7. **Write flagship case study**
8. **Optimize performance**
9. **Set up CI/CD**
10. **Document everything**

---

**Status:** Ready to begin implementation.

