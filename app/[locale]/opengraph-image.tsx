import { readFile } from 'fs/promises'
import path from 'path'
import { ImageResponse } from 'next/og'
import { locales } from '@/lib/i18n'

export const alt = 'Yassine Remmani — Senior Full-Stack Developer & Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const copy = {
  en: {
    role: 'Senior Full-Stack Developer',
    subtitle: 'Software Engineer · Casablanca, Morocco',
  },
  fr: {
    role: 'Développeur Full-Stack Senior',
    subtitle: 'Ingénieur logiciel · Casablanca, Maroc',
  },
} as const

const stack = ['Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS']

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = locale === 'fr' ? copy.fr : copy.en
  const logo = await readFile(path.join(process.cwd(), 'public/images/my-logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(109,179,63,0.22), transparent 45%)',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={110} height={74} alt="" />
          <div style={{ fontSize: 30, color: '#a3a3a3' }}>remmani.dev</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Yassine Remmani
          </div>
          <div style={{ fontSize: 50, fontWeight: 600, color: '#6DB33F', marginTop: 18 }}>{t.role}</div>
          <div style={{ fontSize: 30, color: '#a3a3a3', marginTop: 14 }}>{t.subtitle}</div>
        </div>

        <div style={{ display: 'flex', gap: 14 }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                fontSize: 24,
                padding: '8px 18px',
                borderRadius: 10,
                border: '1px solid #2e2e2e',
                background: '#171717',
                color: '#d4d4d4',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}
