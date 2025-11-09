import { motion } from 'framer-motion';

const phases = [
  {
    number: 1,
    title: 'Understand & Model',
    timeline: '0–3 months',
    color: '#2554C7',
    items: [
      'Shadow engineers, map ontology',
      'Ingest standards',
      'Deliver trusted semantic model',
    ],
  },
  {
    number: 2,
    title: 'Build & Integrate',
    timeline: '3–12 months',
    color: '#C3002F',
    items: [
      'Extend VTA backend',
      'Connect to CARLA / internal systems',
      'Pilot dashboard with engineers',
    ],
  },
  {
    number: 3,
    title: 'Validate & Scale',
    timeline: '12–27 months',
    color: '#00e5ff',
    items: [
      'Measure ROI',
      'Iterate UX',
      'Produce business case for global rollout',
    ],
  },
];

export default function Slide8() {
  return (
    <div className="w-full max-w-6xl mx-auto pt-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-3 px-8 mb-8 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-2xl font-bold">MY PROJECT APPROACH AT NISSAN</h2>
        <p className="text-base mt-1 text-gray-900 font-semibold">If I Join, Here's How I'd Approach the Project</p>
      </motion.div>

      <div className="space-y-6">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.number}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.3 }}
            className="relative"
          >
            <div className="flex items-start gap-4">
              {/* Phase Number Circle */}
              <div
                className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                style={{ 
                  backgroundColor: phase.color,
                  boxShadow: `0 0 30px ${phase.color}60`
                }}
              >
                {phase.number}
              </div>

              {/* Phase Content */}
              <div className="flex-1 bg-[#1a1f35]/60 backdrop-blur-sm p-5 rounded-lg shadow-lg border-l-4" style={{ borderColor: phase.color }}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cyan-300">Phase {phase.number}: {phase.title}</h3>
                  <span className="bg-[#0a0e1a]/60 border border-[#2554C7] px-3 py-1 rounded-full text-xs font-semibold text-cyan-300">
                    {phase.timeline}
                  </span>
                </div>

                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.3 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-[#00e5ff] text-lg mt-0.5">▸</span>
                      <span className="text-gray-200 text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connector Arrow */}
            {index < phases.length - 1 && (
              <div className="ml-10 mt-3 mb-3 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-[#2554C7] to-[#00e5ff]"></div>
                <div className="text-xl text-[#00e5ff] ml-2">↓</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8 bg-[#1a1f35]/60 backdrop-blur-sm p-4 rounded-lg text-center border border-[#2554C7]/30"
      >
        <p className="text-base font-semibold text-cyan-300">
          📊 Clear roadmap from research to production-ready system
        </p>
      </motion.div>
    </div>
  );
}
