# Yassine REMMANI — Portfolio (Next.js 15)

A world-class, HR-centric portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Goals

- **Instant HR clarity**: Communicate value in <5 seconds
- **Modern SaaS aesthetic**: Clean grid, premium typography, subtle gradients, smooth motion
- **Performance**: Lighthouse ≥95 on mobile and desktop
- **Accessibility**: WCAG AA compliant
- **SEO**: Comprehensive technical SEO with structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── projects/           # Projects pages
│   ├── about/              # About page
│   ├── resume/             # Resume page
│   ├── blog/               # Blog pages
│   ├── contact/            # Contact page
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Global styles
│
├── components/             # React components
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, Projects, etc.)
│   ├── cards/              # Card components
│   ├── seo/                # SEO components
│   └── ContactDock.tsx    # Sticky contact dock
│
├── lib/                    # Utilities
│   ├── seo.ts              # SEO metadata helpers
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # Content data
│
├── public/                 # Static assets
│   └── assets/             # Images, fonts, etc.
│
└── styles/                 # Additional styles
```

## 🎨 Design System

### Colors

- **Ink**: `#0B1220` (primary background)
- **Teal Accent**: `#27e98b` (dark theme), `#10b981` (light theme)
- **Slate Neutrals**: Various grays for text hierarchy

### Typography

- **Font Family**: Inter (body), Plus Jakarta Sans (headings)
- **Scale**: Responsive with `clamp()` for fluid typography

### Spacing

- **Base Unit**: 8px
- **Scale**: `0.25rem` (4px) to `5rem` (80px)

## 📝 Adding Content

### Adding a Project

1. Add project data to `lib/constants.ts`:
```typescript
{
  slug: 'project-name',
  title: 'Project Title',
  summary: 'Brief summary...',
  description: 'Full description...',
  coverImage: '/assets/images/project.jpg',
  logo: '/assets/images/tech.svg',
  tags: ['Spring Boot', 'Next.js'],
  metric: {
    icon: 'chart-line',
    value: '4,000+ users',
  },
  category: 'fullstack',
}
```

2. Create a case study page at `app/projects/[slug]/page.tsx` (already set up with template)

### Adding a Blog Post

1. Create an MDX file in `content/blog/` (when MDX is configured)
2. Or add blog post data to a constants file and render dynamically

### Updating Hero Content

Edit `components/sections/Hero.tsx` and `lib/constants.ts`

### Changing Colors

Edit `tailwind.config.ts` and `app/globals.css`

## 🔧 Customization

### Theme

The site supports light/dark themes. Toggle via the theme button in the navbar. Theme preference is stored in localStorage.

### SEO

- Metadata is managed via `lib/seo.ts`
- Structured data (JSON-LD) is added via `components/seo/SeoJsonLd.tsx`
- Sitemap is generated dynamically in `app/sitemap.ts`
- Robots.txt is configured in `app/robots.ts`

### Performance

- Images use Next.js `Image` component with automatic optimization
- Fonts are preloaded and use `font-display: swap`
- Code splitting is automatic with Next.js
- Dynamic imports for heavy components below the fold

## 📊 Performance

### Optimization Checklist

- ✅ Semantic HTML
- ✅ CSS variables for efficient theming
- ✅ Next.js Image optimization
- ✅ Font preloading
- ✅ Code splitting
- ✅ Dynamic imports

### Lighthouse Score

Target: ≥95 on all metrics

To test:
1. Run `npm run build`
2. Run `npm start`
3. Open Chrome DevTools → Lighthouse tab
4. Run audit

## ♿ Accessibility

### WCAG AA Compliance

- ✅ Semantic HTML (`<nav>`, `<main>`, `<article>`, etc.)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators (visible rings)
- ✅ Skip-to-content link
- ✅ Color contrast ratios (4.5:1 for text)
- ✅ Touch targets ≥44px

### Testing Accessibility

1. Use axe DevTools browser extension
2. Test with keyboard only (Tab, Enter, Space)
3. Test with screen reader (NVDA/JAWS or VoiceOver)

## 🔍 SEO

### Features

- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ OpenGraph and Twitter Card meta tags
- ✅ JSON-LD structured data (Person, Project, BlogPosting, BreadcrumbList, WebSite)
- ✅ Unique titles and descriptions per page

### SEO Scripts

```bash
npm run seo:audit      # Check metadata, canonicals, robots/sitemap
npm run seo:lighthouse # Run Lighthouse CI
npm run seo:validate  # Validate JSON-LD structure
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Connect via Git or use Netlify CLI
- **AWS Amplify**: Connect repository
- **Docker**: Build with `docker build` (add Dockerfile)

## 📄 License

All rights reserved. This portfolio is personal property.

## 🤝 Contributing

This is a personal portfolio. If you find bugs or have suggestions, feel free to open an issue.

## 📧 Contact

- **Email**: remmanidev@gmail.com
- **LinkedIn**: [linkedin.com/in/yassine-remmani](https://www.linkedin.com/in/yassine-remmani/)
- **GitHub**: [github.com/yassine-RM](https://github.com/yassine-RM)

---

Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

