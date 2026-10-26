function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-6 py-20 text-center"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        {/* Intro badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2 text-sm font-medium text-blue-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Hello, I'm Aakanksha 👋
        </div>

        {/* Main heading */}
        <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
          Aakanksha Pramod
          <span className="mt-1 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Patil
          </span>
        </h1>

        {/* Role */}
        <p className="mb-7 text-xl font-semibold tracking-wide text-slate-300 sm:text-2xl">
          Full Stack Developer
          <span className="mx-2 text-blue-400">|</span>
          <span className="text-blue-400">MERN Stack</span>
        </p>

        {/* Description */}
        <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Aspiring Full Stack Developer seeking a full-time role, with
          hands-on experience building MERN stack applications, REST APIs,
          and responsive user interfaces. Passionate about writing clean
          code, solving problems, and building useful web applications.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-blue-500/40"
          >
            View My Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="https://github.com/Aakankshapatil123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-400/10 hover:text-blue-300"
          >
            GitHub <span>↗</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
          >
            Contact Me
          </a>
        </div>

        {/* Technology labels */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-400 transition duration-300 hover:border-blue-400/50 hover:text-blue-300"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
