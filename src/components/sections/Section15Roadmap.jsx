import React, { useState } from 'react';
import { 
  Milestone, 
  CheckCircle2, 
  ArrowRight, 
  BrainCircuit, 
  Cpu, 
  Sparkles, 
  Compass, 
  Radio, 
  Layers, 
  Bot, 
  Network
} from 'lucide-react';

export default function Section15Roadmap() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const roadmapPhases = [
    {
      phase: 'Phase 01',
      quarter: 'Q2–Q4 2025',
      status: 'COMPLETED & LIVE',
      statusColor: 'emerald',
      title: 'Hybrid Algorithmic Foundation',
      icon: CheckCircle2,
      tagline: 'Current University Capstone Defense Release',
      deliverables: [
        'Multi-tiered hybrid recommender (TF-IDF 0.40 + SVD 0.35 + Genre 0.15 + Bayesian 0.10)',
        '10,742 movie catalog unified with 1,000+ Indian cinema titles (Tamil, Hindi, Telugu)',
        '25/25 automated unit test coverage achieving 100% pass rate in 0.370 seconds',
        'Dual deployment on Flask Python backend & static client-side single page app'
      ],
      stack: ['Python 3.10', 'Scikit-Learn', 'Flask', 'Three.js', 'TailwindCSS'],
      metric: '0.9255 RMSE'
    },
    {
      phase: 'Phase 02',
      quarter: 'Q1–Q2 2026',
      status: 'ARCHITECTURAL DESIGN',
      statusColor: 'sky',
      title: 'Two-Tower Deep Neural Retrieval',
      icon: Network,
      tagline: 'Deep candidate generation with sub-10ms FAISS indexing',
      deliverables: [
        'User Representation Tower: Bi-LSTM / Transformer encoding past sequential watch streams',
        'Item Representation Tower: Multi-modal fusion of movie synopsis (BERT) & posters (ResNet)',
        'Embedding vector dot-product scoring running over billion-scale candidate catalogs',
        'Vector database integration (FAISS / ScaNN / Milvus) for approximate nearest neighbor lookup'
      ],
      stack: ['PyTorch', 'Hugging Face Transformers', 'FAISS', 'FastAPI'],
      metric: 'Target <15ms Latency'
    },
    {
      phase: 'Phase 03',
      quarter: 'Q3–Q4 2026',
      status: 'RESEARCH & LAB',
      statusColor: 'purple',
      title: 'Contextual Multi-Armed Bandits (RL)',
      icon: BrainCircuit,
      tagline: 'Dynamic exploration vs. exploitation to burst filter bubbles',
      deliverables: [
        'Contextual Bandit framework employing LinUCB and Thompson Sampling algorithms',
        'Real-time reward feedback updates based on user click-through rate (CTR) and watch retention',
        'Exploration allocation to high-potential indie cinema without degrading overall precision',
        'Adaptive cold-start learning that converges within 3 explicit user interactions'
      ],
      stack: ['Ray / RLlib', 'Redis In-Memory', 'Kafka Event Stream'],
      metric: '+18% Catalog Exploration'
    },
    {
      phase: 'Phase 04',
      quarter: '2027 VISION',
      status: 'CONCEPT & PROTOTYPE',
      statusColor: 'amber',
      title: 'Agentic Multimodal Voice Co-Pilot',
      icon: Bot,
      tagline: 'Conversational film companion with multilingual dialect understanding',
      deliverables: [
        'Fine-tuned open-source SLM (Llama 3 8B / Gemma 2) as an interactive cinematic reasoning agent',
        'Native voice interaction supporting 12 Indian regional languages and colloquial film slang',
        'Scene-level multimodal video search: "Find movies with a rainy train chase scene"',
        'Affective mood detection aligning recommendations with listener emotional states'
      ],
      stack: ['vLLM', 'Whisper ASR', 'LangChain / LangGraph', 'WebRTC'],
      metric: 'Voice-to-Reco <800ms'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono-code font-bold uppercase tracking-wider">
              Slide 15 / 16 • Future Scope & Scalability
            </span>
            <span className="text-xs text-slate-400 font-mono-code hidden sm:inline">Engineering Trajectory</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            Technical Roadmap & Next-Generation Research
          </h2>
          <p className="text-xs lg:text-sm text-slate-400 mt-1">
            Four sequential engineering milestones scaling CinemaAI from hybrid matrix factorization to agentic deep learning.
          </p>
        </div>

        {/* Phase Timeline Pill */}
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-mono-code text-slate-300">
          <Milestone className="w-4 h-4 text-purple-400" />
          <span>Timeline Horizon: <strong className="text-purple-300">2025 – 2027</strong></span>
        </div>
      </div>

      {/* 4 Interactive Phase Horizon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
        {roadmapPhases.map((phase, idx) => {
          const Icon = phase.icon;
          const isSelected = selectedPhase === idx;

          return (
            <div
              key={idx}
              onClick={() => setSelectedPhase(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900/95 border-purple-400 shadow-xl shadow-purple-500/20 -translate-y-1'
                  : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              {/* Active Indicator Top Bar */}
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-sky-400"></div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code uppercase font-bold text-slate-400 tracking-wider">
                    {phase.phase} • {phase.quarter}
                  </span>
                  <span className={`text-[9px] font-mono-code px-1.5 py-0.5 rounded font-bold ${
                    phase.statusColor === 'emerald'
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                      : phase.statusColor === 'sky'
                      ? 'bg-sky-950/80 text-sky-400 border border-sky-500/30'
                      : phase.statusColor === 'purple'
                      ? 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                      : 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                  }`}>
                    {phase.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-orbitron font-bold text-slate-100 leading-tight">
                    {phase.title}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-400 leading-snug line-clamp-2 mb-3">
                  {phase.tagline}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono-code">
                <span className="text-slate-400">Target Metric</span>
                <span className="text-sky-300 font-bold">{phase.metric}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Deep Dive Panel for Selected Phase */}
      <div className="bg-slate-950/90 border border-purple-500/30 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono-code font-bold text-purple-400 uppercase tracking-wider">
                {roadmapPhases[selectedPhase].phase} Deep Dive:
              </span>
              <span className="text-xs font-mono-code text-slate-400">
                {roadmapPhases[selectedPhase].quarter}
              </span>
            </div>
            <h3 className="text-lg font-orbitron font-extrabold text-slate-100">
              {roadmapPhases[selectedPhase].title} — {roadmapPhases[selectedPhase].tagline}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {roadmapPhases[selectedPhase].stack.map((tech, tIdx) => (
              <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono-code text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {roadmapPhases[selectedPhase].deliverables.map((item, dIdx) => (
            <div key={dIdx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
              <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5 font-mono-code text-[10px] font-bold">
                0{dIdx + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
