import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import AnimatedCursor from './components/AnimatedCursor';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedCursor />
      <LoadingScreen />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;