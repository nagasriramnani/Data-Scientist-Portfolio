import { motion } from 'framer-motion';

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Slide8() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-10 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">EXPECTED IMPACT & VALUE</h2>
        <p className="text-lg mt-2 opacity-90">Tie Innovation to Results</p>
      </motion.div>

      {/* Impact Table */}
      <div className="space-y-5">
        <motion.div
          variants={rowVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#2554C7]"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-[#2554C7] p-5 flex items-center">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚡</span>
                <h3 className="text-xl font-bold text-white">Efficiency</h3>
              </div>
            </div>
            <div className="p-5 flex items-center">
              <p className="text-lg text-gray-200">
                Reduce duplicate testing by <strong className="text-cyan-300">30–50%</strong>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={rowVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#00e5ff]"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-[#00e5ff] p-5 flex items-center">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                <h3 className="text-xl font-bold text-[#0a0e1a]">Time-to-Market</h3>
              </div>
            </div>
            <div className="p-5 flex items-center">
              <p className="text-lg text-gray-200">
                Shorter validation cycles by <strong className="text-cyan-300">~40%</strong>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={rowVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#C3002F]"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-[#C3002F] p-5 flex items-center">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                <h3 className="text-xl font-bold text-white">Knowledge</h3>
              </div>
            </div>
            <div className="p-5 flex items-center">
              <p className="text-lg text-gray-200">
                Create <strong className="text-cyan-300">living ontology</strong> of test intelligence
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={rowVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#4caf50]"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-[#4caf50] p-5 flex items-center">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌱</span>
                <h3 className="text-xl font-bold text-white">Sustainability</h3>
              </div>
            </div>
            <div className="p-5 flex items-center">
              <p className="text-lg text-gray-200">
                Fewer physical prototypes → <strong className="text-cyan-300">lower resource use</strong>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={rowVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.0 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border-2 border-[#ff9800]"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-[#ff9800] p-5 flex items-center">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📚</span>
                <h3 className="text-xl font-bold text-white">Research Output</h3>
              </div>
            </div>
            <div className="p-5 flex items-center">
              <p className="text-lg text-gray-200">
                <strong className="text-cyan-300">REF-impact</strong> publications + AI methodologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Before/After Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-10 grid md:grid-cols-2 gap-6"
      >
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-300 mb-4">Before</h3>
          <div className="space-y-2 text-gray-400">
            <p>❌ Repeated tests</p>
            <p>❌ Siloed knowledge</p>
            <p>❌ Weeks of planning</p>
            <p>❌ Manual searches</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#2554C7] to-[#00e5ff] p-6 rounded-lg shadow-lg shadow-cyan-500/40 text-center">
          <h3 className="text-xl font-bold text-white mb-4">After</h3>
          <div className="space-y-2 text-white">
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
        transition={{ delay: 1.6 }}
        className="mt-8 bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-6 rounded-lg shadow-lg shadow-red-500/30 text-center"
      >
        <p className="text-2xl font-bold italic">
          "This isn't just an AI tool — it's a <span className="underline">new way of capturing engineering knowledge</span> for every future vehicle program."
        </p>
      </motion.div>
    </div>
  );
}
