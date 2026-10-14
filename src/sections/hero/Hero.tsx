import { motion, type Variants } from 'framer-motion';
import Button from '../../shared/components/Button';
import { hero, site } from '../../shared/data/data';
import CodeEditor from './CodeEditor';
import HeroBackground from './HeroBackground';
import Magnetic from './Magnetic';
import RotatingWord from './RotatingWord';
import ScrollIndicator from './ScrollIndicator';
import Tilt from './Tilt';

// The container shows its children one after another (stagger);
// each child fades in while moving up.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Hero() {
  return (
    // "isolate" keeps the -z-10 background behind the text but above the page background
    <section id="home" className="relative isolate flex min-h-screen items-center">
      <HeroBackground />

      {/* Two columns on large screens; on smaller ones the editor goes below the text */}
      <motion.div
        className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-28 lg:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.h1 variants={item} className="text-5xl font-bold sm:text-6xl">
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-2xl font-semibold text-primary-dark sm:text-3xl"
          >
            {site.title}
          </motion.p>

          <motion.p variants={item} className="mt-6 text-xl text-muted sm:text-2xl">
            {hero.rotatingPrefix} <RotatingWord words={hero.rotatingWords} />
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <Button href="#projects">{hero.projectsButton}</Button>
            </Magnetic>
            <Magnetic>
              <Button href="#contact" variant="secondary">
                {hero.contactButton}
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div variants={item}>
          <Tilt>
            <CodeEditor snippets={hero.codeSnippets} />
          </Tilt>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;
