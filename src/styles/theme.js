import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ffcc',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#ffff',
      paper: '#0a1a2b',
    },
  },
  typography: {
    fontFamily: 'Orbitron, sans-serif',
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export default theme;