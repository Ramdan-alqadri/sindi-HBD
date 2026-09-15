import { motion } from 'motion/react';
import { RefreshCw, ArrowRight } from 'lucide-react';

export default function SindiLore() {
  return (
    <section className="py-20 px-4 bg-slate-900/5 relative overflow-hidden flex flex-col items-center border-y-4 border-dashed border-slate-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight drop-shadow-sm">
          SINDI LORE™
        </h2>
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-6 -right-8 bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-yellow-400 rotate-12"
        >
          NEW STORY UNLOCKED
        </motion.div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl w-full z-10">
        
        {/* Character Card */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          viewport={{ once: true }}
          className="w-full max-w-xs bg-white p-3 pb-8 rounded-xl scrapbook-shadow relative"
        >
          <div className="tape"></div>
          <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden border-2 border-slate-100">
            <img 
              src="/WhatsApp%20Image%202026-09-15%20at%2013.19.24.jpeg" 
              alt="Sindi Absurd" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center font-hand text-xl font-bold text-slate-700">Level 20 Boss</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full bg-white/80 backdrop-blur p-6 rounded-3xl shadow-lg border-2 border-white"
        >
          <div className="space-y-4 font-bold text-slate-700 text-lg">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span>Editing Skill:</span>
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span>Roblox Skill:</span>
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span>Story Generator:</span>
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span>Kost Switching:</span>
              <span className="text-yellow-400">⭐⭐⭐⭐</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span>Love Life:</span>
              <span className="bg-slate-800 text-green-400 text-xs px-2 py-1 rounded font-mono animate-pulse">
                UPDATING...
              </span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300">
            <p className="text-center text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">
              The Cycle
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm font-bold text-pink-600">
              <span className="bg-pink-100 px-2 py-1 rounded-md">KOST BARU</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="bg-purple-100 px-2 py-1 rounded-md">COWOK BARU</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="bg-yellow-100 px-2 py-1 rounded-md">CERITA BARU</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="bg-blue-100 px-2 py-1 rounded-md">EDIT LAGI</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="bg-green-100 px-2 py-1 rounded-md">ROBLOX</span>
              <RefreshCw className="w-5 h-5 text-slate-400 animate-spin-slow ml-2" />
            </div>
            <p className="text-center text-xs text-slate-500 mt-4 italic font-medium">
              "sebuah siklus kehidupan yang belum berhasil dijelaskan para ilmuwan."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
