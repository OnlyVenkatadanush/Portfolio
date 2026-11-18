import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import './Education.css';

const education = [
  {
    id: 1,
    degree: 'B.E. — Computer Science (Artificial Intelligence & Machine Learning)',
    institution: 'CMR Institute of Technology',
    location: 'Bengaluru',
    year: '2023 – 2027 (Pursuing)',
    score: '9.07 CGPA',
    color: '#818cf8',
    note: 'Specializing in Agentic AI, Backend Engineering & Deep Learning',
  },
  {
    id: 2,
    degree: '12th Standard — Science',
    institution: 'Sri Chaitanya Techno School',
    location: 'Bengaluru',
    year: '2023',
    score: '88%',
    color: '#38bdf8',
    note: 'Physics, Chemistry, Mathematics & Computer Science',
  },
  {
    id: 3,
    degree: 'SSLC (10th Standard)',
    institution: "Sri Kumaran's English School",
    location: 'Bengaluru',
    year: '2021',
    score: '92.6%',
    color: '#ec4899',
    note: 'State Board Distinction',
  },
];

const coreFoundations = [
  { name: 'Data Structures & Algorithms', desc: 'Trees, Graphs, Dynamic Programming & Complexity Analysis' },
  { name: 'Operating Systems & Architecture', desc: 'Processes, Concurrency, Memory & 4D OS Design Research' },
  { name: 'Database Management Systems', desc: 'Relational (MySQL) & Document NoSQL (MongoDB), Indexing' },
  { name: 'Object-Oriented Programming', desc: 'Design Patterns, Modular Architecture, SOLID Principles' },
];

const languagesSpoken = [
  { lang: 'English', level: 'Professional Fluency' },
  { lang: 'Telugu', level: 'Native Speaker' },
  { lang: 'Kannada', level: 'Professional Fluency' },
  { lang: 'Hindi', level: 'Working Proficiency' },
];

const hobbies = ['Cooking & Culinary Arts', 'Solving Algorithmic Puzzles', 'Exploring Multi-Agent AI Frameworks'];

export default function Education() {
  const [headerRef, headerIn]     = useScrollReveal();
  const [timelineRef, timelineIn] = useScrollReveal();
  const [rightRef, rightIn]       = useScrollReveal();

  return (
    <section className="education" id="education">
      <div className="container">
        <div
          ref={headerRef}
          className={`education__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Academic Foundations</span>
          <h2 className="education__title">
            Education &amp; <span className="gradient-text">Core CS</span>
          </h2>
        </div>

        <div className="education__layout">
          {/* Timeline */}
          <div
            ref={timelineRef}
            className={`education__timeline sr sr--left ${timelineIn ? 'in-view' : ''}`}
          >
            {education.map((edu, i) => (
              <div
                className="edu-card"
                key={edu.id}
                style={{ '--edu-color': edu.color }}
                id={`edu-card-${edu.id}`}
              >
                <div className="edu-card__dot">
                  <GraduationCap size={22} />
                </div>
                {i < education.length - 1 && <div className="edu-card__line" />}

                <div className="edu-card__content">
                  <div className="edu-card__top">
                    <span className="edu-card__score">{edu.score}</span>
                    <span className="edu-card__year">{edu.year}</span>
                  </div>
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <p className="edu-card__institution">
                    {edu.institution}
                    <span className="edu-card__location">&nbsp;·&nbsp;{edu.location}</span>
                  </p>
                  <span className="edu-card__note">{edu.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div
            ref={rightRef}
            className={`education__right sr sr--right ${rightIn ? 'in-view' : ''}`}
          >
            {/* Core CS Foundations */}
            <h3 className="education__sub-title">Core Computer Science</h3>
            <div className="cert-list">
              {coreFoundations.map((item) => (
                <div
                  className="cert-item"
                  key={item.name}
                  id={`core-${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <div className="cert-item__icon-wrap">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <p className="cert-item__name">{item.name}</p>
                    <p className="cert-item__issuer">{item.desc}</p>
                  </div>
                  <div className="cert-item__badge">
                    <CheckCircle size={14} />
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <h3 className="education__sub-title" style={{ marginTop: '28px' }}>
              Linguistic Competency
            </h3>
            <div className="lang-tags">
              {languagesSpoken.map(({ lang, level }) => (
                <div key={lang} className="lang-tag" title={level}>
                  <span>{lang}</span>
                  <span style={{ opacity: 0.65, fontSize: '0.75rem', marginLeft: '6px' }}>({level})</span>
                </div>
              ))}
            </div>

            {/* Hobbies */}
            <h3 className="education__sub-title" style={{ marginTop: '28px' }}>
              Interests &amp; Hobbies
            </h3>
            <div className="hobby-list">
              {hobbies.map((h) => (
                <div className="hobby-item" key={h}>
                  <div className="hobby-item__dot" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
