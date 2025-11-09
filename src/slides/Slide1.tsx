import { motion } from 'framer-motion';

export default function Slide1() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center">
      {/* Header Band */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-6 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          ENGINEERING THE BRIDGE
        </h1>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-3xl font-semibold text-cyan-300 mb-8"
      >
        From Data to Smarter Vehicle Testing
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto"
      >
        Background, Experience and Project Approach for the Digital Vehicle Test Engineer Role
      </motion.div>

      {/* Bridge Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex items-center justify-center gap-8 mb-12"
      >
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-[#1a1f35]/60 backdrop-blur-sm border border-[#2554C7] rounded-full flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/30">
            📊
          </div>
          <p className="mt-4 font-semibold text-cyan-300">Research & Data</p>
        </div>
        
        <div className="flex items-center">
          <div className="h-1 w-32 bg-gradient-to-r from-[#C3002F] to-[#2554C7]"></div>
          <div className="text-4xl mx-4">🌉</div>
          <div className="h-1 w-32 bg-gradient-to-r from-[#2554C7] to-[#C3002F]"></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-[#1a1f35]/60 backdrop-blur-sm border border-[#2554C7] rounded-full flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/30">
            🚗
          </div>
          <p className="mt-4 font-semibold text-cyan-300">Digital Vehicle Testing</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-[#00e5ff] mb-2">Naga Sri Ram Kochetti</h3>
        <p className="text-lg text-gray-300 italic">
          "An applied AI engineer focused on turning complex data and research<br />
          into practical tools for vehicle testing and validation."
        </p>
      </motion.div>
    </div>
  );
}

