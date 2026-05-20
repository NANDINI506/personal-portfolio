import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Cpu, Globe } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for the 3D tilt
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden font-sans pt-24 lg:pt-0">
      <ParticleBackground />
      
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[18vw] font-black whitespace-nowrap text-white leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-transparent"
        >
          NANDINI
        </motion.h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 lg:py-0">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left pt-10 lg:pt-0">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            <span className="text-purple-400/80 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
              System.Status // Online & Crafting
            </span>
          </motion.div>
          
          <div className="mb-6 relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter text-white"
            >
              CRAFTING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient-x">
                TOMORROW'S
              </span><br />
              WEB.
            </motion.h1>
            
            {/* Decorative abstract shape behind text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -left-10 -top-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full pointer-events-none -z-10" 
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
            <p className="text-lg md:text-xl text-gray-300 max-w-lg font-light leading-relaxed pl-6">
              Hi, I'm <strong className="font-semibold text-white">Nandini</strong>. A full-stack engineer merging high-performance MERN architecture with intelligent AI integrations to build experiences that feel like magic.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-wide rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 flex items-center gap-2">
                DISCOVER WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-white to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a href="/resume.pdf" className="group flex items-center gap-2 px-8 py-4 glass text-white font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/30">
              <Terminal className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              <span>VIEW_RESUME</span>
            </a>
          </motion.div>
        </div>
        
        {/* Right Column - Interactive Developer ID Card */}
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[600px] flex items-center justify-center perspective-[1200px]"
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-[320px] sm:w-[380px] h-[480px] relative preserve-3d"
          >
            {/* Card Background */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#0c0822]/60 border border-purple-500/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)] hover:border-purple-500/40 transition-colors duration-500 overflow-hidden">
              
              {/* Decorative Card Light Streak */}
              <div className="absolute -top-[40%] -left-[40%] w-[180%] h-[180%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />

              {/* Card Header */}
              <div className="px-8 pt-8 pb-4 border-b border-white/5 relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Cpu className="w-16 h-16 text-purple-400" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 p-[1px] mb-6 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="font-mono text-xs text-purple-400 mb-1">ID // 0xNANDINI</p>
                <h3 className="text-2xl font-bold text-white tracking-wide font-sans">Developer.Card</h3>
              </div>
              
              {/* Card Body */}
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-mono text-xs text-gray-500">CLASS</span>
                    <span className="font-semibold text-sm text-cyan-300">Full-Stack Engineer</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-mono text-xs text-gray-500">STACK</span>
                    <span className="font-semibold text-sm text-purple-300">MERN + AI</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-mono text-xs text-gray-500">LOCATION</span>
                    <div className="flex items-center gap-1 font-semibold text-sm text-gray-200">
                      <Globe className="w-3 h-3 text-cyan-400" />
                      India
                    </div>
                  </div>
                </div>
                
                {/* Holographic Element */}
                <div className="mt-8 relative h-20 w-full rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  <div className="flex items-center gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [12, 36, 12] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1.5 bg-gradient-to-b from-purple-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements (3D pop-out effect) */}
            <motion.div 
              style={{ translateZ: 50 }} 
              className="absolute -right-6 top-20 bg-[#0e0a2b]/85 border border-purple-500/30 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(139,92,246,0.15)]"
            >
              <span className="font-mono text-xs text-purple-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_6px_#a78bfa]" />
                React.js Active
              </span>
            </motion.div>
            
            <motion.div 
              style={{ translateZ: 80 }} 
              className="absolute -left-8 bottom-32 bg-[#0c0824]/85 border border-cyan-500/30 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(6,182,212,0.15)]"
            >
              <span className="font-mono text-xs text-cyan-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#22d3ee]" />
                Node Backend
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator to make scroll attractive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase">SCROLL_DOWN</span>
        <div className="w-6 h-10 border border-purple-500/30 rounded-full flex justify-center p-1.5 backdrop-blur-sm bg-black/10">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

