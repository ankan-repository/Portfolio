import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

const techChips = [
  { label: '⚡ LangChain', delay: 0 },
  { label: '🧠 Vertex AI', delay: 0.5 },
  { label: '🔗 RAG Arch.', delay: 1 },
  { label: '☁️ GCP', delay: 1.5 },
  { label: '🤖 Multi-Agent', delay: 2 },
  { label: '🔬 LLM Systems', delay: 0.8 },
];

const stats = [
  { value: '15+', label: 'Months Exp.' },
  { value: '95%+', label: 'Model Accuracy' },
  { value: '99.5%', label: 'Uptime' },
];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const titles = ['AI/ML Engineer', 'Generative AI Developer', 'LLM Systems Architect'];
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed = isDeleting ? 50 : 90;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setTyped(current.slice(0, typed.length + 1));
        if (typed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setTyped(current.slice(0, typed.length - 1));
        if (typed.length === 0) {
          setIsDeleting(false);
          setTitleIdx((i) => (i + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [typed, isDeleting, titleIdx]);

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-500/8 top-[-80px] right-[-100px] animate-float" />
      <div className="glow-orb w-[500px] h-[500px] bg-violet-600/10 bottom-[-60px] left-[-100px] animate-float-delayed" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/8 border border-cyan-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] mb-4"
            >
              <span className="text-white">ANKAN</span>
              <br />
              <span className="gradient-text">PAL</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={item}
              className="text-xl font-mono text-slate-300 mb-6 h-8 flex items-center gap-1"
            >
              <span className="text-cyan-500/70">{'>'}</span>
              <span>{typed}</span>
              <span className="w-0.5 h-6 bg-cyan-400 animate-blink ml-0.5" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-slate-400 text-base leading-relaxed max-w-lg mb-8"
            >
              Results-driven AI engineer with{' '}
              <span className="text-cyan-400 font-semibold">15+ months</span> of
              hands-on industry experience designing{' '}
              <span className="text-violet-400 font-semibold">production-grade</span>{' '}
              Generative AI systems, LLM pipelines, RAG architectures, and
              multi-agent frameworks deployed on GCP.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <motion.button
                onClick={() => handleScroll('#projects')}
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                data-hover
              >
                View My Work
                <HiArrowDown className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('#contact')}
                className="btn-outline"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                data-hover
              >
                <HiMail className="w-4 h-4" />
                Get In Touch
              </motion.button>
              <motion.a
                href="https://linkedin.com/in/ankan-pal-b4518241"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                data-hover
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex gap-8 pt-8 border-t border-white/[0.07]"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-black gradient-text leading-none">{value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column — Orb Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Floating chips */}
            {techChips.map(({ label, delay }, i) => {
              const positions = [
                'top-[8%] left-[-8%]',
                'top-[38%] right-[-12%]',
                'bottom-[20%] left-[-5%]',
                'bottom-[8%] right-[5%]',
                'top-[65%] left-[-18%]',
                'top-[15%] right-[2%]',
              ];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + delay * 0.3, duration: 0.5 }}
                  className={`absolute ${positions[i]} z-20`}
                  style={{ animation: `float ${5 + i}s ease-in-out ${delay}s infinite` }}
                >
                  <div className="px-3 py-1.5 text-xs font-mono text-cyan-300 bg-dark-800/90 border border-cyan-500/20 rounded-lg backdrop-blur-sm whitespace-nowrap shadow-lg">
                    {label}
                  </div>
                </motion.div>
              );
            })}

            {/* Orb */}
            <div className="relative w-80 h-80">
              {/* Outer rings */}
              <div className="absolute inset-[-40px] rounded-full border border-cyan-500/8 animate-spin-slow" />
              <div className="absolute inset-[-20px] rounded-full border border-violet-500/10 animate-spin-slower" />

              {/* Main orb */}
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 38% 35%, rgba(0,212,255,0.18), rgba(124,58,237,0.12), rgba(2,5,16,0.9))',
                  border: '1px solid rgba(0,212,255,0.12)',
                  boxShadow: '0 0 80px rgba(0,212,255,0.1), inset 0 0 80px rgba(124,58,237,0.05)',
                  animation: 'pulseGlow 4s ease-in-out infinite',
                }}
              >
                <div className="text-center select-none">
                  <div
                    className="text-6xl font-black gradient-text leading-none mb-1"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    AI
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase">
                    Systems Architect
                  </div>
                </div>
              </div>

              {/* Ring dots */}
              {[0, 120, 240].map((deg, i) => (
                <div
                  key={i}
                  className="absolute inset-[-28px] rounded-full"
                  style={{ animation: `spin ${12 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}` }}
                >
                  <div
                    className="absolute w-2 h-2 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background: ['#00d4ff', '#8b5cf6', '#f472b6'][i],
                      boxShadow: `0 0 10px ${['rgba(0,212,255,0.8)', 'rgba(139,92,246,0.8)', 'rgba(244,114,182,0.8)'][i]}`,
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-[10px] tracking-widest uppercase"
      >
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-cyan-500 rounded-full" style={{ animation: 'scrollWheel 2s ease-in-out infinite' }} />
        </div>
        <span>Scroll</span>
      </motion.div>

      <style>{`
        @keyframes scrollWheel {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 60px rgba(0,212,255,0.08), inset 0 0 60px rgba(124,58,237,0.04); }
          50% { box-shadow: 0 0 100px rgba(0,212,255,0.18), inset 0 0 80px rgba(124,58,237,0.08); }
        }
      `}</style>
    </section>
  );
}
