import { motion } from 'framer-motion';

const tableRows = [
  {
    need: 'Use AI + KG to support test planning',
    have: 'Built VTA with Neo4j + RDF + embeddings',
  },
  {
    need: 'Bridge research & engineering workflows',
    have: 'Productionised digital twin concepts via APIs & simulation exports',
  },
  {
    need: 'Quantify ROI and adoption',
    have: 'Delivered metrics: 30% time / 25% cost savings',
  },
  {
    need: 'Collaborate across teams (Cranfield/Nissan)',
    have: 'Managed KTP-scale project with governance & training',
  },
];

export default function Slide7() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-4 px-8 mb-12 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-3xl font-bold">MAPPING TO ROLE REQUIREMENTS</h2>
        <p className="text-lg mt-2 opacity-90">Direct Match to Digital Vehicle Test Engineer Requirements</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-[#1a1f35]/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-[#2554C7]/30"
      >
        <div className="grid grid-cols-2 bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-4">
          <div className="font-bold text-xl">What Nissan Needs</div>
          <div className="font-bold text-xl">What I Have Demonstrated</div>
        </div>

        {tableRows.map((row, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            className="grid grid-cols-2 border-b border-[#2554C7]/20 hover:bg-[#2554C7]/10 transition-colors"
          >
            <div className="p-6 border-r border-[#2554C7]/20">
              <p className="text-gray-300 text-lg">{row.need}</p>
            </div>
            <div className="p-6 bg-[#0a0e1a]/40">
              <p className="text-cyan-300 text-lg font-semibold">{row.have}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8 bg-gradient-to-r from-[#C3002F] to-[#ff1744] text-white p-6 rounded-lg shadow-lg shadow-red-500/30 text-center"
      >
        <p className="text-2xl font-bold">
          ✓ Perfect Alignment with Role Requirements
        </p>
      </motion.div>
    </div>
  );
}
