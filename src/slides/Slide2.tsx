import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Slide2() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">MY STORY: HOW I BECAME A 'BRIDGE BUILDER'</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div variants={item} className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#C3002F]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🔍</span>
            <p className="text-lg text-gray-200">
              Curiosity about <strong className="text-cyan-300">how complex systems behave</strong> → led to Big Data, simulation and AI.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#2554C7]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎓</span>
            <p className="text-lg text-gray-200">
              <strong className="text-cyan-300">MSc in Big Data & High-Performance Computing</strong> – dissertation on digital-twin simulation.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-6 rounded-lg shadow-lg shadow-red-500/30">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💡</span>
            <p className="text-lg italic">
              "That work – <strong>building a simulation that mirrors reality</strong> – is exactly the mindset behind a Virtual Testing Assistant."
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-[#00e5ff]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🚀</span>
            <p className="text-lg text-gray-200">
              Shifted from <strong className="text-cyan-300">researcher → problem-solver</strong> delivering real-world impact.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-12 flex justify-center items-center gap-4"
      >
        <div className="text-center">
          <div className="w-24 h-24 bg-[#2554C7] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50">MSc</div>
          <p className="mt-2 text-sm text-cyan-300">2022-23</p>
        </div>
        <div className="h-1 w-16 bg-gradient-to-r from-[#2554C7] to-[#C3002F]"></div>
        <div className="text-center">
          <div className="w-24 h-24 bg-[#2554C7] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50">DWP</div>
          <p className="mt-2 text-sm text-cyan-300">2024</p>
        </div>
        <div className="h-1 w-16 bg-gradient-to-r from-[#2554C7] to-[#C3002F]"></div>
        <div className="text-center">
          <div className="w-24 h-24 bg-[#2554C7] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/50">Pareto.ai</div>
          <p className="mt-2 text-sm text-cyan-300">2025</p>
        </div>
        <div className="h-1 w-16 bg-gradient-to-r from-[#C3002F] to-[#00e5ff]"></div>
        <div className="text-center">
          <div className="w-24 h-24 bg-[#C3002F] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-500/50">KTP</div>
          <p className="mt-2 text-sm text-cyan-300">Goal</p>
        </div>
      </motion.div>
    </div>
  );
}

