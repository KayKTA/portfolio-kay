import ThemeRegistry from '@/lib/ThemeRegistry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kaniba Keita | Développeuse Fullstack React/Next.js • Data & IA',
    description: '8 ans d\'expérience en développement fullstack. Spécialisée React, Next.js, Node.js et Data/IA. Je transforme vos idées en produits digitaux performants.',
    keywords: [
        'Kaniba Keita',
        'Développeuse Fullstack',
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'Data Science',
        'IA',
        'JavaScript',
        'Portfolio',
        'Freelance',
    ],
    authors: [{ name: 'Kaniba Keita' }],
    creator: 'Kaniba Keita',

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://kay-kta.vercel.app',
        siteName: 'Kaniba Keita - Portfolio',
        title: 'Kaniba Keita | Développeuse Fullstack React/Next.js',
        description: '8 ans d\'expérience • React/Next.js/Node.js • Data & IA • Je transforme vos idées en produits digitaux performants.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Kaniba Keita - Développeuse Fullstack',
            },
        ],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <head>
                {/* Favicons */}
                <link rel="icon" href="/favicon.ico?v=1" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />

                {/* Preconnect pour performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    )
}
