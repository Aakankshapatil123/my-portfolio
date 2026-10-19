// function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
//       <h1 className="text-2xl font-bold">
//         Aakanksha <span className="text-blue-400">Patil</span>
//       </h1>

//       <div className="hidden md:flex gap-8">
//         <a
//   href="#home"
//   className="text-gray-300 hover:text-blue-400 transition duration-300"
// >
//   Home
// </a>

//         <a href="#about" className="hover:text-blue-400 transition">
//           About
//         </a>

//         <a href="#skills" className="hover:text-blue-400 transition">
//           Skills
//         </a>

//         <a href="#projects" className="hover:text-blue-400 transition">
//           Projects
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        <h1 className="text-2xl font-bold">
          Aakanksha <span className="text-blue-400">Patil</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#certifications"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>

          <a
            href="/Aakanksha_Patil_FSD_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#certifications"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Certifications
          </a>

          <a
            href="#certifications"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Certifications
          </a>

          <a
            href="/Aakanksha_Patil_FSD_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center transition duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
