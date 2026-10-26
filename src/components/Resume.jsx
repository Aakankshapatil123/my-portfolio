function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 px-6 py-20 text-center md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          My Resume
        </p>

        <h2 className="mb-5 text-3xl font-extrabold text-white md:text-5xl">
          Explore My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>

        <div className="mx-auto mb-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />

        <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          Learn more about my education, technical skills, projects, and
          journey as an aspiring Full Stack Developer.
        </p>

        {/* Resume card */}
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/80 p-7 shadow-2xl shadow-blue-950/20 transition duration-300 hover:border-blue-400/40 sm:p-10">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h8" />
              <path d="M8 9h1" />
            </svg>
          </div>

          <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
            Aakanksha Patil
          </h3>

          <p className="mb-7 text-sm leading-7 text-slate-400 sm:text-base">
            Full Stack Developer · Computer Engineering Graduate
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Aakanksha_Patil_FSD_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/50 px-6 py-3 font-semibold text-blue-300 transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10 hover:text-white"
            >
              View Resume <span>↗</span>
            </a>

            <a
              href="/Aakanksha_Patil_FSD_Resume.pdf"
              download="Aakanksha_Patil_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              Download Resume <span>↓</span>
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            PDF format · View online or download a copy
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;