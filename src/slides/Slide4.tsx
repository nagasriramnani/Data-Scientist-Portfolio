import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Slide4() {
  return (
    <div className="w-full min-h-screen px-12 py-16">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-6 px-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold">THE VISION</h2>
          <p className="text-xl mt-2 opacity-90">Virtual Testing Assistant (VTA)</p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-[#6366f1]/50"
        >
          <p className="text-2xl text-gray-200 leading-relaxed text-center italic">
            "The Virtual Testing Assistant is an <strong className="text-purple-300">intelligent companion</strong> for test engineers.<br />
            It learns from every past test, understands relationships between vehicles, components, and conditions,<br />
            and recommends the most <strong className="text-purple-300">efficient, evidence-backed</strong> next test plan."
          </p>
        </motion.div>

        {/* Core Functions - 4 Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-[#6366f1] to-[#1e293b] p-8 rounded-xl shadow-2xl border-2 border-[#6366f1]"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">📚</span>
              <h3 className="text-3xl font-bold text-purple-300">1️⃣ Learn</h3>
            </div>
            <p className="text-gray-200 text-xl">
              Build a unified semantic map of test knowledge.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-[#8b5cf6] to-[#1e293b] p-8 rounded-xl shadow-2xl border-2 border-[#8b5cf6]"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🧠</span>
              <h3 className="text-3xl font-bold text-white">2️⃣ Reason</h3>
            </div>
            <p className="text-gray-200 text-xl">
              Use AI to find patterns and relationships.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-[#a855f7] to-[#1e293b] p-8 rounded-xl shadow-2xl border-2 border-[#a855f7]"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">✅</span>
              <h3 className="text-3xl font-bold text-white">3️⃣ Recommend</h3>
            </div>
            <p className="text-gray-200 text-xl">
              Propose optimal, non-duplicate test plans.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-[#7c3aed] to-[#1e293b] p-8 rounded-xl shadow-2xl border-2 border-[#7c3aed]"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">💡</span>
              <h3 className="text-3xl font-bold text-white">4️⃣ Explain</h3>
            </div>
            <p className="text-gray-200 text-xl">
              Summarise why each recommendation matters.
            </p>
          </motion.div>
        </motion.div>

        {/* Circular Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-6 text-center py-8"
        >
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-[#6366f1] rounded-full flex items-center justify-center text-4xl shadow-2xl">
              📊
            </div>
            <p className="mt-3 text-lg text-purple-300 font-semibold">Data</p>
          </div>
          
          <span className="text-4xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-[#8b5cf6] rounded-full flex items-center justify-center text-4xl shadow-2xl">
              🗂️
            </div>
            <p className="mt-3 text-lg text-purple-300 font-semibold">Knowledge</p>
          </div>
          
          <span className="text-4xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-[#a855f7] rounded-full flex items-center justify-center text-4xl shadow-2xl">
              🤖
            </div>
            <p className="mt-3 text-lg text-purple-300 font-semibold">AI</p>
          </div>
          
          <span className="text-4xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-[#7c3aed] rounded-full flex items-center justify-center text-4xl shadow-2xl">
              👨‍💻
            </div>
            <p className="mt-3 text-lg text-purple-300 font-semibold">Engineer</p>
          </div>
          
          <span className="text-4xl text-purple-400">→</span>
          
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-[#6366f1] rounded-full flex items-center justify-center text-4xl shadow-2xl">
              💬
            </div>
            <p className="mt-3 text-lg text-purple-300 font-semibold">Feedback</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
