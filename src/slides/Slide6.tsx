import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}{suffix}</>;
}

export default function Slide6() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-red-500/30"
      >
        <h2 className="text-3xl font-bold">MY FLAGSHIP PROJECT</h2>
        <p className="text-lg mt-2 opacity-90">Virtual Testing Assistant (VTA)</p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.2 }}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#2554C7]/30"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🕸️</span>
            <p className="text-gray-200">Full-stack AI system with <strong className="text-cyan-300">Neo4j knowledge graph</strong></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#2554C7]/30"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔍</span>
            <p className="text-gray-200"><strong className="text-cyan-300">SentenceTransformers + pgvector</strong> for semantic search</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#2554C7]/30"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <p className="text-gray-200"><strong className="text-cyan-300">Ensemble recommender</strong> for optimal tests & duplicate detection</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#2554C7]/30"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🚗</span>
            <p className="text-gray-200"><strong className="text-cyan-300">CARLA / SUMO</strong> export for simulation</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#2554C7]/30"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <p className="text-gray-200"><strong className="text-cyan-300">FastAPI</strong> backend + <strong className="text-cyan-300">Streamlit</strong> dashboard</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="grid md:grid-cols-3 gap-6 mb-8"
      >
        <div className="bg-gradient-to-br from-[#2554C7] to-[#00e5ff] text-white p-6 rounded-lg shadow-lg shadow-cyan-500/50 text-center">
          <div className="text-5xl font-bold mb-2">
            <CountUp end={20} suffix="–30%" />
          </div>
          <p className="text-lg">Faster Campaigns</p>
        </div>

        <div className="bg-gradient-to-br from-[#2554C7] to-[#00e5ff] text-white p-6 rounded-lg shadow-lg shadow-cyan-500/50 text-center">
          <div className="text-5xl font-bold mb-2">
            <CountUp end={15} suffix="–25%" />
          </div>
          <p className="text-lg">Cost Savings</p>
        </div>

        <div className="bg-gradient-to-br from-[#2554C7] to-[#00e5ff] text-white p-6 rounded-lg shadow-lg shadow-cyan-500/50 text-center">
          <div className="text-5xl font-bold mb-2">
            <CountUp end={10} suffix="+" />
          </div>
          <p className="text-lg">Duplicates Detected</p>
        </div>
      </motion.div>

      {/* Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3 }}
        className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg border border-[#2554C7]/30"
      >
        <div className="flex items-center justify-between text-center">
          <div>
            <div className="w-20 h-20 bg-[#0a0e1a] border border-[#2554C7] rounded-lg shadow-lg flex items-center justify-center text-2xl mb-2">👨‍💻</div>
            <p className="text-sm font-semibold text-cyan-300">Engineer UI</p>
          </div>
          <div className="text-2xl text-[#00e5ff]">→</div>
          <div>
            <div className="w-20 h-20 bg-[#0a0e1a] border border-[#2554C7] rounded-lg shadow-lg flex items-center justify-center text-2xl mb-2">⚡</div>
            <p className="text-sm font-semibold text-cyan-300">FastAPI</p>
          </div>
          <div className="text-2xl text-[#00e5ff]">→</div>
          <div>
            <div className="w-20 h-20 bg-[#0a0e1a] border border-[#2554C7] rounded-lg shadow-lg flex items-center justify-center text-2xl mb-2">🤖</div>
            <p className="text-sm font-semibold text-cyan-300">AI Layer</p>
          </div>
          <div className="text-2xl text-[#00e5ff]">→</div>
          <div>
            <div className="w-20 h-20 bg-[#0a0e1a] border border-[#2554C7] rounded-lg shadow-lg flex items-center justify-center text-2xl mb-2">🗄️</div>
            <p className="text-sm font-semibold text-cyan-300">Neo4j/Postgres</p>
          </div>
          <div className="text-2xl text-[#00e5ff]">→</div>
          <div>
            <div className="w-20 h-20 bg-[#0a0e1a] border border-[#2554C7] rounded-lg shadow-lg flex items-center justify-center text-2xl mb-2">🚗</div>
            <p className="text-sm font-semibold text-cyan-300">CARLA/SUMO</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
