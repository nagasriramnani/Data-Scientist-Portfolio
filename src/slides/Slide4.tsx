import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Slide4() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-4">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-3 px-6 mb-4 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">THE VISION</h2>
          <p className="text-sm mt-1 opacity-90">Virtual Testing Assistant (VTA)</p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1e293b]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg mb-4 border border-[#6366f1]/50"
        >
          <p className="text-sm text-gray-200 leading-relaxed text-center italic">
            "The Virtual Testing Assistant is an <strong className="text-purple-300">intelligent companion</strong> for test engineers.
            It learns from every past test, understands relationships between vehicles, components, and conditions,
            and recommends the most <strong className="text-purple-300">efficient, evidence-backed</strong> next test plan."
          </p>
        </motion.div>

        {/* Core Functions - 4 Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-3 mb-4"
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-[#6366f1] to-[#1e293b] p-4 rounded-lg shadow-lg border-2 border-[#6366f1]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📚</span>
              <h3 className="text-lg font-bold text-purple-300">1️⃣ Learn</h3>
            </div>
            <p className="text-gray-200 text-sm">
              Build a unified semantic map of test knowledge.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-[#8b5cf6] to-[#1e293b] p-4 rounded-lg shadow-lg border-2 border-[#8b5cf6]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🧠</span>
              <h3 className="text-lg font-bold text-white">2️⃣ Reason</h3>
            </div>
            <p className="text-gray-200 text-sm">
              Use AI to find patterns and relationships.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-[#a855f7] to-[#1e293b] p-4 rounded-lg shadow-lg border-2 border-[#a855f7]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">✅</span>
              <h3 className="text-lg font-bold text-white">3️⃣ Recommend</h3>
            </div>
            <p className="text-gray-200 text-sm">
              Propose optimal, non-duplicate test plans.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-[#7c3aed] to-[#1e293b] p-4 rounded-lg shadow-lg border-2 border-[#7c3aed]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💡</span>
              <h3 className="text-lg font-bold text-white">4️⃣ Explain</h3>
            </div>
            <p className="text-gray-200 text-sm">
              Summarise why each recommendation matters.
            </p>
          </motion.div>
        </motion.div>

        {/* Circular Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-2 text-center text-xs"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#6366f1] rounded-full flex items-center justify-center text-2xl shadow-lg">
              📊
            </div>
            <p className="mt-1 text-xs text-purple-300 font-semibold">Data</p>
          </div>
          
          <span className="text-xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center text-2xl shadow-lg">
              🗂️
            </div>
            <p className="mt-1 text-xs text-purple-300 font-semibold">Knowledge</p>
          </div>
          
          <span className="text-xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#a855f7] rounded-full flex items-center justify-center text-2xl shadow-lg">
              🤖
            </div>
            <p className="mt-1 text-xs text-purple-300 font-semibold">AI</p>
          </div>
          
          <span className="text-xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center text-2xl shadow-lg">
              👨‍💻
            </div>
            <p className="mt-1 text-xs text-purple-300 font-semibold">Engineer</p>
          </div>
          
          <span className="text-xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#6366f1] rounded-full flex items-center justify-center text-2xl shadow-lg">
              💬
            </div>
            <p className="mt-1 text-xs text-purple-300 font-semibold">Feedback</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
