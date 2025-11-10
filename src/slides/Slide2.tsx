import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Slide2() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">WHY CHANGE NOW?</h2>
        <p className="text-lg mt-2 opacity-90">Nissan's Digital Testing Transformation</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={item} className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#C3002F]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🔧</span>
            <p className="text-lg text-gray-200">
              Modern vehicles require <strong className="text-cyan-300">hundreds of tests before launch</strong> — costly, slow, repetitive.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#2554C7]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">⚡</span>
            <p className="text-lg text-gray-200">
              Nissan's transformation aims to <strong className="text-cyan-300">cut development time in half</strong> using data, AI, and digital engineering.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#00e5ff]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">📈</span>
            <p className="text-lg text-gray-200">
              The focus has shifted from <strong className="text-cyan-300">running more tests</strong> to <strong className="text-cyan-300">learning more from every test</strong>.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12"
      >
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <div className="text-center px-4 py-2 bg-[#1a1f35]/40 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-400">Physical Testing</p>
          </div>
          <span className="text-cyan-400">→</span>
          <div className="text-center px-4 py-2 bg-[#1a1f35]/40 rounded-lg border border-[#2554C7]">
            <p className="text-sm text-cyan-300">Simulation</p>
          </div>
          <span className="text-cyan-400">→</span>
          <div className="text-center px-4 py-2 bg-[#1a1f35]/40 rounded-lg border border-[#2554C7]">
            <p className="text-sm text-cyan-300">AI Assisted Testing</p>
          </div>
          <span className="text-cyan-400">→</span>
          <div className="text-center px-4 py-2 bg-gradient-to-r from-[#2554C7] to-[#00e5ff] rounded-lg shadow-lg shadow-cyan-500/30">
            <p className="text-sm text-white font-bold">Virtual Testing Ecosystem</p>
          </div>
        </div>
      </motion.div>

      {/* Key Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-10 bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-6 rounded-lg shadow-lg shadow-red-500/30 text-center"
      >
        <p className="text-xl italic">
          "To deliver smarter, faster, and safer vehicles, we must turn testing data into <strong>active intelligence</strong>."
        </p>
        <p className="text-lg mt-3 font-semibold">
          That's the opportunity the Virtual Testing Assistant was born to serve.
        </p>
      </motion.div>
    </div>
  );
}
