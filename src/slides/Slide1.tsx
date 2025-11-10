import { motion } from 'framer-motion';

export default function Slide1() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-12 py-16">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        {/* Header Band */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            ENGINEERING THE BRIDGE
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl font-semibold text-purple-300"
        >
          From Data to Smarter Vehicle Testing
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl text-gray-200 max-w-4xl space-y-4 leading-relaxed"
        >
          <p className="text-2xl">
            "Every great innovation begins with a bridge — between data and decision, between research and industry.
          </p>
          <p className="text-2xl text-purple-300 font-semibold">
            My goal is to build that bridge — an intelligent testing assistant that transforms how vehicles are validated."
          </p>
        </motion.div>

        {/* Bridge Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-12 py-8"
        >
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-[#1e293b]/80 backdrop-blur-sm border-4 border-[#6366f1] rounded-full flex items-center justify-center text-6xl shadow-2xl shadow-indigo-500/50">
              📊
            </div>
            <p className="mt-4 text-xl font-semibold text-purple-300">Research & Data</p>
          </div>
          
          <div className="flex items-center">
            <div className="h-2 w-32 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"></div>
            <div className="text-6xl mx-6">🌉</div>
            <div className="h-2 w-32 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1]"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 bg-[#1e293b]/80 backdrop-blur-sm border-4 border-[#8b5cf6] rounded-full flex items-center justify-center text-6xl shadow-2xl shadow-purple-500/50">
              🚗
            </div>
            <p className="mt-4 text-xl font-semibold text-purple-300">Digital Vehicle Testing</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center space-y-3 pt-6"
        >
          <h3 className="text-3xl font-bold text-purple-400">By Naga Sri Ram Kochetti</h3>
          <p className="text-2xl text-purple-300">
            Digital Vehicle Test Engineer – KTP Associate Candidate
          </p>
        </motion.div>
      </div>
    </div>
  );
}
