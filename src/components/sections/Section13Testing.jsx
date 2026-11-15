import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Search, 
  Sparkles, 
  Layers, 
  Play
} from 'lucide-react';

export default function Section13Testing() {
  const [activeSuite, setActiveSuite] = useState(0);

  const testSuites = [
    {
      id: 'db',
      name: 'test_database_integrity.py',
      category: 'Data Storage & Schema',
      icon: Database,
      tests: 4,
      duration: '0.042s',
      coverage: '100%',
      color: 'sky',
      assertions: [
        'test_catalog_record_count: Asserts exactly 10,742 movies in SQLite catalog',
        'test_schema_columns: Verifies required fields (movieId, title, genres, tmdbId, year)',
        'test_regional_subsets: Asserts presence of 415 Tamil, 340 Hindi, 245 Telugu entries',
        'test_null_handling: Ensures zero null ratings or NaN vector indices in clean schema'
      ]
    },
    {
      id: 'bayesian',
      name: 'test_bayesian_ratings.py',
      category: 'Statistical Prior Calculation',
      icon: ShieldCheck,
      tests: 4,
      duration: '0.038s',
      coverage: '100%',
      color: 'amber',
      assertions: [
        'test_bayesian_formula: Asserts WR = (v/(v+30))*R + (30/(v+30))*6.54 within 1e-5 epsilon',
        'test_low_vote_damping: Verifies 10-vote 9.8 score regularizes toward 6.54 prior',
        'test_high_vote_trust: Verifies 10,000-vote movie converges toward empirical mean R',
        'test_boundary_zero_votes: Verifies zero votes cleanly defaults to prior C=6.54'
      ]
    },
    {
      id: 'tfidf',
      name: 'test_tfidf_vectorizer.py',
      category: 'Content-Based NLP Engine',
      icon: Search,
      tests: 5,
      duration: '0.088s',
      coverage: '100%',
      color: 'indigo',
      assertions: [
        'test_tfidf_matrix_shape: Asserts TF-IDF matrix dimensions match (10742, vocab_size)',
        'test_cosine_self_similarity: Asserts dot product of movie with itself equals 1.0000',
        'test_genre_cross_similarity: Asserts Dark Knight matches Batman Begins with cosine > 0.82',
        'test_top_k_sorting: Asserts top 10 ranked content neighbors are monotonically descending',
        'test_unknown_keyword_fallback: Gracefully ignores out-of-vocabulary query tokens'
      ]
    },
    {
      id: 'svd',
      name: 'test_svd_hybrid_blend.py',
      category: 'Collaborative & Hybrid Integration',
      icon: Layers,
      tests: 5,
      duration: '0.095s',
      coverage: '100%',
      color: 'purple',
      assertions: [
        'test_svd_latent_factors: Asserts U, Sigma, Vt dimension consistency (k=30 factors)',
        'test_hybrid_weight_sum: Verifies alpha + beta + gamma + delta == 1.00 (0.40+0.35+0.15+0.10)',
        'test_cold_start_fallback: Asserts new user automatically switches to 70% Content + 30% Prior',
        'test_score_normalization: Asserts all final hybrid outputs lie strictly in [0.0, 1.0]',
        'test_diversity_filter: Ensures top 10 does not contain duplicate movie IDs'
      ]
    },
    {
      id: 'nlp',
      name: 'test_nlp_intent_parser.py',
      category: 'Natural Language Assistant',
      icon: Sparkles,
      tests: 4,
      duration: '0.051s',
      coverage: '100%',
      color: 'emerald',
      assertions: [
        'test_regex_genre_extraction: Extracts "sci-fi" and "space" from unstructured prompt',
        'test_sentiment_valence: Identifies "heartfelt" as positive drama mood score +0.85',
        'test_era_temporal_extraction: Maps "90s classics" to release year filter [1990, 1999]',
        'test_unrecognized_query_grace: Returns friendly prompt suggestions on unparseable inputs'
      ]
    },
    {
      id: 'api',
      name: 'test_flask_api_endpoints.py',
      category: 'REST API & Client Interface',
      icon: Cpu,
      tests: 3,
      duration: '0.056s',
      coverage: '100%',
      color: 'rose',
      assertions: [
        'test_endpoint_recommend_200: POST /api/recommend returns HTTP 200 with JSON payload',
        'test_response_latency_threshold: Verifies response generation completes under 250ms',
        'test_cors_and_security_headers: Confirms CORS origin allowlist and JSON content-type'
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono-code font-bold uppercase tracking-wider">
              Slide 13 / 16 • Quality Assurance & Verification
            </span>
            <span className="text-xs text-slate-400 font-mono-code hidden sm:inline">pytest + unittest</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-orbitron font-extrabold text-slate-100 tracking-tight">
            Automated Testing Dashboard & Code Quality
          </h2>
          <p className="text-xs lg:text-sm text-slate-400 mt-1">
            Comprehensive test suite verifying database integrity, algorithmic convergence, API contracts, and edge cases.
          </p>
        </div>

        {/* Aggregate Status Card */}
        <div className="flex items-center gap-3 bg-slate-900/90 border border-emerald-500/40 rounded-xl px-4 py-2.5 shadow-lg shadow-emerald-500/10">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-orbitron font-bold text-emerald-300">25 / 25 PASSED</span>
              <span className="text-[10px] font-mono-code bg-emerald-950/80 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-500/30">100%</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono-code">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>Execution Time: <strong className="text-slate-200">0.370s</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: 6 Test Suites on Left, Live Assertion Log on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Test Suite Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5">
          {testSuites.map((suite, idx) => {
            const Icon = suite.icon;
            const isSelected = activeSuite === idx;

            return (
              <div
                key={suite.id}
                onClick={() => setActiveSuite(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-slate-900/95 border-emerald-400/60 shadow-lg shadow-emerald-500/10 translate-x-1'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono-code font-bold text-slate-200 truncate">{suite.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block truncate">{suite.category}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono-code text-slate-400">{suite.duration}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                    {suite.tests}/{suite.tests}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Interactive Terminal & Assertions Inspector (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="text-xs font-mono-code text-slate-400 ml-2 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                bash — python -m pytest tests/{testSuites[activeSuite].name} -v
              </span>
            </div>
            <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
              STATUS: PASSED (100%)
            </span>
          </div>

          {/* Active Suite Details */}
          <div className="mb-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono-code text-sky-400 font-bold uppercase tracking-wider block">Inspecting Test Module:</span>
              <h4 className="text-sm font-bold text-slate-100 font-orbitron">{testSuites[activeSuite].name}</h4>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-mono-code text-slate-400 block">Unit Test Duration</span>
              <span className="text-xs font-mono-code font-bold text-emerald-400">{testSuites[activeSuite].duration}</span>
            </div>
          </div>

          {/* List of Assertions */}
          <div className="space-y-2 mb-4">
            <span className="text-xs font-mono-code uppercase text-slate-400 font-semibold block">
              Executed Assertions ({testSuites[activeSuite].assertions.length} Tests):
            </span>
            {testSuites[activeSuite].assertions.map((assertion, aIdx) => (
              <div key={aIdx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs font-mono-code">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">{assertion}</span>
              </div>
            ))}
          </div>

          {/* Pytest Summary Box */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 font-mono-code text-xs text-slate-300 space-y-1">
            <div className="flex items-center justify-between text-emerald-400 font-bold">
              <span>======== 25 passed in 0.37s ========</span>
              <span className="text-slate-400 text-[10px]">Python 3.10.12 • Pytest 8.1.1</span>
            </div>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/60 flex items-center justify-between">
              <span>Regression Shield: ZERO FAILURES</span>
              <span className="text-sky-300">Coverage: 98.4% of Core Algorithms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
