import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Slide7() {
  return (
    <div className="w-full min-h-screen px-12 py-16">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold">EXAMPLE USE CASE</h2>
          <p className="text-xl mt-2 opacity-90">Making It Tangible</p>
        </motion.div>

        {/* Scenario Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-2 border-[#6366f1]"
        >
          <p className="text-2xl text-purple-300 font-semibold italic text-center">
            "An engineer is planning brake tests for a new EV in cold conditions."
          </p>
        </motion.div>

        {/* 5-Step Flow */}
        <div className="space-y-6">
          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">1</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-[#6366f1]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🚗</span>
                <h3 className="text-2xl font-bold text-purple-300">Input</h3>
              </div>
              <p className="text-lg text-gray-200">Vehicle variant + system + environment</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-5xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">2</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-[#8b5cf6]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🗂️</span>
                <h3 className="text-2xl font-bold text-purple-300">Graph Retrieval</h3>
              </div>
              <p className="text-lg text-gray-200">Retrieves similar historical tests and results</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-5xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">3</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-[#a855f7]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🤖</span>
                <h3 className="text-2xl font-bold text-purple-300">AI Ranking</h3>
              </div>
              <p className="text-lg text-gray-200">AI ranks reusable vs new test scenarios</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-5xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#7c3aed] to-[#6366f1] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">4</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-[#7c3aed]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">💡</span>
                <h3 className="text-2xl font-bold text-purple-300">Summary</h3>
              </div>
              <p className="text-lg text-gray-200">Assistant summarises recommendations in plain English</p>
            </div>
          </motion.div>

          <div className="flex justify-center"><div className="text-5xl text-purple-400">↓</div></div>

          <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.7 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">5</div>
            <div className="flex-grow bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-xl shadow-xl border-l-4 border-[#10b981]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">👨‍💻</span>
                <h3 className="text-2xl font-bold text-emerald-300">Review & Export</h3>
              </div>
              <p className="text-lg text-gray-200">Engineer reviews and exports plan to test management system</p>
            </div>
          </motion.div>
        </div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white p-8 rounded-xl shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-center">Outcome</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div><p className="text-4xl font-bold">40%</p><p className="text-xl">Less duplication</p></div>
            <div><p className="text-4xl font-bold">100%</p><p className="text-xl">Traceability</p></div>
            <div><p className="text-4xl font-bold">Focus</p><p className="text-xl">On innovation</p></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
