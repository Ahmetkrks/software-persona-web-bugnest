function Header({ activePage, setActivePage }) {
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
    </header>
  );
}

export default Header;
