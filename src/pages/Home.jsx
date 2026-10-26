import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      requestAnimationFrame(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
