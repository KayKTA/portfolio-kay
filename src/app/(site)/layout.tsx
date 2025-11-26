import ThemeRegistry from '@/lib/ThemeRegistry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kay | Portfolio',
  description: 'Full-Stack | Data Viz | Impact',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
