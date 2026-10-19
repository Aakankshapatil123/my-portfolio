function Resume() {
  return (
    <section
      id="resume"
      className="bg-slate-950 px-6 py-20 text-center"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          My Resume
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Explore My <span className="text-blue-400">Resume</span>
        </h2>

        <p className="mb-8 leading-7 text-gray-300">
          View my resume to learn more about my education, technical skills,
          projects, and experience in Full Stack Development.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/Aakanksha_Patil_FSD_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-400 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-400 hover:text-white"
          >
            View Resume
          </a>

          <a
           href="/Aakanksha_Patil_FSD_Resume.pdf"
            download="Aakanksha_Patil_Resume.pdf"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;