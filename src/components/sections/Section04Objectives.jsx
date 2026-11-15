import React, { useState } from 'react';
import { Target, GitMerge, Calculator, CheckCircle2, MessageSquareCode, Globe } from 'lucide-react';

export default function Section04Objectives() {
  const [selectedObj, setSelectedObj] = useState(0);

  const objectives = [
    {
      num: "01",
      title: "DUAL-STREAM HYBRID ENGINE",
      sub: "Harmonize Content TF-IDF & TruncatedSVD",
      icon: <GitMerge className="w-5 h-5 text-sky-400" />,
      color: "border-sky-500/40 text-sky-400",
      desc: "Synthesize Content-Based lexical TF-IDF vectorization with 30-factor Collaborative TruncatedSVD Matrix Factorization into a dynamic linear ensemble that mitigates cold-start vulnerabilities while preserving serendipity.",
      details: "Weight allocation: 40% Content + 35% Collaborative SVD + 15% Genre Intent + 10% Bayesian Quality.",
      metric: "Dynamic Linear Ensemble"
    },
    {
      num: "02",
      title: "BAYESIAN QUALITY SCORING",
      sub: "Sample-Size Regularization with WR Prior",
      icon: <Calculator className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/40 text-purple-400",
      desc: "Formulate and embed a Bayesian Weighted Rating (WR) metric (m=30, C=6.54) that regresses sparse items toward the global collection mean, eliminating popularity skew and false highs.",
      details: "Formulation: WR = (v / (v + 30)) * R + (30 / (v + 30)) * 6.54. Guarantees statistical validity across all 10,742 titles.",
      metric: "m=30, C=6.54 Prior"
    },
    {
      num: "03",
      title: "VERIFIED METADATA PIPELINE",
      sub: "TMDB API v3 Full Real-Time Integration",
      icon: <CheckCircle2 className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/40 text-amber-400",
      desc: "Establish bidirectional connection with The Movie Database (TMDB) REST API to retrieve verified directors, authentic star cast portraits, theatrical backdrops, and official community voting volumes.",
      details: "Eliminates AI hallucinations and provides verified cultural attribution for 1,000+ Indian cinema masterpieces.",
      metric: "100% Verified Credits"
    },
    {
      num: "04",
      title: "COGNITIVE MULTI-MODAL DISCOVERY",
      sub: "8 Emotional Moods + Sub-5ms Prefix Trie",
      icon: <MessageSquareCode className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/40 text-emerald-400",
      desc: "Develop an 8-state emotional mood matrix, client-side diacritic-insensitive Trie search (<5ms), and a conversational NLP assistant for natural prompt-based recommendation without cloud latency.",
      details: "Supports queries like 'Suggest mind-bending psychological thrillers' with instant regex tokenization.",
      metric: "<5ms Search & NLP"
    },
    {
      num: "05",
      title: "ZERO-LATENCY HYBRID DEPLOYMENT",
      sub: "100% Offline Static Client on GitHub Pages",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      color: "border-indigo-500/40 text-indigo-400",
      desc: "Deploy a static client running on GitHub Pages capable of client-side similarity calculations alongside an optional Python 3.13 Flask RESTful microservice backend with zero monthly hosting costs.",
      details: "Dual-mode deployment: static client CDN (0ms latency, 100% offline) or containerized Flask microservice.",
      metric: "GitHub Pages Native"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-6">
        <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Target className="w-3.5 h-3.5 text-sky-400" />
          // 04 • STRATEGIC GOALS & CORE MISSION
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Architectural Objectives & Engineering Deliverables
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Five core engineering milestones designed to bridge mathematical precision and user discovery
        </p>
      </div>

      {/* 5 Interactive 3D Objective Modules */}
      <div className="space-y-3">
        {objectives.map((obj, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedObj(idx)}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
              selectedObj === idx
                ? 'bg-slate-900/90 border-sky-400 shadow-lg shadow-sky-950/40 scale-[1.01]'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                {obj.icon}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-xs font-bold text-sky-400">{obj.num}</span>
                  <h3 className="text-sm font-bold text-white tracking-wide">{obj.title}</h3>
                  <span className="text-xs font-mono-code text-slate-400 hidden md:inline">— {obj.sub}</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-normal max-w-3xl">
                  {selectedObj === idx ? `${obj.desc} ${obj.details}` : obj.desc}
                </p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0 pl-4">
              <span className="text-[10px] font-mono-code uppercase text-slate-500 font-semibold">Target Spec</span>
              <span className="text-xs font-mono-code font-bold text-amber-400">{obj.metric}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
