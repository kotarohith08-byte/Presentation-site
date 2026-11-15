import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Mic, BookOpen } from 'lucide-react';

export default function Controls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJumpToSlide,
  onToggleNotes
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-advance slideshow mode
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        onNext();
      }, 7000); // 7s per slide
    }
    return () => clearInterval(interval);
  }, [isPlaying, onNext]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 md:px-6 bg-[#060814]/85 backdrop-blur-md border-t border-sky-500/20 shadow-2xl select-none">
      {/* Left: Auto-advance & Shortcuts */}
      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
            isPlaying 
              ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
              : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
          }`}
          title="Auto-Advance Slideshow (7s interval)"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isPlaying ? 'Autoplay ON' : 'Autoplay'}</span>
        </button>

        {/* Speech Script Button */}
        <button
          onClick={onToggleNotes}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/70 border border-indigo-400/40 text-indigo-300 hover:bg-indigo-900/80 text-xs font-mono-code font-bold transition-all cursor-pointer shadow-sm"
          title="Open Word-for-Word Spoken Defense Script"
        >
          <Mic className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden md:inline">Speech Script (N)</span>
        </button>

        <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-500 font-mono-code">
          <span>Keys:</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">←</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">→</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">SPACE</span>
        </div>
      </div>

      {/* Center: 16 Interactive Progress Bar Segments */}
      <div className="flex items-center gap-1.5 max-w-xl flex-1 mx-4 md:mx-6">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onJumpToSlide(idx)}
            className="flex-1 h-2 rounded-full transition-all relative group cursor-pointer focus:outline-none"
            style={{
              backgroundColor: idx === currentSlide
                ? '#00f0ff'
                : idx < currentSlide
                ? '#3b82f6'
                : 'rgba(51, 65, 85, 0.4)',
              boxShadow: idx === currentSlide ? '0 0 10px #00f0ff' : 'none'
            }}
            title={`Jump to Slide ${idx + 1}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              Slide {idx + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Right: Prev & Next Action Buttons */}
      <div className="flex items-center gap-2 md:gap-3">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-sky-400 text-slate-200 hover:text-white disabled:opacity-40 disabled:hover:border-slate-700 disabled:cursor-not-allowed transition-all text-xs font-semibold shadow-md active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="flex items-center gap-1.5 px-4 md:px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-slate-950 font-bold hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs shadow-lg shadow-sky-500/25 active:scale-95 cursor-pointer"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
