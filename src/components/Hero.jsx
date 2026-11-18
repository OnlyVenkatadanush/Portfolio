import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Play, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const terminalTabs = {
  intellex: {
    name: 'intellex.agent',
    command: 'python -m intellex.agent --task "autonomous-synthesis"',
    logs: [
      { text: '[LangGraph] Initialized agent DAG (nodes: 4, state: persistent)', type: 'gold', time: '+12ms' },
      { text: '[Agent: Planner] Decomposed research objective into 3 sub-graphs', type: 'white', time: '+45ms' },
      { text: '[Qdrant DB] Vector similarity search threshold: 0.941 (top-k=12)', type: 'champagne', time: '+118ms' },
      { text: '[Citation Engine] Cross-validated contradictions: 0 flags detected', type: 'white', time: '+210ms' },
      { text: '[Pipeline Complete] Generated peer-reviewed research synthesis', type: 'emerald', time: '✓ Done' },
    ],
  },
  medsys: {
    name: 'medsys.ai',
    command: 'fastapi run app.py --pipeline "clinical-ehr"',
    logs: [
      { text: '[Auth] JWT validated for role: Chief Medical Informatics', type: 'gold', time: '+8ms' },
      { text: '[PyMuPDF + Tesseract] Extracted 34 lab biomarkers from PDF', type: 'white', time: '+78ms' },
      { text: '[Graph Engine] Linked patient history to diagnostic ontology', type: 'champagne', time: '+142ms' },
      { text: '[MedGemma + LoRA] Context-aware inference: 98.6% confidence', type: 'white', time: '+310ms' },
      { text: '[Status 200 OK] Patient clinical graph updated in MongoDB', type: 'emerald', time: '✓ Saved' },
    ],
  },
  aliaswolf: {
    name: 'alias_wolf.py',
    command: 'python alias_wolf.py --user "danush" --async-threads 64',
    logs: [
      { text: '[Async Engine] Initialized 64 concurrent non-blocking workers', type: 'gold', time: '+4ms' },
      { text: '[Scanner] Checking platform headers & JSON availability APIs', type: 'white', time: '+62ms' },
      { text: '[Plugin: GitHub] Match confirmed -> github.com/OnlyVenkatadanush', type: 'champagne', time: '+120ms' },
      { text: '[Plugin: LeetCode] Profile indexed -> leetcode.com/u/venkatadanush', type: 'white', time: '+198ms' },
      { text: '[Summary] 48 platforms checked in 340ms | Exported JSON report', type: 'emerald', time: '✓ 100%' },
    ],
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('intellex');
  const [animKey, setAnimKey] = useState(0);

  const handleRun = () => {
    setAnimKey((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((curr) => {
        const keys = Object.keys(terminalTabs);
        const nextIdx = (keys.indexOf(curr) + 1) % keys.length;
        return keys[nextIdx];
      });
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const currentTab = terminalTabs[activeTab];

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        {/* Left Column: Bio & Call to Action */}
        <div className="hero__text">
          <div className="hero__status-pill">
            <span className="hero__status-dot" />
            <span>Open to AI Engineering &amp; SDE Roles · Bengaluru</span>
          </div>

          <h1 className="hero__title">
            Kotapati Venkata <span className="gradient-text">Danush</span>
          </h1>

          <div className="hero__role">
            <span>AI Systems Architect</span>
            <span className="hero__role-badge">LangGraph · RAG · FastAPI</span>
          </div>

          <p className="hero__description">
            Building scalable software systems specializing in multi-agent orchestration,
            clinical AI intelligence, high-concurrency tooling, and robust microservices.
            Pursuing B.E. in CS (AI &amp; ML) at CMRIT with a <strong>9.07 CGPA</strong>.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary" id="hero-projects-btn">
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="/Kotapati_Venkata_Danush_Resume.pdf"
              download="Kotapati_Venkata_Danush_Resume.pdf"
              className="hero__btn hero__btn--secondary"
              id="hero-resume-btn"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            <a href="#contact" className="hero__btn hero__btn--ghost" id="hero-contact-btn">
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">9.07</span>
              <span className="hero__stat-label">CGPA CMRIT</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">2</span>
              <span className="hero__stat-label">Patents Filed</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">3+</span>
              <span className="hero__stat-label">AI Platforms</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value gradient-text">IAMAI</span>
              <span className="hero__stat-label">Nat'l Finalist</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Terminal Widget */}
        <div className="hero__terminal">
          <div className="hero__terminal-glow" />

          <div className="hero__terminal-header">
            <div className="hero__terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="hero__terminal-tabs">
              {Object.entries(terminalTabs).map(([key, tab]) => (
                <button
                  key={key}
                  className={`hero__terminal-tab ${activeTab === key ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(key);
                    handleRun();
                  }}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hero__terminal-body" key={animKey + activeTab}>
            <div className="hero__terminal-lines">
              <div className="hero__terminal-line">
                <span className="hero__terminal-prompt">danush@ai-core:~$</span>
                <span className="hero__terminal-cmd">{currentTab.command}</span>
              </div>

              {currentTab.logs.map((log, idx) => (
                <div key={idx} className={`hero__terminal-log hero__terminal-log--${log.type}`}>
                  <span>{log.text}</span>
                  <span className="hero__terminal-time">{log.time}</span>
                </div>
              ))}
            </div>

            <div className="hero__terminal-footer">
              <button className="hero__terminal-run-btn" onClick={handleRun}>
                <Play size={13} fill="currentColor" />
                <span>Re-run Pipeline</span>
              </button>
              <div className="hero__terminal-status">
                <CheckCircle2 size={13} />
                <span>System Normal · 120 FPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
