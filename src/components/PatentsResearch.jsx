import { useScrollReveal } from '../hooks/useScrollReveal';
import { Lightbulb, Eye, Cpu } from 'lucide-react';
import './PatentsResearch.css';

const researchItems = [
  {
    type: 'Patent Filed',
    badgeClass: 'patent',
    icon: <Lightbulb size={22} />,
    title: 'Self-Tuning Multi-Modal Arrhythmia Detection System',
    desc: 'An intelligent biomedical AI system designed to dynamically auto-tune multi-modal detection parameters based on real-time ECG telemetry and patient physiological baselines.',
    highlights: [
      'Autonomous threshold calibration mitigating signal noise & motion artifacts',
      'Multi-modal fusion of cardiovascular indicators & waveform metrics',
      'Ultra low-latency classification for critical alert dispatch',
    ],
    tags: ['Biomedical AI', 'ECG Waveforms', 'Self-Tuning', 'Multi-Modal'],
  },
  {
    type: 'Patent Filed',
    badgeClass: 'patent',
    icon: <Eye size={22} />,
    title: 'Adaptive & Explainable Multi-Modal AI for Glaucoma Detection',
    desc: 'A diagnostic computer vision architecture combining fundus photography, optic nerve morphology, and explainable AI heatmaps for early asymptomatic glaucoma screening.',
    highlights: [
      'Multi-modal feature alignment combining structural retinal images & clinical history',
      'Explainable visual attention maps assisting ophthalmological review',
      'High specificity designed for automated primary screening clinics',
    ],
    tags: ['Ophthalmic AI', 'Explainable AI (XAI)', 'Computer Vision', 'Healthcare'],
  },
  {
    type: 'Research Paper',
    badgeClass: 'paper',
    icon: <Cpu size={22} />,
    title: 'Towards Next-Gen: 4D Approach to Operating System Design',
    desc: 'Published systems research paper exploring a 4-dimensional architectural paradigm addressing multi-core concurrency, dynamic memory hierarchy, and AI acceleration.',
    highlights: [
      '4D scheduling space addressing temporal, spatial, energy & workload dimensions',
      'Hardware-aware coprocessor dispatch avoiding monolithic kernel bottlenecks',
      'Experimental benchmark validation against standard POSIX primitives',
    ],
    tags: ['Operating Systems', 'Kernel Architecture', 'Concurrency', 'Research Paper'],
  },
];

export default function PatentsResearch() {
  const [headerRef, headerIn] = useScrollReveal();
  const [gridRef, gridIn]     = useScrollReveal();

  return (
    <section className="patents-research" id="patents">
      <div className="container">
        <div
          ref={headerRef}
          className={`patents-research__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Intellectual Property</span>
          <h2 className="patents-research__title">
            Patents &amp; Systems <span className="gradient-text">Research</span>
          </h2>
          <p className="patents-research__subtitle">
            Pioneering patented biomedical AI innovations and foundational operating systems architecture
          </p>
        </div>

        <div
          ref={gridRef}
          className={`patents-research__grid sr sr--up ${gridIn ? 'in-view' : ''}`}
        >
          {researchItems.map((item, idx) => (
            <article className="patent-card" key={idx}>
              <div>
                <div className="patent-card__top">
                  <span
                    className={`patent-card__badge ${
                      item.badgeClass === 'paper' ? 'patent-card__badge--paper' : ''
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="patent-card__icon-box">{item.icon}</div>
                </div>

                <h3 className="patent-card__title">{item.title}</h3>
                <p className="patent-card__desc">{item.desc}</p>

                <ul className="patent-card__highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="patent-card__hl-item">
                      <span className="patent-card__hl-dot" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="patent-card__tags">
                {item.tags.map((t) => (
                  <span key={t} className="patent-card__tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

