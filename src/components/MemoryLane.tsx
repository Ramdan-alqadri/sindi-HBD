import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

const memories = [
  {
    url: "/WhatsApp%20Image%202026-09-15%20at%2013.23.20.jpeg",
    caption: "core memory ♡",
    rotation: -4,
    x: 0,
    y: 0,
  },
  {
    url: "/WhatsApp%20Image%202026-09-15%20at%2013.32.56%20(2).jpeg",
    caption: "look at us 😭",
    rotation: 6,
    x: 20,
    y: 10,
  },
  {
    url: "/WhatsApp%20Image%202026-09-15%20at%2013.32.56%20(1).jpeg",
    caption: "why were we like this",
    rotation: -2,
    x: -10,
    y: 20,
  },
  {
    url: "/WhatsApp%20Image%202026-09-15%20at%2013.32.56.jpeg",
    caption: "college era",
    rotation: 8,
    x: 10,
    y: -10,
  },
  {
    url: "/WhatsApp%20Image%202026-09-15%20at%2013.20.04.jpeg",
    caption: "random day, favorite memory",
    rotation: -6,
    x: -15,
    y: 5,
  }
];

export default function MemoryLane() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-32 px-4 relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-10 w-full text-center z-10">
        <h2 className="text-4xl font-black text-pink-400 drop-shadow-sm bg-white/50 inline-block px-6 py-2 rounded-full backdrop-blur-sm border border-pink-100">
          MEMORY LANE 📸
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl w-full mt-20 relative">
        {memories.map((mem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotate: mem.rotation - 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: mem.rotation }}
            whileHover={{ scale: 1.05, zIndex: 20, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative cursor-pointer scrapbook-shadow bg-white p-3 pb-10 rounded-sm"
            style={{ x: mem.x, y: mem.y }}
            onClick={() => setSelectedImg(mem.url)}
          >
            <div className="tape"></div>
            <div className="aspect-square bg-slate-100 overflow-hidden rounded-sm pointer-events-none">
              <img src={mem.url} alt="Memory" className="w-full h-full object-cover" />
            </div>
            <p className="absolute bottom-2 left-0 w-full text-center font-hand text-xl font-bold text-slate-700">
              {mem.caption}
            </p>
            
            {/* Random doodle */}
            {i % 2 === 0 && (
              <div className="absolute -bottom-4 -right-4 text-3xl opacity-60 pointer-events-none -rotate-12">
                ✨
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white p-4 rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-4 -right-4 bg-white text-slate-800 p-2 rounded-full shadow-lg hover:bg-pink-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={selectedImg} alt="Enlarged memory" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
