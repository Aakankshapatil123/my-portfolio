function Certifications() {
  const certificates = [
    {
      title: "Full Stack Development with AI Tools",
      issuer: "GUVI Geek Network",
      file: "/fullstack-certificate.pdf",
      category: "Full Stack",
    },
    {
      title: "JavaScript",
      issuer: "GUVI Geek Network",
      file: "/javascript-certificate.pdf",
      category: "Programming",
    },
    {
      title: "React.js",
      issuer: "GUVI Geek Network",
      file: "/react-certificate.pdf",
      category: "Frontend",
    },
    {
      title: "Node.js / Backend Development",
      issuer: "GUVI Geek Network",
      file: "/nodejs-certificate.pdf",
      category: "Backend",
    },
    {
      title: "Database / SQL",
      issuer: "GUVI Geek Network",
      file: "/databse-certificate.pdf",
      category: "Database",
    },
  ];

  const buttonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5";

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 px-6 py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Learning & Achievements
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Every certificate represents a step forward in my learning
            journey and my skills in full-stack web development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-300 transition duration-300 group-hover:scale-110 group-hover:border-blue-400/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                </div>

                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  {certificate.category}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-bold leading-7 text-white transition group-hover:text-blue-300 sm:text-xl">
                {certificate.title}
              </h3>

              <p className="mb-7 flex items-center gap-2 text-sm text-slate-400">
                <span className="text-cyan-400">●</span>
                {certificate.issuer}
              </p>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass} flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-950/30 hover:from-blue-400 hover:to-cyan-500`}
                >
                  View Certificate <span>↗</span>
                </a>

                <a
                  href={certificate.file}
                  download
                  className={`${buttonClass} flex-1 border border-slate-700 text-slate-300 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white`}
                >
                  Download <span>↓</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          Certificates are available to view and download in PDF format.
        </p>
      </div>
    </section>
  );
}

export default Certifications;
