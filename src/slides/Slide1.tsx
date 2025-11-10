import { motion } from 'framer-motion';

export default function Slide1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-6">
      <div className="w-full max-w-5xl mx-auto text-center">
        {/* Header Band */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-4 px-6 mb-6 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            ENGINEERING THE BRIDGE
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl font-semibold text-purple-300 mb-4"
        >
          From Data to Smarter Vehicle Testing
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed"
        >
          <p className="mb-2">
            "Every great innovation begins with a bridge — between data and decision, between research and industry.
          </p>
          <p className="text-purple-300 font-semibold">
            My goal is to build that bridge — an intelligent testing assistant that transforms how vehicles are validated."
          </p>
        </motion.div>

        {/* Bridge Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#1e293b]/80 backdrop-blur-sm border-2 border-[#6366f1] rounded-full flex items-center justify-center text-3xl shadow-lg">
              📊
            </div>
            <p className="mt-2 text-sm font-semibold text-purple-300">Research & Data</p>
          </div>
          
          <div className="flex items-center">
            <div className="h-1 w-20 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"></div>
            <div className="text-3xl mx-2">🌉</div>
            <div className="h-1 w-20 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1]"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#1e293b]/80 backdrop-blur-sm border-2 border-[#8b5cf6] rounded-full flex items-center justify-center text-3xl shadow-lg">
              🚗
            </div>
            <p className="mt-2 text-sm font-semibold text-purple-300">Digital Vehicle Testing</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-6"
        >
          <h3 className="text-xl font-bold text-purple-400 mb-1">By Naga Sri Ram Kochetti</h3>
          <p className="text-base text-purple-300">
            Digital Vehicle Test Engineer – KTP Associate Candidate
          </p>
        </motion.div>
      </div>
    </div>
  );
}
