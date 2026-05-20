import { motion } from 'framer-motion';
import { Send, Code2, Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans">Let's <span className="text-gradient">Connect</span></h2>
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
              <h3 className="text-3xl font-bold text-white mb-4 font-sans">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:contact@nandini.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-[#0c0822]/40 border border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">EMAIL</p>
                  <p className="text-white group-hover:text-purple-400 transition-colors font-medium">contact@nandini.com</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group p-4 rounded-2xl bg-[#0c0822]/40 border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">LOCATION</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors font-medium">India</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-[#0c0822]/60 border border-white/10 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300" title="GitHub">
                <Code2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#0c0822]/60 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300" title="LinkedIn">
                <Briefcase className="w-5 h-5" />
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
                <label className="block text-xs font-mono font-bold text-gray-400 mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-sans text-sm"
                />
              </div>
              
              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 mb-2">EMAIL</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 mb-2">MESSAGE</label>
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
