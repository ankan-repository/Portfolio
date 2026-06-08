import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const categories = [
  {
    icon: '🧠',
    title: 'GenAI & LLMs',
    sub: 'Large Language Models & Pipelines',
    tags: ['LangChain', 'LangGraph', 'OpenAI GPT-4o', 'Google Gemini', 'Vertex AI', 'Prompt Engineering', 'Fine-tuning', 'RAG'],
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    iconBg: 'from-cyan-500 to-blue-600',
  },
  {
    icon: '🔍',
    title: 'Vector & Search',
    sub: 'Retrieval Augmented Generation',
    tags: ['RAG Architectures', 'Vector Databases', 'Semantic Search', 'Embedding Models', 'FAISS', 'ChromaDB'],
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    iconBg: 'from-violet-500 to-purple-700',
  },
  {
    icon: '⚡',
    title: 'ML & Deep Learning',
    sub: 'Models & Neural Networks',
    tags: ['TensorFlow', 'Keras', 'Scikit-learn', 'CNN-LSTM', 'VAE', 'Time Series', 'Anomaly Detection', 'NLP', 'Computer Vision'],
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    iconBg: 'from-pink-500 to-rose-600',
  },
  {
    icon: '☁️',
    title: 'Cloud & Backend',
    sub: 'Infrastructure & APIs',
    tags: ['GCP Vertex AI', 'Cloud Run', 'Python', 'FastAPI', 'Firebase', 'REST APIs', 'Multi-model Integration'],
    color: 'from-sky-500/20 to-sky-500/5',
    border: 'border-sky-500/20 hover:border-sky-500/50',
    iconBg: 'from-sky-400 to-cyan-600',
  },
  {
    icon: '🤖',
    title: 'AI Agents',
    sub: 'Autonomous Workflow Systems',
    tags: ['Multi-agent Pipelines', 'Tool-use Agents', 'Function Calling', 'Workflow Design', 'OpenAI API'],
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    iconBg: 'from-emerald-500 to-teal-600',
  },
  {
    icon: '🎨',
    title: 'Multimodal AI',
    sub: 'Vision, Audio & Generation',
    tags: ['Image Generation', 'Video Generation', 'Speech Recognition', 'Face Detection', 'Pose Estimation'],
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    iconBg: 'from-amber-500 to-orange-600',
  },
  {
    icon: '📊',
    title: 'Data & Sensors',
    sub: 'Industrial IoT & Analytics',
    tags: ['Industrial IoT', 'Multi-sensor Pipelines', 'Pandas', 'NumPy', 'Matplotlib', 'Sensor Physics Modelling'],
    color: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    iconBg: 'from-indigo-500 to-blue-700',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">Technical Skills</span>
          <h2 className="text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-4">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-[15px] leading-relaxed">
            Cutting-edge tools and frameworks I use to build production-grade AI systems that scale.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {categories.map(({ icon, title, sub, tags, color, border, iconBg }) => (
            <motion.div
              key={title}
              variants={cardAnim}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative p-6 rounded-2xl border bg-gradient-to-br ${color} ${border} transition-all duration-300 group cursor-default overflow-hidden`}
              data-hover
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)' }} />

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}>
                  {icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{title}</div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="skill-pill"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
