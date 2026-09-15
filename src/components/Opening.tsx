import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface OpeningProps {
  onOpen: () => void;
}

export default function Opening({ onOpen }: OpeningProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 2000);
    const timer2 = setTimeout(() => setStep(2), 4500);
    const timer3 = setTimeout(() => setStep(3), 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pastel-pink paper-texture px-6 text-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating background elements */}
        {['♡', '✦', '✧', '☁️', '🎀'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl text-white/50"
            initial={{ y: '110vh', x: `${Math.random() * 100}vw` }}
            animate={{ y: '-10vh', x: `${Math.random() * 100}vw` }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center justify-center h-48 space-y-4">
        {step >= 0 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-hand font-bold text-slate-700"
          >
            pssst... 👀
          </motion.p>
        )}

        {step >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl font-medium text-slate-700 max-w-xs"
          >
            ada seseorang yang ulang tahun hari ini...
          </motion.p>
        )}

        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl font-medium text-pink-600 max-w-xs"
          >
            ciri-ciri suka main roblox 🤭
          </motion.p>
        )}
      </div>

      <div className="h-24 mt-8 flex items-center justify-center">
        {step >= 3 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="px-8 py-4 bg-white text-pink-500 font-bold rounded-full shadow-xl border-4 border-pink-200 hover:border-pink-300 transition-colors z-10 flex items-center gap-2"
          >
            <span className="text-2xl">🎁</span> OPEN THE SURPRISE
          </motion.button>
        )}
      </div>
    </div>
  );
}
