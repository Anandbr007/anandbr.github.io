import type { LucideIcon } from 'lucide-react'
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  Server,
  Wrench,
  Bot,
  GitBranch,
  Layers,
  LineChart,
  Sparkles,
  Network,
  ScrollText,
  ShieldCheck,
} from 'lucide-react'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Exploring', href: '#exploring' },
  { label: 'Contact', href: '#contact' },
] as const

export const aboutParagraphs = [
  'I’m a software professional with experience in enterprise application testing, automation engineering, API validation, and cloud-based healthcare systems.',
  'During my professional journey, I have worked with Java, Selenium, REST APIs, SQL databases, and AWS-based systems. These experiences have helped me develop a strong understanding of software architecture, application behaviour, data validation, and engineering practices.',
  'Beyond my professional responsibilities, I actively explore Artificial Intelligence, Machine Learning, Generative AI, LLMs, and Agentic AI. I enjoy experimenting with new technologies and building practical projects that solve real-world problems.',
]

export const journey = [
  { label: 'Software quality engineering', detail: 'Enterprise and healthcare applications' },
  { label: 'Test automation & API validation', detail: 'Java, Selenium, TestNG, Cucumber, REST' },
  { label: 'AI & Generative AI', detail: 'Python, LLMs, RAG and agentic systems' },
]

export const technicalInterests = [
  'Generative AI',
  'Large Language Models',
  'RAG',
  'Agentic AI',
  'Machine Learning',
  'Python',
]

export interface SkillGroup {
  title: string
  icon: LucideIcon
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Programming Languages', icon: Code2, items: ['Java', 'Python', 'SQL'] },
  { title: 'Backend & Frameworks', icon: Server, items: ['Spring Boot', 'Flask', 'JDBC', 'REST APIs'] },
  { title: 'Automation & Testing', icon: FlaskConical, items: ['Selenium', 'TestNG', 'Cucumber', 'API Testing', 'Postman', 'Test Automation'] },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    items: ['Machine Learning', 'Generative AI', 'Large Language Models (LLMs)', 'LangChain', 'LangGraph', 'Retrieval-Augmented Generation (RAG)', 'AI Agents', 'Embeddings', 'Vector Databases'],
  },
  { title: 'Cloud & Databases', icon: Cloud, items: ['AWS', 'PostgreSQL', 'MySQL', 'DynamoDB'] },
  { title: 'Tools & Practices', icon: Wrench, items: ['Git', 'GitHub', 'CI/CD', 'Agile', 'SDLC'] },
]

