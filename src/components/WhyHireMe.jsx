import { motion } from 'framer-motion';
import { Lightbulb, Zap, Palette, BrainCircuit, Server, Users } from 'lucide-react';

const strengths = [
  {
    title: 'Creative UI Development',
    description: 'Crafting visually stunning, smooth, and modern interfaces that leave a lasting impression.',
    icon: Palette,
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    iconColor: 'text-pink-400'
  },
  {
    title: 'AI Integration',
    description: 'Leveraging AI tools to build intelligent and context-aware applications.',
    icon: BrainCircuit,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10',
    iconColor: 'text-emerald-400'
  },
  {
    title: 'Backend Logic',
    description: 'Architecting scalable, secure, and robust server-side logic and databases.',
    icon: Server,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Problem Solving',
    description: 'Tackling complex technical challenges with analytical and efficient solutions.',
    icon: Lightbulb,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
    iconColor: 'text-yellow-400'
  },
  {
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks in a fast-paced environment.',
    icon: Zap,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'Team Collaboration',
    description: 'Working seamlessly with cross-functional teams to deliver high-quality products.',
    icon: Users,
    className: 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-purple-500/10 to-indigo-500/10',
    iconColor: 'text-purple-400'
  }
];

export default function WhyHireMe() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why <span className="text-gradient">Hire Me?</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px]">
          {strengths.map((strength, idx) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group cursor-pointer ${strength.className}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <strength.icon className={`w-12 h-12 ${strength.iconColor}`} />
              </div>
              
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 ${strength.iconColor}`}>
                  <strength.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{strength.title}</h3>
                <p className="text-gray-400 text-sm max-w-[80%]">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
