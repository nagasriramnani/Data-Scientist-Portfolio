import { motion } from 'framer-motion';

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Slide5() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">THE CHALLENGE AT NISSAN</h2>
        <p className="text-lg mt-2 opacity-90">Testing Is Expensive, Complex and Hard to Reuse</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Problem Bullets */}
        <motion.div className="space-y-4">
          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚙️</span>
              <p className="text-gray-200">Many platforms (<strong className="text-cyan-300">EV, HEV, ICE</strong>) & variants.</p>
            </div>
          </motion.div>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <p className="text-gray-200">Test knowledge in <strong className="text-cyan-300">silos</strong> – docs & spreadsheets.</p>
            </div>
          </motion.div>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">♻️</span>
              <p className="text-gray-200">Duplicate / redundant tests = <strong className="text-cyan-300">wasted time & cost</strong>.</p>
            </div>
          </motion.div>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.8 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-gray-200">Must comply with <strong className="text-cyan-300">UNECE R100, ISO 26262, WLTP, NCAP</strong>.</p>
            </div>
          </motion.div>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.0 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">👨‍💻</span>
              <p className="text-gray-200">Engineers need systems that <strong className="text-cyan-300">remember and explain</strong>.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual - "Before" Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-[#2554C7]/30"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-6">Current State</h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-5xl">📄</div>
            <div className="text-5xl">📊</div>
            <div className="text-5xl">📋</div>
            <div className="text-5xl">📁</div>
            <div className="text-5xl">📑</div>
            <div className="text-5xl">📈</div>
          </div>
          <p className="text-center text-lg font-semibold text-[#C3002F]">
            ⚠️ Test Planning Pain
          </p>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-8 bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-6 rounded-lg shadow-lg shadow-red-500/30 text-center"
      >
        <p className="text-xl italic">
          "To support the mobility society of the future, our testing processes must be <strong>intelligent, connected and explainable</strong>."
        </p>
      </motion.div>
    </div>
  );
}
