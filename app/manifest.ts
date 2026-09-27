import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yassine Remmani — Senior Full-Stack Developer',
    short_name: 'Yassine Remmani',
    description: 'Portfolio of Yassine Remmani, Senior Full-Stack Developer and software engineer.',
    start_url: '/en',
    display: 'browser',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
