import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const highlights = [
  { icon: '🏭', title: 'Industrial AI', desc: '5–7 plants, 50–140 sensors monitored in real-time' },
  { icon: '🤖', title: 'Multi-Model LLM', desc: 'ChatGPT, Gemini, Perplexity, Sonar — unified' },
  { icon: '☁️', title: 'Cloud-Native', desc: 'GCP Vertex AI & Cloud Run at production scale' },
  { icon: '📐', title: 'Architecture', desc: 'End-to-end from requirements to deployment' },
];

const stats = [
  { value: '95', suffix: '%+', label: 'Model Accuracy' },
  { value: '99', suffix: '.5%', label: 'System Uptime' },
  { value: '35', suffix: '%', label: 'Latency Reduced' },
  { value: '5', suffix: '+', label: 'AI Models Integrated' },
];

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="text-4xl font-black gradient-text">
      {inView ? value : '0'}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <span className="section-tag">About Me</span>
              <h2 className="text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-6">
                Building the{' '}
                <span className="gradient-text">Future of AI</span>
              </h2>
            </motion.div>

            {[
              <>I'm an AI/ML engineer specializing in <strong className="text-cyan-400 font-semibold">production-grade Generative AI</strong>. At IEMA Research &amp; Development, I architect end-to-end LLM-powered systems integrated with 4+ multi-model AI services — deployed on GCP with <strong className="text-cyan-400 font-semibold">99.5%+ uptime</strong>.</>,
              <>From <strong className="text-violet-400 font-semibold">intelligent coding assistants</strong> to industrial predictive maintenance systems monitoring 50–140 sensors across 5–7 plants, I've built AI products that work at scale in the real world.</>,
              <>Skilled in the full stack: from model fine-tuning and RAG architectures to cloud deployment and production monitoring — I bridge the gap between research and real-world AI.</>,
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="text-slate-400 leading-relaxed mb-4 text-[15px]"
              >
                {text}
              </motion.p>
            ))}

            {/* Highlight cards */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-3 mt-8"
            >
              {highlights.map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card glass-card-hover p-4 cursor-default"
                  data-hover
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-sm font-semibold text-white mb-1">{title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Stats ── */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-card p-8 text-center relative overflow-hidden group cursor-default"
                data-hover
              >
                {/* top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="text-4xl font-black gradient-text leading-none mb-1">
                  <AnimatedNumber value={value} />
                  <span className="gradient-text">{suffix}</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-2">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
