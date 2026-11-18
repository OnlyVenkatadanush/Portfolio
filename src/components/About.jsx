import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, GraduationCap, Sparkles } from 'lucide-react';
import danushPhoto from '../assets/danush.jpg';
import './About.css';

const skills = {
  'AI & LLM Systems': [
    'LangGraph',
    'LangChain',
    'LLM Integration',
    'PEFT / LoRA',
    'RAG',
    'Multi-Agent Systems',
    'Qdrant Vector DB',
  ],
  'Languages': ['Python', 'Java', 'C'],
  'Frameworks & Backend': ['FastAPI', 'ReactJS', 'NodeJS', 'REST APIs'],
  'Databases': ['MongoDB', 'MySQL'],
  'Core CS': ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript'],
};

const metaItems = [
  { label: 'Degree',         value: 'B.E. CS (AI & ML) — CMRIT' },
  { label: 'CGPA',           value: '9.07 (Pursuing, 2027)' },
  { label: 'Location',       value: 'Bengaluru, India' },
  { label: 'Languages',      value: 'English, Telugu, Kannada, Hindi' },
  { label: 'Date of Birth',  value: '3rd March 2006' },
  { label: 'Phone',          value: '+91 8431751929' },
];

export default function About() {
  const [textRef, textIn]   = useScrollReveal();
  const [photoRef, photoIn] = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about__bg-blob" />
      <div className="container">
        <div className="about__inner">

          {/* ── LEFT: Text ── */}
          <div
            ref={textRef}
            className={`about__text sr sr--left ${textIn ? 'in-view' : ''}`}
          >
            <span className="section-label">About Me</span>

            <h2 className="about__heading">
              Architecting intelligent systems &amp;{' '}
              <span className="gradient-text">autonomous agents</span>
            </h2>

            <p className="about__desc">
              I'm <strong>Kotapati Venkata Danush</strong> — an AI-focused software engineer pursuing my
              Bachelor of Engineering in <strong>Computer Science (Artificial Intelligence and Machine Learning)</strong> at
              CMR Institute of Technology, Bengaluru, with an academic record of <strong>9.07 CGPA</strong>.
            </p>
            <p className="about__desc">
              From engineering multi-agent autonomous research workflows using LangGraph and vector retrieval
              to deploying clinical intelligence systems with MedGemma and LoRA adapters, I thrive at the
              intersection of robust backend architecture, scalable microservices, and practical agentic AI.
            </p>

            {/* Skills grid */}
            <div className="about__skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div className="about__skill-group" key={category}>
                  <span className="about__skill-cat">{category}</span>
                  <div className="about__skill-tags">
                    {items.map((item) => (
                      <span className="about__skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Meta */}
            <div className="about__meta">
              {metaItems.map(({ label, value }) => (
                <div className="about__meta-item" key={label}>
                  <span className="about__meta-label">{label}</span>
                  <span className="about__meta-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="about__actions">
              <a href="#contact" className="about__btn about__btn--primary" id="about-contact-btn">
                <Sparkles size={16} />
                Let's Collaborate
              </a>
              <a
                href="mailto:kotapativenkatadanush@gmail.com"
                className="about__btn about__btn--ghost"
                id="about-email-btn"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </div>

          {/* ── RIGHT: Profile Photo & Credentials Card ── */}
          <div
            ref={photoRef}
            className={`about__right-col sr sr--right ${photoIn ? 'in-view' : ''}`}
          >
            {/* Availability badge */}
            <div className="about__badge">
              <span className="about__badge-dot" />
              <span>Available for AI / Software Engineering Roles</span>
            </div>

            {/* Photo Card */}
            <div className="about__photo-container">
              <div className="about__photo-glow" />
              <img
                src={danushPhoto}
                alt="Kotapati Venkata Danush"
                className="about__photo-img"
              />
              <div className="about__photo-overlay">
                <span className="about__photo-name">Kotapati Venkata Danush</span>
                <span className="about__photo-title">AI Engineer &amp; Full-Stack Developer</span>
              </div>
            </div>

            {/* Education card */}
            <div className="about__edu-card">
              <div className="about__edu-icon-wrap">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="about__edu-title">B.E. Computer Science (AI &amp; ML)</p>
                <p className="about__edu-sub">CMR Institute of Technology · 9.07 CGPA (2027)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
