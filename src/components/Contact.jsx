import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 font-sans">
                Get in touch
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Whether you have a question, a project idea, or just want to say
                hi, my inbox is always open. I'll try my best to get back to
                you!
              </p>
            </div>

            <div className="space-y-6 hidden">
              {/* Contact details hidden as per user request */}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/NANDINI506"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0c0822]/60 border border-white/10 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nandini-9366592a9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#0c0822]/60 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl space-y-6 border border-white/5 hover:border-purple-500/20 hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] transition-all duration-500"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-sans text-sm resize-none"
                ></textarea>
              </div>
            </div>

            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(139,92,246,0.25)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.45)] transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <motion.div
                  animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
