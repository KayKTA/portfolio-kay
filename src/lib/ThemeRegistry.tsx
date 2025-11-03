'use client'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import '@fontsource/bebas-neue/400.css';   // Titres
import '@fontsource/inter/400.css';        // Texte
import '@fontsource/inter/600.css';
import "@fontsource/permanent-marker"; // Intro

const cache = createCache({ key: 'mui', prepend: true })

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
