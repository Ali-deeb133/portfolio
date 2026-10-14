import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface RotatingWordProps {
  words: string[];
  interval?: number; // ms each word stays
}

function RotatingWord({ words, interval = 2500 }: RotatingWordProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval, reduceMotion]);

  // Reduced motion: no rotation, show the last word
  const word = reduceMotion ? words[words.length - 1] : words[index];

  return (
    <>
      {/* Screen readers get all the words once, instead of a changing text */}
      <span className="sr-only">{words.join(', ')}</span>

      <span aria-hidden="true" className="inline-block">
        {/* mode="wait": the old word slides out before the new one slides in */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            className="inline-block font-semibold text-primary-dark"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {word}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}

export default RotatingWord;
