import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { a11y } from '../../shared/data/data';

// Bouncing arrow at the bottom of the hero. Only on large screens,
// where the hero fills exactly one screen.
function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label={a11y.scrollDown}
      // -ml-5 = half of its 40px width, to center it (Framer Motion owns "transform")
      className="absolute bottom-6 left-1/2 -ml-5 hidden rounded-full p-2 text-muted transition-colors hover:text-primary-dark lg:block"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <ChevronDown className="size-6" />
    </motion.a>
  );
}

export default ScrollIndicator;
