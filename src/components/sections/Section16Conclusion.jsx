import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  UserCheck, 
  Github, 
  Star,
  Film
} from 'lucide-react';

export default function Section16Conclusion() {
  // Fire celebratory confetti on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#7000ff', '#ff007a', '#ffd700']
      });
    } catch (e) {
      // Fallback if canvas-confetti is not loaded
    }
  }, []);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#00f0ff', '#7000ff', '#ff007a', '#ffd700']
      });
    } catch (e) {}
  };

  const teamMembers = [
    {
      name: 'K ROHITH',
      roll: '10',
      role: 'Lead Architect & AI/ML Engineer',
      domain: 'SVD Matrix Factorization • Hybrid Fusion Engine',
      badge: 'Team Lead'
    },
    {
      name: 'K VISHNU TEJA',
      roll: '40',
      role: 'Data Systems & NLP Specialist',
      domain: 'Dataset Integration • Bayesian Prior Formulation',
      badge: 'Data & NLP'
    },
    {
      name: 'N NIKITH REDDY',
      roll: '63',
      role: 'Full-Stack & Systems Engineer',
      domain: 'Flask REST API • Client UI & Automated Testing',
      badge: 'Systems & Web'
    }
  ];

  const keyAchievements = [
    { label: 'Catalog Scale', value: '10,742 Titles', detail: 'MovieLens + 1,000+ Indian Cinema' },
    { label: 'Predictive Accuracy', value: '0.9255 RMSE', detail: 'Outperforms standalone SVD (0.9850)' },
    { label: 'Quality Assurance', value: '25/25 Tests', detail: '100% assertion pass in 0.370s' },
    { label: 'Latency Efficiency', value: '< 100ms', detail: 'Instant client & API recommendation' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-2 text-center">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-400/40 text-sky-300 text-xs font-mono-code mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
        <span>Capstone Defense Complete • B.Tech CSE (AI & ML)</span>
      </div>

      {/* Hero Headline */}
      <h2 className="text-3xl lg:text-4xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-indigo-300 tracking-tight mb-2">
        CinemaAI: Mission Accomplished
      </h2>
      <p className="text-xs lg:text-sm text-slate-300 max-w-2xl mx-auto mb-5 leading-relaxed">
        A mathematically rigorous, culturally inclusive, explainable recommendation ecosystem designed to eliminate choice paralysis.
      </p>

      {/* 4 Key Achievement Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-6">
        {keyAchievements.map((item, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg text-left">
            <span className="text-[10px] font-mono-code uppercase font-semibold text-slate-400 block mb-0.5">
              {item.label}
            </span>
            <div className="text-base lg:text-lg font-orbitron font-bold text-sky-300">
              {item.value}
            </div>
            <span className="text-[11px] text-slate-400 block truncate">
              {item.detail}
            </span>
          </div>
        ))}
      </div>

      {/* 3 Team Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
        {teamMembers.map((member, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-2xl bg-slate-950/90 border border-sky-500/30 hover:border-sky-400 transition-all shadow-xl text-left relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-500/20 font-bold">
                ROLL NO: {member.roll}
              </span>
              <span className="text-[10px] font-mono-code text-slate-400">
                {member.badge}
              </span>
            </div>

            <h3 className="text-base font-orbitron font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
              {member.name}
            </h3>
            <span className="text-xs text-amber-300/90 font-medium block mb-1.5">
              {member.role}
            </span>
            <p className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 mt-2 leading-relaxed">
              {member.domain}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Actions & Viva Ready Panel */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
        <button
          onClick={triggerConfetti}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-slate-950 font-orbitron font-bold text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Award className="w-4 h-4 text-slate-950" />
          <span>Celebrate Project Success 🎉</span>
        </button>

        <a
          href="https://kotarohith08-byte.github.io/Movie-Suggestions/"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 border border-sky-500/40 hover:border-sky-400 text-sky-300 text-xs font-mono-code font-bold transition-all flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Open Live Web Application</span>
        </a>
      </div>

      <div className="mt-4 text-[11px] font-mono-code text-slate-500 flex items-center justify-center gap-2">
        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
        <span>Open for Faculty Evaluation & Viva Q&A Discussion</span>
      </div>
    </div>
  );
}
