import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import { translations } from './utils/translations.js';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('bugnest_theme') || 'light');
  const [language, setLanguage] = useState(() => localStorage.getItem('bugnest_language') || 'en');
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem('bugnest_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('bugnest_language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      {activePage === 'home' ? <Home t={t} /> : <About t={t} />}
    </div>
  );
}

export default App;
