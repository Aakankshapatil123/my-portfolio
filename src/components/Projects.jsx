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
      link: "/project/jobify",
      liveUrl: "https://fe-fsdcwee4142-jobify.netlify.app/",
      frontendGithub:
        "https://github.com/Aakankshapatil123/fe-fsdcwee4142-jobify.git",
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
      frontendGithub:
        "https://github.com/Aakankshapatil123/re-fsdcweeb4142",
      backendGithub:
        "https://github.com/Aakankshapatil123/be-fsdcweeb4142",
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
      githubUrl:
        "https://github.com/Aakankshapatil123/invoice-generator",
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
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Context API",
        "localStorage",
      ],
      link: "/project/kanban",
      liveUrl: "https://kanbanboardp.netlify.app/",
      githubUrl:
        "https://github.com/Aakankshapatil123/kanban-board",
      number: "05",
    },
  ];

  const buttonClass =
    "inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300";

  const liveButtonClass =
    "inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-500/30";

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-900 px-6 py-20 md:py-28"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            What I've built
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Explore my full-stack and frontend applications, the technologies
            I used, and links to live demos and source code.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/10 md:p-8"
            >
              {/* Gradient top border */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-300 to-indigo-500 opacity-60 transition-opacity group-hover:opacity-100" />

              {/* Project number and category */}
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-lg font-extrabold text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  {project.number}
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-center text-xs font-medium text-slate-400">
                  {project.category}
                </span>
              </div>

              {/* Project information */}
              <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-blue-300 md:text-3xl">
                {project.title}
              </h3>

              <p className="mb-5 mt-2 text-sm font-semibold text-cyan-300">
                {project.subtitle}
              </p>

              <p className="mb-4 text-sm leading-7 text-slate-300 md:text-base">
                {project.description}
              </p>

              <p className="mb-6 text-sm leading-7 text-slate-400">
                {project.details}
              </p>

              {/* Technology badges */}
              <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                Technologies Used
              </h4>

              <div className="mb-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 transition duration-200 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-auto border-t border-slate-800 pt-5">
                <h4 className="mb-4 text-sm font-semibold text-slate-300">
                  Explore Project
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
                      Frontend Code ↗
                    </a>
                  )}

                  {project.backendGithub && (
                    <a
                      href={project.backendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClass}
                    >
                      Backend Code ↗
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

