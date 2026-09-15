import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface HeartType {
  id: number;
  x: number;
  y: number;
  delay: number;
}

interface QuestProps {
  onComplete: () => void;
}

export default function Quest({ onComplete }: QuestProps) {
  const [hearts, setHearts] = useState<HeartType[]>([]);
  const [collected, setCollected] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Generate 5 random positions for hearts
    const newHearts = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      x: 10 + Math.random() * 80, // percentage 10-90
      y: 10 + Math.random() * 80,
      delay: Math.random() * 0.5,
    }));
    setHearts(newHearts);
  }, []);

  const handleCollect = (id: number, e: React.MouseEvent) => {
    if (collected.includes(id)) return;
    
    // Sparkle effect
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 15,
      spread: 40,
      origin: { x, y },
      colors: ['#ffb3c6', '#ffcbf2', '#f3c4fb'],
      disableForReducedMotion: true,
      zIndex: 100,
    });

    setCollected(prev => {
      const newCollected = [...prev, id];
      if (newCollected.length === 5) {
        setTimeout(() => setIsFinished(true), 500);
      }
      return newCollected;
    });
  };

  return (
    <section className="py-20 px-4 min-h-[70vh] flex flex-col items-center justify-center relative bg-green-50/50 border-y-4 border-dashed border-green-200">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center z-10 mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-black text-green-600 mb-2 font-mono uppercase tracking-widest">
          SINDI'S BIRTHDAY QUEST 🎮
        </h2>
        <p className="text-slate-600 font-bold bg-white/80 inline-block px-4 py-2 rounded-full shadow-sm">
          Mission: collect 5 hearts to unlock your birthday message.
        </p>
      </motion.div>

      <div className="bg-white p-4 rounded-3xl shadow-xl w-full max-w-3xl relative border-4 border-green-100">
        <div className="flex justify-between items-center mb-6 bg-slate-100 p-3 rounded-2xl">
          <span className="font-mono font-bold text-slate-700 text-lg">HEARTS:</span>
          <span className="font-mono font-bold text-2xl text-pink-500">{collected.length}/5</span>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9IiNmOGZhZmMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8cGF0aCBkPSJNMCAwdjQwaDFWMEgweiBNMCAwaDQwdjFIMHoiIGZpbGw9IiNlMmU4ZjAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=')] rounded-2xl border-4 border-slate-200 overflow-hidden">
          
          <AnimatePresence>
            {!isFinished ? hearts.map(heart => (
              !collected.includes(heart.id) && (
                <motion.button
                  key={heart.id}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    y: [0, -5, 0]
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    scale: { duration: 0.3 },
                    y: { repeat: Infinity, duration: 1.5, delay: heart.delay }
                  }}
                  onClick={(e) => handleCollect(heart.id, e)}
                  className="absolute text-4xl hover:scale-125 transition-transform cursor-pointer drop-shadow-md"
                  style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
                >
                  💗
                </motion.button>
              )
            )) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-20"
              >
                <h3 className="text-3xl md:text-5xl font-black text-yellow-500 mb-6 drop-shadow-sm text-center">
                  QUEST COMPLETE!!! 🏆✨
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onComplete}
                  className="px-6 py-3 bg-pink-500 text-white font-bold rounded-2xl shadow-lg border-b-4 border-pink-700 active:border-b-0 active:translate-y-1 transition-all text-xl"
                >
                  🎁 CLAIM YOUR REWARD
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