export const experience = {
  role: 'Software Developer / QA Automation Engineer',
  company: 'UST',
  period: 'January 2024 – Present',
  highlight: 'Enterprise software quality engineering, with a growing interest in AI-driven engineering.',
  responsibilities: [
    'Worked on enterprise healthcare technology applications.',
    'Performed REST API testing and validation.',
    'Validated business rules, application workflows, and database interactions.',
    'Developed and maintained Java-based automation frameworks.',
    'Worked with Selenium, TestNG, Cucumber, and Spring Boot.',
    'Performed ETL and data migration testing.',
    'Validated data integrity, completeness, and consistency.',
    'Worked with PostgreSQL, MySQL, and AWS-hosted backend systems.',
    'Participated in Agile development, sprint planning, and CI/CD workflows.',
  ],
  stack: ['Java', 'Selenium', 'TestNG', 'Cucumber', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MySQL', 'AWS', 'CI/CD'],
}

export interface Project {
  id: string
  index: string
  title: string
  overview: string
  tech: string[]
  features: string[]
  architecture: string[]
  githubUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    id: 'agentic-resume-screening',
    index: '01',
    title: 'Agentic AI Resume Screening & Candidate Matching System',
    overview:
      'An AI-powered recruitment assistant that analyzes job descriptions, extracts essential requirements, searches resumes, ranks candidates, and generates detailed matching reports.',
    tech: ['Python', 'LangGraph', 'RAG', 'LLMs', 'Embeddings'],
    features: [
      'Job description analysis',
      'Must-have and nice-to-have skill extraction',
      'Resume parsing',
      'Candidate ranking',
      'Conversational refinement',
      'Candidate comparison',
      'Interview question generation',
      'Human feedback workflow',
    ],
    architecture: [
      'Job description intake',
      'Requirement extraction',
      'Resume parsing & embeddings',
      'RAG-based resume search',
      'Candidate ranking',
      'Matching report & human feedback',
    ],
    githubUrl: '[ADD GITHUB REPO URL]',
    demoUrl: '[ADD LIVE DEMO URL]',
  },
  {
    id: 'knowledge-assistant',
    index: '02',
    title: 'AI-Powered Knowledge Assistant',
    overview:
      'An intelligent document-based question-answering application that enables users to upload documents and retrieve relevant information through natural language queries.',
    tech: ['Python', 'LangChain', 'LLMs', 'RAG', 'Vector Databases'],
    features: [
      'Document ingestion',
      'Text extraction and chunking',
      'Embedding generation',
      'Vector database retrieval',
      'Semantic search',
      'Context-aware question answering',
    ],
    architecture: [
      'Document ingestion',
      'Text extraction & chunking',
      'Embedding generation',
      'Vector database',
      'Semantic retrieval',
      'Context-aware LLM answer',
    ],
    githubUrl: '[ADD GITHUB REPO URL]',
    demoUrl: '[ADD LIVE DEMO URL]',
  },
  {
    id: 'camouflage-detection',
    index: '03',
    title: 'Camouflage Target Detection Using Deep Learning',
    overview:
      'A deep-learning-based camouflage target detection system designed to identify concealed objects in complex visual environments.',
    tech: ['Python', 'Deep Learning', 'Computer Vision', 'Image Segmentation', 'ZoomNeXt'],
    features: [
      'Image segmentation',
      'Multi-scale feature extraction',
      'Dynamic Scale Attention Module (DSAM)',
      'ZoomNeXt architecture',
      'Model evaluation using camouflage detection datasets',
    ],
    architecture: [
      'Input image',
      'Multi-scale feature extraction',
      'Dynamic Scale Attention (DSAM)',
      'ZoomNeXt architecture',
      'Segmentation output',
    ],
    githubUrl: '[ADD GITHUB REPO URL]',
    demoUrl: '[ADD LIVE DEMO URL]',
  },
]

export interface Certification {
  name: string
  issuer?: string
  category: string
  icon: LucideIcon
  credentialUrl: string
}

export const certifications: Certification[] = [
  { name: 'Google Cloud Associate Cloud Engineer', issuer: 'Google Cloud', category: 'Cloud', icon: Cloud, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'Claude Developer Foundation', category: 'Generative AI', icon: Sparkles, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'IBM', category: 'Artificial Intelligence', icon: BrainCircuit, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'AI Fundamentals', issuer: 'Google', category: 'Artificial Intelligence', icon: Bot, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'AI for App Building', issuer: 'Google', category: 'Generative AI', icon: Layers, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM', category: 'Python & Data', icon: Code2, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'Machine Learning with Python', issuer: 'IBM', category: 'Machine Learning', icon: LineChart, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'Developing AI Applications with Python and Flask', issuer: 'IBM', category: 'AI Applications', icon: Server, credentialUrl: '[ADD CREDENTIAL URL]' },
  { name: 'Diploma in Cyber Security – Ethical Hacking', category: 'Security', icon: ShieldCheck, credentialUrl: '[ADD CREDENTIAL URL]' },
]

export const education = {
  degree: 'B.Tech – Computer Science and Engineering',
  college: 'Marian Engineering College',
  university: 'APJ Abdul Kalam Technological University',
  period: 'August 2019 – August 2023',
  cgpa: '7.64',
}

export interface ExploringItem {
  title: string
  description: string
  icon: LucideIcon
}

export const exploring: ExploringItem[] = [
  { title: 'Agentic AI', description: 'Agents that plan, call tools and complete multi-step tasks.', icon: Bot },
  { title: 'Multi-Agent Systems', description: 'Coordinating specialised agents through shared state and handoffs.', icon: Network },
  { title: 'Advanced RAG', description: 'Retrieval strategies, chunking and grounding for reliable answers.', icon: ScrollText },
  { title: 'LLM Application Development', description: 'Building product features on top of language models.', icon: Sparkles },
  { title: 'AI Application Integration', description: 'Connecting LLM workflows to existing services and data.', icon: GitBranch },
  { title: 'Machine Learning', description: 'Classical and deep learning models, evaluation and tuning.', icon: LineChart },
  { title: 'Python Development', description: 'Clean, testable Python for data and AI-driven services.', icon: Database },
  { title: 'Graph-based Workflows', description: 'Modelling agent logic as explicit, inspectable graphs.', icon: Layers },
]
