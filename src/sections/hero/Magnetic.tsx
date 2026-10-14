import type { PointerEvent, ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

const STRENGTH = 0.25; // how far the element follows the cursor (0 = not at all)
const spring = { stiffness: 200, damping: 15 };

// Pulls its children slightly toward the mouse cursor while hovered.
function Magnetic({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    // Distance from the element's center to the cursor
    x.set((event.clientX - (rect.left + rect.width / 2)) * STRENGTH);
    y.set((event.clientY - (rect.top + rect.height / 2)) * STRENGTH);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="inline-block"
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
