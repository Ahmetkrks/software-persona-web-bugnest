import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('bugnest_theme') || 'light');

  useEffect(() => {
    localStorage.setItem('bugnest_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <Header activePage={activePage} setActivePage={setActivePage} theme={theme} onToggleTheme={toggleTheme} />
      {activePage === 'home' ? <Home /> : <About />}
    </div>
  );
}

export default App;
