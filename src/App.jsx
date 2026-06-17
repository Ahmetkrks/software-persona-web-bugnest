import { useState } from 'react';
import Header from './components/Header.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app-shell">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'home' ? <Home /> : <About />}
    </div>
  );
}

export default App;
