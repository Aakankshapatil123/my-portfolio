function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      description: "Building responsive user interfaces",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description: "Creating server-side applications",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: "🗄️",
      description: "Storing and managing application data",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Programming & Tools",
      icon: "💻",
      description: "Development tools and programming",
      skills: ["C++", "Git", "GitHub"],
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      description: "Working effectively with a team",
      skills: [
        "Communication",
        "Teamwork",
        "Problem-solving",
        "Time Management",
        "Adaptability",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-950 px-6 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            What I work with
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Technologies and personal strengths I use to build responsive,
            user-friendly, and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-400/20">
                {category.icon}
              </div>

              <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-blue-300">
                {category.title}
              </h3>

              <p className="mb-5 text-sm leading-6 text-slate-400">
                {category.description}
              </p>

              <div className="mb-5 h-px bg-slate-800" />

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-slate-300 transition duration-200 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
