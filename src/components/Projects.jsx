import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Job Portal",
    description:
      "A comprehensive job matching platform integrating FastAPI, MERN stack, and AI/ML technologies. Features intelligent resume analysis, advanced job matching algorithms, and a seamless user experience for both candidates and recruiters.",
    tech: ["FastAPI", "MERN Stack", "AI/ML", "Python"],
    liveUrl: "#",
    githubUrl: "https://github.com/NANDINI506",
  },
  {
    title: "Tourism Website",
    description:
      "A fully functional tourism website with dynamic UI features. Implemented interactive pages, structured layout for tourist information, and smooth navigation to explore destinations effectively.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://funvisit.netlify.app",
    githubUrl: "https://github.com/NANDINI506",
  },
  {
    title: "Online Food Delivery",
    description:
      "Responsive online food ordering platform with real-time user interactions. Implemented a dynamic menu, cart management, and a streamlined checkout flow for an intuitive food ordering experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://foodycart.netlify.app",
    githubUrl: "https://github.com/NANDINI506",
  },
  {
    title: "Event Planning Platform",
    description:
      "A full-stack event management site with booking and event listing features. Utilized PHP and SQL to securely store and retrieve data, ensuring a reliable and scalable backend for event coordination.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    liveUrl: "https://omegaparty.netlify.app",
    githubUrl: "https://github.com/NANDINI506",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0c0822]/40 border border-white/5 shadow-lg hover:border-purple-500/30 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Info Container */}
              <div className="p-8 flex flex-col flex-grow relative z-20 backdrop-blur-sm">
                
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-wide">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-gray-400">
                    <a
                      href={project.githubUrl}
                      className="hover:text-cyan-400 transition-colors"
                      title="Source Code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 className="w-5 h-5" />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        className="hover:text-purple-400 transition-colors"
                        title="Live Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 text-[15px] mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium font-mono rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
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
