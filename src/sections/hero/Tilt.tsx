import type { PointerEvent, ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

const MAX_DEGREES = 6;
const spring = { stiffness: 150, damping: 20 };

// Tilts its children slightly in 3D toward the mouse cursor.
function Tilt({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  // Springs make the rotation ease toward the target instead of snapping
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    // Cursor position inside the element, from -0.5 (left/top) to 0.5 (right/bottom)
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 2 * MAX_DEGREES);
    rotateX.set(-y * 2 * MAX_DEGREES);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

export default Tilt;
