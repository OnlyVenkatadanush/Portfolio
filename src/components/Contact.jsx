import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import './Contact.css';

const contactInfo = [
  {
    label: 'Email (Personal)',
    value: 'kotapativenkatadanush@gmail.com',
    href: 'mailto:kotapativenkatadanush@gmail.com',
    id: 'contact-email',
    icon: <Mail size={18} />,
  },
  {
    label: 'Email (Academic)',
    value: 'koda23csaiml@cmrit.ac.in',
    href: 'mailto:koda23csaiml@cmrit.ac.in',
    id: 'contact-email-academic',
    icon: <Mail size={18} />,
  },
  {
    label: 'Phone',
    value: '+91 8431751929',
    href: 'tel:+918431751929',
    id: 'contact-phone',
    icon: <Phone size={18} />,
  },
  {
    label: 'Location',
    value: 'Vijinapura, Bengaluru, Karnataka 560016',
    href: 'https://maps.google.com/?q=Vijinapura,Bengaluru',
    id: 'contact-location',
    icon: <MapPin size={18} />,
  },
  {
    label: 'LinkedIn',
    value: 'in/kotapati-venkata-danush',
    href: 'https://www.linkedin.com/in/kotapati-venkata-danush/',
    id: 'contact-linkedin',
    icon: <LinkedinIcon size={18} />,
  },
  {
    label: 'GitHub',
    value: 'OnlyVenkatadanush',
    href: 'https://github.com/OnlyVenkatadanush',
    id: 'contact-github',
    icon: <GithubIcon size={18} />,
  },
  {
    label: 'LeetCode',
    value: 'u/venkatadanush',
    href: 'https://leetcode.com/u/venkatadanush/',
    id: 'contact-leetcode',
    icon: <LeetcodeIcon size={18} />,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const [headerRef, headerIn] = useScrollReveal();
  const [infoRef, infoIn]     = useScrollReveal();
  const [formRef, formIn]     = useScrollReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:kotapativenkatadanush@gmail.com?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.open(mailtoLink, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__bg-blob" />
      <div className="container">
        <div
          ref={headerRef}
          className={`contact__header sr sr--up ${headerIn ? 'in-view' : ''}`}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="contact__title">
            Let's build something <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="contact__subtitle">
            Open to software engineering roles, AI agent research, internships, and technical collaboration
          </p>
        </div>

        <div className="contact__layout">
          {/* Info */}
          <div ref={infoRef} className={`contact__info sr sr--left ${infoIn ? 'in-view' : ''}`}>
            <div className="contact__career">
              <h3 className="contact__career-title">Career Objective</h3>
              <p className="contact__career-text">
                Aspiring <strong>Software Engineer</strong> specializing in AI-driven application development,
                with hands-on experience in Python, backend engineering, LLM integration, and multi-agent systems.
                Driven to build scalable software solutions and intelligent products that solve critical real-world problems.
              </p>
            </div>

            <div className="contact__links">
              {contactInfo.map(({ icon, label, value, href, id }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') || href.startsWith('tel') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact__link-item"
                  id={id}
                >
                  <div className="contact__link-icon">{icon}</div>
                  <div>
                    <p className="contact__link-label">{label}</p>
                    <p className="contact__link-value">{value}</p>
                  </div>
                  <svg className="contact__link-arrow" viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            className={`contact__form sr sr--right ${formIn ? 'in-view' : ''}`}
            onSubmit={handleSubmit}
            id="contact-form"
          >
            {sent && (
              <div className="contact__success" id="contact-success-msg">
                <CheckCircle2 size={18} />
                Message prepared! Your mail client will open shortly to deliver your message.
              </div>
            )}
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email-input">Email</label>
                <input
                  id="contact-email-input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Collaboration / Project / Role opportunity"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Share project details, requirements, or say hello..."
                required
              />
            </div>
            <button type="submit" className="contact__submit-btn" id="contact-submit-btn">
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
