function Hero({ onNavigate }) {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal style={{ "--delay": "0.05s" }}>
          <p className="eyebrow">BCA Graduate | Aspiring Backend Engineer</p>
          <h1>Saish Bandgar</h1>
          <h2>Java Developer focused on practical backend systems and polished web experiences.</h2>
          <p className="hero-text">
            I am an aspiring Java Developer with a strong interest in application development, SQL-driven
            systems, IT support, and clean user-focused interfaces. I enjoy building solutions that are
            reliable, structured, and ready for real-world use.
          </p>

          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => onNavigate("projects")}>
              View Projects
            </button>
            <button className="button button-secondary" type="button" onClick={() => onNavigate("contact")}>
              Contact Me
            </button>
            <a className="button button-secondary" href="/Saish-Bandgar-Resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        <aside className="hero-panel glass-panel floating-card" data-reveal style={{ "--delay": "0.18s" }}>
          <div className="hero-panel-top">
            <span className="status-dot" />
            <p>Ready for entry-level opportunities</p>
          </div>

          <ul className="focus-list">
            <li>
              <strong>Java Development</strong>
              <span>Building structured and maintainable backend logic.</span>
            </li>
            <li>
              <strong>Database Work</strong>
              <span>Designing and querying SQL-based systems.</span>
            </li>
            <li>
              <strong>IT Support</strong>
              <span>Debugging issues and helping systems run smoothly.</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
