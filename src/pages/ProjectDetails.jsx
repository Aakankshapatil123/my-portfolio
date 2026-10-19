import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    delivo: {
      title: "Delivo – Online Food Delivery System",
      description:
        "Delivo is a MERN-based online food delivery application with authentication, role-based access, restaurant and menu management, order management, REST APIs, payment integration, and order tracking.",
      technologies: "React.js • Node.js • Express.js • MongoDB • Tailwind CSS",
    },

    Jobify: {
      title: "Jobify - Job Portal & Tracking Application",
      description:
        "Engineered a MERN-based job portal application featuring secure user authentication and role-based access control. Developed RESTful APIs for job management and application tracking.",
      technologies: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT",
    },

    "notes-app": {
      title: "Notes App – Notes Management Application",
      description:
        "A full-stack notes application with user authentication, protected routes, and note management functionality. Users can create, view, and delete notes using a React frontend and Node.js, Express.js, and MongoDB backend.",
      technologies: "React.js • Node.js • Express.js • MongoDB • REST APIs",
    },

    "invoice-builder": {
      title: "Invoice Builder",
      description:
        "A responsive invoice generation application with CRUD functionality, automatic calculations, and PDF export.",
      technologies: "React.js • Tailwind CSS • jsPDF",
    },

    kanban: {
      title: "Kanban Board – Task Management Application",
      description:
        "A responsive task management application with task CRUD, drag-and-drop functionality, Context API, and localStorage persistence.",
      technologies: "React.js • Tailwind CSS • Context API • localStorage",
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
        <div>
          <h1 className="mb-4 text-3xl font-bold">Project Not Found</h1>
          <button
            onClick={() => window.history.back()}
            className="rounded-lg bg-blue-500 px-5 py-3 font-semibold transition duration-300 hover:bg-blue-600"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const buttonClass =
    "inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10";

  const liveDemoClass =
    "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600";

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Project Details
          </p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/10 md:p-10">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            About the Project
          </h2>

          <p className="mb-10 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            {project.description}
          </p>

          <div className="mb-10">
            <h2 className="mb-5 text-xl font-semibold md:text-2xl">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies
                .split(/[•,]/)
                .map((technology) => technology.trim())
                .filter(Boolean)
                .map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xl font-semibold md:text-2xl">
              Project Links
            </h2>

            <div className="flex flex-wrap gap-3">
              {id === "delivo" && (
                <>
                  <a
                    href="https://inquisitive-cocada-3b939f.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={liveDemoClass}
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/-fe-fsdcweeb4142-delivo.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    Frontend GitHub ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/be-fsdcweeb4142-delivo.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    Backend GitHub ↗
                  </a>
                </>
              )}

              {id === "Jobify" && (
                <>
                  <a
                    href="https://fe-fsdcwee4142-jobify.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={liveDemoClass}
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/fe-fsdcwee4142-jobify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    Frontend GitHub ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/be-fsdcweeb4142-jobify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    Backend GitHub ↗
                  </a>
                </>
              )}
              {id === "notes-app" && (
                <>
                  <a
                    href="https://notespace-aakanksha.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={liveDemoClass}
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/re-fsdcweeb4142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    Frontend GitHub ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/be-fsdcweeb4142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    Backend GitHub ↗
                  </a>
                </>
              )}

              {id === "invoice-builder" && (
                <>
                  <a
                    href="https://invoicebuil.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={liveDemoClass}
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/invoice-generator.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    GitHub ↗
                  </a>
                </>
              )}

              {id === "kanban" && (
                <>
                  <a
                    href="https://kanbanboardp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={liveDemoClass}
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Aakankshapatil123/kanban-board.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                  >
                    GitHub ↗
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-semibold text-gray-300 transition-all duration-300 hover:-translate-x-1 hover:border-blue-400 hover:text-blue-400"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
}

export default ProjectDetails;
