import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Slide2() {
  return (
    <div className="w-full min-h-screen px-12 py-16">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold">WHY CHANGE NOW?</h2>
          <p className="text-xl mt-2 opacity-90">Nissan's Digital Testing Transformation</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={item} className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#ef4444]">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🔧</span>
              <p className="text-xl text-gray-200">
                Modern vehicles require <strong className="text-purple-300">hundreds of tests before launch</strong> — costly, slow, repetitive.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#6366f1]">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚡</span>
              <p className="text-xl text-gray-200">
                Nissan's transformation aims to <strong className="text-purple-300">cut development time in half</strong> using data, AI, and digital engineering.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-l-4 border-[#8b5cf6]">
            <div className="flex items-start gap-4">
              <span className="text-4xl">📈</span>
              <p className="text-xl text-gray-200">
                The focus has shifted from <strong className="text-purple-300">running more tests</strong> to <strong className="text-purple-300">learning more from every test</strong>.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="py-8"
        >
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="px-6 py-4 bg-[#1e293b]/60 rounded-xl border-2 border-gray-600">
              <p className="text-lg text-gray-400">Physical Testing</p>
            </div>
            <span className="text-4xl text-purple-400">→</span>
            <div className="px-6 py-4 bg-[#1e293b]/60 rounded-xl border-2 border-[#6366f1]">
              <p className="text-lg text-purple-300">Simulation</p>
            </div>
            <span className="text-4xl text-purple-400">→</span>
            <div className="px-6 py-4 bg-[#1e293b]/60 rounded-xl border-2 border-[#6366f1]">
              <p className="text-lg text-purple-300">AI Assisted Testing</p>
            </div>
            <span className="text-4xl text-purple-400">→</span>
            <div className="px-6 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl shadow-2xl">
              <p className="text-lg text-white font-semibold">Virtual Testing Ecosystem</p>
            </div>
          </div>
        </motion.div>

        {/* Key Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white p-8 rounded-xl shadow-2xl text-center"
        >
          <p className="text-2xl italic leading-relaxed">
            "To deliver smarter, faster, and safer vehicles, we must turn testing data into <strong>active intelligence</strong>."
          </p>
          <p className="text-xl mt-4 font-semibold">
            That's the opportunity the Virtual Testing Assistant was born to serve.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
