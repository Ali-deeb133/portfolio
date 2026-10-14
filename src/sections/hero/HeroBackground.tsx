import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

const spring = { stiffness: 60, damping: 20 };

// Dot-grid pattern plus a soft glow that follows the cursor (devices with a mouse only).
function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  // Glow position in pixels, relative to the hero; springs make it trail smoothly
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Resting position (also the static state on touch devices and with reduced motion)
    x.jump(container.offsetWidth * 0.7);
    y.jump(container.offsetHeight * 0.35);

    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduceMotion || !hasMouse) return;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [reduceMotion, x, y]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Dot grid: one small dot repeated every 24px, faded out toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, var(--color-primary) 35%, transparent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Glow: a big blurred circle; negative margins center it on (x, y) */}
      <motion.div
        className="absolute left-0 top-0 -ml-64 -mt-64 size-[32rem] rounded-full bg-primary-light/25 blur-3xl"
        style={{ x, y }}
      />
    </div>
  );
}

export default HeroBackground;
