import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

const education = [
  {
    icon: '🎓',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'University of Engineering & Management (UEM), Kolkata',
    meta: ['CGPA: 8.72 / 10', '2021 – 2025'],
  },
  {
    icon: '📚',
    degree: '12th Standard — ISC Science',
    school: "St. Stephen's School, Dum Dum, Kolkata",
    meta: ['85%', 'Passed 2021'],
  },
  {
    icon: '🏫',
    degree: '10th Standard — ICSE',
    school: "St. Stephen's School, Dum Dum, Kolkata",
    meta: ['80%', 'Passed 2019'],
  },
];

const certs = [
  {
    icon: '🏆',
    name: 'Generative AI Certification',
    issuer: 'GUVI — Google for Developers',
    color: 'from-amber-500/10 to-transparent border-amber-500/20 hover:border-amber-500/40',
    dot: 'bg-amber-400',
  },
  {
    icon: '🎯',
    name: 'Enhancing Soft Skills & Personality',
    issuer: 'NPTEL — IIT Kharagpur',
    color: 'from-cyan-500/8 to-transparent border-cyan-500/15 hover:border-cyan-500/35',
    dot: 'bg-cyan-400',
  },
  {
    icon: '💡',
    name: 'Developing Soft Skills & Personality',
    issuer: 'NPTEL — IIT Kharagpur',
    color: 'from-violet-500/8 to-transparent border-violet-500/15 hover:border-violet-500/35',
    dot: 'bg-violet-400',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">Education & Certifications</span>
          <h2 className="text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-[15px] leading-relaxed">
            Strong academic foundation with consistent excellence, backed by industry-recognized certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Education ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HiAcademicCap className="w-5 h-5 text-cyan-500" />
              <h3 className="font-mono text-xs text-slate-400 uppercase tracking-widest">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.degree}
                  {...fadeUp(i * 0.12)}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="glass-card flex gap-4 p-5 border border-white/[0.06] hover:border-cyan-500/25 transition-colors duration-300 cursor-default"
                  data-hover
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/10 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
                    {ed.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-snug mb-1">{ed.degree}</div>
                    <div className="text-xs text-slate-400 mb-2">{ed.school}</div>
                    <div className="flex flex-wrap gap-2">
                      {ed.meta.map(m => (
                        <span key={m} className="font-mono text-[11px] text-cyan-400 bg-cyan-500/8 border border-cyan-500/15 px-2 py-0.5 rounded-md">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location card */}
            <motion.div
              {...fadeUp(0.4)}
              className="glass-card mt-4 p-5 border border-white/[0.06] hover:border-violet-500/25 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-sm font-bold text-white">Kolkata, West Bengal, India</div>
                  <div className="text-xs text-slate-500 mt-0.5">Open to Remote & Relocation</div>
                </div>
                <div className="ml-auto">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Certifications ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HiBadgeCheck className="w-5 h-5 text-violet-400" />
              <h3 className="font-mono text-xs text-slate-400 uppercase tracking-widest">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  {...fadeUp(i * 0.12)}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border bg-gradient-to-r ${c.color} backdrop-blur-sm transition-all duration-300 cursor-default`}
                  data-hover
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white leading-snug">{c.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.issuer}</div>
                  </div>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                </motion.div>
              ))}
            </div>

            {/* Quick info card */}
            <motion.div
              {...fadeUp(0.45)}
              className="mt-4 glass-card p-6 border border-white/[0.06]"
            >
              <div className="font-mono text-[10px] text-cyan-500 tracking-widest uppercase mb-3">Quick Facts</div>
              <div className="space-y-2.5">
                {[
                  ['🎓', 'B.Tech CSE', 'UEM Kolkata'],
                  ['💼', 'IEMA R&D', 'System Analyst – AI/ML'],
                  ['🌐', 'Languages', 'English, Bengali, Hindi'],
                  ['⚡', 'Focus Area', 'GenAI, LLMs, MLOps'],
                ].map(([icon, label, val]) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <span className="text-base">{icon}</span>
                    <span className="text-slate-500 w-28 flex-shrink-0">{label}</span>
                    <span className="text-slate-300 font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
