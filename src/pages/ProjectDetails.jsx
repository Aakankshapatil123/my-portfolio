import { useParams, Link } from "react-router-dom";

const projects = {
  delivo: {
    title: "Delivo",
    subtitle: "Online Food Delivery System",
    description:
      "A full-stack food delivery application featuring authentication, role-based access, restaurant and menu management, order management, REST APIs, payment integration, and order tracking.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    icon: "🍔",
    gradient: "from-orange-500 to-pink-500",
    links: [
      {
        label: "Live Demo",
        url: "https://inquisitive-cocada-3b939f.netlify.app/",
        primary: true,
      },
      {
        label: "Frontend GitHub",
        url: "https://github.com/Aakankshapatil123/-fe-fsdcweeb4142-delivo",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/Aakankshapatil123/be-fsdcweeb4142-delivo",
      },
    ],
  },

  jobify: {
    title: "Jobify",
    subtitle: "Job Portal & Tracking Application",
    description:
      "A MERN stack job portal with secure authentication, role-based access for users, recruiters and admins, job management, and application tracking through REST APIs.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    icon: "💼",
    gradient: "from-blue-500 to-cyan-400",
    links: [
      {
        label: "Live Demo",
        url: "https://fe-fsdcwee4142-jobify.netlify.app/",
        primary: true,
      },
      {
        label: "Frontend GitHub",
        url: "https://github.com/Aakankshapatil123/fe-fsdcwee4142-jobify.git",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/Aakankshapatil123/be-fsdcweeb4142-jobify",
      },
    ],
  },

  "notes-app": {
    title: "Notes App",
    subtitle: "Notes Management Application",
    description:
      "A full-stack notes application with user authentication, protected routes, and note management. Users can create, view, and delete notes with a React frontend and a Node.js, Express.js, and MongoDB backend.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    icon: "📝",
    gradient: "from-purple-500 to-indigo-500",
    links: [
      {
        label: "Live Demo",
        url: "https://notespace-aakanksha.netlify.app/",
        primary: true,
      },
      {
        label: "Frontend GitHub",
        url: "https://github.com/Aakankshapatil123/re-fsdcweeb4142",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/Aakankshapatil123/be-fsdcweeb4142",
      },
    ],
  },

  "invoice-builder": {
    title: "Invoice Builder",
    subtitle: "Invoice Generation Application",
    description:
      "A responsive invoice generation application with CRUD functionality, automatic calculations, and PDF export to help users prepare invoices conveniently.",
    technologies: ["React.js", "Tailwind CSS", "jsPDF"],
    icon: "🧾",
    gradient: "from-emerald-500 to-teal-400",
    links: [
      {
        label: "Live Demo",
        url: "https://invoicebuil.netlify.app/",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/Aakankshapatil123/invoice-generator",
      },
    ],
  },

  kanban: {
    title: "Kanban Board",
    subtitle: "Task Management Application",
    description:
      "A responsive task management application featuring task CRUD operations, drag-and-drop functionality, Context API state management, and localStorage persistence.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Context API",
      "localStorage",
    ],
    icon: "📋",
    gradient: "from-pink-500 to-rose-400",
    links: [
      {
        label: "Live Demo",
        url: "https://kanbanboardp.netlify.app/",
        primary: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/Aakankshapatil123/kanban-board",
      },
    ],
  },
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id?.toLowerCase()];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
        <div className="max-w-md">
          <div className="mb-5 text-6xl">🔎</div>
          <h1 className="mb-3 text-3xl font-bold">
            Project Not Found
          </h1>
          <p className="mb-7 text-slate-400">
            Sorry, we couldn't find this project.
          </p>
          <Link
            to="/"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-5 py-12 text-white sm:px-8 md:py-20">
      {/* Background effects */}
      <div
        className={`pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-[100px]`}
      />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <Link
          to="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-blue-400"
        >
          <span aria-hidden="true">←</span> Back to Projects
        </Link>

        {/* Project heading */}
        <section className="mb-10">
          <div
            className={`mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} text-4xl shadow-xl`}
          >
            {project.icon}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Project Details
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-slate-400 sm:text-xl">
            {project.subtitle}
          </p>

          <div
            className={`mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r ${project.gradient}`}
          />
        </section>

        {/* Project overview */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-9 md:p-10">
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">
              About the Project
            </h2>

            <p className="max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              {project.description}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:border-blue-400/50 hover:bg-blue-500/20"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-bold">
              Explore the Project
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.primary
                      ? `inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${project.gradient} px-5 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl`
                      : "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-3 font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
                  }
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-300 transition hover:border-blue-400 hover:text-blue-300"
          >
            ← All Projects
          </Link>

          <a
            href="https://github.com/Aakankshapatil123"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-5 py-3 font-medium text-slate-400 transition hover:text-white"
          >
            Visit My GitHub ↗
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;

