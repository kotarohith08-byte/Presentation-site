import React, { useState } from 'react';
import { MessageSquare, Bot, User, ArrowRight, ShieldCheck, Zap, DollarSign } from 'lucide-react';

export default function Section10NLPAssistant() {
  const [activeStep, setActiveStep] = useState(4); // default full view

  const pipeline = [
    { step: "01", name: "User Prompt", detail: "\"Suggest five mind-bending psychological sci-fi movies from the 2010s\"" },
    { step: "02", name: "Regex Tokenizer", detail: "Strips filler words ('suggest', 'five', 'movies') and normalizes query" },
    { step: "03", name: "Intent Extraction", detail: "Keywords: 'mind-bending', 'psychological', 'sci-fi', '2010s' -> Genre: Sci-Fi/Mystery, Era: 2010-2019" },
    { step: "04", name: "Similarity Filter", detail: "Matches TF-IDF tokens & filters metadata bounds across 10,742 catalog" },
    { step: "05", name: "Ranked Output", detail: "Top 5 recommendations with similarity percentage and release year" },
  ];

  const recommendations = [
    { title: "Inception", year: 2010, rating: "8.8★", match: "96%", genre: "Sci-Fi / Mystery" },
    { title: "Interstellar", year: 2014, rating: "8.7★", match: "94%", genre: "Sci-Fi / Adventure" },
    { title: "Shutter Island", year: 2010, rating: "8.2★", match: "91%", genre: "Mystery / Thriller" },
    { title: "Ex Machina", year: 2014, rating: "7.7★", match: "88%", genre: "Sci-Fi / Drama" },
    { title: "Arrival", year: 2016, rating: "7.9★", match: "86%", genre: "Sci-Fi / Mystery" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-5">
        <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
          // 10 • CONVERSATIONAL DISCOVERY & NLP
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Ask CineMatch AI – Conversational NLP Assistant
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Client-side deterministic regex tokenization enabling instant, private conversational discovery without cloud API fees
        </p>
      </div>

      {/* Main Grid: Interactive Chat Simulation + Visual Workflow Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left: Chat Simulator */}
        <div className="md:col-span-6 glass-card p-4 rounded-2xl flex flex-col justify-between border border-sky-500/30">
          <div className="space-y-3">
            {/* User Message Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-sky-400" />
              </div>
              <div className="p-3 rounded-2xl rounded-tl-sm bg-slate-900 border border-slate-800 text-xs text-white max-w-md shadow-md">
                <span className="text-[10px] font-mono-code text-sky-400 font-semibold block mb-0.5">User Prompt</span>
                "Suggest five mind-bending psychological sci-fi movies from the 2010s"
              </div>
            </div>

            {/* AI Assistant Response Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-400 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-indigo-300" />
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-sm bg-slate-950/90 border border-indigo-500/40 text-xs text-slate-200 max-w-md shadow-lg shadow-indigo-950/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code text-indigo-300 font-bold">CineMatch AI Assistant</span>
                  <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Execution: 2.4ms Client-Side
                  </span>
                </div>

                <div className="space-y-1.5">
                  {recommendations.map((m, idx) => (
                    <div key={idx} className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[11px]">
                      <div>
                        <span className="font-bold text-white">{m.title}</span>
                        <span className="text-slate-400 ml-1.5">({m.year})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400 font-bold">{m.rating}</span>
                        <span className="font-mono-code text-[10px] text-sky-400 font-semibold">{m.match}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Note */}
          <div className="text-[10px] font-mono-code text-slate-400 mt-2 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span>Model: Deterministic Regex Parser</span>
            <span className="text-emerald-400">Zero Cloud API Dependency</span>
          </div>
        </div>

        {/* Right: Visual Pipeline & Technical Highlights */}
        <div className="md:col-span-6 flex flex-col justify-between gap-3">
          {/* 5-Step Pipeline */}
          <div className="glass-panel p-4 rounded-xl border border-sky-500/30">
            <span className="text-[10px] font-mono-code text-sky-400 font-bold uppercase tracking-wider block mb-2">
              Visual Execution Pipeline
            </span>

            <div className="space-y-2">
              {pipeline.map((p, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveStep(idx)}
                  className={`p-2 rounded-lg border text-xs transition-all cursor-pointer flex items-center justify-between ${
                    activeStep === idx 
                      ? 'bg-slate-900 border-sky-400 text-white' 
                      : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-[10px] font-bold text-sky-400">{p.step}</span>
                    <span className="font-bold text-slate-200">{p.name}</span>
                  </div>
                  <span className="text-[10px] font-mono-code text-slate-400 max-w-[220px] truncate">{p.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Technical Pillars */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <div className="text-[10px] font-bold text-white">&lt;3ms Latency</div>
              <p className="text-[9px] text-slate-400 mt-0.5">Runs in browser DOM</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <div className="text-[10px] font-bold text-white">100% Privacy</div>
              <p className="text-[9px] text-slate-400 mt-0.5">Zero external tracking</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <DollarSign className="w-4 h-4 text-sky-400 mx-auto mb-1" />
              <div className="text-[10px] font-bold text-white">Zero API Fees</div>
              <p className="text-[9px] text-slate-400 mt-0.5">Free from token bills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
