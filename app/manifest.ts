import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mascot Bracket',
    short_name: 'Mascot Bracket',
    description: 'Create a printable bracket for the 2024 NCAA March Madness tournament based on the college\'s mascots!',
    start_url: '/',
    display: 'standalone',
    background_color: '#94c8e9',
    theme_color: '#bbb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        "src": "/icon2.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "/icon1.png",
        "type": "image/png",
        "sizes": "512x512"
      },
      {
        "src": "/icon1.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
  }
}