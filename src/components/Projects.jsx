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
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a
                    href={project.liveUrl}
                    className="interactive p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-purple-500 hover:scale-110 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="interactive p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-purple-300 border border-purple-500/20"
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
