import { useScrollReveal } from '../hooks/useScrollReveal';
import { Lightbulb, FileText, Trophy, Users, Award, Cpu } from 'lucide-react';
import './Activities.css';

const activities = [
  {
    title: 'Patent: Self-Tuning Arrhythmia Detection System',
    category: 'Patent Filed',
    desc: 'Invented an adaptive, multi-modal cardiac arrhythmia detection system featuring dynamic parameter self-tuning to process patient ECG telemetries and clinical indicators.',
    tags: ['Intellectual Property', 'Biomedical AI', 'Multi-Modal'],
    color: '#818cf8',
    icon: <Lightbulb size={24} />,
  },
  {
    title: 'Patent: Explainable AI for Glaucoma Detection',
    category: 'Patent Filed',
    desc: 'Architected an adaptive, explainable multi-modal AI framework for early glaucoma detection, combining fundus imaging, patient data, and visual diagnostic heatmaps.',
    tags: ['Intellectual Property', 'Explainable AI', 'Healthcare'],
    color: '#38bdf8',
    icon: <Cpu size={24} />,
  },
  {
    title: 'Research: Towards 4D Operating System Design',
    category: 'Research Paper',
    desc: 'Authored research publication "Towards the Next Generation: A 4-Dimensional Approach to Operating System Design", addressing memory hierarchy, multi-core scheduling, and AI coprocessors.',
    tags: ['Systems Architecture', 'Research Paper', 'Core OS'],
    color: '#c084fc',
    icon: <FileText size={24} />,
  },
  {
    title: 'Brainbot Club CMRIT — President & Tech Head',
    category: 'Technical Leadership',
    desc: 'Served sequentially as President, Secretary, Club Coordinator, and Technical Head of the Brainbot Club. Spearheaded hands-on workshops on Python, Machine Learning, and Agent Workflows.',
    tags: ['President', 'Technical Head', 'Community Leadership'],
    color: '#f59e0b',
    icon: <Users size={24} />,
  },
  {
    title: 'IAMAI Build @ IDS National Hackathon — Finalist',
    category: 'National Finalist',
    desc: 'Ranked among top national finalists at Build @ IDS organized by Internet and Mobile Association of India (IAMAI), engineering solutions for real-world enterprise problem statements.',
    tags: ['National Hackathon', 'IAMAI Finalist', 'Rapid Prototyping'],
    color: '#ec4899',
    icon: <Trophy size={24} />,
  },
  {
    title: 'RepoGenesis (IEEE) & Smart India Hackathon',
    category: 'Hackathons & Honors',
    desc: 'Earned Honorable Mention at RepoGenesis hosted by BMSCE IEEE Computer Society; competed in Internal Smart India Hackathon (SIH 2025) and AMBITION’25 at BIT.',
    tags: ['IEEE Honorable Mention', 'SIH 2025', 'AMBITION’25'],
    color: '#10b981',
    icon: <Award size={24} />,
  },
];

function ActivityCard({ activity, delay }) {
  const [ref, inView] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`activity-card sr sr--up sr-delay-${delay} ${inView ? 'in-view' : ''}`}
      style={{ '--activity-color': activity.color }}
      id={`activity-card-${delay}`}
    >
      <div className="activity-card__icon">{activity.icon}</div>
      <div className="activity-card__body">
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem',
            color: activity.color,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: 600,
            display: 'block',
            marginBottom: '4px',
          }}
        >
          {activity.category}
        </span>
        <h3 className="activity-card__title">{activity.title}</h3>
        <p className="activity-card__desc">{activity.desc}</p>
        <div className="activity-card__tags">
          {activity.tags.map((t) => (
            <span className="activity-card__tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="activity-card__accent" />
    </div>
  );
}

export default function Activities() {
  const [headerRef, headerIn] = useScrollReveal();

  return (
    <section className="activities" id="activities">
      <div className="activities__bg-blob" />
      <div className="container">
        <div
          ref={headerRef}
          className={`activities__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Honors &amp; Leadership</span>
          <h2 className="activities__title">
            Patents, Research &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="activities__subtitle">
            Patented inventions, systems research, national hackathon podiums, and student club leadership
          </p>
        </div>

        <div className="activities__grid">
          {activities.map((a, i) => (
            <ActivityCard key={i} activity={a} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
