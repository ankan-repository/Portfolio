import NeuralCanvas from './components/NeuralCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Fixed layers */}
      <NeuralCanvas />
      <div className="noise-overlay" />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
