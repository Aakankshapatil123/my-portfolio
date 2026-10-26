function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Name and Role */}
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="text-xl font-bold text-white transition hover:text-blue-400"
          >
            Aakanksha <span className="text-blue-400">Patil</span>
          </a>

          <p className="mt-2 text-sm text-slate-400">
            Full Stack Developer | MERN Stack
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Aakankshapatil123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:aakankshapatil6580@gmail.com"
            className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
          >
            Email ✉
          </a>

          <a
            href="#home"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-cyan-500"
          >
            Back to Top ↑
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-800 pt-5 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Aakanksha Patil. All rights reserved.
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Designed and built with React.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;