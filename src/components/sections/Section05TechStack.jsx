import React, { useState } from 'react';
import { Layers, Monitor, Server, Cpu, Cloud } from 'lucide-react';

export default function Section05TechStack() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: "TIER 1",
      name: "FRONTEND PRESENTATION LAYER",
      desc: "Responsive, zero-dependency streaming interface built with modern vanilla web standards",
      icon: <Monitor className="w-5 h-5 text-sky-400" />,
      color: "border-sky-500/40 text-sky-400",
      techs: [
        { name: "HTML5 Semantic Canvas", role: "Accessible cinematic layout, hardware-accelerated grid" },
        { name: "CSS3 Glassmorphism", role: "Deep blur backdrops, metallic borders, 100% responsive dark mode" },
        { name: "Vanilla ES6+ JavaScript", role: "Zero framework bloat, client-side Trie search autocomplete (<5ms)" },
        { name: "Chart.js v4.4.1", role: "Client-side interactive HTML5 canvas charts for model metrics" },
        { name: "Lucide SVG Icon Suite", role: "Crisp vector iconography rendered natively in DOM" },
      ]
    },
    {
      id: "TIER 2",
      name: "API & APPLICATION MICROSERVICE",
      desc: "High-throughput asynchronous Python microservice handling recommendations and cache routing",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/40 text-purple-400",
      techs: [
        { name: "Python 3.13 Runtime", role: "Latest optimized CPython interpreter with high-speed memory management" },
        { name: "Flask v3.0+ Framework", role: "Lightweight WSGI microservice web routing exposing RESTful endpoints" },
        { name: "Joblib Serialization v1.3+", role: "Sub-millisecond memory-mapped loading of trained similarity matrices" },
        { name: "SQLite3 Relational DB", role: "Zero-config embedded database storing persistent ratings and watchlist" },
        { name: "Gunicorn WSGI Server", role: "Production multi-worker deployment layer for backend containerization" },
      ]
    },
    {
      id: "TIER 3",
      name: "AI, MACHINE LEARNING & MATHEMATICS",
      desc: "Mathematical feature vectorization, low-rank factorization, and Bayesian regression",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/40 text-amber-400",
      techs: [
        { name: "Scikit-learn v1.4+", role: "TruncatedSVD matrix factorization, TfidfVectorizer, cosine_similarity" },
        { name: "NumPy v1.26+ & Pandas v2.0+", role: "Vectorized matrix linear algebra and high-speed dataframe manipulation" },
        { name: "30-Factor Latent SVD", role: "Singular value decomposition of sparse User x Movie rating matrix" },
        { name: "TF-IDF 5000-D Space", role: "Sublinear term frequency scaling with genre weight doubling" },
        { name: "Bayesian Regularization", role: "Prior-weighted rating regression model with m=30 threshold" },
      ]
    },
    {
      id: "TIER 4",
      name: "DATA REPOSITORIES & CLOUD INFRASTRUCTURE",
      desc: "Curated dual-market benchmark dataset and authentic real-time theatrical metadata",
      icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/40 text-emerald-400",
      techs: [
        { name: "MovieLens 100K Dataset", role: "100,836 ratings, 9,742 movies across 610 active benchmark users" },
        { name: "1,000+ Indian Cinema Catalog", role: "Curated masterpieces across Kollywood (415), Bollywood (340), Tollywood (245)" },
        { name: "TMDB API v3 REST Service", role: "Verified director names, authentic star cast avatars, theatrical backdrops" },
        { name: "GitHub Pages Static CDN", role: "Zero-latency worldwide global distribution with 0 server maintenance" },
        { name: "JSON Vector Cache", role: "Precompiled similarity index enabling 100% offline recommendation" },
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-6">
        <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          // 05 • SYSTEM ECOSYSTEM & STACK
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Multi-Tiered Production Technology Ecosystem
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Harmonious synergy between modern frontend engineering, machine learning mathematics, and cloud APIs
        </p>
      </div>

      {/* Layer Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {layers.map((l, idx) => (
          <button
            key={idx}
            onClick={() => setActiveLayer(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeLayer === idx
                ? 'bg-slate-900 border-sky-400 text-white shadow-lg shadow-sky-950/40'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {l.icon}
              <span className="font-mono-code text-[11px] font-bold text-sky-400">{l.id}</span>
            </div>
            <div className="text-xs font-bold truncate">{l.name.split(':')[0]}</div>
          </button>
        ))}
      </div>

      {/* Active Layer Details Card */}
      <div className="glass-card p-6 rounded-2xl border border-sky-500/30">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono-code text-sky-400 font-bold uppercase tracking-wider block">
              {layers[activeLayer].id} • Architecture Layer
            </span>
            <h3 className="text-lg font-bold text-white">{layers[activeLayer].name}</h3>
          </div>
          <p className="text-xs text-slate-300 max-w-md text-right hidden md:block">
            {layers[activeLayer].desc}
          </p>
        </div>

        {/* 5 Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {layers[activeLayer].techs.map((t, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-sky-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block mb-1.5"></span>
                <h4 className="text-xs font-bold text-white mb-1.5">{t.name}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{t.role}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-900 text-[9px] font-mono-code text-sky-400 font-semibold uppercase">
                Verified Module
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
