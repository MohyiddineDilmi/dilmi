import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />        
          <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
