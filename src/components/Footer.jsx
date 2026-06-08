import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <HiMail className="w-4 h-4" />, href: 'mailto:ankanp595@gmail.com', label: 'Email' },
  { icon: <FaLinkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/ankan-pal-b4518241', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            onClick={() => scrollTo('#hero')}
            className="font-mono text-lg font-bold gradient-text cursor-pointer"
            data-hover
          >
            &lt;ankan.pal /&gt;
          </motion.div>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="text-xs text-slate-500 hover:text-cyan-400 uppercase tracking-widest font-mono transition-colors duration-200"
                  data-hover
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200"
                data-hover
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>
            Designed &amp; built with <span className="text-pink-500">♥</span> by{' '}
            <span className="text-slate-400 font-semibold">Ankan Pal</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI/ML Engineer @ IEMA Research &amp; Development
          </span>
          <button
            onClick={() => scrollTo('#hero')}
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1"
            data-hover
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
