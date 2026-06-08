import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

const contactItems = [
  {
    icon: <HiMail className="w-5 h-5" />,
    label: 'Email',
    value: 'ankanp595@gmail.com',
    href: 'mailto:ankanp595@gmail.com',
    color: 'hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-300',
  },
  {
    icon: <HiPhone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 7003053064',
    href: 'tel:+917003053064',
    color: 'hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:text-emerald-300',
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'ankan-pal-b4518241',
    href: 'https://linkedin.com/in/ankan-pal-b4518241',
    color: 'hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-300',
  },
  {
    icon: <HiLocationMarker className="w-5 h-5" />,
    label: 'Location',
    value: 'Kolkata, West Bengal, India',
    href: null,
    color: 'hover:border-pink-500/50 hover:bg-pink-500/5 hover:text-pink-300',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ankanp595@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10 py-28 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-violet-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <span className="section-tag justify-center">Let's Connect</span>
          <h2 className="text-4xl xl:text-6xl font-black tracking-tight leading-tight mb-6">
            Ready to Build{' '}
            <span className="gradient-text">Something Incredible?</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-12">
            Whether you're looking for a Generative AI engineer, want to discuss LLM architectures,
            or have an exciting AI problem to solve — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {contactItems.map(({ icon, label, value, href, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass-card flex items-center gap-4 p-5 border border-white/[0.07] text-left transition-all duration-300 cursor-pointer group ${color}`}
              data-hover
              onClick={href ? () => href.startsWith('http') ? window.open(href, '_blank') : window.location.href = href : undefined}
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-current group-hover:text-current transition-all duration-300 flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-0.5">{label}</div>
                <div className="text-sm font-semibold text-slate-300 group-hover:text-current transition-colors duration-300 truncate">{value}</div>
              </div>
              {href && <HiExternalLink className="w-4 h-4 text-slate-600 group-hover:text-current transition-colors duration-300 flex-shrink-0" />}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="mailto:ankanp595@gmail.com"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-base px-8 py-3.5 shadow-glow-cyan"
            data-hover
          >
            <HiMail className="w-5 h-5" />
            Send Me a Message
          </motion.a>

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline text-base px-8 py-3.5"
            data-hover
          >
            {copied ? '✅ Copied!' : '📋 Copy Email'}
          </motion.button>

          <motion.a
            href="https://linkedin.com/in/ankan-pal-b4518241"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline text-base px-8 py-3.5"
            data-hover
          >
            <FaLinkedin className="w-5 h-5" />
            View LinkedIn
          </motion.a>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-slate-400 bg-white/[0.03] border border-white/[0.06]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Currently open to full-time AI/ML roles &amp; exciting projects
        </motion.div>
      </div>
    </section>
  );
}
