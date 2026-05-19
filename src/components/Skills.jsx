import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-cyan-500/30'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs'],
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    title: 'Database & Auth',
    skills: ['MongoDB', 'MySQL', 'JWT'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    title: 'Tools & Others',
    skills: ['Docker', 'GitHub', 'AI Integrations'],
    color: 'from-orange-500/20 to-yellow-500/20',
    borderColor: 'border-orange-500/30'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full bg-black/50 border ${category.borderColor} text-gray-300 text-sm font-medium hover:text-white hover:scale-105 transition-all cursor-default backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
