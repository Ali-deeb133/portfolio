import { motion, useScroll } from 'framer-motion';

function ScrollProgressBar() {
  // scrollYProgress goes from 0 (top of page) to 1 (bottom)
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-primary"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgressBar;
