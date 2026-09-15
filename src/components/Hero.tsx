import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-4 text-3xl opacity-50 rotate-12">🎀</div>
      <div className="absolute top-20 right-8 text-4xl opacity-50 -rotate-12">✨</div>
      <div className="absolute bottom-20 left-10 text-3xl opacity-50">🌸</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-50 rotate-45">💖</div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-black text-pink-500 tracking-tight drop-shadow-sm mb-2">
          HAPPY BIRTHDAY,
          <br className="md:hidden" /> SINDI! <span className="inline-block animate-bounce">🎀</span>
        </h1>
        <p className="text-xl md:text-2xl font-hand font-bold text-slate-600 bg-white/50 inline-block px-4 py-1 rounded-full border-2 border-dashed border-pink-200">
          15 SEPTEMBER 2025
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="relative z-10 w-64 md:w-80 aspect-[3/4] bg-white p-4 pb-12 scrapbook-shadow rounded-sm mx-auto my-8"
      >
        <div className="tape"></div>
        <div className="w-full h-full bg-slate-100 overflow-hidden relative">
          <img 
            src="/WhatsApp%20Image%202026-09-15%20at%2013.18.24.jpeg" 
            alt="Sindi" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Stickers around the photo */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          className="absolute -bottom-6 -right-6 text-5xl drop-shadow-lg"
        >
          🧁
        </motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
          className="absolute -top-4 -left-6 text-4xl drop-shadow-lg -rotate-12"
        >
          ⭐
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex flex-col items-center gap-4 text-center max-w-sm z-10"
      >
        <p className="font-hand text-2xl text-slate-700 bg-yellow-100/80 px-4 py-2 -rotate-2 rounded-sm shadow-sm border border-yellow-200">
          "yep... hari ini giliran kamu yang dirayain 😌"
        </p>
        
        <p className="font-hand text-3xl font-bold text-pink-600 rotate-1 mt-4">
          Happy birthday to my first friend in college! 🥹💗
        </p>
      </motion.div>
    </section>
  );
}
