import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const useScrollAnimation = (delay = 0) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          delay,
          duration: 0.2,
        },
      });
    }
  }, [inView, controls, delay]);

  return [ref, controls];
};

export default useScrollAnimation;
