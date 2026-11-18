import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Intellex — Multi-Agent Autonomous Research Platform',
    category: 'agentic',
    categoryLabel: 'Agentic AI & LLMs',
    color: '#818cf8',
    number: '01',
    description:
      'Autonomous research intelligence platform leveraging LangGraph, dynamic DAG orchestration, and vector retrieval to fully automate academic research, citation validation, and report synthesis.',
    highlights: [
      'Multi-agent state graph with specialized planner, retrieval & synthesis nodes',
      'Source credibility scoring, contradiction verification & automated citations',
      'Persistent memory & high-dimensional vector search powered by Qdrant',
      'FastAPI asynchronous microservices with real-time SSE streaming',
    ],
    stack: ['Python', 'FastAPI', 'React', 'LangGraph', 'LangChain', 'Qdrant', 'RAG', 'LLMs'],
    github: 'https://github.com/OnlyVenkatadanush',
  },
  {
    id: 2,
    title: 'MedSys AI — Clinical Intelligence Platform',
    category: 'healthcare',
    categoryLabel: 'Healthcare AI & RAG',
    color: '#38bdf8',
    number: '02',
    description:
      'Full-stack clinical intelligence system with role-based access, patient electronic health record extraction via PyMuPDF/OCR, and context-aware query resolution via fine-tuned MedGemma.',
    highlights: [
      'Automated medical PDF processing with PyMuPDF & Tesseract OCR for biomarker extraction',
      'Patient-specific knowledge graphs connecting longitudinal clinical history',
      'MedGemma foundation model with PEFT/LoRA adapter retrieval augmentation',
      'Role-based JWT authentication ensuring patient data isolation & HIPAA compliance',
    ],
    stack: ['Python', 'FastAPI', 'React', 'MongoDB', 'MedGemma', 'PEFT/LoRA', 'PyMuPDF', 'RAG'],
    github: 'https://github.com/OnlyVenkatadanush',
  },
  {
    id: 3,
    title: 'Alias Wolf — Intelligent Username Scanner',
    category: 'concurrency',
    categoryLabel: 'Concurrency & OSINT',
    color: '#ec4899',
    number: '03',
    description:
      'High-performance Python OSINT security tool built with asynchronous multi-threading and an extensible modular plugin architecture to query availability across 50+ platforms simultaneously.',
    highlights: [
      'Multi-threaded concurrent scanning engine with non-blocking asyncio HTTP/2 dispatch',
      'Modular plugin architecture enabling community additions and platform schema updates',
      'Structured JSON & CSV output reporting available and claimed namespaces',
      'Intelligent rate-limiting evasion and adaptive backoff retry policies',
    ],
    stack: ['Python', 'asyncio', 'BeautifulSoup', 'JSON', 'Threading', 'CLI Architecture'],
    github: 'https://github.com/OnlyVenkatadanush',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [headerRef, headerIn] = useScrollReveal();
  const [gridRef, gridIn]     = useScrollReveal();

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div
          ref={headerRef}
          className={`projects__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Engineering Showcase</span>
          <h2 className="projects__title">
            Featured <span className="gradient-text">Systems &amp; Platforms</span>
          </h2>
          <p className="projects__subtitle">
            Autonomous multi-agent architectures, clinical AI pipelines, and high-concurrency tooling
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects__filter">
          {[
            { id: 'all', label: 'All Projects (3)' },
            { id: 'agentic', label: 'Agentic AI & LLMs (1)' },
            { id: 'healthcare', label: 'Healthcare AI & RAG (1)' },
            { id: 'concurrency', label: 'Concurrency & OSINT (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`projects__filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className={`projects__grid sr sr--up ${gridIn ? 'in-view' : ''}`}
        >
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="project-card"
              style={{ '--project-color': p.color }}
              id={`project-card-${p.id}`}
            >
              <div>
                <div className="project-card__top">
                  <span className="project-card__number">{p.number}</span>
                  <span className="project-card__category">{p.categoryLabel}</span>
                </div>

                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>

                <ul className="project-card__highlights">
                  {p.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="project-card__bullet" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-card__stack">
                  {p.stack.map((s) => (
                    <span className="project-card__tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="project-card__footer">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    id={`project-github-${p.id}`}
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>

                  <div className="project-card__arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__cta">
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
