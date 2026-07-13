import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "MULTIOPS IT SOLUTIONS",
    date: "10/2025 - Present",
    description:
      "Focused on full-stack development, performance optimization, and CMS enhancements for active production projects.",
    achievements: [
      "Full-stack development for Eternal Sikhs live project (frontend & backend) (https://eternalsikhs.com)",
      "Performance optimization and UI animations for MultiOps company website.",
      "Frontend development and CMS enhancements for MultiOps CMS website (https://multiopseu.com)",
    ],
  },
  {
    role: "Full Stack Developer Trainee",
    company: "MULTIOPS IT SOLUTIONS",
    date: "04/2025 - 09/2025",
    description:
      "Learned and built full-stack web applications using the MERN stack, with hands-on AI/ML training and integration.",
    achievements: [
      "Built full-stack web applications using the MERN stack.",
      "Implemented secure authentication and APIs using JWT and bcrypt.",
      "Developed an AI-Powered Job Portal integrating FastAPI, MERN, and AI/ML for job matching and resume analysis.",
      "Gained hands-on experience in Agile workflows, version control (Git/GitHub), HTTP session management, redirects, cookies, and structured logging.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative z-10 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Professional <span className="text-purple-400">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="relative ml-4 md:ml-0">
          {/* Subtle vertical gradient line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent -translate-x-1/2 opacity-30" />

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
                <div className="w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/50 flex items-center justify-center shadow-sm group hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                </div>
              </div>

              {/* Layout wrapper for left/right alignment */}
              <div
                className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
              >
                <div className="bg-[#0c0822]/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl relative border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="text-cyan-400 text-xs font-bold font-mono tracking-widest uppercase mb-2 block">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1 font-sans">
                    {exp.role}
                  </h3>
                  <h4 className="text-purple-400 font-semibold mb-4 tracking-wide">
                    {exp.company}
                  </h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 text-sm text-gray-300">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-purple-500/50 flex-shrink-0" />
                        <span className="leading-relaxed text-left">{ach}</span>
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
