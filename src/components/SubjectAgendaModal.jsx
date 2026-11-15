import React from 'react';
import { X, BookOpen, GraduationCap, CheckCircle2, ArrowRight, Layers, Cpu, Award } from 'lucide-react';

export default function SubjectAgendaModal({ isOpen, onClose, onJumpToSlide, currentSlide }) {
  if (!isOpen) return null;

  const subjectModules = [
    {
      module: "Module 01",
      title: "Problem Formulation & Academic Scope",
      slides: [
        { num: 1, name: "Cinematic Title & Credentials", slideIdx: 0 },
        { num: 2, name: "Research Team & Technical Division", slideIdx: 1 },
        { num: 3, name: "Problem Statement: Choice Paralysis", slideIdx: 2 },
        { num: 4, name: "Project Objectives & Criteria", slideIdx: 3 }
      ],
      color: "sky"
    },
    {
      module: "Module 02",
      title: "System Architecture & Engineering Stack",
      slides: [
        { num: 5, name: "4-Tier Modern Technology Stack", slideIdx: 4 },
        { num: 6, name: "End-to-End System Architecture (Fig 4.1)", slideIdx: 5 }
      ],
      color: "indigo"
    },
    {
      module: "Module 03",
      title: "Mathematical Foundations & Hybrid Convergence",
      slides: [
        { num: 7, name: "Mathematical Core: TF-IDF, SVD & Bayesian WR", slideIdx: 6 },
        { num: 8, name: "Tri-Core Hybrid Fusion Formula & Cold-Start", slideIdx: 7 }
      ],
      color: "purple"
    },
    {
      module: "Module 04",
      title: "Conversational NLP & Multilingual Dataset",
      slides: [
        { num: 9, name: "Live Website Interface & 3D Showcase", slideIdx: 8 },
        { num: 10, name: "5-Stage Deterministic NLP Intent Assistant", slideIdx: 9 },
        { num: 11, name: "Dataset Engineering: 10,742 Multilingual Films", slideIdx: 10 }
      ],
      color: "emerald"
    },
    {
      module: "Module 05",
      title: "Validation, Testing, Trade-Offs & Future Vision",
      slides: [
        { num: 12, name: "Quantitative Benchmarks (0.9255 RMSE)", slideIdx: 11 },
        { num: 13, name: "Automated Testing Dashboard (25/25 Tests)", slideIdx: 12 },
        { num: 14, name: "Advantages vs Known Limitations & Mitigations", slideIdx: 13 },
        { num: 15, name: "Future Research Roadmap (Two-Tower, Bandits)", slideIdx: 14 },
        { num: 16, name: "Project Conclusion & Capstone Viva Defense", slideIdx: 15 }
      ],
      color: "amber"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl bg-slate-950 border border-sky-500/40 rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-orbitron font-extrabold text-slate-100">
                Academic Subject Outline & Presentation Agenda
              </h2>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
                SYLLABUS
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Department of Computer Science & Engineering (Artificial Intelligence & Machine Learning)
            </p>
          </div>
        </div>

        {/* Academic Course Information Card */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/30 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono-code">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Subject / Course</span>
            <span className="text-sky-300 font-bold">Major Capstone Project</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Course Code</span>
            <span className="text-purple-300 font-bold">CSE499 / AI499</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Degree & Specialization</span>
            <span className="text-emerald-300 font-bold">B.Tech CSE (AI & ML)</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Evaluation Window</span>
            <span className="text-amber-300 font-bold">Academic Year 2025–2026</span>
          </div>
        </div>

        {/* 5 Modules List */}
        <div className="space-y-4">
          {subjectModules.map((mod, mIdx) => (
            <div key={mIdx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono-code font-bold text-sky-400 uppercase tracking-wider">
                    {mod.module}:
                  </span>
                  <h3 className="text-sm font-orbitron font-bold text-slate-200">
                    {mod.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono-code text-slate-500">
                  {mod.slides.length} Topic Slides
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mod.slides.map((s, sIdx) => {
                  const isCurrent = currentSlide === s.slideIdx;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        onJumpToSlide(s.slideIdx);
                        onClose();
                      }}
                      className={`p-2 rounded-lg border text-left text-xs flex items-center justify-between transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-sky-500/20 border-sky-400 text-sky-200 font-bold'
                          : 'bg-slate-950/80 border-slate-800/80 text-slate-300 hover:border-slate-600 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="font-mono-code text-[11px] text-sky-400 font-bold">
                          {String(s.num).padStart(2, '0')}.
                        </span>
                        <span className="truncate">{s.name}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Click any topic to navigate directly to its presentation slide.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 hover:text-white transition-colors"
          >
            Close Subject Outline (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
