function About() {
  const aboutItems = [
    {
      title: "Education",
      text: "Bachelor of Computer Applications graduate with a foundation in programming, databases, and web technologies."
    },
    {
      title: "Career Goal",
      text: "Looking to begin my professional journey as a Java Developer and contribute to meaningful software projects."
    },
    {
      title: "Interests",
      text: "Interested in backend development, IT support, debugging, and building dependable user-friendly applications."
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading" data-reveal style={{ "--delay": "0.05s" }}>
          <p className="section-tag">About Me</p>
          <h2>Building a career around problem solving, consistency, and technical growth.</h2>
        </div>

        <div className="info-grid">
          {aboutItems.map((item, index) => (
            <article
              key={item.title}
              className="info-card glass-panel"
              data-reveal
              style={{ "--delay": `${0.12 + index * 0.08}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
