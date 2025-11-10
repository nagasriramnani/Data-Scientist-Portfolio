import { motion } from 'framer-motion';

const layerVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export default function Slide6() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-8 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">SYSTEM ARCHITECTURE</h2>
        <p className="text-lg mt-2 opacity-90">Virtual Testing Assistant (Hero Slide)</p>
      </motion.div>

      {/* Architecture Stack */}
      <div className="space-y-4">
        {/* Layer 1: Data Source */}
        <motion.div
          variants={layerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[#1a1f35] to-[#2a2f45] p-5 rounded-lg shadow-lg border-2 border-[#2554C7]"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">📊</span>
            <h3 className="text-xl font-bold text-cyan-300">Vehicle & Simulation Data</h3>
          </div>
          <p className="text-sm text-gray-300 ml-11">
            logs, plans, sensors
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        {/* Layer 2: Data Ingestion */}
        <motion.div
          variants={layerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#1a1f35] to-[#2a2f45] p-5 rounded-lg shadow-lg border-2 border-[#00e5ff]"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">⚙️</span>
            <h3 className="text-xl font-bold text-cyan-300">Data Ingestion & Normalisation Layer</h3>
          </div>
          <p className="text-sm text-gray-300 ml-11">
            ETL, schema mapping, quality checks
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        {/* Layer 3: Semantic Knowledge */}
        <motion.div
          variants={layerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-[#2554C7] to-[#1a4a99] p-5 rounded-lg shadow-lg border-2 border-[#00e5ff] shadow-cyan-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🗂️</span>
            <h3 className="text-xl font-bold text-white">Semantic Knowledge Layer</h3>
          </div>
          <div className="ml-11 space-y-1 text-sm text-gray-100">
            <p>• Ontology (vehicles, tests, conditions)</p>
            <p>• Knowledge Graph (Neo4j)</p>
            <p>• Vector Index (pgvector)</p>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        {/* Layer 4: AI Reasoning */}
        <motion.div
          variants={layerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-[#C3002F] to-[#8b0020] p-5 rounded-lg shadow-lg border-2 border-[#ff1744] shadow-red-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🤖</span>
            <h3 className="text-xl font-bold text-white">AI Reasoning Layer</h3>
          </div>
          <div className="ml-11 space-y-1 text-sm text-gray-100">
            <p>• Hybrid Retrieval (SPARQL + Embeddings)</p>
            <p>• LLM Controller for Natural-Language Reasoning</p>
            <p>• Recommendation Engine for Test Plans</p>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        {/* Layer 5: Web & API */}
        <motion.div
          variants={layerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-[#1a1f35] to-[#2a2f45] p-5 rounded-lg shadow-lg border-2 border-[#ff9800]"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">💻</span>
            <h3 className="text-xl font-bold text-[#ff9800]">Web & API Interface</h3>
          </div>
          <p className="text-sm text-gray-300 ml-11">
            FastAPI + React Dashboard
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        {/* Layer 6: MLOps */}
        <motion.div
          variants={layerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-[#1a1f35] to-[#2a2f45] p-5 rounded-lg shadow-lg border-2 border-gray-500"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">📈</span>
            <h3 className="text-xl font-bold text-gray-300">MLOps | Monitoring | Audit Trails</h3>
          </div>
        </motion.div>
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8 grid md:grid-cols-2 gap-4"
      >
        <div className="bg-[#1a1f35]/80 backdrop-blur-sm p-4 rounded-lg border border-[#2554C7]">
          <p className="text-gray-200 text-sm italic">
            "The <strong className="text-cyan-300">ontology</strong> provides structure, the <strong className="text-cyan-300">graph</strong> connects knowledge, and the <strong className="text-cyan-300">AI layer</strong> reasons over it."
          </p>
        </div>
        <div className="bg-[#1a1f35]/80 backdrop-blur-sm p-4 rounded-lg border border-[#C3002F]">
          <p className="text-gray-200 text-sm italic">
            "The system acts like a <strong className="text-[#ff1744]">memory that never forgets</strong> — it remembers every test and learns from it."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
