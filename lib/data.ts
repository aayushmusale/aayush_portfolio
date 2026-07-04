export const profile = {
  name: "Aayush Musale",
  handle: "aayushmusale",
  role: "AI/ML Engineer",
  focus: "Computer Vision · Edge AI · GenAI Pipelines",
  tagline:
    "I build models that ship — quantized down to run on real hardware, and pipelines that hold up under production noise.",
  location: "Pune, Maharashtra, India",
  email: "aayushmusale04@gmail.com",
  phone: "+91 9021020740",
  github: "https://github.com/aayushmusale",
  linkedin: "https://linkedin.com/in/aayush-musale-517a7326a/",
  education: {
    degree: "B.Tech, Computer Engineering",
    school: "AISSMS Institute of Information Technology, Pune",
    detail: "CGPA 7.12 · Class of 2027",
  },
};

export type Project = {
  id: string;
  name: string;
  tag: string;
  confidence: string;
  stack: string[];
  summary: string;
  points: string[];
  metrics: { label: string; value: string }[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "voxflow",
    name: "VoxFlow",
    tag: "genai_pipeline",
    confidence: "0.97",
    stack: ["Python", "Asyncio", "Faster-Whisper", "CUDA", "Edge-TTS"],
    summary:
      "Real-time multilingual voice pipeline — LLM-based ASR into a neural TTS stack, architected as a Speech → LLM → Speech generative loop.",
    points: [
      "Designed a producer-consumer async architecture across 3 isolated threads (UI, mic, AI consumer), cutting end-to-end latency from 15–20s to under 3s with zero UI freeze under heavy GPU load.",
      "Wired Google Neural API for idiom-aware multilingual translation and Microsoft Edge-TTS for regional speech synthesis.",
      "Built a 5-layer anti-hallucination matrix — hardware VAD threshold, duration filter, Whisper language lock, Silero VAD, no_speech_prob scoring — for 0% hallucination during standby silence.",
    ],
    metrics: [
      { label: "latency", value: "<3s" },
      { label: "hallucination_rate", value: "0%" },
      { label: "threads", value: "3" },
    ],
  },
  {
    id: "microadas",
    name: "MicroADAS",
    tag: "edge_cv",
    confidence: "0.94",
    stack: ["YOLOv8", "PyTorch", "ONNX", "TFLite", "INT8 PTQ", "OpenCV"],
    summary:
      "Edge-optimized hazard perception model for real-time object detection on constrained hardware.",
    points: [
      "Built a full PTQ pipeline (PyTorch → ONNX → TFLite INT8), cutting model size 75%+ to under 2MB while retaining 84.2% global recall.",
      "Trained an 11-class detector on 13,000+ annotated urban frames, deployed live on Arduino Uno Q for real-time camera-stream inference.",
      "Hit mAP50 of 78.9% on cars and 70.0% on red lights under strict INT8 quantization constraints.",
    ],
    metrics: [
      { label: "model_size", value: "<2MB" },
      { label: "recall", value: "84.2%" },
      { label: "map50_cars", value: "78.9%" },
    ],
  },
  {
    id: "spamguard",
    name: "SpamGuard-Ensemble",
    tag: "nlp_classifier",
    confidence: "0.99",
    stack: ["NLP", "PyTorch", "Scikit-learn", "XGBoost", "Joblib"],
    summary:
      "Soft-voting ensemble classifier for spam detection, tuned to minimize false positives at scale.",
    points: [
      "Ensembled Random Forest, Extra Trees, and XGBoost via soft voting — 99.63% precision on a 5,000+ email dataset.",
      "Built an end-to-end NLP pipeline with TF-IDF vectorization and tokenization.",
      "Serialized and deployed the production model via Joblib for real-time inference.",
    ],
    metrics: [
      { label: "precision", value: "99.63%" },
      { label: "dataset", value: "5K+ emails" },
    ],
  },
  {
    id: "fraud-detection",
    name: "Fraud Detection Model",
    tag: "tabular_ml",
    confidence: "0.99",
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    summary:
      "Class-imbalance-aware fraud classifier on 1.9M+ transaction records, presented at CCGE2026.",
    points: [
      "Ran EDA on 1.9M+ transactions, isolating TRANSFER/CASH-OUT as the primary fraud vectors under a 0.13% fraud rate.",
      "Built a ColumnTransformer pipeline (StandardScaler + OneHotEncoder), benchmarking Logistic Regression against XGBoost.",
      "Tuned XGBoost (scale_pos_weight=700, max_depth=6) for a 1:774 class imbalance — 99.98% accuracy, 0.98 precision, 0.88 recall on the fraud class, a 49x precision gain over baseline.",
    ],
    metrics: [
      { label: "accuracy", value: "99.98%" },
      { label: "precision_gain", value: "49x" },
      { label: "records", value: "1.9M+" },
    ],
  },
];

export const skillGroups: { label: string; tag: string; items: string[] }[] = [
  {
    label: "Languages",
    tag: "lang",
    items: ["Python", "C", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    label: "ML / DL Frameworks",
    tag: "ml_dl",
    items: [
      "PyTorch",
      "TensorFlow",
      "TFLite",
      "Keras",
      "Scikit-learn",
      "HuggingFace Transformers",
    ],
  },
  {
    label: "Generative AI / LLM",
    tag: "genai",
    items: [
      "BERT",
      "GPT",
      "Transformers",
      "Prompt Engineering",
      "Fine-tuning",
      "RAG concepts",
    ],
  },
  {
    label: "Computer Vision",
    tag: "cv",
    items: [
      "YOLOv8",
      "OpenCV",
      "CNNs",
      "Vision Transformers",
      "Object Detection & Tracking",
    ],
  },
  {
    label: "Model Optimization",
    tag: "opt",
    items: ["Post-Training Quantization", "INT8 / FP32", "ONNX Export", "Edge Deployment"],
  },
  {
    label: "MLOps / Tools",
    tag: "mlops",
    items: ["Git", "Docker", "FastAPI", "MongoDB", "CUDA", "Bash", "Arduino Uno Q"],
  },
  {
    label: "Data Engineering",
    tag: "data",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "EDA", "SMOTE / Mosaic Aug."],
  },
];

export const leadership = {
  role: "Hackathon Strategy Co-Lead",
  org: "IOIT TENET — ACM Student Chapter",
  period: "Aug 2025 – Oct 2025",
  detail:
    "Co-led end-to-end planning and execution of Tenet Hack'25, drawing participation from 40 teams.",
};
