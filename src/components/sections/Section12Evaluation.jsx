import React from 'react';
import { Award, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Section12Evaluation() {
  const metrics = [
    {
      name: "RMSE",
      val: "0.9255",
      title: "Root Mean Squared Error",
      desc: "Standard deviation of prediction errors. Sub-1.0 RMSE demonstrates tight convergence on held-out test ratings.",
      badge: "Sub-1.0 Tight Fit",
      color: "border-sky-500/40 text-sky-400"
    },
    {
      name: "MAE",
      val: "0.7177",
      title: "Mean Absolute Error",
      desc: "Average magnitude of rating deviations. Predicted ratings differ from verified ground truth by under 0.72 stars.",
      badge: "Low Absolute Bias",
      color: "border-purple-500/40 text-purple-400"
    },
    {
      name: "P@10",
      val: "69.0%",
      title: "Precision @ 10",
      desc: "Top-tier relevance threshold. An average of 6.9 out of 10 recommended titles align with user preference ground truth.",
      badge: "High Relevance",
      color: "border-amber-500/40 text-amber-400"
    },
    {
      name: "NDCG@10",
      val: "0.8721",
      title: "Normalized Discounted Gain",
      desc: "Ranking position quality. Proves optimal ordering where the highest-affinity titles appear at the very top of lists.",
      badge: "Optimal Ranking",
      color: "border-emerald-500/40 text-emerald-400"
    }
  ];

  const modelsComparison = [
    { model: "CinemaAI Hybrid Ensemble", rmse: 0.9255, mae: 0.7177, p10: "69.0%", ndcg: 0.8721, isBest: true },
    { model: "Pure TruncatedSVD Collaborative", rmse: 0.9840, mae: 0.7680, p10: "63.0%", ndcg: 0.8120, isBest: false },
    { model: "Pure TF-IDF Content-Based", rmse: 1.1200, mae: 0.8920, p10: "54.0%", ndcg: 0.7240, isBest: false },
    { model: "Baseline Arithmetic Popularity", rmse: 1.2410, mae: 0.9850, p10: "42.0%", ndcg: 0.6150, isBest: false },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-8 max-w-6xl mx-auto select-none z-10">
      {/* Header */}
      <div className="mb-4">
        <div className="text-xs font-mono-code text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-sky-400" />
          // 12 • QUANTITATIVE BENCHMARKS & MODEL VALIDATION
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Empirical Performance & Benchmark Evaluation
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Rigorous 80/20 train/test split on 100,836 ratings proving tight convergence and superior ranking quality
        </p>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {metrics.map((m, idx) => (
          <div key={idx} className={`glass-card p-3.5 rounded-xl border ${m.color}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono-code text-[11px] font-bold text-slate-400">{m.name}</span>
              <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                {m.badge}
              </span>
            </div>
            <div className="font-mono-code text-2xl font-extrabold text-amber-400 mb-1">{m.val}</div>
            <h4 className="text-xs font-bold text-white mb-1">{m.title}</h4>
            <p className="text-[10px] text-slate-400 leading-normal">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Benchmark Comparison Table Card */}
      <div className="glass-panel p-4 rounded-2xl border border-sky-500/30">
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800">
          <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
            Empirical Comparison Across Architectures (80/20 Test Split)
          </span>
          <span className="text-[10px] font-mono-code text-slate-400">Lower RMSE/MAE is better • Higher P@10/NDCG is better</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-[10px] font-mono-code text-slate-400 border-b border-slate-800">
                <th className="py-2">Recommendation Architecture</th>
                <th className="py-2 text-right">RMSE (Error)</th>
                <th className="py-2 text-right">MAE (Deviation)</th>
                <th className="py-2 text-right">Precision@10</th>
                <th className="py-2 text-right">NDCG@10</th>
                <th className="py-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono-code text-[11px]">
              {modelsComparison.map((row, idx) => (
                <tr key={idx} className={row.isBest ? 'bg-sky-500/10 text-white font-bold' : 'text-slate-300'}>
                  <td className="py-2 font-sans font-medium">{row.model}</td>
                  <td className="py-2 text-right text-amber-400">{row.rmse.toFixed(4)}</td>
                  <td className="py-2 text-right">{row.mae.toFixed(4)}</td>
                  <td className="py-2 text-right text-sky-400">{row.p10}</td>
                  <td className="py-2 text-right text-emerald-400">{row.ndcg.toFixed(4)}</td>
                  <td className="py-2 text-center">
                    {row.isBest ? (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-bold border border-emerald-500/30">
                        BEST SCORE
                      </span>
                    ) : (
                      <span className="text-slate-500 text-[10px]">Baseline</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
