import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="bg-[#030014] min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-hidden">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main className="relative">
        {/* Background ambient light blobs to make scroll attractive */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[20%] right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[45%] left-1/3 w-[550px] h-[550px] bg-pink-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[70%] right-1/3 w-[650px] h-[650px] bg-indigo-500/5 blur-[200px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <Hero />
        <About />
        <Skills />
        <Experience />
        <WhyHireMe />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-10 mt-24 bg-[#02000a]/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nandini | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
