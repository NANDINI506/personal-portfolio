import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'MultiOps IT Solutions',
    date: 'Present',
    description: 'Leading AI integration initiatives, developing robust backend architectures, and creating intricate data dashboards for the MultiOps CMS.',
    achievements: ['Integrated advanced AI models', 'Optimized backend performance', 'Built dynamic UI components']
  },
  {
    role: 'Full Stack Developer Trainee',
    company: 'MultiOps IT Solutions',
    date: 'Previous',
    description: 'Gained hands-on experience in the MERN stack. Worked on real-world projects including e-commerce platforms and booking systems.',
    achievements: ['Developed RESTful APIs', 'Implemented JWT authentication', 'Designed responsive UIs']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">Professional <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative ml-4 md:ml-0">
          {/* Glowing vertical gradient line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500/30 -translate-x-1/2 opacity-30 shadow-[0_0_10px_rgba(139,92,246,0.3)]" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 80 }}
              className="mb-16 relative pl-8 md:pl-0 flex flex-col md:flex-row items-stretch"
            >
              {/* Timeline Center Bullet Node */}
              <div className="absolute left-0 md:left-1/2 top-4 -translate-x-1/2 z-20">
                <div className="w-8 h-8 rounded-full bg-[#030014] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.6)] group hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                </div>
              </div>

              {/* Layout wrapper for left/right alignment */}
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                <div className="glass-card p-6 sm:p-8 rounded-3xl relative border border-white/5 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] transition-all duration-300">
                  
                  <span className="text-cyan-400 text-xs font-bold font-mono tracking-widest uppercase mb-2 block">{exp.date}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 font-sans">{exp.role}</h3>
                  <h4 className="text-purple-400 font-semibold mb-4 tracking-wide">{exp.company}</h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{exp.description}</p>
                  
                  <ul className={`space-y-2.5 text-sm text-gray-300 ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        {idx % 2 !== 0 && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-[0_0_6px_#a855f7] flex-shrink-0" />
                        )}
                        <span className="leading-relaxed">{ach}</span>
                        {idx % 2 === 0 && (
                          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-[0_0_6px_#a855f7] flex-shrink-0" />
                        )}
                        {idx % 2 === 0 && (
                          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-[0_0_6px_#a855f7] flex-shrink-0" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
