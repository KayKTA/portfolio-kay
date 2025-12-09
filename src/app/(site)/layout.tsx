import ThemeRegistry from '@/lib/ThemeRegistry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kay | Portfolio',
    description: 'Full-Stack | Data Viz | Impact',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <head>
                <link rel="icon" href="/favicon.ico?v=1" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
            </head>
            <body>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    )
}
