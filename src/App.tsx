import './App.css';
import { ThemeProvider } from 'styled-components';

import { CoffeeModal } from './components';
import { QUERIES } from './utils/constants';
import { CoffeeListPage } from './pages/CoffeeListPage';

function App() {
  return (
    <ThemeProvider theme={{ queries: QUERIES }}>
      <div className="App">
        <CoffeeModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
