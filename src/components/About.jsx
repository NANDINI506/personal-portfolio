import { motion } from 'framer-motion';
import { Code2, Brain, Database, Rocket } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '15+', icon: Rocket, color: 'text-purple-400', glow: 'group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]' },
  { label: 'Technologies', value: '20+', icon: Code2, color: 'text-pink-400', glow: 'group-hover:border-pink-500/50 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]' },
  { label: 'Experience (Years)', value: '1+', icon: Database, color: 'text-cyan-400', glow: 'group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' },
  { label: 'AI Integrations', value: '5+', icon: Brain, color: 'text-indigo-400', glow: 'group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]' },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am an <span className="text-white font-semibold">MCA student</span> and a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">Full-Stack Developer</span> specializing in the MERN stack and modern web technologies.
            </p>
            <p>
              My expertise lies in building scalable applications with robust backend logic using <span className="text-purple-400 font-semibold">Node.js</span> and <span className="text-cyan-400 font-semibold">FastAPI</span>. I have a strong foundation in designing secure authentication systems and seamless API integrations.
            </p>
            <p>
              Beyond traditional web development, I am deeply enthusiastic about <span className="text-pink-400 font-semibold">AI integrations</span>, constantly exploring ways to build smarter, more intuitive digital experiences that drive user satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className={`glass-card p-6 flex flex-col items-center justify-center text-center group cursor-pointer border border-white/5 transition-all duration-500 ${stat.glow}`}
              >
                <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
