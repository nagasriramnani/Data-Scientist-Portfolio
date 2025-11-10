import { motion } from 'framer-motion';

const bulletVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function Slide3() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-4">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-3 px-6 mb-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">THE CHALLENGE</h2>
          <p className="text-sm mt-1 opacity-90">Make the Pain Visible</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem Snapshot */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-purple-300 mb-3">Problem Snapshot</h3>

            <motion.div
              variants={bulletVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#ef4444]"
            >
              <div className="flex items-start gap-2">
                <span className="text-xl">📁</span>
                <p className="text-sm text-gray-200">
                  Thousands of test results live in <strong className="text-purple-300">disconnected silos</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={bulletVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4 }}
              className="bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#ef4444]"
            >
              <div className="flex items-start gap-2">
                <span className="text-xl">♻️</span>
                <p className="text-sm text-gray-200">
                  Engineers <strong className="text-purple-300">repeat tests that already exist</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={bulletVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.6 }}
              className="bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#ef4444]"
            >
              <div className="flex items-start gap-2">
                <span className="text-xl">📄</span>
                <p className="text-sm text-gray-200">
                  Critical insights get <strong className="text-purple-300">buried in PDFs and spreadsheets</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={bulletVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.8 }}
              className="bg-[#1e293b]/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border-l-4 border-[#ef4444]"
            >
              <div className="flex items-start gap-2">
                <span className="text-xl">⏱️</span>
                <p className="text-sm text-gray-200">
                  Planning new test programs takes <strong className="text-purple-300">weeks of manual effort</strong>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual - Messy to Clean */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-[#1e293b]/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#6366f1]/50">
              <h3 className="text-lg font-bold text-purple-300 mb-4 text-center">Current State</h3>
              
              {/* Messy scattered documents */}
              <div className="relative h-32 mb-4">
                <motion.div
                  initial={{ opacity: 0, rotate: -15, x: -10, y: -5 }}
                  animate={{ opacity: 1, rotate: -15, x: -10, y: -5 }}
                  transition={{ delay: 1.2 }}
                  className="absolute top-0 left-0 text-3xl"
                >
                  📄
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, rotate: 20, x: 30, y: 10 }}
                  animate={{ opacity: 1, rotate: 20, x: 30, y: 10 }}
                  transition={{ delay: 1.3 }}
                  className="absolute top-0 right-0 text-3xl"
                >
                  📊
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, rotate: -10, x: -15, y: 35 }}
                  animate={{ opacity: 1, rotate: -10, x: -15, y: 35 }}
                  transition={{ delay: 1.4 }}
                  className="absolute bottom-0 left-5 text-3xl"
                >
                  📋
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, rotate: 15, x: 25, y: 40 }}
                  animate={{ opacity: 1, rotate: 15, x: 25, y: 40 }}
                  transition={{ delay: 1.5 }}
                  className="absolute bottom-0 right-5 text-3xl"
                >
                  📁
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl"
                >
                  ❌
                </motion.div>
              </div>

              <p className="text-center text-base font-semibold text-red-400">
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
          className="mt-6 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white p-4 rounded-lg shadow-lg text-center"
        >
          <p className="text-base font-bold italic">
            "We don't need more data — we need a system that <span className="underline">understands</span> the data we already have."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
