// import { Link } from "react-router-dom";

// function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6 bg-slate-900">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           Featured Projects
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Delivo */}
//          <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-blue-400 hover:-translate-y-1 transition duration-300">
//             <h3 className="text-2xl font-bold mb-4">
//               Delivo – Online Food Delivery System
//             </h3>

//             <p className="text-gray-400 mb-4">
//               Built a MERN-based food delivery application with authentication,
//               role-based access, and restaurant/menu management.
//             </p>

//             <p className="text-gray-400 mb-5">
//               Implemented REST APIs, order tracking, and payment integration.
//             </p>

//             <p className="text-blue-400 mb-6">
//               React.js • Node.js • Express.js • MongoDB • Tailwind CSS
//             </p>

//             <div className="flex gap-3">
//               {/* <a
//                   href="https://github.com/Aakankshapatil123/-fe-fsdcweeb4142-delivo.git"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-500 hover:bg-green-600 px-5 py-2 rounded-lg"
//                 >
//                   Frontend
//                 </a>

//                 <a
//                   href="https://github.com/Aakankshapatil123/be-fsdcweeb4142-delivo.git"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-500 hover:bg-green-600 px-5 py-2 rounded-lg"
//                 >
//                   Backend
//                 </a> */}

//               <Link
//                 to="/project/delivo"
//                 className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
//               >
//                 View Project
//               </Link>
//             </div>
//           </div>

//           {/* Invoice Builder */}
//           <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-blue-400 hover:-translate-y-1 transition duration-300">
//             <h3 className="text-2xl font-bold mb-4">Invoice Builder</h3>

//             <p className="text-gray-400 mb-4">
//               Built a responsive invoice generation application using React.js
//               and Tailwind CSS with CRUD functionality.
//             </p>

//             <p className="text-gray-400 mb-5">
//               Implemented automatic subtotal, tax, and total calculations, and
//               PDF export using jsPDF.
//             </p>

//             <p className="text-blue-400 mb-6">
//               React.js • Tailwind CSS • jsPDF
//             </p>

//             <Link
//               to="/project/invoice-builder"
//               className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
//             >
//               View Project
//             </Link>
//           </div>

//           {/* Kanban Board */}
//           <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl md:col-span-2 hover:border-blue-400 hover:-translate-y-1 transition duration-300">
//             <h3 className="text-2xl font-bold mb-4">
//               Kanban Board – Task Management Application
//             </h3>

//             <p className="text-gray-400 mb-4">
//               Developed a responsive Kanban-style task management application
//               using React.js and Tailwind CSS with task CRUD and drag-and-drop
//               functionality.
//             </p>

//             <p className="text-gray-400 mb-5">
//               Implemented Context API for state management and localStorage
//               persistence.
//             </p>

//             <p className="text-blue-400 mb-6">
//               React.js • Tailwind CSS • Context API • localStorage
//             </p>

//             <Link
//               to="/project/kanban"
//               className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
//             >
//               View Project
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;





import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Delivo",
      subtitle: "Online Food Delivery System",
      description:
        "Built a MERN stack food delivery application featuring user authentication, role-based access, restaurant and menu management.",
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
      number: "01",
    },
    {
      title: "Jobify",
      subtitle: "Job Portal & Tracking Application",
      description:
        "Developed a MERN stack job portal with secure user authentication and role-based access control.",
      details:
        "Implemented REST APIs for job management and application tracking.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      link: "/project/Jobify",
      number: "02",
    },
    {
      title: "Invoice Builder",
      subtitle: "Invoice Generation Application",
      description:
        "Created a responsive invoice builder with functionality to add, edit, and delete invoice items.",
      details:
        "Implemented automatic subtotal, tax, and total calculations with PDF export using jsPDF.",
      technologies: ["React.js", "Tailwind CSS", "jsPDF"],
      link: "/project/invoice-builder",
      number: "03",
    },
    {
      title: "Kanban Board",
      subtitle: "Task Management Application",
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
      number: "04",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What I've built
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            A selection of applications I've developed to apply my
            skills in frontend and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-950/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 md:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-lg font-bold text-blue-400">
                  {project.number}
                </span>

                <span className="text-sm text-gray-500 transition-colors group-hover:text-blue-400">
                  Personal / Academic Project
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

              <p className="mb-6 leading-7 text-gray-400">
                {project.details}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:border-blue-400/60 hover:text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:gap-3 hover:bg-blue-600"
                >
                  View Project
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;