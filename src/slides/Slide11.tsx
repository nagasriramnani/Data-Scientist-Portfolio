import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center pb-32">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-[#2554C7] to-[#00e5ff] text-white py-6 px-8 mb-8 rounded-lg shadow-lg shadow-cyan-500/50"
      >
        <h2 className="text-4xl font-bold mb-2">THANK YOU</h2>
        <p className="text-xl opacity-90">Questions?</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-3xl font-bold text-[#00e5ff] mb-4">Naga Sri Ram Kochetti</h3>
        <p className="text-lg text-cyan-300 mb-6">Digital Vehicle Test Engineer Candidate</p>

        <div className="flex flex-col items-center gap-3 mb-8">
          <a
            href="mailto:nagasriramkochetti@gmail.com"
            className="flex items-center gap-3 bg-[#1a1f35]/60 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all border-2 border-[#2554C7] hover:bg-[#2554C7]/20 hover:border-[#00e5ff]"
          >
            <Mail className="text-[#00e5ff]" size={20} />
            <span className="text-base font-semibold text-cyan-300">nagasriramkochetti@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1a1f35]/60 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all border-2 border-[#2554C7] hover:bg-[#2554C7]/20 hover:border-[#00e5ff]"
          >
            <Linkedin className="text-[#00e5ff]" size={20} />
            <span className="text-base font-semibold text-cyan-300">LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com/nagasriramnani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1a1f35]/60 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all border-2 border-[#2554C7] hover:bg-[#2554C7]/20 hover:border-[#00e5ff]"
          >
            <Github className="text-[#00e5ff]" size={20} />
            <span className="text-base font-semibold text-cyan-300">GitHub Portfolio</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-[#1a1f35]/60 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-4xl mx-auto border border-[#2554C7]/30"
      >
        <p className="text-lg text-gray-200 italic leading-relaxed">
          "I'd be happy to walk through any part of the architecture, the VTA project,<br />
          or how I see this role evolving over the next 2–3 years."
        </p>
      </motion.div>

      {/* Bridge Motif */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-8 flex items-center justify-center gap-6 text-4xl"
      >
        <span>📊</span>
        <span className="text-[#00e5ff]">🌉</span>
        <span>🚗</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-cyan-400/60 text-xs"
      >
        KTP Interview Presentation • Nissan Technical Centre Europe × Cranfield University
      </motion.div>
    </div>
  );
}

