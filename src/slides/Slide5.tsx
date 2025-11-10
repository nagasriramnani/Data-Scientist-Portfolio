import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Slide5() {
  return (
    <div className="w-full min-h-screen px-12 py-16">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold">WHO I AM AND WHY I FIT</h2>
          <p className="text-xl mt-2 opacity-90">Building Confidence in My Ability</p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#6366f1]"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎓</span>
              <div>
                <p className="text-xl text-gray-200 mb-2">
                  <strong className="text-purple-300">MSc Big Data & High-Performance Computing (Liverpool)</strong>
                </p>
                <p className="text-lg text-gray-300">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#8b5cf6]"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">🤖</span>
              <div>
                <p className="text-xl text-gray-200 mb-2">
                  <strong className="text-purple-300">Hands-on AI Engineer</strong>
                </p>
                <p className="text-lg text-gray-300">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#a855f7]"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">📊</span>
              <div>
                <p className="text-xl text-gray-200 mb-2">
                  <strong className="text-purple-300">Data Specialist (DWP)</strong>
                </p>
                <p className="text-lg text-gray-300">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#7c3aed]"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">💻</span>
              <div>
                <p className="text-xl text-gray-200 mb-2">
                  <strong className="text-purple-300">AI Developer (Pareto.ai)</strong>
                </p>
                <p className="text-lg text-gray-300">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#8b5cf6]"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚙️</span>
              <div>
                <p className="text-xl text-gray-200 mb-2">
                  <strong className="text-purple-300">Technical Stack</strong>
                </p>
                <p className="text-lg text-gray-300">
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
          className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white p-8 rounded-xl shadow-2xl text-center"
        >
          <p className="text-2xl font-bold italic">
            "I sit exactly where this project lives — between <span className="underline">data engineering</span>, <span className="underline">AI modelling</span>, and <span className="underline">human-centred design</span>."
          </p>
        </motion.div>

        {/* Personal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex justify-center items-center gap-4 py-6"
        >
          <div className="text-center">
            <div className="w-24 h-24 bg-[#6366f1] rounded-full flex items-center justify-center text-white font-bold shadow-2xl text-lg">MSc</div>
            <p className="mt-2 text-base text-purple-300">2022-23</p>
          </div>
          <div className="h-2 w-16 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"></div>
          <div className="text-center">
            <div className="w-24 h-24 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold shadow-2xl text-lg">DWP</div>
            <p className="mt-2 text-base text-purple-300">2024</p>
          </div>
          <div className="h-2 w-16 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7]"></div>
          <div className="text-center">
            <div className="w-24 h-24 bg-[#a855f7] rounded-full flex items-center justify-center text-white font-bold shadow-2xl text-base">Pareto</div>
            <p className="mt-2 text-base text-purple-300">2025</p>
          </div>
          <div className="h-2 w-16 bg-gradient-to-r from-[#a855f7] to-[#7c3aed]"></div>
          <div className="text-center">
            <div className="w-24 h-24 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold shadow-2xl text-lg">KTP</div>
            <p className="mt-2 text-base text-purple-300">Goal</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
