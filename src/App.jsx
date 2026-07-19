import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import AccentTheme from "./components/AccentTheme";
import Hero from "./components/Hero";
import TechTicker from "./components/TechTicker";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RevealOnScroll from "./components/RevealOnScroll";
import { profile } from "./data/portfolio";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <ScrollProgress />
      <MouseGlow />
      <AccentTheme />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <TechTicker />
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>

      <footer className="relative z-10 border-t border-white/[0.06] py-8">
        <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6b6b80]">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">React · Vite · Tailwind</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
