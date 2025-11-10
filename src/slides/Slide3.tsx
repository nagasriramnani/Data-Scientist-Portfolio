import { motion } from 'framer-motion';

const bulletVariants = {
  hidden: { opacity: 0, x: -30 },
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
        <h2 className="text-3xl font-bold">THE CHALLENGE</h2>
        <p className="text-lg mt-2 opacity-90">Make the Pain Visible</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Problem Snapshot */}
        <motion.div className="space-y-4">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">Problem Snapshot</h3>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📁</span>
              <p className="text-gray-200">
                Thousands of test results live in <strong className="text-cyan-300">disconnected silos</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">♻️</span>
              <p className="text-gray-200">
                Engineers <strong className="text-cyan-300">repeat tests that already exist</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📄</span>
              <p className="text-gray-200">
                Critical insights get <strong className="text-cyan-300">buried in PDFs and spreadsheets</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={bulletVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.8 }}
            className="bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4 border-[#C3002F]"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏱️</span>
              <p className="text-gray-200">
                Planning new test programs takes <strong className="text-cyan-300">weeks of manual effort</strong>.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual - Messy to Clean */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#2554C7]/30">
            <h3 className="text-xl font-bold text-cyan-300 mb-6 text-center">Current State</h3>
            
            {/* Messy scattered documents */}
            <div className="relative h-48 mb-6">
              <motion.div
                initial={{ opacity: 0, rotate: -15, x: -20, y: -10 }}
                animate={{ opacity: 1, rotate: -15, x: -20, y: -10 }}
                transition={{ delay: 1.2 }}
                className="absolute top-0 left-0 text-5xl"
              >
                📄
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 20, x: 40, y: 20 }}
                animate={{ opacity: 1, rotate: 20, x: 40, y: 20 }}
                transition={{ delay: 1.3 }}
                className="absolute top-0 right-0 text-5xl"
              >
                📊
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: -10, x: -30, y: 50 }}
                animate={{ opacity: 1, rotate: -10, x: -30, y: 50 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-0 left-10 text-5xl"
              >
                📋
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 15, x: 30, y: 60 }}
                animate={{ opacity: 1, rotate: 15, x: 30, y: 60 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-0 right-10 text-5xl"
              >
                📁
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl"
              >
                ❌
              </motion.div>
            </div>

            <p className="text-center text-lg font-semibold text-[#C3002F]">
              ⚠️ Test Planning Pain
            </p>
          </div>
        </motion.div>
      </div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-10 bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white p-6 rounded-lg shadow-lg shadow-cyan-500/50 text-center"
      >
        <p className="text-2xl font-bold italic">
          "We don't need more data — we need a system that <span className="underline">understands</span> the data we already have."
        </p>
      </motion.div>
    </div>
  );
}
