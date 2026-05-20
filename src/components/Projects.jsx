import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Job Portal',
    description: 'An intelligent job matching platform connecting candidates with ideal roles using AI-driven algorithms.',
    image: '/job_portal_ui_1779186373205.png',
    tech: ['React.js', 'FastAPI', 'Python', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'MultiOps CMS',
    description: 'A comprehensive Content Management System designed for scalable operations and intricate data dashboards.',
    image: '/multiops_cms_ui_1779186463644.png',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Tourism Website',
    description: 'A breathtaking and interactive tourism platform showcasing destinations with modern UI and smooth transitions.',
    image: '/tourism_website_ui_1779186389628.png',
    tech: ['React.js', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Online Food Delivery',
    description: 'A sleek, dark-themed platform for food discovery and delivery with real-time order tracking.',
    image: '/food_delivery_ui_1779186404670.png',
    tech: ['MERN Stack', 'Redux', 'JWT'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Eternal Sikhs Project',
    description: 'A respectful, culturally rich digital experience showcasing heritage with modern premium web aesthetics.',
    image: '/eternal_sikhs_ui_1779186445241.png',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Event Planning Platform',
    description: 'A professional platform for managing, scheduling, and discovering events with calendar integrations.',
    image: '/event_planning_ui_1779186431348.png',
    tech: ['React.js', 'Node.js', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0c0822]/40 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] transition-all duration-500 flex flex-col h-[420px]"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-[60%] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90 z-10" />
                <div className="absolute inset-0 bg-purple-950/20 mix-blend-overlay z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Floating links on top right */}
                <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="interactive p-2.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-purple-600 hover:border-purple-400 hover:scale-110 transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="interactive p-2.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-cyan-600 hover:border-cyan-400 hover:scale-110 transition-all"
                    title="Source Code"
                  >
                    <Code2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Card Info Container */}
              <div className="p-6 flex flex-col flex-grow justify-between relative z-20 bg-[#0c0822]/60 backdrop-blur-md border-t border-white/5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors font-sans tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold font-mono rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
