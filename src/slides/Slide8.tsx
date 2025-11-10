import { motion } from 'framer-motion';

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Slide8() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-3 overflow-y-auto">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-2 px-6 mb-3 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">EXPECTED IMPACT & VALUE</h2>
          <p className="text-xs mt-1 opacity-90">Tie Innovation to Results</p>
        </motion.div>

        {/* Impact Table */}
        <div className="space-y-2 mb-3">
          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#6366f1]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#6366f1] p-3 flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-base font-bold text-white">Efficiency</h3>
                </div>
              </div>
              <div className="p-3 flex items-center">
                <p className="text-sm text-gray-200">
                  Reduce duplicate testing by <strong className="text-purple-300">30–50%</strong>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#8b5cf6]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#8b5cf6] p-3 flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-base font-bold text-white">Time-to-Market</h3>
                </div>
              </div>
              <div className="p-3 flex items-center">
                <p className="text-sm text-gray-200">
                  Shorter validation cycles by <strong className="text-purple-300">~40%</strong>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#a855f7]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#a855f7] p-3 flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  <h3 className="text-base font-bold text-white">Knowledge</h3>
                </div>
              </div>
              <div className="p-3 flex items-center">
                <p className="text-sm text-gray-200">
                  Create <strong className="text-purple-300">living ontology</strong> of test intelligence
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#10b981]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#10b981] p-3 flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  <h3 className="text-base font-bold text-white">Sustainability</h3>
                </div>
              </div>
              <div className="p-3 flex items-center">
                <p className="text-sm text-gray-200">
                  Fewer physical prototypes → <strong className="text-purple-300">lower resource use</strong>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#7c3aed]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#7c3aed] p-3 flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <h3 className="text-base font-bold text-white">Research Output</h3>
                </div>
              </div>
              <div className="p-3 flex items-center">
                <p className="text-sm text-gray-200">
                  <strong className="text-purple-300">REF-impact</strong> publications + AI methodologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-3 mb-3"
        >
          <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-base font-bold text-gray-300 mb-2">Before</h3>
            <div className="space-y-1 text-gray-400 text-xs">
              <p>❌ Repeated tests</p>
              <p>❌ Siloed knowledge</p>
              <p>❌ Weeks of planning</p>
              <p>❌ Manual searches</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-base font-bold text-white mb-2">After</h3>
            <div className="space-y-1 text-white text-xs">
              <p>✅ Smart reuse</p>
              <p>✅ Connected intelligence</p>
              <p>✅ Minutes of planning</p>
              <p>✅ AI-powered insights</p>
            </div>
          </div>
        </motion.div>

        {/* Key Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white p-3 rounded-lg shadow-lg text-center"
        >
          <p className="text-sm font-bold italic">
            "This isn't just an AI tool — it's a <span className="underline">new way of capturing engineering knowledge</span> for every future vehicle program."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
