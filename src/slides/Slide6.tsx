import { motion } from 'framer-motion';

const layerVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export default function Slide6() {
  return (
    <div className="w-full min-h-screen px-12 py-16">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold">SYSTEM ARCHITECTURE</h2>
          <p className="text-xl mt-2 opacity-90">Virtual Testing Assistant (Hero Slide)</p>
        </motion.div>

        {/* Architecture Stack */}
        <div className="space-y-6">
          {/* Layer 1: Data Source */}
          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-6 rounded-xl shadow-xl border-4 border-[#6366f1]"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">📊</span>
              <h3 className="text-2xl font-bold text-purple-300">Vehicle & Simulation Data</h3>
            </div>
            <p className="text-lg text-gray-300 ml-14">
              logs, plans, sensors
            </p>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="text-5xl text-purple-400">↓</div>
          </div>

          {/* Layer 2: Data Ingestion */}
          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-6 rounded-xl shadow-xl border-4 border-[#8b5cf6]"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">⚙️</span>
              <h3 className="text-2xl font-bold text-purple-300">Data Ingestion & Normalisation Layer</h3>
            </div>
            <p className="text-lg text-gray-300 ml-14">
              ETL, schema mapping, quality checks
            </p>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="text-5xl text-purple-400">↓</div>
          </div>

          {/* Layer 3: Semantic Knowledge */}
          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] p-8 rounded-xl shadow-2xl border-4 border-[#8b5cf6] shadow-purple-500/40"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🗂️</span>
              <h3 className="text-2xl font-bold text-white">Semantic Knowledge Layer</h3>
            </div>
            <div className="ml-14 space-y-2 text-lg text-gray-100">
              <p>• Ontology (vehicles, tests, conditions)</p>
              <p>• Knowledge Graph (Neo4j)</p>
              <p>• Vector Index (pgvector)</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="text-5xl text-purple-400">↓</div>
          </div>

          {/* Layer 4: AI Reasoning */}
          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] p-8 rounded-xl shadow-2xl border-4 border-[#a855f7] shadow-purple-500/40"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🤖</span>
              <h3 className="text-2xl font-bold text-white">AI Reasoning Layer</h3>
            </div>
            <div className="ml-14 space-y-2 text-lg text-gray-100">
              <p>• Hybrid Retrieval (SPARQL + Embeddings)</p>
              <p>• LLM Controller for Natural-Language Reasoning</p>
              <p>• Recommendation Engine for Test Plans</p>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="text-5xl text-purple-400">↓</div>
          </div>

          {/* Layer 5: Web & API */}
          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-6 rounded-xl shadow-xl border-4 border-[#7c3aed]"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">💻</span>
              <h3 className="text-2xl font-bold text-purple-300">Web & API Interface</h3>
            </div>
            <p className="text-lg text-gray-300 ml-14">
              FastAPI + React Dashboard
            </p>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="text-5xl text-purple-400">↓</div>
          </div>

          {/* Layer 6: MLOps */}
          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-6 rounded-xl shadow-xl border-4 border-gray-500"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">📈</span>
              <h3 className="text-2xl font-bold text-gray-300">MLOps | Monitoring | Audit Trails</h3>
            </div>
          </motion.div>
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6 pt-6"
        >
          <div className="bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl border-2 border-[#6366f1]">
            <p className="text-gray-200 text-lg italic">
              "The <strong className="text-purple-300">ontology</strong> provides structure, the <strong className="text-purple-300">graph</strong> connects knowledge, and the <strong className="text-purple-300">AI layer</strong> reasons over it."
            </p>
          </div>
          <div className="bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl border-2 border-[#a855f7]">
            <p className="text-gray-200 text-lg italic">
              "The system acts like a <strong className="text-purple-400">memory that never forgets</strong> — it remembers every test and learns from it."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
