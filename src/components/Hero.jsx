function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900/40 to-transparent px-6 text-center"
    >
      <div className="max-w-4xl mx-auto py-12">
        <p className="text-blue-400 text-lg mb-3">Hello, I'm Aakanksha 👋</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5 tracking-tight leading-tight">
          Aakanksha Pramod <span className="text-blue-400">Patil</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Full Stack Developer
        </p>

        <p className="max-w-2xl mx-auto text-gray-400 mb-8 leading-8 text-base md:text-lg">
          Aspiring Full Stack Developer seeking a full-time role to leverage
          hands-on project experience in building MERN stack applications, REST
          APIs, and responsive UIs integrated with advanced AI tools. Focused on
          writing clean, production-ready code, accelerating development
          workflows, and growing quickly within a professional engineering team.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            View Projects →
          </a>

          <a
            href="https://github.com/Aakankshapatil123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
