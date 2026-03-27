const skills = [
  { name: "Java", detail: "Core language and OOP", level: 88 },
  { name: "SQL", detail: "Queries and database logic", level: 82 },
  { name: "HTML", detail: "Semantic page structure", level: 92 },
  { name: "CSS", detail: "Responsive styling and layout", level: 86 },
  { name: "JavaScript", detail: "Interactive UI behavior", level: 78 }
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading" data-reveal style={{ "--delay": "0.05s" }}>
          <p className="section-tag">Skills</p>
          <h2>Technologies I use to learn, build, and improve.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className="skill-card glass-panel"
              data-reveal
              style={{ "--delay": `${0.08 + index * 0.06}s` }}
            >
              <div className="skill-card-header">
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.detail}</p>
                </div>
                <span>{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <span style={{ width: `${skill.level}%` }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
