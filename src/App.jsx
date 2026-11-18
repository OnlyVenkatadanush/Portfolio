import './App.css';
import NeuralBackground  from './components/NeuralBackground';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import AboutBento        from './components/AboutBento';
import Experience        from './components/Experience';
import Projects          from './components/Projects';
import PatentsResearch   from './components/PatentsResearch';
import Education         from './components/Education';
import Contact           from './components/Contact';
import Footer            from './components/Footer';

export default function App() {
  return (
    <div className="app">
      {/* 100% Local, High-Performance Interactive Neural Background */}
      <NeuralBackground />

      <Navbar />
      <main>
        <Hero />
        <AboutBento />
        <Experience />
        <Projects />
        <PatentsResearch />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
