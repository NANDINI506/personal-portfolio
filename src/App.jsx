import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#030014] min-h-screen text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      
      <main className="relative">
        {/* Background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <Hero />
        <About />
        <Skills />
        <Experience />
        <WhyHireMe />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nandini. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built with</span>
            <span className="text-purple-500">React</span>
            <span>&</span>
            <span className="text-cyan-500">Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
