import React, { useState } from 'react';
import { Binary, FunctionSquare, LineChart, Cpu, Sparkles } from 'lucide-react';

export default function Section07Algorithms() {
  const [activeTab, setActiveTab] = useState(0);

  const algorithms = [
    {
      id: "01",
      title: "TF-IDF N-Gram Vectorization",
      type: "Content-Based Semantic Space",
      formula: "Metadata(m) = 2×Genres + Title + Synopsis\nTF-IDF(t, d) = TF(t, d) × log(N / DF(t))",
      desc: "Constructs a sparse document vector X in R^(10742 x 5000) utilizing sublinear term frequency scaling and unigram/bigram tokenization. Genres are repeated twice to assign higher relative weight to categorical taxonomy.",
      stat: "5,000 Dimensions",
      statLabel: "Sparse Lexical Vector Space",
      tag: "Scikit-Learn TfidfVectorizer"
    },
    {
      id: "02",
      title: "Cosine Similarity Metric",
      type: "High-Dimensional Directional Distance",
      formula: "cos(θ) = (u · v) / (||u|| × ||v||)",
      desc: "Measures the cosine of the angle between two sparse movie vectors. Evaluates directional alignment rather than raw magnitude, making it invariant to synopsis length. Top 20 nearest neighbors are serialized via Joblib.",
      stat: "[-1.0, 1.0] Range",
      statLabel: "Normalized Similarity Score",
      tag: "Cosine Distance Kernel"
    },
    {
      id: "03",
      title: "TruncatedSVD Matrix Factorization",
      type: "Collaborative Latent Dimension Discovery",
      formula: "R_(610 × 9742) ≈ U_k × Σ_k × V_k^T  (k = 30)",
      desc: "Decomposes the sparse User x Movie rating matrix into 30 orthogonal latent dimensions. Discovers hidden narrative taste affinities across 100,836 explicit ratings while filtering out noise and preserving 82.4% variance energy.",
      stat: "k = 30 Factors",
      statLabel: "Optimal Latent Taste Vectors",
      tag: "Dimensionality Reduction"
    },
    {
      id: "04",
      title: "Bayesian Weighted Rating (WR)",
      type: "Sample-Size Quality Regularizer",
      formula: "WR = (v / (v + m)) × R + (m / (v + m)) × C\nWhere m = 30 votes, C = 6.54 global mean",
      desc: "Regresses sparse, low-vote titles toward the global collection prior (C=6.54). As vote volume v increases, WR smoothly approaches observed rating R. Prevents obscure titles with two 10/10 votes from falsely outranking masterpieces.",
      stat: "m=30, C=6.54",
      statLabel: "Confidence Regularization",
      tag: "Bayesian Prior Estimator"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-5">
        <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Binary className="w-3.5 h-3.5 text-sky-400" />
          // 07 • MATHEMATICAL FOUNDATIONS & ALGORITHMS
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Mathematical Formulation & Machine Learning Core
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Rigorous synthesis of text vectorization, low-rank matrix decomposition, and Bayesian statistical regularization
        </p>
      </div>

      {/* Top Visual Plates: 3D Vector Space & SVD Energy Spectrum */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="glass-panel p-2.5 rounded-xl border border-sky-500/30 flex items-center gap-3">
          <img 
            src="/assets/vector_space_3d.png" 
            alt="3D Vector Space" 
            className="w-40 h-24 object-cover rounded-lg border border-slate-800 shrink-0" 
          />
          <div>
            <span className="text-[10px] font-mono-code text-sky-400 font-bold uppercase">3D Feature Space</span>
            <h4 className="text-xs font-bold text-white">TF-IDF Vector Space & Cosine Metric</h4>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Directional cosine distance across 5,000 sparse textual features separating Sci-Fi, Crime, Drama, and Romance.
            </p>
          </div>
        </div>

        <div className="glass-panel p-2.5 rounded-xl border border-purple-500/30 flex items-center gap-3">
          <img 
            src="/assets/svd_spectrum_3d.png" 
            alt="SVD Energy Spectrum" 
            className="w-40 h-24 object-cover rounded-lg border border-slate-800 shrink-0" 
          />
          <div>
            <span className="text-[10px] font-mono-code text-purple-400 font-bold uppercase">Latent Factor Energy</span>
            <h4 className="text-xs font-bold text-white">TruncatedSVD 30-Component Spectrum</h4>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Singular value energy distribution across 30 orthogonal dimensions capturing 82.4% collaborative variance.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: 4 Interactive Algorithm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {algorithms.map((algo, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
              activeTab === idx
                ? 'bg-slate-900 border-sky-400 shadow-lg shadow-sky-950/50 scale-[1.01]'
                : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono-code text-xs font-bold text-sky-400">{algo.id}</span>
                <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                  {algo.tag}
                </span>
              </div>

              <h4 className="text-xs font-bold text-white mb-2">{algo.title}</h4>

              {/* Mathematical Box */}
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 font-mono-code text-[10px] text-amber-300 leading-tight mb-2 whitespace-pre-line">
                {algo.formula}
              </div>

              <p className="text-[10px] text-slate-400 leading-relaxed mb-3">
                {algo.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[9px] font-mono-code text-slate-500 uppercase">{algo.statLabel}</span>
              <span className="text-xs font-mono-code font-bold text-emerald-400">{algo.stat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
