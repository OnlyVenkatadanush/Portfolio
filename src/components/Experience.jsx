import { useScrollReveal } from '../hooks/useScrollReveal';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const [headerRef, headerIn] = useScrollReveal();
  const [cardRef, cardIn]     = useScrollReveal();

  const responsibilities = [
    'Developed core application features across FastAPI backend services, MongoDB data models, and responsive frontend integrations.',
    'Implemented LangGraph-based AI agent workflows with LLM integrations for automated requirements analysis and structured generation.',
    'Led API integration, performance optimization, debugging, and end-to-end validation across the software development lifecycle.',
  ];

  const techTags = ['FastAPI', 'Python', 'LangGraph', 'LLM Integration', 'MongoDB', 'React', 'REST APIs', 'Agent Workflows'];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div
          ref={headerRef}
          className={`experience__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Industry Experience</span>
          <h2 className="experience__title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="experience__subtitle">
            Hands-on software engineering and AI agent development in high-velocity production environments
          </p>
        </div>

        <div className="experience__container">
          <div
            ref={cardRef}
            className={`experience-card sr sr--up ${cardIn ? 'in-view' : ''}`}
          >
            <div className="experience-card__glow" />

            <div className="experience-card__top">
              <div>
                <h3 className="experience-card__role">
                  <Briefcase size={22} className="gradient-text" />
                  AI Engineering Intern
                </h3>
                <p className="experience-card__company">AffineSurge Pvt. Ltd. (Tri9T AI)</p>
              </div>

              <span className="experience-card__duration">
                <Calendar size={14} />
                July 2026 – October 2026
              </span>
            </div>

            <ul className="experience-card__responsibilities">
              {responsibilities.map((resp, i) => (
                <li key={i} className="experience-card__resp-item">
                  <CheckCircle2 size={18} className="experience-card__resp-icon" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="experience-card__tags">
              {techTags.map((tag) => (
                <span key={tag} className="experience-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

