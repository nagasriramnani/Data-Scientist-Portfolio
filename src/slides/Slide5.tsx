import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Slide5() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-4">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-3 px-6 mb-4 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">WHO I AM AND WHY I FIT</h2>
          <p className="text-sm mt-1 opacity-90">Building Confidence in My Ability</p>
        </motion.div>

        <div className="space-y-3 mb-4">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#6366f1]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-sm text-gray-200">
                  <strong className="text-purple-300">MSc Big Data & High-Performance Computing (Liverpool)</strong>
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Dissertation on digital-twin simulation for autonomous-driving safety.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#8b5cf6]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <p className="text-sm text-gray-200">
                  <strong className="text-purple-300">Hands-on AI Engineer</strong>
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Experience across data pipelines, semantic AI, RAG systems, and LLM applications.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#a855f7]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <p className="text-sm text-gray-200">
                  <strong className="text-purple-300">Data Specialist (DWP)</strong>
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Automated analytical pipelines + governance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#7c3aed]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">💻</span>
              <div>
                <p className="text-sm text-gray-200">
                  <strong className="text-purple-300">AI Developer (Pareto.ai)</strong>
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Built retrieval-augmented systems and intelligent APIs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#8b5cf6]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚙️</span>
              <div>
                <p className="text-sm text-gray-200">
                  <strong className="text-purple-300">Technical Stack</strong>
                </p>
                <p className="text-xs text-gray-300 mt-1">
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
          transition={{ delay: 0.8 }}
          className="mb-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white p-4 rounded-lg shadow-lg text-center"
        >
          <p className="text-base font-bold italic">
            "I sit exactly where this project lives — between <span className="underline">data engineering</span>, <span className="underline">AI modelling</span>, and <span className="underline">human-centred design</span>."
          </p>
        </motion.div>

        {/* Personal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex justify-center items-center gap-2"
        >
          <div className="text-center">
            <div className="w-14 h-14 bg-[#6366f1] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-xs">MSc</div>
            <p className="mt-1 text-[10px] text-purple-300">2022-23</p>
          </div>
          <div className="h-1 w-8 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"></div>
          <div className="text-center">
            <div className="w-14 h-14 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-xs">DWP</div>
            <p className="mt-1 text-[10px] text-purple-300">2024</p>
          </div>
          <div className="h-1 w-8 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7]"></div>
          <div className="text-center">
            <div className="w-14 h-14 bg-[#a855f7] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-[10px]">Pareto</div>
            <p className="mt-1 text-[10px] text-purple-300">2025</p>
          </div>
          <div className="h-1 w-8 bg-gradient-to-r from-[#a855f7] to-[#7c3aed]"></div>
          <div className="text-center">
            <div className="w-14 h-14 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-xs">KTP</div>
            <p className="mt-1 text-[10px] text-purple-300">Goal</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
