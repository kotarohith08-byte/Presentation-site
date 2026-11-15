import React, { useState } from 'react';
import { ExternalLink, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Section09LiveDemo() {
  const [activeView, setActiveView] = useState(0);

  const views = [
    {
      id: "hero",
      title: "Hero Spotlight",
      tag: "Dynamic Streaming Hero",
      image: "/assets/studio/mon_hero.png",
      fallback: "/assets/CinemaAI_Screenshots/Fig6_1_Hero_Spotlight_Maharaja.png",
      desc: "Featuring 'Maharaja' (2024), live TMDB rating badge, high-res backdrops, and direct streaming actions."
    },
    {
      id: "trending",
      title: "Trending Carousel",
      tag: "Top 10 Masterpieces",
      image: "/assets/studio/mon_trending.png",
      fallback: "/assets/CinemaAI_Screenshots/Fig6_2_Top10_Trending_Today.png",
      desc: "Curated carousel ranking global and regional masterpieces with Bayesian WR sorting."
    },
    {
      id: "indian",
      title: "Indian Cinema",
      tag: "1,000+ Curated Titles",
      image: "/assets/studio/mon_indian.png",
      fallback: "/assets/CinemaAI_Screenshots/Fig6_6_Indian_Cinema_Masterpieces.png",
      desc: "Dedicated regional showcase spanning Tollywood (245), Bollywood (340), and Kollywood (415)."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Monitor className="w-3.5 h-3.5 text-sky-400" />
            // 09 • LIVE PRODUCTION INTERFACE
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            The CinemaAI Web Application Experience
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Cinematic dark UI inspired by leading streaming platforms, deployed live on GitHub Pages
          </p>
        </div>

        {/* Live Site Button */}
        <a
          href="https://kotarohith08-byte.github.io/Movie-Suggestions/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-600 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 hover:brightness-110 transition-all"
        >
          <span>Open Live Production Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Studio Monitor Mockup with Tab Switcher */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Monitor Display */}
        <div className="md:col-span-8 glass-card p-4 rounded-2xl flex flex-col justify-between border border-sky-500/30">
          <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
            <img 
              src={views[activeView].image} 
              alt={views[activeView].title} 
              className="w-full h-auto max-h-[380px] object-contain mx-auto"
              onError={(e) => {
                e.target.src = views[activeView].fallback;
              }}
            />
          </div>

          <div className="flex items-center justify-between pt-3 px-1 text-xs text-slate-300">
            <div>
              <span className="font-mono-code text-sky-400 font-bold mr-2">🔒 {views[activeView].tag}</span>
              <span className="text-slate-400">{views[activeView].desc}</span>
            </div>
            <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
              0ms Static CDN
            </span>
          </div>
        </div>

        {/* Right View Switcher & Key Features */}
        <div className="md:col-span-4 flex flex-col justify-between gap-3">
          <div className="space-y-2">
            <span className="text-[10px] font-mono-code uppercase text-slate-400 font-bold">Select Interface View</span>
            {views.map((v, idx) => (
              <div
                key={idx}
                onClick={() => setActiveView(idx)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  activeView === idx
                    ? 'bg-slate-900 border-sky-400 shadow-md shadow-sky-950/40 scale-[1.01]'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-bold text-white">{v.title}</h4>
                  <span className="text-[10px] font-mono-code text-sky-400">{v.tag}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Highlights Card */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 space-y-1.5">
            <div className="text-[10px] font-mono-code font-bold uppercase text-amber-400 mb-1">Production Highlights</div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Sub-5ms client-side prefix Trie search autocomplete</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Stateful library for Watchlist, Favourites & 5-Star ratings</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>100% responsive dark glassmorphic streaming UI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
