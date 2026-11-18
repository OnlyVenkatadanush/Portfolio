import { useScrollReveal } from '../hooks/useScrollReveal';
import { Cpu, Users, GraduationCap, Globe, MapPin, Mail, Phone } from 'lucide-react';
import danushPhoto from '../assets/danush.jpg';
import './AboutBento.css';

export default function AboutBento() {
  const [headerRef, headerIn] = useScrollReveal();
  const [gridRef, gridIn]     = useScrollReveal();

  const techCategories = [
    {
      label: 'Agentic AI & LLMs',
      tags: ['LangGraph', 'LangChain', 'PEFT/LoRA', 'RAG', 'Multi-Agent', 'Qdrant'],
    },
    {
      label: 'Languages & Backend',
      tags: ['Python', 'FastAPI', 'Java', 'C', 'NodeJS', 'REST APIs'],
    },
    {
      label: 'Databases & Web',
      tags: ['MongoDB', 'MySQL', 'ReactJS', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      label: 'Core CS Foundations',
      tags: ['DSA', 'OOP', 'DBMS', 'Operating Systems Architecture'],
    },
  ];

  return (
    <section className="about-bento" id="about">
      <div className="container">
        <div
          ref={headerRef}
          className={`about-bento__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Architecture &amp; Profile</span>
          <h2 className="about-bento__title">
            Bento <span className="gradient-text">Overview</span>
          </h2>
          <p className="about-bento__subtitle">
            A comprehensive look at engineering skills, academic rigor, and leadership capabilities
          </p>
        </div>

        <div
          ref={gridRef}
          className={`bento-grid sr sr--up ${gridIn ? 'in-view' : ''}`}
        >
          {/* Card 1: Main Profile Card */}
          <div className="bento-card bento-card--profile">
            <div className="bento-profile__img-wrap">
              <img
                src={danushPhoto}
                alt="Kotapati Venkata Danush"
                className="bento-profile__img"
              />
            </div>

            <div className="bento-profile__details">
              <span className="bento-profile__badge">Software Engineer · AI Focus</span>
              <h3 className="bento-profile__name">Kotapati Venkata Danush</h3>
              <p className="bento-profile__role">CMRIT Bengaluru · B.E. CS (AIML) 2023–2027</p>

              <p className="bento-profile__bio">
                Focused on designing robust agentic workflows, microservices, and clinical AI
                intelligence. Passionate about translating cutting-edge LLM paradigms into
                production-ready software solutions with high performance and reliability.
              </p>

              <div className="bento-profile__chips">
                <span className="bento-profile__chip">
                  <MapPin size={12} /> Bengaluru, Karnataka
                </span>
                <span className="bento-profile__chip">
                  <Mail size={12} /> kotapativenkatadanush@gmail.com
                </span>
                <span className="bento-profile__chip">
                  <Phone size={12} /> +91 8431751929
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Tech Matrix */}
          <div className="bento-card bento-card--tech">
            <div className="bento-title-row">
              <Cpu size={20} className="gradient-text" />
              <h4 className="bento-title">Technical Matrix</h4>
            </div>

            <div className="bento-tech__categories">
              {techCategories.map((cat) => (
                <div key={cat.label} className="bento-tech__group">
                  <span className="bento-tech__label">{cat.label}</span>
                  <div className="bento-tech__tags">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="bento-tech__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Technical Leadership */}
          <div className="bento-card bento-card--leadership">
            <div className="bento-title-row">
              <Users size={20} className="gradient-text" />
              <h4 className="bento-title">Leadership &amp; Community</h4>
            </div>

            <p className="bento-lead__desc">
              Served as key executive officer of the <strong>Brainbot Club CMRIT</strong>, mentoring
              peers and driving technical workshops in Python, Machine Learning, and Agent Workflows.
              Class Representative from 2024 to present.
            </p>

            <div className="bento-lead__roles">
              <span className="bento-lead__role">President</span>
              <span className="bento-lead__role">Secretary</span>
              <span className="bento-lead__role">Technical Head</span>
              <span className="bento-lead__role">Class Rep</span>
            </div>
          </div>

          {/* Card 4: Academic Metrics */}
          <div className="bento-card bento-card--academics">
            <div className="bento-title-row">
              <GraduationCap size={20} className="gradient-text" />
              <h4 className="bento-title">Academic Record</h4>
            </div>

            <div>
              <div className="bento-academics__score gradient-text">9.07</div>
              <p className="bento-academics__degree">B.E. Computer Science (AI &amp; ML)</p>
              <p className="bento-academics__inst">CMR Institute of Technology · Class of 2027</p>
            </div>
          </div>

          {/* Card 5: Languages & Culture */}
          <div className="bento-card bento-card--personal">
            <div className="bento-title-row">
              <Globe size={20} className="gradient-text" />
              <h4 className="bento-title">Linguistics &amp; Interests</h4>
            </div>

            <div>
              <div className="bento-personal__item">
                <span className="bento-personal__label">Linguistic Competency</span>
                <p className="bento-personal__val">English, Telugu, Kannada, Hindi</p>
              </div>

              <div className="bento-personal__item">
                <span className="bento-personal__label">Passions &amp; Hobbies</span>
                <p className="bento-personal__val">Cooking, Solving Puzzles, AI Research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
