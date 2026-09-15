import { motion } from 'motion/react';

export default function HowItStarted() {
  return (
    <section className="min-h-screen py-20 px-6 relative flex flex-col items-center">
      <div className="absolute top-0 w-full border-t-2 border-dashed border-pink-300 opacity-50"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-black text-blue-400 mb-2 rotate-1">
          THE DAY THIS FRIENDSHIP STARTED... 🌷
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 w-full max-w-sm space-y-6 bg-white/60 p-6 rounded-3xl backdrop-blur-sm border-2 border-white shadow-xl"
        >
          <div className="space-y-4 font-medium text-lg text-slate-700">
            <p>Semua berawal dari SNBP.</p>
            <p>Waktu pengumuman SNBP jadi salah satu momen pertama kita akhirnya saling kenal.</p>
            <p>Dan lucunya, Sindi yang ngajak kenalan duluan.</p>
            <p>Dari sebuah kenalan kecil...</p>
            <p className="font-bold text-xl text-pink-500 bg-pink-100/50 inline-block px-2 py-1 rounded-lg">
              ternyata jadi teman pertama di dunia perkuliahan. 🥹
            </p>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-blue-200">
            <div className="flex justify-between items-center text-xs font-bold text-blue-400 uppercase tracking-wider relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -z-10"></div>
              {['SNBP', 'Meeting', 'Chat', 'Friendship'].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-2 bg-white/80 p-1 rounded-full">
                  <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm"></div>
                  <span className="bg-white/80 px-1 rounded">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-64 md:w-80 aspect-square bg-white p-4 pb-12 scrapbook-shadow rounded-sm"
        >
          <div className="tape-angled"></div>
          <div className="w-full h-full bg-slate-200 overflow-hidden">
            <img 
              src="/WhatsApp%20Image%202026-09-15%20at%2013.19.07.jpeg" 
              alt="First meeting" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="absolute bottom-3 left-0 w-full text-center font-hand text-2xl text-slate-700 font-bold">
            friendship unlocked 🔓♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}
