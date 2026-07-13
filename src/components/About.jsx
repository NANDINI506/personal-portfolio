import { motion } from 'framer-motion';
import { Code2, Brain, Database, Rocket } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '15+', icon: Rocket, color: 'text-purple-400', hoverBorder: 'group-hover:border-purple-500/30' },
  { label: 'Technologies', value: '20+', icon: Code2, color: 'text-pink-400', hoverBorder: 'group-hover:border-pink-500/30' },
  { label: 'Experience (Yrs)', value: '1+', icon: Database, color: 'text-cyan-400', hoverBorder: 'group-hover:border-cyan-500/30' },
  { label: 'AI Integrations', value: '5+', icon: Brain, color: 'text-indigo-400', hoverBorder: 'group-hover:border-indigo-500/30' },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-purple-400">Me</span></h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am an <span className="text-white font-semibold">MCA student</span> and a passionate <span className="text-purple-400 font-bold">Full-Stack Developer</span> specializing in the MERN stack and modern web technologies.
            </p>
            <p>
              My expertise lies in building scalable applications with robust backend logic using <span className="text-white font-semibold">Node.js</span> and <span className="text-white font-semibold">FastAPI</span>. I have a strong foundation in designing secure authentication systems and seamless API integrations.
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
                className={`bg-[#0c0822]/40 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer border border-white/5 transition-all duration-300 hover:shadow-lg ${stat.hoverBorder}`}
              >
                <div className={`p-4 rounded-2xl bg-black/30 mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5 ${stat.color}`}>
                  <stat.icon className="w-7 h-7" />
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
