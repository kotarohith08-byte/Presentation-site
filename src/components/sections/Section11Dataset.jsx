import React from 'react';
import { Database, Film, Star, Users, Globe2, BarChart2 } from 'lucide-react';

export default function Section11Dataset() {
  const regionalData = [
    { name: "Kollywood (Tamil)", count: 415, share: "41.5%", color: "bg-sky-400" },
    { name: "Bollywood (Hindi)", count: 340, share: "34.0%", color: "bg-purple-400" },
    { name: "Tollywood (Telugu)", count: 245, share: "24.5%", color: "bg-amber-400" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-5">
        <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-sky-400" />
          // 11 • DATA ASSETS & DUAL-CORPUS ARCHITECTURE
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Dataset Architecture & Statistical Foundation
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Harmonizing benchmark Western collaborative data with 1,000+ curated Indian cinema masterpieces
        </p>
      </div>

      {/* 4 Main Numerical Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-5">
        <div className="glass-card p-4 rounded-xl border border-sky-500/30 text-center">
          <Film className="w-5 h-5 text-sky-400 mx-auto mb-1.5" />
          <div className="font-mono-code text-3xl font-extrabold text-white">10,742</div>
          <div className="text-xs font-bold text-sky-300 mt-0.5">TOTAL MOVIES</div>
          <p className="text-[10px] text-slate-400 mt-1">Dual-Market Unified Catalog</p>
        </div>

        <div className="glass-card p-4 rounded-xl border border-purple-500/30 text-center">
          <Star className="w-5 h-5 text-purple-400 mx-auto mb-1.5" />
          <div className="font-mono-code text-3xl font-extrabold text-white">100,836</div>
          <div className="text-xs font-bold text-purple-300 mt-0.5">VERIFIED RATINGS</div>
          <p className="text-[10px] text-slate-400 mt-1">MovieLens 100K Benchmark</p>
        </div>

        <div className="glass-card p-4 rounded-xl border border-amber-500/30 text-center">
          <Users className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
          <div className="font-mono-code text-3xl font-extrabold text-white">610</div>
          <div className="text-xs font-bold text-amber-300 mt-0.5">ACTIVE USERS</div>
          <p className="text-[10px] text-slate-400 mt-1">Dense Collaborative History</p>
        </div>

        <div className="glass-card p-4 rounded-xl border border-emerald-500/30 text-center">
          <Globe2 className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
          <div className="font-mono-code text-3xl font-extrabold text-white">1,000+</div>
          <div className="text-xs font-bold text-emerald-400 mt-0.5">INDIAN TITLES</div>
          <p className="text-[10px] text-slate-400 mt-1">Kolli, Bolli & Tollywood</p>
        </div>
      </div>

      {/* Bottom Grid: 3D Cylinders Image + Regional Cinema Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left: 3D Database Cylinders Plate */}
        <div className="md:col-span-6 glass-panel p-3 rounded-2xl border border-sky-500/30 flex items-center justify-center">
          <img 
            src="/assets/db_cylinders_3d.png" 
            alt="3D Database Architecture Cylinders" 
            className="w-full h-auto max-h-[220px] object-contain rounded-xl"
          />
        </div>

        {/* Right: Regional Indian Cinema Breakdown Bars */}
        <div className="md:col-span-6 glass-card p-4 rounded-2xl border border-purple-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono-code text-purple-300 font-bold uppercase">
                Regional Cinema Distribution (1,000 Titles)
              </span>
              <BarChart2 className="w-4 h-4 text-purple-400" />
            </div>

            <div className="space-y-3">
              {regionalData.map((r, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white">{r.name}</span>
                    <span className="font-mono-code text-amber-400 font-bold">{r.count} Titles ({r.share})</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div className={`${r.color} h-full rounded-full`} style={{ width: r.share }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-300 flex items-center justify-between">
            <span>20 Genre Tags • 8 Emotional Moods</span>
            <span className="font-mono-code text-sky-400">100% TMDB Verified Metadata</span>
          </div>
        </div>
      </div>
    </div>
  );
}
