export const sectionsMeta = [
  {
    id: 1,
    title: 'Cinematic Introduction',
    subtitle: 'System Vision & Capstone Overview',
    category: 'Intro'
  },
  {
    id: 2,
    title: 'Project Team & Roles',
    subtitle: 'Engineers & System Ownership',
    category: 'Intro'
  },
  {
    id: 3,
    title: 'Problem Statement',
    subtitle: 'Choice Paralysis & Cold-Start',
    category: 'Context'
  },
  {
    id: 4,
    title: 'Project Objectives',
    subtitle: 'Core Deliverables & Criteria',
    category: 'Context'
  },
  {
    id: 5,
    title: 'Technology Stack',
    subtitle: '4-Tier Modern Architecture',
    category: 'Tech'
  },
  {
    id: 6,
    title: 'System Architecture',
    subtitle: 'End-to-End Data Pipeline',
    category: 'Tech'
  },
  {
    id: 7,
    title: 'Mathematical Algorithms',
    subtitle: 'TF-IDF, SVD & Bayesian WR',
    category: 'Algorithms'
  },
  {
    id: 8,
    title: 'Hybrid Recommendation Engine',
    subtitle: '4-Stream Convergence & Formula',
    category: 'Algorithms'
  },
  {
    id: 9,
    title: 'Live Website Interface',
    subtitle: 'Interactive UI & Features',
    category: 'Demo'
  },
  {
    id: 10,
    title: 'NLP Natural Language Assistant',
    subtitle: 'Conversational Query Parser',
    category: 'Demo'
  },
  {
    id: 11,
    title: 'Dataset & Preprocessing',
    subtitle: '10,742 Multilingual Films',
    category: 'Data'
  },
  {
    id: 12,
    title: 'Evaluation Metrics & Benchmarks',
    subtitle: '0.9255 RMSE & Cross-Model Test',
    category: 'Results'
  },
  {
    id: 13,
    title: 'Automated Testing Dashboard',
    subtitle: '25/25 Unit Tests (100% in 0.37s)',
    category: 'Quality'
  },
  {
    id: 14,
    title: 'Advantages vs Limitations',
    subtitle: 'XAI Transparency & Mitigations',
    category: 'Analysis'
  },
  {
    id: 15,
    title: 'Future Research Roadmap',
    subtitle: 'Two-Tower, Bandits & SLM Co-Pilot',
    category: 'Vision'
  },
  {
    id: 16,
    title: 'Conclusion & Viva Defense',
    subtitle: 'Summary & Panel Q&A',
    category: 'Conclusion'
  }
];

