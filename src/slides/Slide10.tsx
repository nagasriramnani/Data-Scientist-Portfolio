import { motion } from 'framer-motion';

export default function Slide10() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-4">
      <div className="w-full max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-3 px-6 mb-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">THE BRIDGE FORWARD</h2>
          <p className="text-sm mt-1 opacity-90">Vision and Confidence</p>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#1e293b] to-[#2a2f45] p-6 rounded-lg shadow-xl border-2 border-[#6366f1] mb-6"
        >
          <blockquote className="text-xl text-gray-200 leading-relaxed italic">
            <p className="mb-3">
              "Data without context is <span className="text-red-400 font-bold">noise</span>.
            </p>
            <p className="mb-3">
              Context without AI is <span className="text-gray-500 font-bold">static</span>.
            </p>
            <p className="text-purple-300">
              The Virtual Testing Assistant combines <span className="font-bold underline">both</span> —
              a living system that keeps learning from every test."
            </p>
          </blockquote>
        </motion.div>

        {/* Bridge Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-[#6366f1] rounded-full flex items-center justify-center text-3xl shadow-lg">
              📊
            </div>
            <p className="mt-2 text-sm font-semibold text-purple-300">Data</p>
          </div>
          
          <div className="flex items-center">
            <div className="h-1 w-16 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]"></div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-4xl mx-2"
            >
              🌉
            </motion.div>
            <div className="h-1 w-16 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7]"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-[#a855f7] rounded-full flex items-center justify-center text-3xl shadow-lg">
              🚗
            </div>
            <p className="mt-2 text-sm font-semibold text-purple-300">Testing</p>
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white p-5 rounded-lg shadow-lg mb-4"
        >
          <p className="text-base font-semibold leading-relaxed">
            "As an AI engineer and researcher, my mission is to embed that intelligence directly into <strong className="underline">Nissan's engineering DNA</strong>."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-[#1e293b]/80 backdrop-blur-sm p-5 rounded-lg shadow-lg border border-[#6366f1]/50"
        >
          <p className="text-base text-gray-200 leading-relaxed">
            Together with <strong className="text-purple-300">Cranfield</strong>, we can turn vehicle testing
            into a <strong className="text-purple-300">continuous learning process</strong>.
          </p>
        </motion.div>

        {/* Logos/Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-6 flex items-center justify-center gap-6"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#6366f1] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">CU</span>
            </div>
            <p className="mt-1 text-[10px] text-purple-300">Cranfield<br />University</p>
          </div>
          
          <div className="text-2xl text-purple-400">×</div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#a855f7] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">N</span>
            </div>
            <p className="mt-1 text-[10px] text-purple-300">Nissan<br />NTCE</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
