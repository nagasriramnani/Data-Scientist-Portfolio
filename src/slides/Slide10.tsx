import { motion } from 'framer-motion';

export default function Slide10() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">THE BRIDGE FORWARD</h2>
        <p className="text-lg mt-2 opacity-90">Vision and Confidence</p>
      </motion.div>

      {/* Main Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-[#1a1f35] to-[#2a2f45] p-10 rounded-lg shadow-xl border-2 border-[#2554C7] mb-12"
      >
        <blockquote className="text-3xl text-gray-200 leading-relaxed italic">
          <p className="mb-6">
            "Data without context is <span className="text-[#C3002F] font-bold">noise</span>.
          </p>
          <p className="mb-6">
            Context without AI is <span className="text-gray-500 font-bold">static</span>.
          </p>
          <p className="text-cyan-300">
            The Virtual Testing Assistant combines <span className="font-bold underline">both</span> —<br />
            a living system that keeps learning from every test."
          </p>
        </blockquote>
      </motion.div>

      {/* Bridge Visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex items-center justify-center gap-6 mb-12"
      >
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 bg-[#2554C7] rounded-full flex items-center justify-center text-5xl shadow-lg shadow-blue-500/50">
            📊
          </div>
          <p className="mt-3 font-semibold text-cyan-300">Data</p>
        </div>
        
        <div className="flex items-center">
          <div className="h-2 w-24 bg-gradient-to-r from-[#2554C7] to-[#00e5ff]"></div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-6xl mx-4"
          >
            🌉
          </motion.div>
          <div className="h-2 w-24 bg-gradient-to-r from-[#00e5ff] to-[#C3002F]"></div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 bg-[#C3002F] rounded-full flex items-center justify-center text-5xl shadow-lg shadow-red-500/50">
            🚗
          </div>
          <p className="mt-3 font-semibold text-cyan-300">Testing</p>
        </div>
      </motion.div>

      {/* Final Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-8 rounded-lg shadow-lg shadow-red-500/30 mb-8"
      >
        <p className="text-2xl font-semibold leading-relaxed">
          "As an AI engineer and researcher, my mission is to embed that intelligence directly into <strong className="underline">Nissan's engineering DNA</strong>."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="bg-[#1a1f35]/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#2554C7]/50"
      >
        <p className="text-2xl text-gray-200 leading-relaxed">
          Together with <strong className="text-[#00e5ff]">Cranfield</strong>, we can turn vehicle testing<br />
          into a <strong className="text-cyan-300">continuous learning process</strong>.
        </p>
      </motion.div>

      {/* Logos/Branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-12 flex items-center justify-center gap-8"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-[#2554C7] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
            <span className="text-2xl font-bold text-white">CU</span>
          </div>
          <p className="mt-2 text-xs text-cyan-300">Cranfield<br />University</p>
        </div>
        
        <div className="text-3xl text-cyan-400">×</div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-[#C3002F] rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
            <span className="text-2xl font-bold text-white">N</span>
          </div>
          <p className="mt-2 text-xs text-cyan-300">Nissan<br />NTCE</p>
        </div>
      </motion.div>
    </div>
  );
}
