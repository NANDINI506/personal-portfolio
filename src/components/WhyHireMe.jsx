import { motion } from 'framer-motion';
import { Lightbulb, Zap, Palette, BrainCircuit, Server, Users } from 'lucide-react';

const strengths = [
  {
    title: 'Creative UI Development',
    description: 'Crafting visually stunning, interactive, and modern interfaces that leave a lasting impression.',
    icon: Palette,
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]',
    iconColor: 'text-purple-400'
  },
  {
    title: 'AI Integration',
    description: 'Leveraging cutting-edge AI integrations to build context-aware, smart user applications.',
    icon: BrainCircuit,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'Backend Architecture',
    description: 'Designing highly scalable, secure APIs and database management systems.',
    icon: Server,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]',
    iconColor: 'text-indigo-400'
  },
  {
    title: 'Problem Solving',
    description: 'Solving complex engineering bottlenecks with clean, optimized algorithmic code.',
    icon: Lightbulb,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-pink-500/10 to-purple-500/10 hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]',
    iconColor: 'text-pink-400'
  },
  {
    title: 'Adaptive Learning',
    description: 'Swiftly mastering and applying next-gen frameworks to drive developer velocity.',
    icon: Zap,
    className: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
    iconColor: 'text-cyan-300'
  },
  {
    title: 'Collaborative Delivery',
    description: 'Integrating with diverse engineering environments to ship high-impact digital experiences.',
    icon: Users,
    className: 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]',
    iconColor: 'text-purple-300'
  }
];

export default function WhyHireMe() {
  return (
    <section id="whyhireme" className="py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">Why <span className="text-gradient">Hire Me?</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px]">
          {strengths.map((strength, idx) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className={`glass-card p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group border border-white/5 cursor-pointer ${strength.className}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <strength.icon className={`w-12 h-12 ${strength.iconColor}`} />
              </div>
              
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 ${strength.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <strength.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide font-sans">{strength.title}</h3>
                <p className="text-gray-400 text-sm max-w-[80%] leading-relaxed">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
