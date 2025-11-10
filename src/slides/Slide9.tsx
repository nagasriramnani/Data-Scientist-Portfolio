import { motion } from 'framer-motion';

const phaseVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Slide9() {
  return (
    <div className="w-full min-h-screen px-12 py-16">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold">ROADMAP TO DELIVERY</h2>
          <p className="text-xl mt-2 opacity-90">Strategic Execution Plan</p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-[#a855f7]"></div>

          <div className="space-y-8 pl-28">
            {/* Phase 1 */}
            <motion.div
              variants={phaseVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[4.5rem] top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl border-4 border-[#0a0e1a]">1</div>
              <div className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border-4 border-[#6366f1]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-3xl font-bold text-purple-300">Phase 1</h3>
                  <span className="text-lg text-gray-400 bg-[#6366f1]/30 px-4 py-2 rounded-full">0–6 months</span>
                </div>
                <p className="text-xl text-gray-200">
                  <strong className="text-white">Key Deliverables:</strong> Ontology & Knowledge Graph baseline
                </p>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              variants={phaseVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -left-[4.5rem] top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl border-4 border-[#0a0e1a]">2</div>
              <div className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border-4 border-[#8b5cf6]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-3xl font-bold text-purple-300">Phase 2</h3>
                  <span className="text-lg text-gray-400 bg-[#8b5cf6]/30 px-4 py-2 rounded-full">6–12 months</span>
                </div>
                <p className="text-xl text-gray-200">
                  <strong className="text-white">Key Deliverables:</strong> AI Reasoning Engine prototype
                </p>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              variants={phaseVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[4.5rem] top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl border-4 border-[#0a0e1a]">3</div>
              <div className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border-4 border-[#a855f7]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-3xl font-bold text-purple-300">Phase 3</h3>
                  <span className="text-lg text-gray-400 bg-[#a855f7]/30 px-4 py-2 rounded-full">12–20 months</span>
                </div>
                <p className="text-xl text-gray-200">
                  <strong className="text-white">Key Deliverables:</strong> Integrated VTA System testing within NTCE
                </p>
              </div>
            </motion.div>

            {/* Phase 4 */}
            <motion.div
              variants={phaseVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-[4.5rem] top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl border-4 border-[#0a0e1a]">4</div>
              <div className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl border-4 border-[#7c3aed]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-3xl font-bold text-purple-300">Phase 4</h3>
                  <span className="text-lg text-gray-400 bg-[#7c3aed]/30 px-4 py-2 rounded-full">20–27 months</span>
                </div>
                <p className="text-xl text-gray-200">
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
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-br from-[#10b981] to-[#059669] p-8 rounded-xl shadow-2xl text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl">🎯</span>
            <h3 className="text-3xl font-bold text-white">End Goal</h3>
          </div>
          <p className="text-xl text-white leading-relaxed">
            By the end of <strong>27 months</strong>, Nissan will own a working Virtual Testing Assistant —
            a system that <strong className="underline">thinks, learns, and recommends</strong> with human-level context.
          </p>
        </motion.div>

        {/* Visual Timeline Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="h-4 w-full bg-[#1e293b] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 2 }}
              className="h-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] via-[#a855f7] to-[#7c3aed]"
            ></motion.div>
          </div>
          <div className="flex justify-between mt-2 text-base text-gray-400">
            <span>Month 0</span>
            <span>6</span>
            <span>12</span>
            <span>20</span>
            <span>27</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
