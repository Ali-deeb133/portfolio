import { MotionConfig } from 'framer-motion';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Hero from './sections/hero/Hero';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';
import { a11y } from './shared/data/data';
import Footer from './shared/components/Footer';
import Navbar from './shared/components/Navbar';
import ScrollProgressBar from './shared/components/ScrollProgressBar';

function App() {
  return (
    // reducedMotion="user": Framer Motion skips movement animations
    // for visitors who turned on "reduce motion" in their system settings
    <MotionConfig reducedMotion="user">
      {/* Hidden until focused with Tab: lets keyboard users jump past the navbar */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:font-semibold focus:shadow-md"
      >
        {a11y.skipToContent}
      </a>
      <ScrollProgressBar />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
