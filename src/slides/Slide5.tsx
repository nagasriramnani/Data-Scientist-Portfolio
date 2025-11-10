import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Slide5() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-10 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">WHO I AM AND WHY I FIT</h2>
        <p className="text-lg mt-2 opacity-90">Building Confidence in My Ability</p>
      </motion.div>

      <div className="space-y-5">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#2554C7]"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎓</span>
            <div>
              <p className="text-lg text-gray-200">
                <strong className="text-cyan-300">MSc Big Data & High-Performance Computing (Liverpool)</strong>
              </p>
              <p className="text-gray-300 mt-1">
                Dissertation on digital-twin simulation for autonomous-driving safety.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#00e5ff]"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">🤖</span>
            <div>
              <p className="text-lg text-gray-200">
                <strong className="text-cyan-300">Hands-on AI Engineer</strong>
              </p>
              <p className="text-gray-300 mt-1">
                Experience across data pipelines, semantic AI, RAG systems, and LLM applications.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">📊</span>
            <div>
              <p className="text-lg text-gray-200">
                <strong className="text-cyan-300">Data Specialist (DWP)</strong>
              </p>
              <p className="text-gray-300 mt-1">
                Automated analytical pipelines + governance.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#ff9800]"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">💻</span>
            <div>
              <p className="text-lg text-gray-200">
                <strong className="text-cyan-300">AI Developer (Pareto.ai)</strong>
              </p>
              <p className="text-gray-300 mt-1">
                Built retrieval-augmented systems and intelligent APIs.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.0 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#00e5ff]"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">⚙️</span>
            <div>
              <p className="text-lg text-gray-200">
                <strong className="text-cyan-300">Technical Stack</strong>
              </p>
              <p className="text-gray-300 mt-1">
                Fluent in Python, PyTorch, TensorFlow, FastAPI, Neo4j, Azure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-10 bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-6 rounded-lg shadow-lg shadow-red-500/30 text-center"
      >
        <p className="text-2xl font-bold italic">
          "I sit exactly where this project lives — between <span className="underline">data engineering</span>, <span className="underline">AI modelling</span>, and <span className="underline">human-centred design</span>."
        </p>
      </motion.div>

      {/* Personal Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10 flex justify-center items-center gap-3"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-[#2554C7] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50 text-sm">MSc</div>
          <p className="mt-2 text-xs text-cyan-300">2022-23</p>
        </div>
        <div className="h-1 w-12 bg-gradient-to-r from-[#2554C7] to-[#00e5ff]"></div>
        <div className="text-center">
          <div className="w-20 h-20 bg-[#2554C7] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50 text-sm">DWP</div>
          <p className="mt-2 text-xs text-cyan-300">2024</p>
        </div>
        <div className="h-1 w-12 bg-gradient-to-r from-[#00e5ff] to-[#ff9800]"></div>
        <div className="text-center">
          <div className="w-20 h-20 bg-[#ff9800] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/50 text-xs">Pareto</div>
          <p className="mt-2 text-xs text-cyan-300">2025</p>
        </div>
        <div className="h-1 w-12 bg-gradient-to-r from-[#ff9800] to-[#C3002F]"></div>
        <div className="text-center">
          <div className="w-20 h-20 bg-[#C3002F] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-red-500/50 text-sm">KTP</div>
          <p className="mt-2 text-xs text-cyan-300">Goal</p>
        </div>
      </motion.div>
    </div>
  );
}
