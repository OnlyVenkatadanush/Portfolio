import './App.css';
import SplineBackground from './components/SplineBackground';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Experience  from './components/Experience';
import Projects    from './components/Projects';
import Education   from './components/Education';
import Activities  from './components/Activities';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

export default function App() {
  return (
    <div className="app">
      {/* Fixed ambient Spline 3D scene — behind everything */}
      <SplineBackground />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
