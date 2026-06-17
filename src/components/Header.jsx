function Header({ activePage, setActivePage, theme, onToggleTheme, language, setLanguage, t }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => setActivePage('home')}>
        <span className="brand__mark">BN</span>
        <span>BugNest</span>
      </button>

      <nav className="site-nav" aria-label={t.nav.mainNavigation}>
        <button
          className={activePage === 'home' ? 'nav-link nav-link--active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('home')}
        >
          {t.nav.home}
        </button>
        <button
          className={activePage === 'about' ? 'nav-link nav-link--active' : 'nav-link'}
          type="button"
          onClick={() => setActivePage('about')}
        >
          {t.nav.about}
        </button>
      </nav>

      <div className="header-actions">
        <div className="language-switch" aria-label={t.nav.languageLabel}>
          <button
            className={language === 'tr' ? 'language-switch__button language-switch__button--active' : 'language-switch__button'}
            type="button"
            onClick={() => setLanguage('tr')}
          >
            TR
          </button>
          <button
            className={language === 'en' ? 'language-switch__button language-switch__button--active' : 'language-switch__button'}
            type="button"
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>

        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-pressed={theme === 'dark'}>
          {theme === 'dark' ? t.nav.lightMode : t.nav.darkMode}
        </button>
      </div>
    </header>
  );
}

export default Header;
