/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import Opening from './components/Opening';
import Hero from './components/Hero';
import HowItStarted from './components/HowItStarted';
import MeetSindi from './components/MeetSindi';
import SindiLore from './components/SindiLore';
import MemoryLane from './components/MemoryLane';
import Quest from './components/Quest';
import TheLetter from './components/TheLetter';
import FinalSurprise from './components/FinalSurprise';
import { Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Audio handling
  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.log("Audio autoplay prevented", e));
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleOpen = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffb3c6', '#ffcbf2', '#f3c4fb', '#ffffff']
    });
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  const scrollToNext = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Audio Element with a cute royalty-free placeholder track */}
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2c943183fb.mp3?filename=cute-creatures-106518.mp3" 
        loop 
      />

      {!isOpen && <Opening onOpen={handleOpen} />}

      {isOpen && (
        <>
          {/* Mute button */}
          <button 
            onClick={toggleMute}
            className="fixed top-4 right-4 z-50 bg-white/80 p-2 rounded-full shadow-sm backdrop-blur-sm border border-pink-100 text-pink-500 hover:bg-pink-50 transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {/* Floating Easter Eggs (tiny eyes) */}
          <div className="fixed top-20 right-10 text-[10px] opacity-20 hover:opacity-100 transition-opacity z-40">👀</div>
          <div className="fixed bottom-32 left-8 text-[10px] opacity-20 hover:opacity-100 transition-opacity z-40 text-pink-400">ganti kost</div>

          <div id="hero"><Hero /></div>
          <div id="how-it-started"><HowItStarted /></div>
          <div id="meet-sindi"><MeetSindi /></div>
          <div id="sindi-lore"><SindiLore /></div>
          <div id="memory-lane"><MemoryLane /></div>
          <div id="quest"><Quest onComplete={() => scrollToNext('the-letter')} /></div>
          <div id="the-letter"><TheLetter /></div>
          <div id="final-surprise"><FinalSurprise /></div>

          {/* Progress Indicator */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border-2 border-pink-100 flex items-center gap-2 pointer-events-none">
            <span className="text-xs font-bold text-pink-500 font-mono hidden md:inline">SINDI'S BIRTHDAY QUEST</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <span key={item} className={`text-sm transition-all duration-300 ${scrollProgress > (item - 1) * 0.2 ? 'text-pink-500 scale-110' : 'text-slate-300 scale-100'}`}>
                  {scrollProgress > (item - 1) * 0.2 ? '💗' : '♡'}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
