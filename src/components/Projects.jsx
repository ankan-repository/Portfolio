import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    icon: '🤖',
    name: 'iema.ai – AI Coding Assistant Backend',
    org: 'IEMA R&D',
    year: '2025',
    desc: 'Production-grade backend powering a multi-model AI coding assistant. Designed for scalability, provider abstraction, and real-time performance on GCP infrastructure with sub-200ms median API response.',
    features: [
      { label: 'Multi-model Orchestration', text: 'Unified backend integrating ChatGPT, Gemini (Vertex AI) — hot-swap AI providers without any front-end changes.' },
      { label: 'GenAI Pipelines', text: 'AI image & video generation pipelines using state-of-the-art generative models, deployed on GCP and integrated into live product.' },
      { label: 'Multilingual Support', text: 'Real-time phonetic transliteration for 5+ Indian languages (Bengali, Hindi, Tamil, Telugu, Kannada).' },
      { label: 'Billing Engine', text: 'Token-based credit deduction with real-time balance tracking and multi-signal feedback loop for iterative quality improvements.' },
    ],
    tech: ['LangChain', 'GPT-4o', 'Gemini', 'Vertex AI', 'FastAPI', 'GCP Cloud Run', 'Firebase', 'RAG'],
    gradient: 'from-cyan-500/15 via-transparent to-transparent',
    accent: 'cyan',
    accentColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    tagStyle: 'bg-cyan-500/8 border-cyan-500/20 text-cyan-400/80',
  },
  {
    icon: '🏭',
    name: 'Predictive Maintenance & Asset Health Monitoring',
    org: 'IEMA R&D',
    year: '2025',
    desc: 'End-to-end industrial predictive maintenance platform deployed across 5–7 manufacturing plants, monitoring 50–140 sensors per deployment for real-time equipment health, anomaly detection, fault classification, and RUL forecasting.',
    features: [
      { label: 'Multi-Plant Deployment', text: '5–7 industrial plants, 10–20 sensors per motor. Site-specific sensor weightings for 95%+ prediction accuracy per plant.' },
      { label: 'RUL Forecasting Model', text: '95%+ RUL prediction accuracy with plant-specific models ensuring robust performance across varying industrial environments.' },
      { label: 'Anomaly Detection Engine', text: 'Multi-threshold detection pipeline with gap-merging and fault period reporting, significantly reducing false positive alerts.' },
      { label: 'Analytics Dashboard', text: 'Real-time interactive dashboard visualising live sensor trends, RUL trajectory, anomaly events, and health zone transitions.' },
    ],
    tech: ['CNN-LSTM', 'VAE', 'TensorFlow', 'Industrial IoT', 'FastAPI', 'GCP', 'Pandas', 'Time Series'],
    gradient: 'from-violet-500/15 via-transparent to-transparent',
    accent: 'violet',
    accentColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    tagStyle: 'bg-violet-500/8 border-violet-500/20 text-violet-400/80',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">Key Projects</span>
          <h2 className="text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-4">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-[15px] leading-relaxed">
            Production-grade AI systems deployed at real scale — from multi-model coding assistants to industrial predictive maintenance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid xl:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.18, ease: 'easeOut' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`gradient-border relative rounded-2xl p-8 border border-white/[0.07] bg-gradient-to-br ${p.gradient} bg-dark-800/40 backdrop-blur-sm transition-all duration-400 group cursor-default ${p.borderHover}`}
              style={{
                transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered === i
                  ? p.accent === 'cyan'
                    ? '0 24px 60px rgba(0,212,255,0.1), 0 8px 24px rgba(0,0,0,0.3)'
                    : '0 24px 60px rgba(124,58,237,0.12), 0 8px 24px rgba(0,0,0,0.3)'
                  : '0 4px 24px rgba(0,0,0,0.25)',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}
              data-hover
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-3xl flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight mb-1">{p.name}</h3>
                    <span className={`font-mono text-xs ${p.accentColor}`}>◆ {p.org}</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-500 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-lg flex-shrink-0">
                  {p.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {p.features.map(({ label, text }) => (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="text-violet-400 text-xs mt-1 flex-shrink-0">◆</span>
                    <div>
                      <span className="text-white font-semibold">{label}: </span>
                      <span className="text-slate-400">{text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md border ${p.tagStyle} transition-all duration-200`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Animated corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: p.accent === 'cyan'
                    ? 'radial-gradient(circle at top right, rgba(0,212,255,0.08), transparent 70%)'
                    : 'radial-gradient(circle at top right, rgba(124,58,237,0.1), transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
