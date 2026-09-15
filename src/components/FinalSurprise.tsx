import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function FinalSurprise() {
  const [candleLit, setCandleLit] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleBlowCandle = () => {
    if (!candleLit) return;
    
    setCandleLit(false);
    setIsDark(true);

    setTimeout(() => {
      setIsDark(false);
      setShowSurprise(true);
      triggerConfetti();
    }, 1500);
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  const reset = () => {
    setCandleLit(true);
    setShowSurprise(false);
    setIsDark(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-pink-100/50">
      
      {/* Dark overlay when candle is blown */}
      <AnimatePresence>
        {isDark && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/90 z-20 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="z-10 flex flex-col items-center">
        {!showSurprise && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-pink-500 mb-2 drop-shadow-sm">
              MAKE A WISH, SINDI ✨
            </h2>
            <p className="text-slate-600 font-medium font-hand text-xl">
              (tap the candle to blow it out!)
            </p>
          </motion.div>
        )}

        <motion.div 
          className="relative cursor-pointer"
          onClick={handleBlowCandle}
          animate={showSurprise ? { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 1, repeat: showSurprise ? Infinity : 0, repeatDelay: 2 }}
        >
          <div className="text-[150px] md:text-[200px] leading-none drop-shadow-2xl select-none">
            🎂
          </div>
          
          <AnimatePresence>
            {candleLit && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0, y: -20 }}
                className="absolute top-[10%] left-[45%] text-4xl animate-pulse drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]"
              >
                🔥
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {showSurprise && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="mt-12 text-center max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-4 border-pink-200 relative"
            >
              <div className="absolute -top-6 -left-4 text-4xl rotate-12">💖</div>
              <div className="absolute -bottom-4 -right-4 text-4xl -rotate-12">✨</div>
              
              <h2 className="text-4xl md:text-5xl font-black text-pink-600 mb-2">
                HAPPY BIRTHDAY, SINDI! 🎀
              </h2>
              <p className="text-lg font-bold text-slate-500 tracking-widest mb-6">
                15 • 09 • 2025
              </p>
              
              <p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed">
                "Here's to another year of stories, chaos, laughter, Roblox, editing, new adventures, and memories. 💗"
              </p>
              
              <p className="font-hand text-3xl font-bold text-blue-500 mb-8">
                Thanks for being part of my college story. ♡
              </p>

              <button
                onClick={reset}
                className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-slate-700 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <span>↻</span> PLAY AGAIN
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
