
import { Job, NavItem, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Work', url: '#work' },
  { name: 'Contact', url: '#contact' },
];

export const JOBS: Job[] = [
  {
    company: 'Matrice.Ai',
    title: 'Machine Learning Engineering Intern',
    range: 'May 2025 - Oct 2025',
    url: '#',
    duties: [
      'Deployed scalable workflows with NVIDIA Triton Inference Server, ONNX Runtime, TensorRT, and PyTorch.',
      'Containerized services using Docker for low-level inference via gRPC/REST endpoints.',
      'Orchestrated end-to-end real-time computer vision (CV) pipelines leveraging YOLOv8, YOLOv9, RT-DETR, ByteTrack, and BotSort.',
      'Delivered a 15% improvement in detection accuracy across retail, security & healthcare analytics.',
    ],
  },
  {
    company: 'DRDO',
    title: 'Research Intern',
    range: 'May 2024 - July 2024',
    url: 'https://www.drdo.gov.in',
    duties: [
      'Worked on large Radar Data to classify objects with highest amplitude to trace actual location for military applications.',
      'Implemented Centroid-Based Clustering Algorithms to achieve 90% accuracy in detecting object location from a dataset of 56,000 datapoints.',
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'Ai Voice Agent',
    description: 'This model is an advanced text-to-speech system that uses the power of large language models (LLM) for highly accurate and natural-sounding voice synthesis.',
    tech: ['PyTorch', 'Python', 'Gradio', 'LLMs', 'Nvidia Triton'],
    github: 'https://github.com/bharathgaddam1712/SyndicateSmashers',
    external: 'https://github.com/bharathgaddam1712/SyndicateSmashers',
    image: '/images/voice-agent.jpg',
    featured: true,
  },
  {
    title: 'Deep-Thinking-Trading-Bot',
    description: 'A Deep Thinking Trading system has many departments, each made up of sub-agents that use logical flows to make smart decisions.',
    tech: ['Multi-Agent LLMs', 'Langchain', 'GenAI'],
    github: 'https://github.com/bharathgaddam1712/Deep_Thinking_Trading_Bot',
    external: 'https://github.com/bharathgaddam1712/Deep_Thinking_Trading_Bot',
    image: '/images/trading-bot.jpg',
    featured: true,
  },
  {
    title: 'Fashion-Ai',
    description: 'The Fashion Visual Search & Intelligent Styling Assistant is a web application designed to help users browse, search, and discover fashion products.',
    tech: ['React', 'Express.js', 'MongoDB', 'VectorDB', 'GenAi'],
    github: 'https://github.com/bharathgaddam1712/Fashion_Ai',
    external: 'https://github.com/bharathgaddam1712/Fashion_Ai',
    image: '/images/fashion-ai.jpg',
    featured: true,
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: 'Multimodal Multi-Task Deep Learning Framework',
    description: 'Multimodal Multi-Task Deep Learning Framework for Classification of Sentiment, Emotion, Humor, Sarcasm and Toxicity from Speech',
    tech: ['Research Paper', 'Elsevier KBS (Accepted, May 2025).'],
    github: '',
    external: '',
    featured: false,
  },
  {
    title: 'Invoice Generator',
    description: 'Built using Qwen2.5-VL-7B-Instruct model to extract important information from invoices for better business understanding.',
    tech: ['Python', 'GenAi'],
    github: 'https://github.com/bharathgaddam1712/Invoice_extractor',
    external: 'https://github.com/bharathgaddam1712/Invoice_extractor',
    featured: false,
  },
  {
    title: 'JEE Test Analyzer',
    description: 'An AI-powered system to analyze student test data from JSON files, generate personalized feedback using the Gemini Pro model, and produce styled PDF reports with charts and insights.',
    tech: ['React', 'GenAi', 'Python'],
    github: 'https://github.com/bharathgaddam1712/Test_Analyses',
    external: 'https://github.com/bharathgaddam1712/Test_Analyses',
    featured: false,
  },
  {
    title: 'DebateGPT',
    description: 'Get a AI debate against you on any topic of your choice.',
    tech: ['GenAI', 'Python', 'FastAPI'],
    github: 'https://github.com/bharathgaddam1712/Debate-Bot',
    external: 'https://github.com/bharathgaddam1712/Debate-Bot',
    featured: false,
  },
  {
    title: 'Schemes Sage',
    description: 'Schemes Sage is a Retrievals-Augmented Generation (RAG)-based QA system designed to simplify access to Indian government schemes using natural language queries.',
    tech: ['langchain', 'GenAi', 'Streamlit'],
    github: 'https://github.com/bharathgaddam1712/Government-Schemes-QA-Bot',
    external: 'https://github.com/bharathgaddam1712/Government-Schemes-QA-Bot',
    featured: false,
  },
  {
    title: 'Mario.Ai',
    description: 'Used Reinforcement Learning to train Ai play Mario game.',
    tech: ['Reinforcement Learning(RL)', 'Pytorch', 'openGYM'],
    github: 'https://github.com/bharathgaddam1712/Mario.Ai',
    external: 'https://github.com/bharathgaddam1712/Mario.Ai',
    featured: false,
  }
];
