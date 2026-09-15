import { motion } from 'motion/react';
import { PencilRuler, Gamepad2, Sparkles, Home, Heart } from 'lucide-react';

const cards = [
  {
    title: "EDITING QUEEN",
    desc: "Kalau soal edit-editan, serahkan kepada ahlinya.",
    icon: <PencilRuler className="w-8 h-8 text-pink-500" />,
    color: "bg-pink-100 border-pink-200"
  },
  {
    title: "ROBLOX GIRL",
    desc: "Kalau sedang menghilang, coba cek Roblox.",
    icon: <Gamepad2 className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-100 border-blue-200"
  },
  {
    title: "CHAOTIC ENERGY",
    desc: "Selalu punya cerita baru.",
    icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
    color: "bg-yellow-100 border-yellow-200"
  },
  {
    title: "KOST HOPPING",
    desc: "Ganti kost? Bisa.",
    icon: <Home className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-100 border-purple-200"
  },
  {
    title: "LOVE LIFE UPDATE",
    desc: "Ganti cowok? Bisa juga.",
    icon: <Heart className="w-8 h-8 text-red-500" />,
    color: "bg-red-100 border-red-200"
  }
];

export default function MeetSindi() {
  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-black text-slate-800 mb-2 inline-block relative">
          MEET SINDI 🎀
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-pink-200 -z-10 rounded-full"></div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, type: "spring" }}
            whileHover={{ y: -5, rotate: i % 2 === 0 ? 2 : -2 }}
            className={`p-6 rounded-3xl border-4 ${card.color} scrapbook-shadow relative overflow-hidden`}
          >
            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
            <p className="text-slate-600 font-medium">{card.desc}</p>
            
            {/* Decoration */}
            <div className="absolute -bottom-4 -right-4 opacity-10 scale-150">
              {card.icon}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center max-w-md bg-white/50 p-6 rounded-2xl backdrop-blur-sm border border-white/60 shadow-sm"
      >
        <p className="font-hand text-2xl font-bold text-slate-800 mb-2">
          "Ganti kost, ganti cowok. Consistency is key. 😭"
        </p>
        <p className="text-xs text-slate-400 font-medium italic">
          *disclaimer: ini cuma candaan dari teman yang sayang 🤍
        </p>
      </motion.div>
    </section>
  );
}
