import React from 'react';
import { ArrowRight, Sparkles, Layers, Cpu, Award, Film, Play, BookOpen, GraduationCap } from 'lucide-react';

export default function Section01Hero({ onStart }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 md:px-6 text-center select-none z-10 py-2">
      {/* Top Academic Department & Subject Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-400/40 shadow-lg shadow-sky-500/15 mb-3 backdrop-blur-md">
        <GraduationCap className="w-4 h-4 text-sky-400" />
        <span className="text-[11px] font-mono-code font-bold tracking-wider text-sky-300 uppercase">
          Department of Computer Science & Engineering (AI & ML)
        </span>
      </div>

      {/* Main 3D Title */}
      <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-2 text-glow-cyan drop-shadow-2xl">
        CINEMAAI
      </h1>

      {/* Subtitle */}
      <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-3 tracking-wide">
        INTELLIGENT MOVIE SUGGESTION SYSTEM
      </h2>

      {/* Prominent Academic Subject & Course Badge Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mb-4 text-xs font-mono-code">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-950/80 border border-sky-400/40 text-sky-300 font-bold shadow-sm">
          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
          <span>SUBJECT: MAJOR CAPSTONE PROJECT (AI & ML)</span>
        </div>
        <div className="px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-400/40 text-purple-300 font-semibold shadow-sm">
          <span>COURSE CODE: CSE499 / AI499</span>
        </div>
        <div className="px-3 py-1 rounded-lg bg-indigo-950/80 border border-indigo-400/40 text-indigo-300 font-semibold shadow-sm">
          <span>DEGREE: B.TECH CSE (AI & ML) • IV YEAR</span>
        </div>
        <div className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 font-medium">
          <span>ACADEMIC YEAR: 2025–2026</span>
        </div>
      </div>

      {/* Tagline */}
      <p className="max-w-2xl text-xs md:text-sm text-slate-300 leading-relaxed mb-6">
        A Cognitive Entertainment Discovery Platform Harmonizing Content-Based TF-IDF Vectors,
        TruncatedSVD Collaborative Filtering, and Bayesian Statistical Quality Regularization.
      </p>

      {/* 3 Large 3D Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-3xl w-full mb-6">
        <div className="glass-card p-3.5 rounded-2xl flex flex-col items-center border border-sky-500/30">
          <Film className="w-5 h-5 text-sky-400 mb-1.5" />
          <span className="font-mono-code text-2xl font-extrabold text-amber-400">10,742</span>
          <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">Theatrical Movies</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Dual-Market International + 1k+ Indian</span>
        </div>

        <div className="glass-card p-3.5 rounded-2xl flex flex-col items-center border border-purple-500/30">
          <Cpu className="w-5 h-5 text-purple-400 mb-1.5" />
          <span className="font-mono-code text-2xl font-extrabold text-purple-300">HYBRID ML</span>
          <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">Tri-Core Engine</span>
          <span className="text-[10px] text-slate-400 mt-0.5">TF-IDF + 30-Factor Latent SVD + WR</span>
        </div>

        <div className="glass-card p-3.5 rounded-2xl flex flex-col items-center border border-emerald-500/30">
          <Award className="w-5 h-5 text-emerald-400 mb-1.5" />
          <span className="font-mono-code text-2xl font-extrabold text-emerald-400">0.9255</span>
          <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">RMSE Precision</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Sub-1.0 Tight Test Set Convergence</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onStart}
          className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-600 text-slate-950 font-bold text-xs md:text-sm tracking-wide shadow-xl shadow-sky-500/25 hover:brightness-110 active:scale-95 transition-all group cursor-pointer"
        >
          <span>Enter 3D Presentation</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href="https://kotarohith08-byte.github.io/Movie-Suggestions/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:border-sky-400 text-xs md:text-sm font-semibold transition-all hover:bg-slate-800"
        >
          <Play className="w-4 h-4 text-sky-400" />
          <span>Live Demo Website</span>
        </a>
      </div>
    </div>
  );
}
