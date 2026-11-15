import React from 'react';
import { User, Code, Database, Layout, BookOpen, GraduationCap, Award, ShieldCheck } from 'lucide-react';

export default function Section02Team() {
  const members = [
    {
      name: "K ROHITH",
      roll: "Roll No: 10",
      role: "Lead Architect & AI/ML Engineer",
      border: "border-sky-500/40",
      badgeCol: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      icon: <Code className="w-5 h-5 text-sky-400" />,
      bullets: [
        "Formulated Tri-Core Hybrid Algorithm dynamic linear ensemble",
        "Engineered TruncatedSVD 30-factor latent matrix factorization",
        "Designed Bayesian Weighted Rating (WR) prior regularizer (m=30, C=6.54)",
        "Built TMDB v3 REST API metadata ingestion pipeline & poster cache",
        "Architected GitHub Pages static zero-latency client deployment"
      ],
      skills: ["Python 3.13", "Scikit-learn", "SVD", "TF-IDF", "Math Modeling"]
    },
    {
      name: "K VISHNU TEJA",
      roll: "Roll No: 40",
      role: "Data Systems & NLP Specialist",
      border: "border-purple-500/40",
      badgeCol: "text-purple-300 bg-purple-500/10 border-purple-500/30",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      bullets: [
        "Curated MovieLens 100K benchmark (100,836 ratings across 610 users)",
        "Curated 1,000+ Indian cinema titles (Tollywood: 245, Bollywood: 340, Kollywood: 415)",
        "Implemented client-side deterministic regex NLP intent parser (<3ms)",
        "Executed automated 25-test unit suite with 100% pass rate in 0.370s",
        "Validated data schemas, rating constraints, and edge boundary safety"
      ],
      skills: ["Pandas", "NumPy", "NLP Tokenization", "Data ETL", "Automated Testing"]
    },
    {
      name: "N NIKITH REDDY",
      roll: "Roll No: 63",
      role: "Full-Stack & Systems Engineer",
      border: "border-indigo-500/40",
      badgeCol: "text-indigo-300 bg-indigo-500/10 border-indigo-500/30",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      bullets: [
        "Engineered cinematic dark glassmorphism UI with zero CSS frameworks",
        "Developed sub-5ms client-side prefix Trie search autocomplete",
        "Designed Chart.js 4.4 interactive evaluation analytics modal suite",
        "Configured Flask 3.0+ REST microservice backend & routes",
        "Implemented local storage Watchlist, Favourites & 5-Star state management"
      ],
      skills: ["Vanilla ES6+ JS", "CSS3 Glass", "Chart.js", "Flask REST API"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-4 md:px-8 max-w-6xl mx-auto select-none z-10 py-2">
      {/* Header with Academic Subject & Department Metadata */}
      <div className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono-code font-bold uppercase tracking-wider">
              Slide 02 / 16 • Project Authors & Academic Credentials
            </span>
            <span className="text-xs text-slate-400 font-mono-code hidden sm:inline">Engineering Team</span>
          </div>

          {/* Academic Subject Details Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-950/70 border border-sky-500/30 text-xs font-mono-code text-sky-300">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span><strong>Subject:</strong> Major Capstone Project (Course Code: CSE499 / AI499)</span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-orbitron font-extrabold text-white tracking-tight">
          Project Team & Technical Division
        </h2>
        
        {/* Academic Affiliation Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mt-1">
          <span className="flex items-center gap-1 text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            Department of Computer Science & Engineering (Artificial Intelligence & Machine Learning)
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-amber-300/90 font-mono-code font-semibold">
            B.Tech Final Year Evaluation • Academic Year 2025–2026
          </span>
        </div>
      </div>

      {/* 3 Profile Cards in Perspective */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
        {members.map((m, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-2xl p-4 border ${m.border} flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-xl relative overflow-hidden`}
          >
            {/* Top Row: Icon + Roll Number */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/60">
                  {m.icon}
                </div>
                <span className={`text-[11px] font-mono-code px-2.5 py-0.5 rounded-full border font-bold ${m.badgeCol}`}>
                  {m.roll}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="font-orbitron text-lg font-bold text-white tracking-wide mb-0.5">
                {m.name}
              </h3>
              <p className="text-xs font-semibold text-slate-300 mb-3 pb-2 border-b border-slate-800">
                {m.role}
              </p>

              {/* Key Contributions */}
              <ul className="space-y-1.5 mb-3 text-[11px] text-slate-300 leading-snug">
                {m.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-1.5">
                    <span className="text-sky-400 shrink-0 font-bold mt-0.5">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Tags */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
              {m.skills.map((s, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Institutional Footer */}
      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code">
        <div className="flex items-center gap-2 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Evaluation Status: <strong>Capstone Phase-II Final University Viva Defense</strong></span>
        </div>
        <div className="text-slate-400">
          Supervision: <span className="text-slate-200">Department Faculty Guide & Institutional Review Board</span>
        </div>
      </div>
    </div>
  );
}