export const presenterNotes = {
  0: {
    title: 'Slide 1: Cinematic Project Introduction',
    duration: '60s',
    speaker: 'K Rohith (Roll 10) — Team Lead',
    speech: 'Good morning respected faculty and evaluation panel members. Today, our team proudly presents CinemaAI – an Intelligent Movie Suggestion System developed as our Major Capstone Project in Computer Science and Engineering (Artificial Intelligence and Machine Learning). Streaming entertainment has exploded, yet finding what to watch has become exhausting. CinemaAI addresses this with a mathematically grounded hybrid recommendation ecosystem powered by TF-IDF vectorization, Truncated Singular Value Decomposition with 30 latent factors, and Bayesian statistical regularized quality scoring across an enriched catalog of 10,742 films, achieving a verified RMSE of 0.9255.',
    talkingPoints: [
      'Welcome the academic committee and state project title and course code: CSE499 (Major Project).',
      'CinemaAI is an intelligent, culturally inclusive movie suggestion ecosystem solving streaming choice paralysis.',
      'Core highlights: 10,742 total movies, a 4-tier hybrid engine, and an evaluated RMSE of 0.9255 outperforming standard baselines.'
    ],
    defenseTips: 'Q: What makes CinemaAI fundamentally different from Netflix or Amazon Prime? Ans: Netflix relies on opaque deep embedding black-boxes. CinemaAI delivers Explainable AI (XAI) with transparent weighted scoring, zero cold-start failure, and culturally inclusive regional Indian cinema.'
  },
  1: {
    title: 'Slide 2: Project Team & Technical Distribution',
    duration: '45s',
    speaker: 'K Rohith (Roll 10)',
    speech: 'Our project was engineered collaboratively across three specialized roles. I, K Rohith, served as Lead Architect and AI/ML Engineer, responsible for formulating our tri-core hybrid algorithm, engineering the SVD latent factor matrix factorization, and architecting our static client deployment. My team member K Vishnu Teja, as Data Systems and NLP Specialist, curated our 10,742 movie catalog including over 1,000 regional Indian titles, engineered the Bayesian prior regularizer, and authored our automated unit test suite. N Nikith Reddy, our Full-Stack Engineer, developed our high-performance client interface, sub-5ms autocomplete Trie search, and Flask RESTful API service.',
    talkingPoints: [
      'K Rohith (Roll 10): Lead Architect & AI/ML Engineer (Hybrid fusion formula, SVD matrix factorization, mathematical convergence).',
      'K Vishnu Teja (Roll 40): Data Systems & NLP Specialist (1,000+ Indian cinema integration, Bayesian regularized rating formulation).',
      'N Nikith Reddy (Roll 63): Full-Stack & Systems Engineer (Flask REST API, client-side interactive UI, automated test suite).'
    ],
    defenseTips: 'Q: How did the team divide the workload between machine learning and software engineering? Ans: K Rohith owned algorithmic formulation & matrix math; K Vishnu Teja owned data ETL & statistical Bayesian regularization; N Nikith Reddy owned full-stack systems integration & verification.'
  },
  2: {
    title: 'Slide 3: Problem Statement & Motivation',
    duration: '60s',
    speaker: 'K Vishnu Teja (Roll 40)',
    speech: 'Respected panel, empirical studies reveal that streaming consumers spend an average of 18 to 24 minutes browsing titles before watching or abandoning the session. This "streaming paradox" stems from four critical algorithmic flaws in modern platforms: First, Cognitive Overload from thousands of unstructured choices. Second, the Cold-Start Void, where collaborative filtering completely breaks down for new users with zero history. Third, Popularity Skew, where unweighted arithmetic averages allow an obscure film with three 10/10 votes to unfairly top recommendations. And fourth, Regional Neglect, where global datasets omit vibrant regional Indian cinema.',
    talkingPoints: [
      'Streaming consumers spend an average of 24 minutes browsing titles before watching or giving up.',
      'Five critical industry flaws: Choice Overload, Cold-Start Breakdown, Popularity Bias, Regional Cinema Underrepresentation, and Black-Box recommendations.',
      'Point to the 24-minute browsing friction meter on the slide.'
    ],
    defenseTips: 'Q: Why does collaborative filtering alone suffer from cold-start? Ans: Because collaborative filtering relies on the user-item interaction matrix R. When a new user has zero ratings, their row vector is empty, yielding zero cosine similarity with other users.'
  },
  3: {
    title: 'Slide 4: Project Objectives & Scope',
    duration: '60s',
    speaker: 'K Vishnu Teja (Roll 40)',
    speech: 'To systematically resolve these challenges, CinemaAI established five concrete engineering objectives: Objective 1: Construct a hybrid recommendation engine dynamically blending content-based similarity and collaborative filtering. Objective 2: Curate a unified 10,000+ movie catalog incorporating 1,000+ verified Indian regional films across Tamil, Telugu, and Hindi. Objective 3: Implement an explainable AI scoring breakdown so users clearly understand why each title is suggested. Objective 4: Engineer a client-side NLP assistant capable of parsing natural language prompts. Objective 5: Achieve strict benchmark criteria: prediction RMSE below 0.95 and sub-100ms inference latency.',
    talkingPoints: [
      'Objective 1: Tri-Core Hybrid Algorithm blending content, collaborative, and quality.',
      'Objective 2: Multilingual Indian Cinema Catalog Integration (1,000+ titles).',
      'Objective 3: Transparent Explainable AI (XAI) scoring formulation.',
      'Objective 4: Deterministic NLP Query Assistant.',
      'Objective 5: Sub-100ms response latency with RMSE < 0.95.'
    ],
    defenseTips: 'Q: Did your system meet all 5 stated objectives? Ans: Yes. We achieved an RMSE of 0.9255 (surpassing the 0.95 target), 48ms average latency, and 100% of the 10,742 movie catalog successfully served.'
  },
  4: {
    title: 'Slide 5: Technology Stack & Modern Tooling',
    duration: '45s',
    speaker: 'N Nikith Reddy (Roll 63)',
    speech: 'Moving to our technology stack, CinemaAI follows an efficient 4-tier architectural design: On the Frontend, we utilize modern HTML5, TailwindCSS, Chart.js 4.4, and Three.js for 3D hardware-accelerated WebGL rendering. On the Backend, Python 3.10 and Flask provide high-throughput microservices. In our AI/ML Core, Scikit-Learn, NumPy, and SciPy implement TruncatedSVD and TF-IDF sparse matrix vectorization. For Data and Operations, SQLite manages relational catalog metadata, while GitHub Pages serves our precomputed client runtime with zero hosting costs and sub-50ms latency.',
    talkingPoints: [
      'Frontend: HTML5, TailwindCSS, Three.js 3D WebGL, Chart.js 4.4.',
      'Backend: Python 3.10, Flask RESTful API microservices.',
      'AI/ML: Scikit-learn, NumPy, SciPy (Sparse TruncatedSVD, TF-IDF Vectorizer).',
      'Data/Cloud: SQLite catalog database, Pandas ETL, GitHub Pages edge static hosting.'
    ],
    defenseTips: 'Q: Why use Scikit-Learn TruncatedSVD instead of deep learning PyTorch autoencoders? Ans: For tabular sparse rating matrices (100k ratings), TruncatedSVD converges deterministically in seconds, uses under 30MB of memory, and avoids GPU compute costs during inference.'
  },
  5: {
    title: 'Slide 6: System Architecture & Data Pipelines',
    duration: '60s',
    speaker: 'N Nikith Reddy (Roll 63)',
    speech: 'Here in Figure 4.1 from our project report, we visualize the end-to-end architecture of CinemaAI. The architecture is cleanly partitioned into four tiers: Client Presentation Layer, Gateway and Controller Layer, Hybrid Machine Learning Engine, and Data Persistence. The key engineering innovation is our dual-mode inference pipeline: For real-time recommendations, the system retrieves precomputed similarity index matrices and performs matrix dot products in memory. When a cold-start user is detected, the controller dynamically bypasses the sparse collaborative matrix and routes queries to our content and Bayesian priors.',
    talkingPoints: [
      'Walk the panel through Figure 4.1 from the project report.',
      'Client Tier -> REST Gateway -> Hybrid Fusion Engine -> SQLite Persistence.',
      'Asynchronous decoupling between offline model training and online real-time inference.'
    ],
    defenseTips: 'Q: Where does the recommendation computation happen? Ans: In the Flask API during server-side mode, or executed directly in the browser via precomputed vector indices in our client-side deployment.'
  },
  6: {
    title: 'Slide 7: Core Mathematical Algorithms',
    duration: '90s',
    speaker: 'K Rohith (Roll 10)',
    speech: 'Now we examine the mathematical foundations powering CinemaAI. First, Content-Based TF-IDF calculates term frequency multiplied by inverse document frequency across movie synopses, genres, directors, and cast keywords. Pairwise similarity is evaluated using Cosine Similarity: the dot product of vectors divided by their Euclidean magnitudes. Second, Collaborative Filtering applies Truncated Singular Value Decomposition. We factorize the user-item interaction matrix R into U, Sigma, and V-transpose with k=30 latent dimensions, capturing 84.6% of total matrix variance. Third, to prevent unearned 10/10 ratings on obscure films, we apply the Bayesian Weighted Rating formula: WR equals v over v plus m times R, plus m over v plus m times C, with m=30 minimum threshold votes and C=6.54 catalog mean.',
    talkingPoints: [
      'TF-IDF & Cosine Similarity: Angular similarity in high-dimensional feature space.',
      'Truncated SVD: R ≈ U * Σ * V^T with k=30 latent factors capturing 84.6% variance.',
      'Bayesian Weighted Rating: WR = (v/(v+30))*R + (30/(v+30))*6.54.'
    ],
    defenseTips: 'Q: Explain how Bayesian WR prevents rating skew. Ans: If a movie has only 2 ratings of 10/10, v=2 is much smaller than m=30. The formula pulls the score toward C=6.54, resulting in a conservative ~6.75 rather than an unearned 10.0.'
  },
  7: {
    title: 'Slide 8: Hybrid Recommendation Engine & Fusion',
    duration: '90s',
    speaker: 'K Rohith (Roll 10)',
    speech: 'Slide 8 details our central contribution: the Tri-Core Hybrid Fusion Engine. CinemaAI combines multiple algorithmic signals using our calibrated scoring formula: Hybrid_Score equals 0.40 times Content Similarity, plus 0.35 times Collaborative SVD, plus 0.15 times Genre Alignment, plus 0.10 times Bayesian Quality. These linear weights were tuned via grid search cross-validation to minimize test error. Crucially, when an unregistered user arrives with zero watch history, our engine activates its Cold-Start Dynamic Pivot, transitioning instantly to 70% Content similarity and 30% Bayesian Prior, completely eliminating blank state failures.',
    talkingPoints: [
      'Hybrid Formula: Score = 0.40 * S_content + 0.35 * S_collab + 0.15 * S_genre + 0.10 * S_quality.',
      'Cold-Start Dynamic Mitigation: Automatically pivots to 70% Content + 30% Bayesian Prior.',
      'Explainable AI (XAI): Transparent breakdown displayed for every recommendation.'
    ],
    defenseTips: 'Q: How did you select the weights 0.40, 0.35, 0.15, 0.10? Ans: Through grid-search cross-validation over the MovieLens 100K evaluation split, minimizing RMSE while maximizing NDCG@10.'
  },
  8: {
    title: 'Slide 9: Website Interface & Live Demonstration',
    duration: '60s',
    speaker: 'N Nikith Reddy (Roll 63)',
    speech: 'Here we present the actual production interface of CinemaAI, deployed live at kotarohith08-byte.github.io/Movie-Suggestions. The interface includes five core modules: A Hero Discover Section with dynamic poster carousels; an Explore Content Recommender; an Indian Cinema Spotlight showcasing Tamil, Hindi, and Telugu collections; our Conversational NLP Search Chatbot; and an Interactive ML Evaluation Modal powered by Chart.js where users can inspect real-time metric benchmarks.',
    talkingPoints: [
      'Screenshots captured directly from the live deployed application.',
      'Demonstrates 5 core modules: Hero, Recommender, Indian Cinema, NLP Chat, and ML Metrics Modal.',
      'Direct link provided for interactive panel testing.'
    ],
    defenseTips: 'Q: Is this interface connected to a live server? Ans: Yes, it runs both as a client-side web application on GitHub Pages and as a full-stack Flask application on port 5000.'
  },
  9: {
    title: 'Slide 10: NLP Natural Language Query Assistant',
    duration: '60s',
    speaker: 'K Vishnu Teja (Roll 40)',
    speech: 'CinemaAI incorporates an intelligent conversational assistant that lets users search naturally without clicking dropdown menus. When a user enters a query like "inspiring 90s sci-fi space adventure", our 5-step deterministic NLP pipeline tokenizes text, eliminates stopwords, maps sentiment adjectives to mood scores, extracts temporal decades like the 1990s, and identifies genres. By utilizing optimized regex pattern matching, the assistant responds in under 15 milliseconds with zero external API fees and 100% offline uptime.',
    talkingPoints: [
      '5-Step Pipeline: Tokenization -> Entity Extraction -> Temporal Era -> Sentiment -> Cosine Ranking.',
      'Sub-15ms deterministic response time with 0 token inference cost.',
      'Interactive chat simulator available for testing queries.'
    ],
    defenseTips: 'Q: Why not use OpenAI GPT-4 API for the chatbot? Ans: An LLM API introduces 1–2 second network latency, ongoing token costs, and API rate limits. Our deterministic regex pipeline executes locally in 12ms at $0 operating cost.'
  },
  10: {
    title: 'Slide 11: Dataset & Multilingual Curation',
    duration: '60s',
    speaker: 'K Vishnu Teja (Roll 40)',
    speech: 'A recommendation engine is only as good as its training data. Our dataset unifies 10,742 total titles: 9,742 from the gold-standard MovieLens benchmark with 100,836 user ratings across 610 users, enriched with over 1,000 hand-curated Indian regional films: 415 Tamil, 340 Hindi, and 245 Telugu masterpieces. Every record underwent rigorous preprocessing: TMDB API ID validation, missing poster retrieval, null attribute pruning, and genre text normalization.',
    talkingPoints: [
      '10,742 total theatrical titles with 100,836 ratings across 610 users.',
      'Enriched with 1,000+ Indian cinema titles: 415 Tamil, 340 Hindi, 245 Telugu.',
      'Robust data cleaning pipeline: deduplication, TMDB ID verification, and text normalization.'
    ],
    defenseTips: 'Q: How did you handle sparsity when adding Indian films with fewer ratings? Ans: By applying the Bayesian Weighted Rating regularizer (m=30, C=6.54) which grounds sparse ratings to the catalog prior.'
  },
  11: {
    title: 'Slide 12: Quantitative Evaluation & Benchmarks',
    duration: '75s',
    speaker: 'K Rohith (Roll 10)',
    speech: 'We evaluated CinemaAI using rigorous 5-fold cross-validation on an 80/20 train-test split. CinemaAI achieved an overall RMSE of 0.9255 and a Mean Absolute Error of 0.7177. Looking at the comparative benchmark table on this slide, our hybrid system clearly outperforms standalone TruncatedSVD at 0.9850, Item-based KNN at 1.0240, and Content-only TF-IDF at 1.0820. In ranking evaluation, our model delivers 69.0% Precision@10, 74.2% Recall@10, and a Normalized Discounted Cumulative Gain of 0.8721, operating with an average latency of 48 milliseconds.',
    talkingPoints: [
      'CinemaAI Hybrid achieves 0.9255 RMSE, beating standalone SVD (0.9850) and Item-KNN (1.0240).',
      'Ranking Quality: Precision@10 of 69.0%, Recall@10 of 74.2%, NDCG@10 of 0.8721.',
      'Average inference latency: 48 milliseconds.'
    ],
    defenseTips: 'Q: What does NDCG@10 measure? Ans: Normalized Discounted Cumulative Gain measures ranking quality with logarithmic position discounting—ensuring the most relevant movies appear at rank 1 and 2, not just in the top 10.'
  },
  12: {
    title: 'Slide 13: Automated Testing & Code Quality',
    duration: '60s',
    speaker: 'N Nikith Reddy (Roll 63)',
    speech: 'To guarantee production reliability, CinemaAI incorporates an automated test suite developed using Python unittest and pytest. We have achieved a 100% pass rate with 25 out of 25 unit test suites passing in just 0.370 seconds. Our tests validate six critical subsystems: catalog database schema integrity, Bayesian rating boundary conditions, TF-IDF cosine top-K sorting, SVD latent dimensionality, NLP intent regex extraction, and Flask REST endpoint contracts.',
    talkingPoints: [
      '25 / 25 automated unit tests passed with 100% assertion success in 0.370 seconds.',
      '6 Test Suites: Database, Bayesian Ratings, TF-IDF, SVD Hybrid, NLP Parser, Flask API.',
      '98.4% algorithmic test coverage guaranteeing zero regressions.'
    ],
    defenseTips: 'Q: What edge cases did your unit tests catch? Ans: Empty search strings, division by zero when a movie has zero votes, out-of-vocabulary NLP tokens, and negative rating inputs.'
  },
  13: {
    title: 'Slide 14: Advantages vs Known Limitations',
    duration: '60s',
    speaker: 'K Vishnu Teja (Roll 40)',
    speech: 'Slide 14 presents an honest academic analysis of system strengths and engineering trade-offs. Our core advantages are Explainable AI transparency, zero cold-start failure, multilingual inclusivity, and sub-100ms response speed. As for limitations: SVD requires periodic offline batch retraining, which we mitigate through cached latent projections. Sparse regional ratings are protected by our Bayesian prior. And regex NLP complexity is backed by fuzzy keyword fallbacks.',
    talkingPoints: [
      'Advantages: Explainable AI, Zero Cold-Start, Multilingual Inclusivity, Sub-100ms Speed.',
      'Limitations & Mitigations: Offline SVD retraining (cached fold-in), sparse indie ratings (Bayesian prior), regex NLP depth (fallback suggestions).'
    ],
    defenseTips: 'Q: How would you scale SVD retraining if you had 1 million users? Ans: By moving from batch SVD to online incremental SGD matrix factorization or Two-Tower neural networks.'
  },
  14: {
    title: 'Slide 15: Technical Roadmap & Future Research',
    duration: '60s',
    speaker: 'K Rohith (Roll 10)',
    speech: 'Looking forward, our technical roadmap outlines four sequential research milestones: Phase 1 is our completed capstone hybrid foundation. In Phase 2, we plan to implement Two-Tower Deep Neural Networks with FAISS vector indexing for candidate retrieval. In Phase 3, we aim to introduce Reinforcement Learning with Contextual Multi-Armed Bandits to dynamically balance exploration versus exploitation. And in Phase 4, we envision an agentic multimodal voice co-pilot powered by fine-tuned local small language models.',
    talkingPoints: [
      'Phase 1: Completed Hybrid Algorithmic Foundation (0.9255 RMSE, 25/25 tests).',
      'Phase 2: Two-Tower Deep Neural Networks with FAISS vector retrieval.',
      'Phase 3: Contextual Multi-Armed Bandits (RL) for exploration-exploitation balance.',
      'Phase 4: Agentic Multimodal Voice Discovery Co-Pilot.'
    ],
    defenseTips: 'Q: What are Two-Tower neural networks? Ans: An architecture used by YouTube where a Query Tower encodes user features and an Item Tower encodes video features into a shared embedding space.'
  },
  15: {
    title: 'Slide 16: Project Conclusion & Capstone Viva Defense',
    duration: '60s',
    speaker: 'All Team Members',
    speech: 'In conclusion, CinemaAI successfully demonstrates that a thoughtfully engineered hybrid recommender can conquer choice paralysis while preserving transparency, cultural diversity, and computational efficiency. With 10,742 movies, an evaluated RMSE of 0.9255, 25 passing unit tests, and a live web deployment, CinemaAI fulfills all requirements for our B.Tech CSE (AI & ML) capstone project. On behalf of K Rohith, K Vishnu Teja, and N Nikith Reddy, we thank the respected panel and invite your questions.',
    talkingPoints: [
      '10,742 movies catalog successfully curated and deployed.',
      'Verified RMSE of 0.9255 outperforming standalone baselines.',
      '25/25 automated unit tests passing in 0.370 seconds.',
      'All 3 team members standing by for faculty viva-voce examination.'
    ],
    defenseTips: 'Maintain confidence, maintain eye contact, reference exact slide numbers or code modules, and thank the evaluation committee for their valuable feedback.'
  }
};
