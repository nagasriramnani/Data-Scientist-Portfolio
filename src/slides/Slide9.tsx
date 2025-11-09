import { motion } from 'framer-motion';

export default function Slide9() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-red-500/30"
      >
        <h2 className="text-3xl font-bold">WHY ME, WHY NISSAN, WHY NOW</h2>
        <p className="text-lg mt-2 opacity-90">Why I'm the Right Person to Build This Bridge</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Technical Depth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-4 border-[#2554C7] hover:shadow-blue-500/30 transition-shadow"
        >
          <div className="text-5xl mb-4 text-center">🔧</div>
          <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Technical Depth</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200"><strong className="text-cyan-400">Semantic Web</strong> (Neo4j, RDF, OWL)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200"><strong className="text-cyan-400">AI & ML</strong> (embeddings, vector search, LangChain)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200"><strong className="text-cyan-400">Full-stack</strong> (Python, FastAPI, Docker, simulation)</span>
            </li>
          </ul>
        </motion.div>

        {/* Proven Delivery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-4 border-[#C3002F] hover:shadow-red-500/30 transition-shadow"
        >
          <div className="text-5xl mb-4 text-center">✅</div>
          <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Proven Delivery</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200">Built <strong className="text-cyan-400">VTA end-to-end</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200">Delivered projects at <strong className="text-cyan-400">DWP and Pareto.ai</strong> in regulated environments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200"><strong className="text-cyan-400">Quantified ROI</strong> & impact</span>
            </li>
          </ul>
        </motion.div>

        {/* Fit with Nissan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#1a1f35]/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-4 border-[#00e5ff] hover:shadow-cyan-500/30 transition-shadow"
        >
          <div className="text-5xl mb-4 text-center">🚗</div>
          <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Fit with Nissan</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200">Passion for <strong className="text-cyan-400">safe, sustainable mobility</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200">Thrives at <strong className="text-cyan-400">research × engineering</strong> intersection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00e5ff]">●</span>
              <span className="text-gray-200">Wants to <strong className="text-cyan-400">industrialize AI testing</strong> within Nissan</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-[#2554C7] via-[#00e5ff] to-[#C3002F] text-white p-12 rounded-lg shadow-2xl shadow-cyan-500/50 text-center"
      >
        <p className="text-3xl font-bold leading-relaxed">
          "I don't just want to work on a project;<br />
          I want to help Nissan <span className="underline decoration-[#00e5ff]">redefine</span> how vehicle testing<br />
          is planned and validated."
        </p>
      </motion.div>
    </div>
  );
}
