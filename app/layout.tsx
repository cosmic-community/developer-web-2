import type { Metadata } from 'next'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Developer Portfolio | Full Stack Web Developer',
  description: 'Professional full stack developer portfolio showcasing modern web applications, technical skills, and client testimonials. Specializing in React, Node.js, and cloud technologies.',
  keywords: 'full stack developer, web developer, React, Node.js, TypeScript, portfolio',
  authors: [{ name: 'Developer Portfolio' }],
  openGraph: {
    title: 'Developer Portfolio | Full Stack Web Developer',
    description: 'Professional developer portfolio with projects, skills, and testimonials',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-50">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}