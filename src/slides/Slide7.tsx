import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Slide7() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-10 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">EXAMPLE USE CASE</h2>
        <p className="text-lg mt-2 opacity-90">Making It Tangible</p>
      </motion.div>

      {/* Scenario Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#1a1f35]/80 backdrop-blur-sm p-5 rounded-lg shadow-lg mb-8 border border-[#2554C7]"
      >
        <p className="text-xl text-cyan-300 font-semibold italic text-center">
          "An engineer is planning brake tests for a new EV in cold conditions."
        </p>
      </motion.div>

      {/* 5-Step Flow */}
      <div className="space-y-6">
        <motion.div
          variants={stepVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2554C7] to-[#00e5ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/40">
            1
          </div>
          <div className="flex-grow bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#2554C7]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🚗</span>
              <h3 className="text-lg font-bold text-cyan-300">Input</h3>
            </div>
            <p className="text-gray-200">
              Vehicle variant + system + environment
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        <motion.div
          variants={stepVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2554C7] to-[#00e5ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/40">
            2
          </div>
          <div className="flex-grow bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#00e5ff]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🗂️</span>
              <h3 className="text-lg font-bold text-cyan-300">Graph Retrieval</h3>
            </div>
            <p className="text-gray-200">
              Retrieves similar historical tests and results
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        <motion.div
          variants={stepVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#C3002F] to-[#ff1744] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-500/40">
            3
          </div>
          <div className="flex-grow bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#C3002F]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🤖</span>
              <h3 className="text-lg font-bold text-[#ff1744]">AI Ranking</h3>
            </div>
            <p className="text-gray-200">
              AI ranks reusable vs new test scenarios
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        <motion.div
          variants={stepVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.0 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#ff9800] to-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/40">
            4
          </div>
          <div className="flex-grow bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#ff9800]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💡</span>
              <h3 className="text-lg font-bold text-[#ff9800]">Summary</h3>
            </div>
            <p className="text-gray-200">
              Assistant summarises recommendations in plain English
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="text-3xl text-cyan-400">↓</div>
        </div>

        <motion.div
          variants={stepVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.2 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4caf50] to-[#2e7d32] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-500/40">
            5
          </div>
          <div className="flex-grow bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#4caf50]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">👨‍💻</span>
              <h3 className="text-lg font-bold text-[#4caf50]">Review & Export</h3>
            </div>
            <p className="text-gray-200">
              Engineer reviews and exports plan to test management system
            </p>
          </div>
        </motion.div>
      </div>

      {/* Outcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-10 bg-gradient-to-r from-[#4caf50] to-[#2e7d32] text-white p-6 rounded-lg shadow-lg shadow-green-500/30"
      >
        <h3 className="text-2xl font-bold mb-3 text-center">Outcome</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold">40%</p>
            <p className="text-sm">Less duplication</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm">Traceability</p>
          </div>
          <div>
            <p className="text-3xl font-bold">Focus</p>
            <p className="text-sm">On innovation, not repetition</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
