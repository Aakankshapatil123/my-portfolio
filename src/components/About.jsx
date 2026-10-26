function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-900 px-6 py-20 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Profile card */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl border border-slate-700 bg-slate-950/70 p-7 text-center shadow-2xl shadow-blue-950/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50">
              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-blue-400/30 bg-blue-400/10 blur-sm" />

              <img
                src="/profile.jpg"
                alt="Aakanksha Patil"
                className="relative mx-auto mb-6 h-44 w-44 rounded-full border-4 border-blue-400/80 object-cover object-[center_20%] shadow-xl shadow-blue-500/20"
              />

              <h3 className="mb-2 text-2xl font-bold text-white">
                Aakanksha Patil
              </h3>

              <p className="mb-5 text-blue-300">
                Full Stack Developer
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Open to Opportunities
              </div>
            </div>
          </div>

          {/* About details */}
          <div>
            <h3 className="mb-5 text-2xl font-bold leading-snug text-white md:text-3xl">
              Building useful and user-friendly web applications.
            </h3>

            <p className="mb-5 text-base leading-8 text-slate-300 md:text-lg">
              I am a Computer Engineering graduate with a strong interest in
              Full Stack Development. I have hands-on experience building web
              applications using JavaScript, React.js, Node.js, Express.js,
              MongoDB, SQL, HTML, CSS and Tailwind CSS.
            </p>

            <p className="text-base leading-8 text-slate-400 md:text-lg">
              I enjoy creating responsive interfaces, developing REST APIs,
              and solving practical problems through code. I am looking for
              an opportunity to contribute to a development team, learn from
              experienced professionals, and grow as a Full Stack Developer.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5 transition hover:border-blue-400/60">
                <h4 className="mb-2 text-2xl font-extrabold text-blue-400">
                  2025
                </h4>
                <p className="text-sm leading-6 text-slate-400">
                  Computer Engineering Graduate
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5 transition hover:border-blue-400/60">
                <h4 className="mb-2 text-2xl font-extrabold text-blue-400">
                  MERN
                </h4>
                <p className="text-sm leading-6 text-slate-400">
                  Full Stack Technology
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5 transition hover:border-blue-400/60">
                <h4 className="mb-2 text-2xl font-extrabold text-blue-400">
                  9.03
                </h4>
                <p className="text-sm leading-6 text-slate-400">
                  Final Year SGPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


