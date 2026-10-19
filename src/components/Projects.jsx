import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Delivo",
      subtitle: "Online Food Delivery System",
      category: "Full Stack MERN Project",
      description:
        "Built an online food delivery application with user authentication, role-based access, restaurant and menu management, and order management.",
      details:
        "Implemented REST APIs, order tracking, and payment integration to support the food ordering workflow.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      link: "/project/delivo",
      liveUrl: "https://inquisitive-cocada-3b939f.netlify.app/",
      frontendGithub:
        "https://github.com/Aakankshapatil123/-fe-fsdcweeb4142-delivo",
      backendGithub:
        "https://github.com/Aakankshapatil123/be-fsdcweeb4142-delivo",
      number: "01",
    },
    {
      title: "Jobify",
      subtitle: "Job Portal & Tracking Application",
      category: "Full Stack MERN Project",
      description:
        "Developed a job portal with secure user authentication and role-based access control for job seekers and recruiters.",
      details:
        "Implemented REST APIs for job management and application tracking using JWT authentication.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      link: "/project/Jobify",
      liveUrl: "https://fe-fsdcwee4142-jobify.netlify.app/",
      frontendGithub:
        "https://github.com/Aakankshapatil123/fe-fsdcwee4142-jobify",
      backendGithub:
        "https://github.com/Aakankshapatil123/be-fsdcweeb4142-jobify",
      number: "02",
    },
    {
      title: "Notes App",
      subtitle: "Notes Management Application",
      category: "Full Stack MERN Project",
      description:
        "Developed a full-stack notes application with user authentication, protected routes, and note management functionality.",
      details:
        "Implemented REST APIs using Node.js and Express.js, with MongoDB for data storage. Users can create, view, and delete notes.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
      link: "/project/notes-app",
      liveUrl: "https://notespace-aakanksha.netlify.app/",
      frontendGithub: "https://github.com/Aakankshapatil123/re-fsdcweeb4142",
      backendGithub: "https://github.com/Aakankshapatil123/be-fsdcweeb4142",
      number: "03",
    },
    {
      title: "Invoice Builder",
      subtitle: "Invoice Generation Application",
      category: "Frontend Project",
      description:
        "Created a responsive invoice builder with functionality to add, edit, and delete invoice items.",
      details:
        "Implemented automatic subtotal, tax, and total calculations with PDF export using jsPDF.",
      technologies: ["React.js", "Tailwind CSS", "jsPDF"],
      link: "/project/invoice-builder",
      liveUrl: "https://invoicebuil.netlify.app/",
      githubUrl: "https://github.com/Aakankshapatil123/invoice-generator",
      number: "04",
    },
    {
      title: "Kanban Board",
      subtitle: "Task Management Application",
      category: "Frontend Project",
      description:
        "Developed a responsive task management application with task creation, editing, deletion, and drag-and-drop functionality.",
      details:
        "Used Context API for state management and localStorage to persist tasks between browser sessions.",
      technologies: ["React.js", "Tailwind CSS", "Context API", "localStorage"],
      link: "/project/kanban",
      liveUrl: "https://kanbanboardp.netlify.app/",
      githubUrl: "https://github.com/Aakankshapatil123/kanban-board",
      number: "05",
    },
  ];

  const buttonClass =
    "inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300";

  const liveButtonClass =
    "inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600";

  return (
    <section id="projects" className="bg-slate-900 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What I've built
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Explore my full-stack and frontend projects, the technologies I
            used, and links to their live demos and source code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-950/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-lg font-bold text-blue-400">
                  {project.number}
                </span>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-gray-400">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold transition-colors group-hover:text-blue-400">
                {project.title}
              </h3>

              <p className="mb-5 mt-2 text-sm font-medium text-blue-300">
                {project.subtitle}
              </p>

              <p className="mb-4 leading-7 text-gray-300">
                {project.description}
              </p>

              <p className="mb-6 leading-7 text-gray-400">{project.details}</p>

              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Technologies Used
              </h4>

              <div className="mb-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-800 pt-5">
                <h4 className="mb-4 text-sm font-semibold text-gray-300">
                  Project Links
                </h4>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={liveButtonClass}
                  >
                    Live Demo ↗
                  </a>

                  {project.frontendGithub && (
                    <a
                      href={project.frontendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClass}
                    >
                      Frontend GitHub ↗
                    </a>
                  )}

                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClass}
                    >
                      Backend GitHub ↗
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClass}
                    >
                      GitHub ↗
                    </a>
                  )}

                  <Link to={project.link} className={buttonClass}>
                    More Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
