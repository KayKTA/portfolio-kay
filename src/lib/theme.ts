import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
        accent: Palette['primary']
    }
    interface PaletteOptions {
        accent?: PaletteOptions['primary']
    }
}

const colors = {
  paperLight:  '#F5ECD7',   // Crème vintage
  paperDeep:   '#FFE7A1',
  ink:         '#1A0F00',   // Noir profond
  accentRed:   '#AE2B1F',   // Rouge bordeaux foncé
  accentOrange: '#E85D3B',  // Orange brûlé
  accentYellow: '#FFD34E',  // Jaune
  grid:        '#C27C2A',
};

const theme = createTheme({
    palette: {
        mode: 'light',
        primary:   { main: colors.accentRed },
        secondary: { main: colors.accentOrange },
        background:{ default: colors.paperLight, paper: colors.paperLight },
        text:      { primary: colors.ink, secondary: '#4A2800' },
        divider:   colors.accentRed,
    },
    shape: { borderRadius: 0 },
    typography: {
        fontFamily: "'Fredoka', 'Righteous', 'Rounded', system-ui, sans-serif",
        fontWeightBold: 900,
        h1: {
            fontFamily: "'Fredoka One', 'Bowlby One SC', 'Impact', sans-serif",
            fontWeight: 900,
            letterSpacing: -2,
            textTransform: 'uppercase',
        },
        h2: {
            fontFamily: "'Fredoka One', 'Bowlby One SC', 'Impact', sans-serif",
            fontWeight: 900,
            letterSpacing: -1,
            textTransform: 'uppercase',
        },
        h3: {
            fontFamily: "'Fredoka One', 'Bowlby One SC', sans-serif",
            fontWeight: 900,
            textTransform: 'uppercase',
        },
        h4: {
            fontFamily: "'Fredoka', 'Righteous', sans-serif",
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        h5: {
            fontFamily: "'Fredoka', 'Righteous', sans-serif",
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        h6: {
            fontFamily: "'Fredoka', 'Righteous', sans-serif",
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        button: {
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    borderWidth: 4,
                    fontSize: '1rem',
                    fontWeight: 700,
                    boxShadow: '6px 6px 0 rgba(0,0,0,0.2)',
                    '&:hover': {
                        borderWidth: 4,
                        boxShadow: '8px 8px 0 rgba(0,0,0,0.25)',
                        transform: 'translate(-1px, -1px)',
                    },
                },
            },
        },
    },
});

export default theme;
export { colors };
