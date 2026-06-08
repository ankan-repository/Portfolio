import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(s => {
        const top = s.offsetTop - 100;
        const bottom = top + s.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(`#${s.id}`);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[72px]">
        {/* Logo */}
        <motion.div
          className="font-mono text-lg font-bold gradient-text cursor-pointer"
          whileHover={{ scale: 1.04 }}
          onClick={() => handleNav('#hero')}
        >
          &lt;ankan.pal /&gt;
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`nav-link ${active === href ? 'active' : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <motion.button
              onClick={() => handleNav('#contact')}
              className="px-5 py-2 text-sm font-semibold rounded-lg border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <ul className="py-4 flex flex-col">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="w-full text-left px-6 py-3 text-slate-300 hover:text-cyan-400 hover:bg-white/[0.03] transition-colors duration-200 font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="px-6 pt-2 pb-4">
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full py-2.5 text-sm font-semibold rounded-lg border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
