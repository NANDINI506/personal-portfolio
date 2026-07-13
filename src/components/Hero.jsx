import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Cpu, 
  Database, 
  Brain, 
  BarChart3, 
  Settings, 
  Lightbulb, 
  Rocket 
} from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import avatarImg from "../assets/avatar.png";

const leftFloatingCards = [
  {
    icon: Code2,
    color: "text-purple-400 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]",
    yAnim: [-10, 10, -10],
    duration: 6,
    delay: 0,
    offset: "translate-x-0"
  },
  {
    icon: Brain,
    color: "text-cyan-400 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:border-cyan-500/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] md:translate-x-6",
    yAnim: [10, -10, 10],
    duration: 7,
    delay: 0.5,
    offset: "translate-x-0"
  },
  {
    icon: BarChart3,
    color: "text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:border-emerald-500/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]",
    yAnim: [-8, 8, -8],
    duration: 6.5,
    delay: 0.2,
    offset: "translate-x-0"
  }
];

const rightFloatingCards = [
  {
    icon: Database,
    color: "text-pink-400 border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:border-pink-500/60 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]",
    yAnim: [-10, 10, -10],
    duration: 6.2,
    delay: 0.1,
    offset: "translate-x-0"
  },
  {
    icon: Settings,
    color: "text-amber-400 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:border-amber-500/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] md:-translate-x-6",
    yAnim: [10, -10, 10],
    duration: 6.8,
    delay: 0.3,
    offset: "translate-x-0"
  },
  {
    icon: Cpu,
    color: "text-indigo-400 border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:border-indigo-500/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]",
    yAnim: [-8, 8, -8],
    duration: 7.5,
    delay: 0.4,
    offset: "translate-x-0"
  }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden font-sans pt-20"
    >
      <ParticleBackground />

      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[20vw] font-black whitespace-nowrap text-white leading-none tracking-tighter"
        >
          NANDINI
        </motion.h1>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center mt-10">
        
        {/* Profile Circle & Floating Side Cards Container */}
        <div className="relative flex items-center justify-center mb-6">
          
          {/* Floating Left Icons */}
          <div className="absolute -left-24 lg:-left-44 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-10 pointer-events-auto">
            {leftFloatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  animate={{ y: card.yAnim }}
                  transition={{ duration: card.duration, delay: card.delay, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0a071b]/60 backdrop-blur-md border flex items-center justify-center cursor-pointer transition-all duration-300 ${card.color} ${card.offset}`}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
              );
            })}
          </div>

          {/* Center Avatar / Glowing Sphere */}
          <div className="relative group z-10">
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full -z-10 group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
            
            {/* Outer neon border circle */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-[3px] border-purple-500/80 shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]">
              {/* Inner glowing overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-10"></div>
              
              <img 
                src={avatarImg} 
                alt="Nandini" 
                className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* Floating Right Icons */}
          <div className="absolute -right-24 lg:-right-44 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-10 pointer-events-auto">
            {rightFloatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  animate={{ y: card.yAnim }}
                  transition={{ duration: card.duration, delay: card.delay, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0a071b]/60 backdrop-blur-md border flex items-center justify-center cursor-pointer transition-all duration-300 ${card.color} ${card.offset}`}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* System Online Status */}
        <div className="flex items-center justify-center gap-2 mb-4 select-none font-mono">
          <span className="text-cyan-400 text-xs md:text-sm tracking-widest flex items-center gap-2 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
            <span className="text-purple-500 font-extrabold">&gt;_</span> SYSTEM_ONLINE
          </span>
        </div>

        {/* Text and CTAs */}
        <div className="text-center z-10 max-w-4xl px-4 relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-1"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
              Nandini
            </h1>
          </motion.div>
          
          {/* Subtitle with faded line separators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 w-full max-w-lg justify-center my-4"
          >
            <div className="h-[1.5px] flex-grow bg-gradient-to-r from-transparent via-purple-500/30 to-purple-500/70 rounded-full" />
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/80 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <span className="text-purple-300 font-medium tracking-[0.25em] text-xs md:text-sm uppercase font-mono whitespace-nowrap">
              Software Engineer
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/80 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <div className="h-[1.5px] flex-grow bg-gradient-to-l from-transparent via-purple-500/30 to-purple-500/70 rounded-full" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sm md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Architecting <span className="text-purple-400 font-medium">Scalable Web Experiences</span> & <span className="text-cyan-400 font-medium">AI Workflows</span>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-6 py-3.5 bg-white text-black font-bold text-xs tracking-wider rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                DISCOVER WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="/resume.pdf"
              download="Nandini_Resume.pdf"
              className="group flex items-center gap-2 px-6 py-3.5 bg-white/5 backdrop-blur-md text-white font-semibold text-xs tracking-wider rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/40 shadow-lg"
            >
              <Terminal className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              <span>VIEW_RESUME</span>
            </a>
          </motion.div>

          {/* Tags list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-3 text-xs md:text-sm text-gray-300 font-medium mt-12 bg-purple-950/10 backdrop-blur-sm border border-purple-500/10 py-3 px-6 rounded-2xl md:rounded-full shadow-[0_0_30px_rgba(168,85,247,0.03)]"
          >
            <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <Code2 className="w-4 h-4 text-purple-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all" />
              <span>Problem Solver</span>
            </div>
            
            <span className="text-purple-500/60 hidden sm:inline select-none">•</span>

            <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <Lightbulb className="w-4 h-4 text-pink-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all" />
              <span>Tech Enthusiast</span>
            </div>

            <span className="text-purple-500/60 hidden sm:inline select-none">•</span>

            <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <Brain className="w-4 h-4 text-indigo-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all" />
              <span>AI Explorer</span>
            </div>

            <span className="text-purple-500/60 hidden sm:inline select-none">•</span>

            <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <Rocket className="w-4 h-4 text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all" />
              <span>Lifelong Learner</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
