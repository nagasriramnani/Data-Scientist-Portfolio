import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export default function Slide3() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">EXPERIENCE AT DWP</h2>
        <p className="text-lg mt-2 opacity-90">Delivering Automation in a Real-World, High-Stake Environment</p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-4 border-[#C3002F] hover:shadow-xl hover:shadow-red-500/30 transition-shadow"
        >
          <div className="text-5xl mb-4">🏛️</div>
          <h3 className="text-xl font-bold text-cyan-300 mb-3">Governance</h3>
          <p className="text-gray-300">
            Working in a large, policy-driven government department.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-4 border-[#2554C7] hover:shadow-xl hover:shadow-blue-500/30 transition-shadow"
        >
          <div className="text-5xl mb-4">📋</div>
          <h3 className="text-xl font-bold text-cyan-300 mb-3">Traceability</h3>
          <p className="text-gray-300">
            Built automations where data sensitivity & auditability matter.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-4 border-[#C3002F] hover:shadow-xl hover:shadow-red-500/30 transition-shadow"
        >
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-cyan-300 mb-3">Real Impact</h3>
          <p className="text-gray-300">
            Balanced innovation with reliability and compliance.
          </p>
        </motion.div>
      </div>

      {/* Bullets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg space-y-4 border border-[#2554C7]/30"
      >
        <div className="flex items-start gap-4">
          <span className="text-2xl text-[#00e5ff]">▸</span>
          <p className="text-lg text-gray-200">
            Translated <strong className="text-cyan-300">messy requirements</strong> into robust systems.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-2xl text-[#00e5ff]">▸</span>
          <p className="text-lg text-gray-200">
            Collaborated across <strong className="text-cyan-300">multiple disciplines</strong> — experience directly relevant to Nissan.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
