import { motion } from 'framer-motion';

export default function Slide10() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white py-3 px-8 mb-8 rounded-lg shadow-lg shadow-red-500/30"
      >
        <h2 className="text-2xl font-bold">VTA IN ACTION</h2>
        <p className="text-base mt-1 opacity-90">Live Demo Screenshots from the Virtual Testing Assistant</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {/* Screenshot 1 - Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg border border-[#2554C7]/30 overflow-hidden hover:border-[#00e5ff]/50 transition-all hover:scale-105"
        >
          <div className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] px-4 py-2">
            <h3 className="text-white font-bold text-sm">📊 Interactive Dashboard</h3>
          </div>
          <div className="p-2">
            <div className="w-full h-48 rounded border border-[#2554C7]/20 bg-gradient-to-br from-[#0a0e1a] to-[#1a1f35] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">📊</div>
                <p className="text-cyan-300 text-sm">Dashboard Overview</p>
                <p className="text-gray-400 text-xs">Metrics • Charts • Analytics</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-3">
            <p className="text-cyan-300 text-xs">
              Real-time metrics: 500 scenarios, £6152K cost analysis, platform distribution
            </p>
          </div>
        </motion.div>

        {/* Screenshot 2 - Recommendations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg border border-[#2554C7]/30 overflow-hidden hover:border-[#00e5ff]/50 transition-all hover:scale-105"
        >
          <div className="bg-gradient-to-r from-[#C3002F] to-[#ff1744] px-4 py-2">
            <h3 className="text-white font-bold text-sm">🤖 AI Test Recommendations</h3>
          </div>
          <div className="p-2">
            <div className="w-full h-48 rounded border border-[#C3002F]/20 bg-gradient-to-br from-[#0a0e1a] to-[#1a1f35] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🤖</div>
                <p className="text-cyan-300 text-sm">AI Recommendations</p>
                <p className="text-gray-400 text-xs">LangChain • RAG • LLM</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-3">
            <p className="text-cyan-300 text-xs">
              LLM-powered conversational agent with LangChain + RAG system
            </p>
          </div>
        </motion.div>

        {/* Screenshot 3 - Simulation Export */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg border border-[#2554C7]/30 overflow-hidden hover:border-[#00e5ff]/50 transition-all hover:scale-105"
        >
          <div className="bg-gradient-to-r from-[#00e5ff] to-[#2554C7] px-4 py-2">
            <h3 className="text-white font-bold text-sm">🚀 CARLA/SUMO Export</h3>
          </div>
          <div className="p-2">
            <div className="w-full h-48 rounded border border-[#00e5ff]/20 bg-gradient-to-br from-[#0a0e1a] to-[#1a1f35] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🚀</div>
                <p className="text-cyan-300 text-sm">Simulation Export</p>
                <p className="text-gray-400 text-xs">CARLA • SUMO • Python</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-3">
            <p className="text-cyan-300 text-xs">
              Direct integration with autonomous vehicle simulation platforms
            </p>
          </div>
        </motion.div>

        {/* Screenshot 4 - Test Scenarios */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg border border-[#2554C7]/30 overflow-hidden hover:border-[#00e5ff]/50 transition-all hover:scale-105"
        >
          <div className="bg-gradient-to-r from-[#2554C7] to-[#C3002F] px-4 py-2">
            <h3 className="text-white font-bold text-sm">📋 Test Scenario Management</h3>
          </div>
          <div className="p-2">
            <div className="w-full h-48 rounded border border-[#2554C7]/20 bg-gradient-to-br from-[#0a0e1a] to-[#1a1f35] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">📋</div>
                <p className="text-cyan-300 text-sm">Scenario Management</p>
                <p className="text-gray-400 text-xs">500 Scenarios • Filters • Cost</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-3">
            <p className="text-cyan-300 text-xs">
              Filterable scenario library with risk levels, duration & cost tracking
            </p>
          </div>
        </motion.div>
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 bg-gradient-to-r from-[#2554C7] to-[#00e5ff] p-4 rounded-lg shadow-lg shadow-cyan-500/50 text-center"
      >
        <p className="text-white text-lg font-bold">
          ✓ Production-Ready System • Built with FastAPI + Streamlit • Neo4j Knowledge Graph • 500 Test Scenarios
        </p>
      </motion.div>
    </div>
  );
}
