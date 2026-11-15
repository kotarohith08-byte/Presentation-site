import React, { useState } from 'react';
import { X, BookOpen, AlertCircle, Lightbulb, Mic, User, Copy, Check } from 'lucide-react';

export default function PresenterNotesModal({ isOpen, onClose, currentSlide, notes }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentNote = notes[currentSlide] || {
    title: 'Presentation Notes',
    duration: '45–60s',
    speaker: 'Team Member',
    speech: 'Welcome respected professors. Today we present CinemaAI, an intelligent movie suggestion system designed to solve choice overload using a tri-core hybrid architecture.',
    talkingPoints: ['Highlight key technical achievements and rigorous mathematical formulation.'],
    defenseTips: 'Explain the difference between heuristic popularity ranking and Bayesian prior regularization.'
  };

  const handleCopySpeech = () => {
    if (currentNote.speech) {
      navigator.clipboard.writeText(currentNote.speech).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl bg-slate-950 border border-indigo-500/40 rounded-2xl p-6 shadow-2xl relative max-h-[88vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-orbitron font-extrabold text-slate-100">
                Presenter Speech & Viva Defense Guide
              </h2>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-bold">
                SLIDE {String(currentSlide + 1).padStart(2, '0')} / 16
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Word-for-word presentation speech and anticipated university viva-voce questions.
            </p>
          </div>
        </div>

        {/* Metadata Banner */}
        <div className="mb-4 p-3 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-400">Recommended Speaker:</span>
            <span className="text-sky-300 font-bold font-mono-code">{currentNote.speaker || 'K Rohith (Roll 10)'}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-indigo-300 font-semibold">{currentNote.title}</span>
            <span className="text-amber-400 font-mono-code font-bold">⏱️ {currentNote.duration}</span>
          </div>
        </div>

        {/* Word-for-Word Spoken Presentation Script */}
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900/90 border border-indigo-500/40 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono-code uppercase font-bold text-indigo-300 flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              Word-for-Word Presentation Speech (Say This to the Panel):
            </span>
            <button
              onClick={handleCopySpeech}
              className="text-[11px] font-mono-code text-indigo-300 hover:text-white flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-900/40 border border-indigo-500/30 cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy Speech'}</span>
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans bg-black/40 p-3 rounded-lg border border-indigo-500/20 italic">
            "{currentNote.speech}"
          </p>
        </div>

        {/* Technical Points and Viva Q&A */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-mono-code uppercase font-bold text-slate-400 mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              Technical Concepts to Emphasize & Point To
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {currentNote.talkingPoints.map((tp, idx) => (
                <li key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{tp}</span>
                </li>
              ))}
            </ul>
          </div>

          {currentNote.defenseTips && (
            <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30">
              <h3 className="text-xs font-mono-code uppercase font-bold text-purple-300 mb-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-purple-400" />
                Anticipated Panel Viva Question & Model Answer
              </h3>
              <p className="text-xs text-purple-200/90 leading-relaxed font-mono-code">{currentNote.defenseTips}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Press <strong>N</strong> on any slide to toggle this speech teleprompter.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
          >
            Close Guide (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
