const projects = [
  {
    id: "01",
    title: "Student Management System",
    badge: "Java Project",
    description:
      "A Java-based system for managing student records with structured CRUD operations and SQL-backed data handling.",
    points: "Focused on clean record workflows, backend logic, and dependable data organization.",
    stack: ["Java", "SQL", "Database Design"]
  },
  {
    id: "02",
    title: "Portfolio Website",
    badge: "Frontend Project",
    description:
      "A responsive personal website built to present profile details, projects, skills, and contact information in a polished format.",
    points: "Focused on modern UI design, mobile responsiveness, and smooth interaction patterns.",
    stack: ["React", "CSS", "JavaScript"]
  }
];

function Projects({ onNavigate }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading" data-reveal style={{ "--delay": "0.05s" }}>
          <p className="section-tag">Projects</p>
          <h2>Selected work that reflects my current technical focus.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card glass-panel tilt-card"
              data-reveal
              style={{ "--delay": `${0.12 + index * 0.08}s` }}
            >
              <div className="project-card-top">
                <p className="project-index">{project.id}</p>
                <span className="project-badge">{project.badge}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="project-stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-footer">
                <span>{project.points}</span>
                <button type="button" onClick={() => onNavigate("contact")}>
                  Connect
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
