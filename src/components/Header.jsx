function Header({ activePage, setActivePage, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => setActivePage('home')}>
        <span className="brand__mark">BN</span>
        <span>BugNest</span>
      </button>

      <nav className="site-nav" aria-label="Main navigation">
        <button
          className={activePage === 'home' ? 'nav-link nav-link--active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('home')}
        >
          Home
        </button>
        <button
          className={activePage === 'about' ? 'nav-link nav-link--active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('about')}
        >
          About
        </button>
      </nav>

      <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-pressed={theme === 'dark'}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
