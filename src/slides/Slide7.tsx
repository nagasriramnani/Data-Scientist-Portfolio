import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Slide7() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-3 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-2 px-6 mb-3 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">EXAMPLE USE CASE</h2>
          <p className="text-xs mt-1 opacity-90">Making It Tangible</p>
        </motion.div>

        {/* Scenario Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg mb-3 border border-[#6366f1]"
        >
          <p className="text-sm text-purple-300 font-semibold italic text-center">
            "An engineer is planning brake tests for a new EV in cold conditions."
          </p>
        </motion.div>

        {/* 5-Step Flow */}
        <div className="space-y-2">
          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="flex items-start gap-2"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold shadow-lg">1</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#6366f1]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🚗</span>
                <h3 className="text-sm font-bold text-purple-300">Input</h3>
              </div>
              <p className="text-xs text-gray-200">Vehicle variant + system + environment</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="flex items-start gap-2"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold shadow-lg">2</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#8b5cf6]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🗂️</span>
                <h3 className="text-sm font-bold text-purple-300">Graph Retrieval</h3>
              </div>
              <p className="text-xs text-gray-200">Retrieves similar historical tests and results</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="flex items-start gap-2"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold shadow-lg">3</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#a855f7]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🤖</span>
                <h3 className="text-sm font-bold text-purple-300">AI Ranking</h3>
              </div>
              <p className="text-xs text-gray-200">AI ranks reusable vs new test scenarios</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="flex items-start gap-2"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#6366f1] rounded-full flex items-center justify-center text-white font-bold shadow-lg">4</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#7c3aed]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">💡</span>
                <h3 className="text-sm font-bold text-purple-300">Summary</h3>
              </div>
              <p className="text-xs text-gray-200">Assistant summarises recommendations in plain English</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.7 }}
            className="flex items-start gap-2"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white font-bold shadow-lg">5</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#10b981]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">👨‍💻</span>
                <h3 className="text-sm font-bold text-emerald-300">Review & Export</h3>
              </div>
              <p className="text-xs text-gray-200">Engineer reviews and exports plan to test management system</p>
            </div>
          </motion.div>
        </div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-3 bg-gradient-to-r from-[#10b981] to-[#059669] text-white p-3 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-bold mb-2 text-center">Outcome</h3>
          <div className="grid md:grid-cols-3 gap-3 text-center text-xs">
            <div><p className="text-xl font-bold">40%</p><p>Less duplication</p></div>
            <div><p className="text-xl font-bold">100%</p><p>Traceability</p></div>
            <div><p className="text-xl font-bold">Focus</p><p>On innovation</p></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
