import React, { useState } from 'react';
import { Network, Monitor, Server, Cpu, Database, ArrowRight } from 'lucide-react';

export default function Section06Architecture() {
  const [activeTier, setActiveTier] = useState(0);

  const tiers = [
    {
      num: "TIER 1",
      name: "Presentation & Discovery Layer",
      host: "Client Browser (GitHub Pages)",
      icon: <Monitor className="w-5 h-5 text-sky-400" />,
      color: "border-sky-500/40 text-sky-400",
      desc: "Executes 100% inside client browser using vanilla ES6+. Renders dynamic hero carousel, mood matrix, Trie prefix search, personal watchlist, and Chart.js metrics modals in <5ms.",
      points: [
        "Sub-millisecond prefix Trie autocomplete search across 10,742 titles",
        "Stateful localStorage library persisting Watchlist & 5-Star ratings",
        "Interactive 8-state emotional mood matrix vector dispatch"
      ]
    },
    {
      num: "TIER 2",
      name: "REST Microservice Gateway",
      host: "Python 3.13 Flask Layer",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/40 text-purple-400",
      desc: "Exposes structured REST endpoints (/api/recommendations, /api/popular, /api/mood, /api/search). Implements CORS headers, input sanitization, and session state management.",
      points: [
        "Microsecond JSON response serialization via Joblib memory mapping",
        "Deterministic regex NLP conversational tokenizer gateway",
        "Dynamic query routing and parameter constraint validation"
      ]
    },
    {
      num: "TIER 3",
      name: "AI & Machine Learning Core",
      host: "Scikit-learn & Mathematical Models",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/40 text-amber-400",
      desc: "Houses offline trained Scikit-learn models (TF-IDF 5000-D cosine matrix + 30-factor TruncatedSVD latent matrices). Executes dynamic hybrid weighting and explainability generation.",
      points: [
        "TruncatedSVD 30-factor latent dot product prediction (RMSE 0.9255)",
        "TF-IDF sparse feature matrix with doubled genre taxonomy weights",
        "Bayesian Weighted Rating (WR) prior regularizer (m=30, C=6.54)"
      ]
    },
    {
      num: "TIER 4",
      name: "Data Storage & Cloud Repositories",
      host: "TMDB API v3 & SQLite3 DB",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/40 text-emerald-400",
      desc: "Maintains 10,742 movies, 100,836 ratings, SQLite3 user database, and automated bidirectional TMDB API caching for theatrical posters, backdrops, and verified cast portraits.",
      points: [
        "MovieLens 100K benchmark corpus + 1,000+ Indian cinema catalog",
        "High-resolution TMDB image CDN poster and avatar proxy caching",
        "Zero-latency precompiled JSON similarity indices for static host"
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-5">
        <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Network className="w-3.5 h-3.5 text-sky-400" />
          // 06 • ARCHITECTURAL BLUEPRINT
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          CinemaAI High-Level System Architecture
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Decoupled multi-tier pipeline supporting dual-mode execution (static client CDN vs Flask REST microservice)
        </p>
      </div>

      {/* Main Grid: Left Monitor Screenshot + Right Interactive Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left: Studio Monitor showing Fig 4.1 Architecture Diagram */}
        <div className="md:col-span-6 glass-card p-3 rounded-2xl flex flex-col justify-between border border-sky-500/30">
          <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <img 
              src="/assets/studio/mon_arch.png" 
              alt="System Architecture Diagram" 
              className="w-full h-auto object-contain rounded-lg"
              onError={(e) => {
                e.target.src = "/assets/CinemaAI_Diagrams/Fig4_1_System_Architecture.png";
              }}
            />
          </div>
          <div className="p-2.5 flex items-center justify-between text-[11px] text-slate-300">
            <span className="font-mono-code text-sky-400">Fig 4.1 System Architecture Blueprint</span>
            <span className="text-slate-400">Decoupled Clean Architecture</span>
          </div>
        </div>

        {/* Right: 4 Interactive Tiers */}
        <div className="md:col-span-6 flex flex-col justify-between gap-2.5">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTier(idx)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                activeTier === idx
                  ? 'bg-slate-900/95 border-sky-400 shadow-lg shadow-sky-950/40 scale-[1.01]'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-[11px] font-bold text-sky-400">{t.num}</span>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                </div>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                  {t.host}
                </span>
              </div>

              <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">
                {t.desc}
              </p>

              {activeTier === idx && (
                <ul className="space-y-1 pt-2 border-t border-slate-800/80 text-[10px] text-slate-300">
                  {t.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <ArrowRight className="w-3 h-3 text-sky-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
