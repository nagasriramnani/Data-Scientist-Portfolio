import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Slide4() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-10 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">THE VISION</h2>
        <p className="text-lg mt-2 opacity-90">Virtual Testing Assistant (VTA)</p>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-10 border border-[#2554C7]/30"
      >
        <p className="text-xl text-gray-200 leading-relaxed text-center italic">
          "The Virtual Testing Assistant is an <strong className="text-cyan-300">intelligent companion</strong> for test engineers.<br />
          It learns from every past test, understands relationships between vehicles, components, and conditions,<br />
          and recommends the most <strong className="text-cyan-300">efficient, evidence-backed</strong> next test plan."
        </p>
      </motion.div>

      {/* Core Functions - 4 Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-2 gap-6 mb-10"
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-[#2554C7] to-[#1a1f35] p-6 rounded-lg shadow-lg border-2 border-[#2554C7]"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">📚</span>
            <h3 className="text-2xl font-bold text-cyan-300">1️⃣ Learn</h3>
          </div>
          <p className="text-gray-200 text-lg">
            Build a unified semantic map of test knowledge.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-[#00e5ff] to-[#1a1f35] p-6 rounded-lg shadow-lg border-2 border-[#00e5ff]"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">🧠</span>
            <h3 className="text-2xl font-bold text-white">2️⃣ Reason</h3>
          </div>
          <p className="text-gray-200 text-lg">
            Use AI to find patterns and relationships.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.1 }}
          className="bg-gradient-to-br from-[#C3002F] to-[#1a1f35] p-6 rounded-lg shadow-lg border-2 border-[#C3002F]"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">✅</span>
            <h3 className="text-2xl font-bold text-white">3️⃣ Recommend</h3>
          </div>
          <p className="text-gray-200 text-lg">
            Propose optimal, non-duplicate test plans.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.3 }}
          className="bg-gradient-to-br from-[#ff9800] to-[#1a1f35] p-6 rounded-lg shadow-lg border-2 border-[#ff9800]"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">💡</span>
            <h3 className="text-2xl font-bold text-white">4️⃣ Explain</h3>
          </div>
          <p className="text-gray-200 text-lg">
            Summarise why each recommendation matters.
          </p>
        </motion.div>
      </motion.div>

      {/* Circular Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        className="flex items-center justify-center gap-4 text-center"
      >
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#2554C7] rounded-full flex items-center justify-center text-3xl shadow-lg shadow-blue-500/50">
            📊
          </div>
          <p className="mt-2 text-sm text-cyan-300 font-semibold">Data</p>
        </div>
        
        <span className="text-3xl text-cyan-400">→</span>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#00e5ff] rounded-full flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/50">
            🗂️
          </div>
          <p className="mt-2 text-sm text-cyan-300 font-semibold">Knowledge</p>
        </div>
        
        <span className="text-3xl text-cyan-400">→</span>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#C3002F] rounded-full flex items-center justify-center text-3xl shadow-lg shadow-red-500/50">
            🤖
          </div>
          <p className="mt-2 text-sm text-cyan-300 font-semibold">AI</p>
        </div>
        
        <span className="text-3xl text-cyan-400">→</span>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#ff9800] rounded-full flex items-center justify-center text-3xl shadow-lg shadow-orange-500/50">
            👨‍💻
          </div>
          <p className="mt-2 text-sm text-cyan-300 font-semibold">Engineer</p>
        </div>
        
        <span className="text-3xl text-cyan-400">→</span>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-[#2554C7] rounded-full flex items-center justify-center text-3xl shadow-lg shadow-blue-500/50">
            💬
          </div>
          <p className="mt-2 text-sm text-cyan-300 font-semibold">Feedback</p>
        </div>
      </motion.div>
    </div>
  );
}
