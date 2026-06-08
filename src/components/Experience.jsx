import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';

const experiences = [
  {
    role: 'System Analyst – AI/ML',
    company: 'IEMA Research & Development Pvt. Ltd.',
    location: 'Kolkata',
    period: 'Oct 2025 — Present',
    badge: { text: '● Current', style: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
    note: 'Promoted from intern to full-time within 6 months',
    active: true,
    bullets: [
      'Architect and own end-to-end LLM-powered backend systems integrated with 4+ multi-model AI services (ChatGPT, Gemini, Perplexity, Sonar), deployed on GCP with production-scale reliability and 99.5%+ uptime.',
      'Define technical requirements and system design documentation for new Generative AI product features, collaborating with product and engineering teams to reduce delivery ambiguity and accelerate sprint velocity.',
      'Oversee model deployment pipelines on GCP (Vertex AI), ensuring production stability, horizontal scalability, and real-time performance benchmarking across all AI inference endpoints.',
      'Drive engineering excellence through structured code reviews, enforcing clean architecture principles and software engineering best practices across the AI/ML codebase.',
      'Mentor junior engineers and interns on LLM integration, RAG system design, and prompt engineering patterns; established internal documentation standards for AI system specifications.',
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'IEMA Research & Development Pvt. Ltd.',
    location: 'Kolkata',
    period: 'Mar 2025 — Sep 2025',
    badge: { text: 'Promoted in 6 months', style: 'bg-violet-500/10 border-violet-500/30 text-violet-400' },
    active: false,
    bullets: [
      'Designed and implemented end-to-end LLM pipelines using LangChain and RAG for real-time intelligent applications, reducing average query response latency by 35%.',
      'Built and deployed production-grade FastAPI backends for chatbot and AI assistant interactions, handling production-scale API traffic on GCP Cloud Run with sub-200ms median response time.',
      'Built a unified multi-model chatbot integrating ChatGPT, Gemini, Perplexity, and Sonar under a single interface, enabling seamless model-switching without front-end changes.',
      'Implemented a real-time credit deduction and billing engine, a multi-signal user feedback loop, and multilingual transliteration for 5+ Indian languages in the AI coding assistant backend.',
      'Developed ML models for data analysis and predictive insights; iterated on model quality using user feedback telemetry to reduce error rates and improve response relevance.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative z-10 py-28">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">Career Journey</span>
          <h2 className="text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-[15px] leading-relaxed">
            Building production AI at IEMA Research &amp; Development — from intern to System Analyst in under a year.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-violet-500/50 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className={`absolute -left-[2.35rem] top-1 ${exp.active ? 'timeline-dot-active' : 'timeline-dot'}`} />

              {/* Date */}
              <div className="font-mono text-xs text-cyan-500 tracking-wider mb-3">{exp.period}</div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="glass-card p-7 border border-white/[0.06] hover:border-cyan-500/25 transition-colors duration-300 group"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <HiBriefcase className="w-4 h-4 text-cyan-500" />
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    </div>
                    <div className="text-sm text-slate-400">
                      {exp.company} · {exp.location}
                    </div>
                    {exp.note && (
                      <div className="text-xs text-slate-500 italic mt-1">{exp.note}</div>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex-shrink-0 ${exp.badge.style}`}>
                    {exp.badge.text}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: i * 0.2 + j * 0.07 + 0.3 }}
                      className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                    >
                      <span className="text-cyan-500 mt-0.5 flex-shrink-0">▸</span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
