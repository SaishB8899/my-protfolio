function Navbar({ activeSection, isMenuOpen, navItems, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <nav className="navbar glass-panel">
        <button className="brand" type="button" onClick={() => onNavigate("home")}>
          SB
        </button>

        <button
          className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          onClick={onToggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`} id="site-navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? "active" : ""}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
