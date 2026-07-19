import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={`section-wrap flex items-center justify-between h-16 transition-all duration-300 ${
          scrolled ? "bg-[#08080a]/85 backdrop-blur-lg border-b border-white/[0.06]" : ""
        }`}
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="font-display text-lg font-bold text-white"
        >
          {profile.name}
          <span className="text-[color:var(--accent)]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#8b8b9e] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-fill !py-2 !px-4 !text-xs">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-[#8b8b9e]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden section-wrap pb-6 space-y-1 border-b border-white/[0.06] bg-[#08080a]/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[#c4c4d4] hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-fill w-full mt-2">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
