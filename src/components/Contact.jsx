import { motion } from 'framer-motion';
import { Send, Code2, Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:contact@nandini.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-white group-hover:text-purple-400 transition-colors">contact@nandini.com</p>
                </div>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">India</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-cyan-400 hover:-translate-y-1 transition-all">
                <Code2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-blue-400 hover:-translate-y-1 transition-all">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full py-4 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <motion.div
                  animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
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
