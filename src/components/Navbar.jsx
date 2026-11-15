import React, { useState, useEffect } from 'react';
import { 
  Film, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Clock, 
  ChevronDown, 
  ExternalLink,
  ListOrdered
} from 'lucide-react';

export default function Navbar({ 
  currentSlide, 
  totalSlides, 
  onJumpToSlide, 
  onToggleNotes, 
  showNotes,
  onToggleAgenda,
  showAgenda,
  sectionsMeta 
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Presentation Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 md:px-6 bg-[#060814]/85 backdrop-blur-md border-b border-sky-500/20 shadow-lg select-none">
      {/* Brand & Capstone Subject Tag */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-md shadow-sky-500/20 border border-sky-300/40">
          <Film className="w-5 h-5 text-slate-950" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-extrabold text-base tracking-wider text-slate-100">CINEMAAI</span>
            <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold">3D DEFENSE</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400 tracking-tight">
            <span>B.Tech CSE (AI & ML)</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400 font-mono-code font-bold">Subject: Major Project (CSE499)</span>
          </div>
        </div>
      </div>

      {/* Center Section Jump Dropdown */}
      <div className="relative">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 hover:border-sky-400/60 transition-all text-xs text-slate-200"
        >
          <span className="text-sky-400 font-mono-code font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="max-w-[180px] md:max-w-[240px] truncate font-medium">{sectionsMeta[currentSlide]?.title || 'Section'}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 max-h-96 overflow-y-auto rounded-xl bg-slate-950/95 border border-sky-500/30 backdrop-blur-xl shadow-2xl p-2 z-50">
            <div className="text-[10px] font-mono-code text-slate-500 px-3 py-1 uppercase font-semibold">Jump to Slide</div>
            {sectionsMeta.map((sec, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onJumpToSlide(idx);
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                  idx === currentSlide 
                    ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40' 
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="font-mono-code text-[11px] text-slate-400">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="truncate">{sec.title}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Controls: Subject Outline, Timer, Counter, Notes, Fullscreen */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Subject Outline & Agenda Button */}
        <button 
          onClick={onToggleAgenda}
          className={`px-2.5 py-1.5 rounded-lg border transition-all text-xs flex items-center gap-1.5 ${
            showAgenda 
              ? 'bg-sky-500/20 border-sky-400 text-sky-300' 
              : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
          }`}
          title="View Subject Outline & Agenda"
        >
          <ListOrdered className="w-4 h-4 text-sky-400" />
          <span className="hidden sm:inline text-[11px] font-semibold">Subject Outline</span>
        </button>

        {/* Presentation Timer */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono-code text-amber-400 font-semibold" title="Presentation Time">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{formatTime(seconds)}</span>
        </div>

        {/* Counter */}
        <div className="text-xs font-mono-code px-2 py-1 rounded-md bg-slate-900/80 border border-slate-800 font-bold">
          <span className="text-sky-400">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-slate-500 mx-1">/</span>
          <span className="text-slate-400">{String(totalSlides).padStart(2, '0')}</span>
        </div>

        {/* Speaker Notes Toggle */}
        <button 
          onClick={onToggleNotes}
          className={`p-1.5 rounded-lg border transition-all text-xs flex items-center gap-1.5 ${
            showNotes 
              ? 'bg-indigo-600/30 border-indigo-400 text-indigo-200' 
              : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-500'
          }`}
          title="Toggle Presenter Viva Notes"
        >
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span className="hidden md:inline text-[11px] font-medium">Notes</span>
        </button>

        {/* Fullscreen Toggle */}
        <button 
          onClick={toggleFullscreen}
          className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-700 hover:border-sky-400/50 text-slate-300 hover:text-white transition-all"
          title="Fullscreen (F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Live Site Link */}
        <a 
          href="https://kotarohith08-byte.github.io/Movie-Suggestions/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-slate-950 font-bold text-xs shadow-md shadow-sky-500/20 hover:brightness-110 transition-all"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
