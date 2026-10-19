import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

function Home() {
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
     
    </div>
  );
}

export default Home;