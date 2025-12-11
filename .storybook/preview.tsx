import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { Preview } from '@storybook/nextjs-vite'
import theme from '../src/lib/theme'
import '@fontsource/bebas-neue/400.css';   // Titres
import '@fontsource/inter/400.css';        // Texte
import '@fontsource/inter/600.css';
import "@fontsource/permanent-marker"; // Intro

const preview: Preview = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <Container maxWidth="md" sx={{ py: 4 }}> */}

                    <Story />
                {/* </Container> */}
            </ThemeProvider>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
    },
}

export default preview
