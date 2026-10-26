import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-xl font-extrabold tracking-tight text-white transition hover:opacity-80 sm:text-2xl"
        >
          Aakanksha <span className="text-blue-400">Patil</span>
          <span className="ml-1 text-cyan-300">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href="/Aakanksha_Patil_FSD_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-cyan-500 lg:inline-flex"
        >
          View Resume ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-2xl text-slate-200 transition hover:border-blue-400 hover:text-blue-400 lg:hidden"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Aakanksha_Patil_FSD_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:from-blue-400 hover:to-cyan-500"
            >
              View Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;