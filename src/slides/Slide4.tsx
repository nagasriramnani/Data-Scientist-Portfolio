import { motion } from 'framer-motion';

export default function Slide4() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">EXPERIENCE AT PARETO.AI</h2>
        <p className="text-lg mt-2 opacity-90">From Theory to Practice: Building AI Systems at Pareto.ai</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-8 rounded-lg mb-8 shadow-lg shadow-red-500/30"
      >
        <h3 className="text-2xl font-bold mb-3">Role: Generative AI Specialist</h3>
        <p className="text-lg">Building production-grade AI systems</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#2554C7]"
        >
          <h4 className="text-xl font-bold text-cyan-300 mb-3">What I Built</h4>
          <p className="text-gray-200">
            Built secure <strong className="text-cyan-400">RAG systems</strong> over legal / technical / tax document bases.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
        >
          <h4 className="text-xl font-bold text-cyan-300 mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">PyTorch</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">TensorFlow</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">scikit-learn</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">LangChain</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">Hugging Face</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">pgvector</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">Pinecone</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">RESTful APIs</span>
            <span className="bg-[#2554C7]/30 border border-[#2554C7] px-3 py-1 rounded text-sm font-semibold text-cyan-300">SentenceTransformers</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg mb-8 border border-[#00e5ff]/30"
      >
        <h4 className="text-xl font-bold text-cyan-300 mb-4">Relevance to Nissan</h4>
        <p className="text-lg text-gray-200">
          Already know how to combine <strong className="text-cyan-400">LLMs + vector search + business logic</strong> → safe, useful tools.
        </p>
      </motion.div>

      {/* Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        className="flex items-center justify-center gap-6 bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#2554C7]/30"
      >
        <div className="text-center">
          <div className="w-24 h-24 bg-[#0a0e1a] border border-[#2554C7] rounded-lg flex items-center justify-center text-3xl">📄</div>
          <p className="mt-2 text-sm font-semibold text-cyan-300">Documents</p>
        </div>
        <div className="text-2xl text-[#00e5ff]">→</div>
        <div className="text-center">
          <div className="w-24 h-24 bg-[#0a0e1a] border border-[#2554C7] rounded-lg flex items-center justify-center text-3xl">🧮</div>
          <p className="mt-2 text-sm font-semibold text-cyan-300">Embeddings</p>
        </div>
        <div className="text-2xl text-[#00e5ff]">→</div>
        <div className="text-center">
          <div className="w-24 h-24 bg-[#0a0e1a] border border-[#2554C7] rounded-lg flex items-center justify-center text-3xl">🤖</div>
          <p className="mt-2 text-sm font-semibold text-cyan-300">LLM + Tools</p>
        </div>
        <div className="text-2xl text-[#00e5ff]">→</div>
        <div className="text-center">
          <div className="w-24 h-24 bg-[#0a0e1a] border border-[#2554C7] rounded-lg flex items-center justify-center text-3xl">💻</div>
          <p className="mt-2 text-sm font-semibold text-cyan-300">UI</p>
        </div>
      </motion.div>
    </div>
  );
}
