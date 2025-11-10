import { motion } from 'framer-motion';

const layerVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export default function Slide6() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-3 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-2 px-6 mb-3 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">SYSTEM ARCHITECTURE</h2>
          <p className="text-xs mt-1 opacity-90">Virtual Testing Assistant</p>
        </motion.div>

        {/* Architecture Stack */}
        <div className="space-y-2">
          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-3 rounded-lg shadow-lg border-2 border-[#6366f1]"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">📊</span>
              <h3 className="text-sm font-bold text-purple-300">Vehicle & Simulation Data</h3>
            </div>
            <p className="text-xs text-gray-300 ml-7">logs, plans, sensors</p>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-3 rounded-lg shadow-lg border-2 border-[#8b5cf6]"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              <h3 className="text-sm font-bold text-purple-300">Data Ingestion & Normalisation</h3>
            </div>
            <p className="text-xs text-gray-300 ml-7">ETL, schema mapping, quality checks</p>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] p-3 rounded-lg shadow-lg border-2 border-[#8b5cf6]"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🗂️</span>
              <h3 className="text-sm font-bold text-white">Semantic Knowledge Layer</h3>
            </div>
            <div className="ml-7 space-y-0.5 text-xs text-gray-100">
              <p>• Ontology (vehicles, tests, conditions)</p>
              <p>• Knowledge Graph (Neo4j)</p>
              <p>• Vector Index (pgvector)</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] p-3 rounded-lg shadow-lg border-2 border-[#a855f7]"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🤖</span>
              <h3 className="text-sm font-bold text-white">AI Reasoning Layer</h3>
            </div>
            <div className="ml-7 space-y-0.5 text-xs text-gray-100">
              <p>• Hybrid Retrieval (SPARQL + Embeddings)</p>
              <p>• LLM Controller for Natural-Language Reasoning</p>
              <p>• Recommendation Engine for Test Plans</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-3 rounded-lg shadow-lg border-2 border-[#7c3aed]"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">💻</span>
              <h3 className="text-sm font-bold text-purple-300">Web & API Interface</h3>
            </div>
            <p className="text-xs text-gray-300 ml-7">FastAPI + React Dashboard</p>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={layerVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#1e293b] to-[#2a2f45] p-3 rounded-lg shadow-lg border-2 border-gray-500"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">📈</span>
              <h3 className="text-sm font-bold text-gray-300">MLOps | Monitoring | Audit Trails</h3>
            </div>
          </motion.div>
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-3 grid md:grid-cols-2 gap-2"
        >
          <div className="bg-[#1e293b]/80 backdrop-blur-sm p-2 rounded border border-[#6366f1]">
            <p className="text-gray-200 text-xs italic">
              "The <strong className="text-purple-300">ontology</strong> provides structure, the <strong className="text-purple-300">graph</strong> connects knowledge, and the <strong className="text-purple-300">AI layer</strong> reasons over it."
            </p>
          </div>
          <div className="bg-[#1e293b]/80 backdrop-blur-sm p-2 rounded border border-[#a855f7]">
            <p className="text-gray-200 text-xs italic">
              "The system acts like a <strong className="text-purple-400">memory that never forgets</strong> — it remembers every test and learns from it."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
