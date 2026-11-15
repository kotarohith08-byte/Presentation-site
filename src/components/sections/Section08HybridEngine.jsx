import React, { useState } from 'react';
import { Cpu, Sliders, Sparkles, ShieldCheck, ArrowDown, RefreshCw } from 'lucide-react';

export default function Section08HybridEngine() {
  const [isColdStart, setIsColdStart] = useState(false);

  // Normal vs Cold-Start Weights
  const weights = isColdStart
    ? { content: 70, collab: 0, genre: 0, quality: 30 }
    : { content: 40, collab: 35, genre: 15, quality: 10 };

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            // 08 • CONVERGENCE ENGINE & HYBRID FUSION
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            The CinemaAI Tri-Core Hybrid Recommendation Engine
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Dynamic linear ensemble harmonizing content vectors, collaborative factors, and Bayesian priors
          </p>
        </div>

        {/* Cold-Start Toggle Simulator */}
        <button
          onClick={() => setIsColdStart(!isColdStart)}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            isColdStart
              ? 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-lg shadow-rose-950/40'
              : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-sky-400'
          }`}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isColdStart ? 'animate-spin' : ''}`} />
          <span>{isColdStart ? 'Cold-Start Mode: ACTIVE (n=0)' : 'Normal Mode: ACTIVE'}</span>
        </button>
      </div>

      {/* 4 Interactive Source Stream Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        {/* Module 1 */}
        <div className="glass-card p-4 rounded-xl border border-sky-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono-code text-sky-400 font-bold">MODULE 1</span>
            <span className="text-xs font-mono-code font-extrabold text-sky-400">{weights.content}%</span>
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Content-Based TF-IDF</h4>
          <p className="text-[10px] text-slate-400 mb-2">5,000-D sparse lexical space with doubled genre taxonomy weights.</p>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-sky-400 h-full rounded-full transition-all duration-500" style={{ width: `${weights.content}%` }}></div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="glass-card p-4 rounded-xl border border-purple-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono-code text-purple-400 font-bold">MODULE 2</span>
            <span className="text-xs font-mono-code font-extrabold text-purple-400">{weights.collab}%</span>
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Collaborative SVD</h4>
          <p className="text-[10px] text-slate-400 mb-2">30-factor latent matrix decomposition across 100,836 ratings.</p>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-purple-400 h-full rounded-full transition-all duration-500" style={{ width: `${weights.collab}%` }}></div>
          </div>
        </div>

        {/* Module 3 */}
        <div className="glass-card p-4 rounded-xl border border-amber-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono-code text-amber-400 font-bold">MODULE 3</span>
            <span className="text-xs font-mono-code font-extrabold text-amber-400">{weights.genre}%</span>
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Genre Affinity Vector</h4>
          <p className="text-[10px] text-slate-400 mb-2">Dynamic real-time user selection matching active discovery intent.</p>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full rounded-full transition-all duration-500" style={{ width: `${weights.genre}%` }}></div>
          </div>
        </div>

        {/* Module 4 */}
        <div className="glass-card p-4 rounded-xl border border-emerald-500/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono-code text-emerald-400 font-bold">MODULE 4</span>
            <span className="text-xs font-mono-code font-extrabold text-emerald-400">{weights.quality}%</span>
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Bayesian Quality (WR)</h4>
          <p className="text-[10px] text-slate-400 mb-2">Prior-weighted rating regression model with m=30 threshold, C=6.54.</p>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${weights.quality}%` }}></div>
          </div>
        </div>
      </div>

      {/* Central 3D Convergence Formula Container */}
      <div className="glass-card p-4 rounded-2xl border border-sky-400/50 mb-4 text-center">
        <div className="text-[11px] font-mono-code text-sky-400 font-bold uppercase mb-1">
          ✦  OFFICIAL PRODUCTION HYBRID FORMULATION  ✦
        </div>

        <div className="font-mono-code text-sm md:text-base font-extrabold text-white tracking-wide mb-1.5">
          Hybrid_Score(u, m) = {weights.content/100}·S_content(m) + {weights.collab/100}·S_collab(u, m) + {weights.genre/100}·S_genre(u, m) + {weights.quality/100}·S_quality(m)
        </div>

        <div className="text-xs font-mono-code text-amber-300">
          where Bayesian Regularizer S_quality(m) = WR = (v / (v + 30))·R + (30 / (v + 30))·6.54
        </div>
      </div>

      {/* Bottom 2 Pillars: Dynamic Cold Start & Explainable AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-sky-500/30">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Dynamic Cold-Start Adaptation</h4>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            When user ratings n = 0, the system automatically detects cold-start state and dynamically adjusts weights: Content Stream switches to 70% and Bayesian Prior switches to 30%, completely bypassing uninitialized collaborative factors.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-purple-500/30">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Explainable AI (XAI) Guarantee</h4>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Every recommended card displays genuine algorithmic rationale (e.g., 'Recommended because you liked Interstellar & sci-fi themes' or '88% match based on 30-factor collaborative affinity'), preventing black-box skepticism.
          </p>
        </div>
      </div>
    </div>
  );
}
