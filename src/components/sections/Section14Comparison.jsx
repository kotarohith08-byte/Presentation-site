import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  Layers, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Brain
} from 'lucide-react';

export default function Section14Comparison() {
  const [activeTab, setActiveTab] = useState('all');

  const advantages = [
    {
      title: 'Explainable AI (XAI) Transparency',
      desc: 'Users and evaluators see the exact mathematical composition: 40% Content, 35% SVD, 15% Genre, 10% Bayesian Quality, avoiding opaque black-box recommendations.',
      icon: Brain,
      tag: 'Interpretability'
    },
    {
      title: 'Zero Cold-Start Failure',
      desc: 'Gracefully switches to 70% TF-IDF Content + 30% Bayesian Prior when user history is empty, eliminating blank initial state failure entirely.',
      icon: Zap,
      tag: 'Robustness'
    },
    {
      title: 'Multilingual Regional Inclusivity',
      desc: '1,000+ Indian cinema titles across Tamil (415), Hindi (340), and Telugu (245) explicitly integrated into the standard MovieLens dataset.',
      icon: Sparkles,
      tag: 'Diversity'
    },
    {
      title: 'Sub-100ms Response Latency',
      desc: 'Precomputed TF-IDF cosine matrices and truncated SVD latent factor projections enable instant response times on both Flask and client static runtimes.',
      icon: TrendingUp,
      tag: 'Performance'
    }
  ];

  const limitations = [
    {
      challenge: 'SVD Offline Batch Retraining',
      desc: 'Matrix factorization latent factors require batch recomputation as new user ratings are submitted in production.',
      mitigation: 'Engineering Solution: Incremental fold-in projection for active sessions, scheduling heavy TruncatedSVD re-factoring during low-traffic batch windows.',
      icon: RefreshCw,
      tag: 'Scalability'
    },
    {
      challenge: 'Regional Cinema Rating Sparsity',
      desc: 'Niche regional films possess fewer ratings compared to global Hollywood blockbusters.',
      mitigation: 'Engineering Solution: Bayesian Weighted Rating with IMDB formula (m=30, C=6.54) regularizes sparse items toward the catalog global mean.',
      icon: Layers,
      tag: 'Data Imbalance'
    },
    {
      challenge: 'Deterministic Regex NLP Scope',
      desc: 'Keyword pattern matching struggles with deeply nested multi-clause semantic prompts.',
      mitigation: 'Engineering Solution: Dual-layer fallback to genre tokens, contextual prompt auto-suggestions, and planned integration of lightweight distilled SLMs.',
      icon: Cpu,
      tag: 'NLP Depth'
    },
    {
      challenge: 'Memory Scaling with Catalog Expansion',
      desc: 'Dense similarity matrices grow quadratically (O(N²)) as movie catalog scales beyond 50,000 titles.',
      mitigation: 'Engineering Solution: Transition to Scipy CSR sparse representations and Top-K truncated nearest neighbor inverted indexing.',
      icon: AlertTriangle,
      tag: 'Optimization'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono-code font-bold uppercase tracking-wider">
              Slide 14 / 16 • Academic Rigor & Trade-Offs
            </span>
            <span className="text-xs text-slate-400 font-mono-code hidden sm:inline">Critical Analysis</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            System Advantages vs. Known Limitations & Mitigations
          </h2>
          <p className="text-xs lg:text-sm text-slate-400 mt-1">
            An honest, engineering-grounded evaluation of algorithmic strengths and architectural solutions to real-world edge cases.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono-code">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded-lg transition-colors ${activeTab === 'all' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-400 hover:text-white'}`}
          >
            All Aspects
          </button>
          <button
            onClick={() => setActiveTab('advantages')}
            className={`px-3 py-1 rounded-lg transition-colors ${activeTab === 'advantages' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'}`}
          >
            Advantages
          </button>
          <button
            onClick={() => setActiveTab('mitigations')}
            className={`px-3 py-1 rounded-lg transition-colors ${activeTab === 'mitigations' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'}`}
          >
            Mitigations
          </button>
        </div>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Column: Strengths & Advantages */}
        {(activeTab === 'all' || activeTab === 'advantages') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-500/30">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm font-orbitron font-bold text-slate-100 uppercase tracking-wider">
                  Core Architectural Advantages
                </h3>
              </div>
              <span className="text-[11px] font-mono-code text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                4 Key Pillars
              </span>
            </div>

            <div className="space-y-2.5">
              {advantages.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 transition-all shadow-md group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-100 font-orbitron group-hover:text-emerald-300 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300/90 leading-relaxed pl-9">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Right Column: Limitations & Mitigations */}
        {(activeTab === 'all' || activeTab === 'mitigations') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-amber-500/30">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-orbitron font-bold text-slate-100 uppercase tracking-wider">
                  Limitations & Engineering Mitigations
                </h3>
              </div>
              <span className="text-[11px] font-mono-code text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                Active Mitigations
              </span>
            </div>

            <div className="space-y-2.5">
              {limitations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-amber-500/40 transition-all shadow-md group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-100 font-orbitron group-hover:text-amber-300 transition-colors">
                          {item.challenge}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-amber-950/50 text-amber-300 border border-amber-500/30">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-9 mb-2">
                      {item.desc}
                    </p>
                    <div className="ml-9 p-2 rounded-lg bg-slate-900/90 border border-amber-500/20 text-[11px] text-amber-200/90 leading-normal flex items-start gap-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item.mitigation}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
