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
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0">
                <div className="w-8 h-8 rounded-full bg-black border border-purple-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              
              <div className="md:hidden absolute left-[-16px] top-0">
                <div className="w-8 h-8 rounded-full bg-black border border-purple-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                </div>
              </div>

              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <div className="glass-card p-6 rounded-2xl relative group hover:-translate-y-1 transition-transform">
                  <div className={`absolute top-4 ${idx % 2 === 0 ? 'md:-right-3' : 'md:-left-3'} hidden md:block w-6 h-6 bg-[#030014] transform rotate-45 border-t border-r border-white/10 ${idx % 2 === 0 ? '' : 'border-b-0 border-l-0'}`} />
                  
                  <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2 block">{exp.date}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-purple-400 font-medium mb-4">{exp.company}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>
                  
                  <ul className={`space-y-2 text-sm text-gray-300 ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {idx % 2 !== 0 && <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />}
                        {ach}
                        {idx % 2 === 0 && <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-purple-500" />}
                        {idx % 2 === 0 && <span className="md:hidden w-1.5 h-1.5 rounded-full bg-purple-500" />}
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
