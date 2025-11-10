import { motion } from 'framer-motion';

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Slide8() {
  return (
    <div className="w-full min-h-screen px-12 py-16">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold">EXPECTED IMPACT & VALUE</h2>
          <p className="text-xl mt-2 opacity-90">Tie Innovation to Results</p>
        </motion.div>

        {/* Impact Table */}
        <div className="space-y-6">
          <motion.div
            variants={rowVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-4 border-[#6366f1]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#6366f1] p-6 flex items-center">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">⚡</span>
                  <h3 className="text-2xl font-bold text-white">Efficiency</h3>
                </div>
              </div>
              <div className="p-6 flex items-center">
                <p className="text-xl text-gray-200">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-4 border-[#8b5cf6]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#8b5cf6] p-6 flex items-center">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🚀</span>
                  <h3 className="text-2xl font-bold text-white">Time-to-Market</h3>
                </div>
              </div>
              <div className="p-6 flex items-center">
                <p className="text-xl text-gray-200">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-4 border-[#a855f7]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#a855f7] p-6 flex items-center">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🧠</span>
                  <h3 className="text-2xl font-bold text-white">Knowledge</h3>
                </div>
              </div>
              <div className="p-6 flex items-center">
                <p className="text-xl text-gray-200">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-4 border-[#10b981]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#10b981] p-6 flex items-center">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🌱</span>
                  <h3 className="text-2xl font-bold text-white">Sustainability</h3>
                </div>
              </div>
              <div className="p-6 flex items-center">
                <p className="text-xl text-gray-200">
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
            className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border-4 border-[#7c3aed]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-[#7c3aed] p-6 flex items-center">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">📚</span>
                  <h3 className="text-2xl font-bold text-white">Research Output</h3>
                </div>
              </div>
              <div className="p-6 flex items-center">
                <p className="text-xl text-gray-200">
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
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-xl shadow-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Before</h3>
            <div className="space-y-3 text-gray-400 text-lg">
              <p>❌ Repeated tests</p>
              <p>❌ Siloed knowledge</p>
              <p>❌ Weeks of planning</p>
              <p>❌ Manual searches</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-8 rounded-xl shadow-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">After</h3>
            <div className="space-y-3 text-white text-lg">
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
          className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white p-8 rounded-xl shadow-2xl text-center"
        >
          <p className="text-2xl font-bold italic">
            "This isn't just an AI tool — it's a <span className="underline">new way of capturing engineering knowledge</span> for every future vehicle program."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
