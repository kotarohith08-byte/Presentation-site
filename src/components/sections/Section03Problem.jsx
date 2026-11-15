import React, { useState } from 'react';
import { AlertTriangle, Clock, Layers, Star, Globe2, EyeOff } from 'lucide-react';

export default function Section03Problem() {
  const [activeTab, setActiveTab] = useState(0);

  const challenges = [
    {
      id: "01",
      title: "Decision Fatigue & Choice Paralysis",
      subtitle: "18 to 24 Minutes Lost per Session",
      icon: <Clock className="w-5 h-5 text-rose-400" />,
      color: "border-rose-500/40 text-rose-400",
      desc: "Streaming platforms host over 100,000 films, yet viewers spend up to 24 minutes browsing unstructured thumbnails before abandoning playback or settling for repetitive titles.",
      stat: "24 MINS",
      statLabel: "Average Search Friction",
    },
    {
      id: "02",
      title: "Collaborative Cold-Start Void",
      subtitle: "Sparse History Breakdown",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      color: "border-sky-500/40 text-sky-400",
      desc: "Pure collaborative filtering algorithms depend on dense historical ratings. For newly registered users or obscure indie films with zero interactions, recommendation algorithms yield complete failure.",
      stat: "0 RATINGS",
      statLabel: "Algorithm Breakdown Point",
    },
    {
      id: "03",
      title: "Popularity Bias & Rating Distortion",
      subtitle: "Unweighted Mean Distortions",
      icon: <Star className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/40 text-amber-400",
      desc: "Commercial aggregators display arithmetic means where an obscure title with three 10/10 reviews trivially outranks historic masterpieces evaluated by 25,000 verified critics.",
      stat: "3 VOTES > 25K",
      statLabel: "Unweighted Ranking Skew",
    },
    {
      id: "04",
      title: "Regional & Indian Cinema Neglect",
      subtitle: "Western Benchmark Monoculture",
      icon: <Globe2 className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/40 text-purple-400",
      desc: "Standard benchmark datasets (such as raw MovieLens) completely ignore Indian cinema, resulting in missing posters, omitted directors, and fabricated cast credits.",
      stat: "1,000+ TITLES",
      statLabel: "Overlooked Masterpieces",
    },
    {
      id: "05",
      title: "The Opaque Black-Box Paradox",
      subtitle: "Zero Algorithmic Explainability",
      icon: <EyeOff className="w-5 h-5 text-indigo-400" />,
      color: "border-indigo-500/40 text-indigo-400",
      desc: "Users distrust modern recommendation engines when models offer no transparent explanation. Opaque systems breed skepticism and destroy long-term viewer engagement.",
      stat: "0% INSIGHT",
      statLabel: "Opaque Black-Box Models",
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-6">
        <div className="text-xs font-mono-code text-rose-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          // 03 • INDUSTRY ANALYSIS & BOTTLENECKS
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          The Movie Discovery Paradox: Why Current Systems Fail
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Five critical algorithmic vulnerabilities causing decision fatigue and recommendation distortion
        </p>
      </div>

      {/* Main Grid: Left interactive simulator + Right cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left: 24-minute browsing paralysis gauge & visual card */}
        <div className="md:col-span-5 glass-card-coral p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold uppercase">
                Critical Friction
              </span>
              <Clock className="w-4 h-4 text-rose-400" />
            </div>

            <h3 className="text-base font-bold text-white mb-2">The 24-Minute Search Abyss</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Empirical audience research reveals viewers spend an average of 18–24 minutes scrolling before selecting a film, leading to user fatigue, high abandonment rates, and dissatisfaction.
            </p>

            {/* Circular Visual / Progress Bar */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-500/30 mb-4 text-center">
              <div className="font-mono-code text-4xl font-extrabold text-rose-400 mb-1">
                {challenges[activeTab].stat}
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {challenges[activeTab].statLabel}
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div 
                  className="bg-rose-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(activeTab + 1) * 20}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center justify-between pt-2 border-t border-rose-950/40">
            <span>Status: Structural Flaw</span>
            <span className="font-mono-code text-rose-300">CinemaAI Solution: Instant Tri-Core Hybrid</span>
          </div>
        </div>

        {/* Right: Interactive 5 Challenge Cards */}
        <div className="md:col-span-7 flex flex-col justify-between gap-2.5">
          {challenges.map((c, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                activeTab === idx 
                  ? 'bg-slate-900/90 border-rose-500/60 shadow-lg shadow-rose-950/30 scale-[1.01]' 
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{c.icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-[11px] font-bold text-slate-500">{c.id}</span>
                    <h4 className="text-xs font-bold text-white">{c.title}</h4>
                    <span className="text-[10px] font-mono-code text-slate-400 hidden sm:inline">({c.subtitle})</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-normal max-w-lg">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
