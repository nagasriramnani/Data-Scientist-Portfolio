import { motion } from 'framer-motion';

const phaseVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Slide9() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-10 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">ROADMAP TO DELIVERY</h2>
        <p className="text-lg mt-2 opacity-90">Strategic Execution Plan</p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2554C7] via-[#00e5ff] to-[#C3002F]"></div>

        <div className="space-y-8 pl-20">
          {/* Phase 1 */}
          <motion.div
            variants={phaseVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-[3.25rem] top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#2554C7] to-[#00e5ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50 border-4 border-[#0a0e1a]">
              1
            </div>
            <div className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-[#2554C7]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-cyan-300">Phase 1</h3>
                <span className="text-sm text-gray-400 bg-[#2554C7]/30 px-3 py-1 rounded-full">0–6 months</span>
              </div>
              <p className="text-lg text-gray-200">
                <strong className="text-white">Key Deliverables:</strong> Ontology & Knowledge Graph baseline
              </p>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            variants={phaseVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-[3.25rem] top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#00e5ff] to-[#2554C7] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50 border-4 border-[#0a0e1a]">
              2
            </div>
            <div className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-[#00e5ff]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-cyan-300">Phase 2</h3>
                <span className="text-sm text-gray-400 bg-[#00e5ff]/30 px-3 py-1 rounded-full">6–12 months</span>
              </div>
              <p className="text-lg text-gray-200">
                <strong className="text-white">Key Deliverables:</strong> AI Reasoning Engine prototype
              </p>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div
            variants={phaseVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-[3.25rem] top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#ff9800] to-[#C3002F] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/50 border-4 border-[#0a0e1a]">
              3
            </div>
            <div className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-[#ff9800]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-[#ff9800]">Phase 3</h3>
                <span className="text-sm text-gray-400 bg-[#ff9800]/30 px-3 py-1 rounded-full">12–20 months</span>
              </div>
              <p className="text-lg text-gray-200">
                <strong className="text-white">Key Deliverables:</strong> Integrated VTA System testing within NTCE
              </p>
            </div>
          </motion.div>

          {/* Phase 4 */}
          <motion.div
            variants={phaseVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.1 }}
            className="relative"
          >
            <div className="absolute -left-[3.25rem] top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#C3002F] to-[#8b0020] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-500/50 border-4 border-[#0a0e1a]">
              4
            </div>
            <div className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-[#C3002F]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-[#ff1744]">Phase 4</h3>
                <span className="text-sm text-gray-400 bg-[#C3002F]/30 px-3 py-1 rounded-full">20–27 months</span>
              </div>
              <p className="text-lg text-gray-200">
                <strong className="text-white">Key Deliverables:</strong> Deployment + Impact Assessment + Publications
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10 bg-gradient-to-br from-[#4caf50] to-[#2e7d32] p-6 rounded-lg shadow-lg shadow-green-500/30 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-4xl">🎯</span>
          <h3 className="text-2xl font-bold text-white">End Goal</h3>
        </div>
        <p className="text-lg text-white leading-relaxed">
          By the end of <strong>27 months</strong>, Nissan will own a working Virtual Testing Assistant —<br />
          a system that <strong className="underline">thinks, learns, and recommends</strong> with human-level context.
        </p>
      </motion.div>

      {/* Visual Timeline Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="mt-8"
      >
        <div className="h-3 w-full bg-[#1a1f35] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 2, duration: 2 }}
            className="h-full bg-gradient-to-r from-[#2554C7] via-[#00e5ff] via-[#ff9800] to-[#C3002F]"
          ></motion.div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>Month 0</span>
          <span>6</span>
          <span>12</span>
          <span>20</span>
          <span>27</span>
        </div>
      </motion.div>
    </div>
  );
}
