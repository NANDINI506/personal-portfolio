import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  Code2, 
  Database as DatabaseIcon, 
  BrainCircuit, 
  Wrench, 
  Sparkles, 
  Server, 
  Layout, 
  Rocket, 
  Cpu, 
  Globe, 
  Terminal, 
  Layers 
} from 'lucide-react';

const skillData = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Responsive Design'],
  backend: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'Authentication', 'JWT', 'Bcrypt'],
  database: ['MongoDB', 'MySQL', 'SQLite', 'Firebase', 'Netlify', 'Vercel'],
  ai: ['OpenAI APIs', 'AI Integrations', 'Prompt Engineering', 'Resume Analysis', 'Intelligent Matching Systems'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'CMS Development'],
  exploring: ['AI Agents', 'MCP Servers', 'RAG Systems', 'Agentic Workflows', 'System Design']
};

const SkillPill = ({ name, glowColor, borderColor }) => (
  <motion.div
    whileHover={{ 
      scale: 1.05, 
      y: -2, 
      boxShadow: `0 0 15px ${glowColor}`, 
      borderColor: borderColor,
      color: '#fff'
    }}
    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm font-medium transition-colors backdrop-blur-md cursor-default flex items-center justify-center text-center flex-grow-0"
  >
    {name}
  </motion.div>
);

const OrbitNode = ({ radius, duration, reverse, classes, icon: Icon, startAngle = 0 }) => {
  const rotation = reverse ? -360 : 360;
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      initial={{ rotate: startAngle }}
      animate={{ rotate: startAngle + rotation }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{
        width: radius * 2,
        height: radius * 2,
        x: '-50%',
        y: '-50%',
      }}
    >
      <motion.div 
        className={`absolute left-1/2 -translate-x-1/2 -top-5 w-10 h-10 rounded-full flex items-center justify-center bg-black border ${classes}`}
        initial={{ rotate: -startAngle }}
        animate={{ rotate: -(startAngle + rotation) }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
    </motion.div>
  );
};

const OrbitingIdentity = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-500/5 blur-3xl opacity-50" />
      
      <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px] animate-pulse shadow-[0_0_35px_rgba(168,85,247,0.6)]">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/10">
          <Code2 className="w-10 h-10 text-white" />
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
        <div className="absolute w-40 h-40 border border-cyan-500/10 rounded-full" />
        <OrbitNode radius={80} duration={12} startAngle={0} classes="border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]" icon={Layers} />
        <OrbitNode radius={80} duration={12} startAngle={180} classes="border-purple-500/50 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]" icon={Cpu} />

        <div className="absolute w-64 h-64 border border-pink-500/10 rounded-full border-dashed" />
        <OrbitNode radius={128} duration={20} reverse startAngle={90} classes="border-pink-500/50 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.4)]" icon={DatabaseIcon} />
        <OrbitNode radius={128} duration={20} reverse startAngle={270} classes="border-indigo-500/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]" icon={Terminal} />
        
        <div className="absolute w-96 h-96 border border-purple-500/5 rounded-full" />
        <OrbitNode radius={192} duration={30} startAngle={45} classes="border-purple-500/50 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]" icon={Rocket} />
        <OrbitNode radius={192} duration={30} startAngle={225} classes="border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]" icon={Globe} />
      </div>
    </div>
  );
};

const BentoCard = ({ title, icon: Icon, children, className, glowColor, progressColor, progress }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-3xl bg-[#0c0822]/40 border border-white/5 backdrop-blur-md group ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 55%)`
        }}
      />
      
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-black/50 border border-white/5 shadow-lg group-hover:scale-110 group-hover:border-purple-500/25 transition-all duration-300">
            <Icon className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
        </div>
        
        <div className="flex-grow flex flex-col justify-center">
          {children}
        </div>

        {progress && (
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
              <span>System Mastery</span>
              <span className="text-white">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="h-full rounded-full relative"
                style={{ backgroundColor: progressColor, boxShadow: `0 0 10px ${progressColor}` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-sm" />
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"
          />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white font-sans">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Universe</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive ecosystem of technologies I leverage to build scalable, high-performance, and intelligent MERN applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-flow-dense">
          <BentoCard 
            title="Frontend" 
            icon={Layout} 
            className="md:col-span-2 md:row-span-1 border border-white/5"
            glowColor="rgba(6, 182, 212, 0.15)"
            progressColor="#06b6d4"
            progress={95}
          >
            <div className="flex flex-wrap gap-2">
              {skillData.frontend.map(skill => (
                <SkillPill key={skill} name={skill} glowColor="rgba(6,182,212,0.4)" borderColor="#06b6d4" />
              ))}
            </div>
          </BentoCard>

          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl bg-[#0c0822]/40 border border-white/5 backdrop-blur-md relative flex items-center justify-center min-h-[300px] md:min-h-[400px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
            <OrbitingIdentity />
          </div>

          <BentoCard 
            title="Backend" 
            icon={Server} 
            className="md:col-span-1 md:row-span-2 border border-white/5"
            glowColor="rgba(139, 92, 246, 0.15)"
            progressColor="#8b5cf6"
            progress={90}
          >
            <div className="flex flex-wrap gap-2">
              {skillData.backend.map(skill => (
                <SkillPill key={skill} name={skill} glowColor="rgba(139,92,246,0.4)" borderColor="#8b5cf6" />
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="AI & Integrations" 
            icon={BrainCircuit} 
            className="md:col-span-1 md:row-span-2 border border-white/5"
            glowColor="rgba(236, 72, 153, 0.15)"
            progressColor="#ec4899"
            progress={85}
          >
            <div className="flex flex-wrap gap-2">
              {skillData.ai.map(skill => (
                <SkillPill key={skill} name={skill} glowColor="rgba(236,72,153,0.4)" borderColor="#ec4899" />
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Database & Cloud" 
            icon={DatabaseIcon} 
            className="md:col-span-1 md:row-span-1 border border-white/5"
            glowColor="rgba(99, 102, 241, 0.15)"
            progressColor="#6366f1"
            progress={88}
          >
            <div className="flex flex-wrap gap-2">
              {skillData.database.map(skill => (
                <SkillPill key={skill} name={skill} glowColor="rgba(99,102,241,0.4)" borderColor="#6366f1" />
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Tools & DevOps" 
            icon={Wrench} 
            className="md:col-span-1 md:row-span-1 border border-white/5"
            glowColor="rgba(168, 85, 247, 0.15)"
            progressColor="#a855f7"
            progress={92}
          >
            <div className="flex flex-wrap gap-2">
              {skillData.tools.map(skill => (
                <SkillPill key={skill} name={skill} glowColor="rgba(168,85,247,0.4)" borderColor="#a855f7" />
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Currently Exploring" 
            icon={Sparkles} 
            className="md:col-span-4 border border-white/5"
            glowColor="rgba(59, 130, 246, 0.15)"
          >
            <div className="relative overflow-hidden w-full rounded-2xl bg-black/20 border border-white/5 p-6">
              <motion.div 
                animate={{ left: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-[150px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-md z-0"
              />
              <div className="flex flex-wrap gap-4 items-center justify-center relative z-10">
                {skillData.exploring.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 hover:text-white hover:bg-purple-500/20 hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                  >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="font-semibold text-sm tracking-wide">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
