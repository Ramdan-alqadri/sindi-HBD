import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function TheLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [typedText, setTypedText] = useState("");

  const letterText = `Dear Sindi,

Selamat ulang tahun yaaa! 🎂💗

Lucu juga kalau dipikir-pikir, dari sekian banyak orang yang bisa kita temui waktu awal kuliah, ternyata kamu yang jadi teman pertama yang aku kenal.

Makasih karena waktu itu kamu yang ngajak kenalan duluan.

Sejak saat itu, kamu jadi salah satu orang yang sering aku temui, temani, dan ajak cerita selama kuliah.

Semoga di umur yang baru ini kamu selalu dikelilingi hal-hal baik, orang-orang baik, dan banyak alasan untuk bahagia.

Semoga semua yang kamu pengen bisa pelan-pelan tercapai.

Semoga kuliah kita juga lancar sampai selesai, dan semoga nanti ketika semuanya sudah berubah dan kita sibuk dengan kehidupan masing-masing, kita masih bisa mengingat masa-masa ini dan ketawa bareng.

Dan tentu saja...

semoga perjalanan hidupmu ke depannya lebih stabil daripada pergantian kost dan cowokmu 😭

HAHAHAHA.

Anyway, jokes aside...

Thank you for being one of the first people who made college feel a little less asing.

Happy birthday, Sindi. 🫶🏻

Stay cute, stay chaotic, stay good at editing, and jangan lupa login Roblox.

— dari teman pertamamu di dunia perkuliahan 🤍`;

  useEffect(() => {
    if (showLetter) {
      let i = 0;
      const timer = setInterval(() => {
        setTypedText(letterText.substring(0, i));
        i++;
        if (i > letterText.length) {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [showLetter, letterText]);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowLetter(true), 1000);
  };

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center relative">
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            exit={{ opacity: 0, y: -50 }}
            className="flex flex-col items-center w-full max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-64 md:w-80 aspect-[4/5] bg-white p-3 pb-12 scrapbook-shadow rounded-sm rotate-2 mb-12"
            >
              <div className="tape-angled"></div>
              <div className="w-full h-full bg-slate-200 overflow-hidden">
                <img 
                  src="/WhatsApp%20Image%202026-09-15%20at%2013.23.20.jpeg" 
                  alt="Us" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-pink-100 p-4 rounded-xl shadow-lg border-2 border-pink-200 max-w-[250px] -rotate-6">
                <p className="font-hand text-xl font-bold text-slate-800">
                  "But seriously..."
                </p>
                <p className="font-hand text-lg text-pink-600 font-medium leading-tight mt-1">
                  "I'm really glad you were my first friend here."
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              onClick={handleOpen}
              className="mt-12 bg-pink-400 text-white px-8 py-4 rounded-3xl shadow-xl flex items-center gap-3 border-4 border-pink-200 hover:border-pink-100 transition-all group"
            >
              <span className="text-3xl group-hover:animate-bounce">💌</span>
              <span className="font-bold text-xl tracking-wider">OPEN THIS</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="w-full max-w-2xl bg-[#fffdf8] p-8 md:p-12 rounded-sm scrapbook-shadow relative"
            style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
              backgroundAttachment: 'local',
              lineHeight: '32px'
            }}
          >
            <div className="absolute top-4 left-6 text-2xl opacity-40">🎀</div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-red-200/50 backdrop-blur-sm -rotate-2"></div>
            
            <p className="font-hand text-xl md:text-2xl text-slate-800 whitespace-pre-wrap mt-4" style={{ lineHeight: '32px' }}>
              {typedText}
              <span className="animate-pulse opacity-50">|</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
