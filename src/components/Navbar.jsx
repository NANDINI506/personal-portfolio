import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="interactive text-2xl font-bold text-gradient">
          Nandini.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="interactive text-gray-300 hover:text-white hover:scale-110 transition-all text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="interactive px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 border border-white/20 text-white transition-all text-sm font-medium"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
