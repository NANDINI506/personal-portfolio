import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8"
        >
          <span className="text-purple-300 text-sm font-medium tracking-wide uppercase">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">Nandini</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl font-light"
        >
          Software Engineer <span className="text-purple-500">•</span> MERN Developer <span className="text-cyan-500">•</span> AI Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="/resume.pdf"
            className="group flex items-center gap-2 px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all border border-white/10"
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white hover:text-cyan-400 transition-colors"
          >
            Contact Me
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
