function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Programming & Tools",
      skills: ["C++", "Git", "GitHub"],
    },
    {
      title: "Soft Skills",
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
      className="bg-slate-950 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What I work with
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            My <span className="text-blue-400">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Technical skills and personal strengths that help me
            build responsive, user-friendly, and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="mb-6 border-b border-slate-700 pb-4 text-xl font-semibold">
                <span className="mr-2 text-blue-400">▹</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
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
