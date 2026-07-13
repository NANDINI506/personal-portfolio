import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Code2,
  Database as DatabaseIcon,
  BrainCircuit,
  Wrench,
  Sparkles,
  Server,
  Layout,
} from "lucide-react";

const skillData = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "TypeScript",
    "JSON",
    "Redux",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Python",
    "PHP",
    "C/C++",
    "Java",
    ".NET",
    "ASP.NET",
    "REST APIs",
    "Auth",
  ],
  database: ["MongoDB", "MySQL", "SQLite"],
  ai: [
    "AI Integrations",
    "Resume Analysis",
    "Intelligent Matching",
  ],
  tools: ["Git", "GitHub", "Docker", "Postman", "Netlify"],
  exploring: ["AI Agents", "RAG Systems", "Agentic Workflows", "System Design"],
};

const SkillPill = ({ name, glowColor, borderColor }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      y: -2,
      boxShadow: `0 0 15px ${glowColor}`,
      borderColor: borderColor,
      color: "#fff",
    }}
    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium transition-all backdrop-blur-md cursor-default flex items-center justify-center text-center shadow-sm"
  >
    {name}
  </motion.div>
);

const BentoCard = ({
  title,
  icon: Icon,
  children,
  className,
  glowColor,
  progressColor,
  progress,
}) => {
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
      className={`relative overflow-hidden rounded-3xl bg-[#0c0822]/40 border border-white/5 backdrop-blur-md group transition-all duration-300 hover:border-white/10 shadow-lg hover:shadow-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 55%)`,
        }}
      />

      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-black/40 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-white/80 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-wide">
            {title}
          </h3>
        </div>

        <div className="flex-grow flex flex-col justify-start">{children}</div>
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
          className="text-center mb-20 relative"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white font-sans">
            Technical <span className="text-purple-400">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full opacity-50 mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The core technologies and frameworks I use to architect robust, scalable, and intelligent web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BentoCard
            title="Frontend"
            icon={Layout}
            glowColor="rgba(6, 182, 212, 0.15)"
            progressColor="#06b6d4"
            progress={95}
          >
            <div className="flex flex-wrap gap-2.5">
              {skillData.frontend.map((skill) => (
                <SkillPill
                  key={skill}
                  name={skill}
                  glowColor="rgba(6,182,212,0.4)"
                  borderColor="#06b6d4"
                />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Backend"
            icon={Server}
            glowColor="rgba(139, 92, 246, 0.15)"
            progressColor="#8b5cf6"
            progress={90}
          >
            <div className="flex flex-wrap gap-2.5">
              {skillData.backend.map((skill) => (
                <SkillPill
                  key={skill}
                  name={skill}
                  glowColor="rgba(139,92,246,0.4)"
                  borderColor="#8b5cf6"
                />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="AI & Integrations"
            icon={BrainCircuit}
            glowColor="rgba(236, 72, 153, 0.15)"
            progressColor="#ec4899"
            progress={85}
          >
            <div className="flex flex-wrap gap-2.5">
              {skillData.ai.map((skill) => (
                <SkillPill
                  key={skill}
                  name={skill}
                  glowColor="rgba(236,72,153,0.4)"
                  borderColor="#ec4899"
                />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Database"
            icon={DatabaseIcon}
            glowColor="rgba(99, 102, 241, 0.15)"
            progressColor="#6366f1"
            progress={88}
          >
            <div className="flex flex-wrap gap-2.5">
              {skillData.database.map((skill) => (
                <SkillPill
                  key={skill}
                  name={skill}
                  glowColor="rgba(99,102,241,0.4)"
                  borderColor="#6366f1"
                />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Tools & DevOps"
            icon={Wrench}
            glowColor="rgba(168, 85, 247, 0.15)"
            progressColor="#a855f7"
            progress={92}
          >
            <div className="flex flex-wrap gap-2.5">
              {skillData.tools.map((skill) => (
                <SkillPill
                  key={skill}
                  name={skill}
                  glowColor="rgba(168,85,247,0.4)"
                  borderColor="#a855f7"
                />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Exploring"
            icon={Sparkles}
            glowColor="rgba(59, 130, 246, 0.15)"
          >
            <div className="flex flex-col gap-3 h-full justify-center">
              {skillData.exploring.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 hover:text-white hover:border-purple-500/30 transition-all shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="font-medium text-sm tracking-wide">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
