import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Intellex — Multi-Agent Autonomous Research Platform',
    category: 'Agentic AI / Multi-Agent Systems',
    color: '#818cf8',
    number: '01',
    description:
      'An agentic AI research platform leveraging LangGraph, RAG, and LLMs to fully automate research, fact-checking, citation validation, and comprehensive report generation workflows.',
    highlights: [
      'Dynamic multi-agent orchestration for specialized query breakdown and recursive research',
      'Source credibility scoring, contradiction detection, and automated citation synthesis',
      'Multi-modal information retrieval with persistent memory powered by Qdrant vector database',
      'End-to-end full-stack integration with FastAPI backend and reactive client dashboard',
    ],
    stack: ['Python', 'FastAPI', 'React', 'LangGraph', 'LangChain', 'Qdrant', 'RAG', 'LLMs'],
    github: 'https://github.com/OnlyVenkatadanush',
  },
  {
    id: 2,
    title: 'MedSys AI — Clinical Intelligence Platform',
    category: 'Healthcare AI / Full-Stack & RAG',
    color: '#38bdf8',
    number: '02',
    description:
      'A full-stack clinical intelligence platform featuring role-based access control, secure JWT authentication, and patient-specific medical knowledge graph construction.',
    highlights: [
      'Automated medical lab PDF processing using PyMuPDF and Tesseract OCR for data extraction',
      'Patient-specific knowledge graphs connecting longitudinal medical history and diagnostic data',
      'Context-aware clinical query retrieval powered by MedGemma, LoRA adapters, and RAG',
      'Structured electronic health record (EHR) indexing and timeline visualization',
    ],
    stack: ['Python', 'FastAPI', 'React', 'MongoDB', 'MedGemma', 'PEFT/LoRA', 'PyMuPDF', 'RAG'],
    github: 'https://github.com/OnlyVenkatadanush',
  },
  {
    id: 3,
    title: 'Alias Wolf — Intelligent Username Scanner',
    category: 'Security Tooling & Multi-Threading',
    color: '#ec4899',
    number: '03',
    description:
      'A high-performance Python OSINT tool designed to concurrently scan and verify username availability across dozens of web platforms with exceptional throughput and precision.',
    highlights: [
      'High-performance multi-threaded and asynchronous scanning mechanism for real-time throughput',
      'Modular plugin architecture enabling seamless platform extensions and community rules',
      'Structured classification reporting in JSON/CSV for available and registered handles',
      'Resilient network retry logic and rate-limit mitigation strategies',
    ],
    stack: ['Python', 'asyncio', 'BeautifulSoup', 'JSON', 'Threading', 'CLI Architecture'],
    github: 'https://github.com/OnlyVenkatadanush',
  },
];

function ProjectCard({ project, delay }) {
  const [ref, inView] = useScrollReveal();
  return (
    <article
      ref={ref}
      className={`project-card sr sr--up sr-delay-${delay} ${inView ? 'in-view' : ''}`}
      style={{ '--project-color': project.color }}
      id={`project-card-${project.id}`}
    >
      <div className="project-card__top">
        <span className="project-card__number">{project.number}</span>
        <span className="project-card__category">{project.category}</span>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <ul className="project-card__highlights">
        {project.highlights.map((h) => (
          <li key={h}>
            <span className="project-card__bullet" />
            {h}
          </li>
        ))}
      </ul>
      <div className="project-card__stack">
        {project.stack.map((s) => (
          <span className="project-card__tag" key={s}>
            {s}
          </span>
        ))}
      </div>
      <div className="project-card__footer">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
          id={`project-github-${project.id}`}
        >
          <GithubIcon size={16} />
          <span>View on GitHub</span>
        </a>
        <div className="project-card__arrow">
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div className="project-card__glow" />
    </article>
  );
}

export default function Projects() {
  const [headerRef, headerIn] = useScrollReveal();

  return (
    <section className="projects" id="projects">
      <div className="projects__bg-blob" />
      <div className="container">
        <div
          ref={headerRef}
          className={`projects__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Engineering Portfolio</span>
          <h2 className="projects__title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects__subtitle">
            Autonomous agent frameworks, medical AI platforms, and high-concurrency tooling
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i + 1} />
          ))}
        </div>

        <div className="projects__cta sr sr--up">
          <a
            href="https://github.com/OnlyVenkatadanush"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__github-btn"
            id="projects-github-btn"
          >
            <GithubIcon size={18} />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
