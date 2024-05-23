import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const useScrollAnimation = (delay = 0) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger multiple times
    threshold: 0.2, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView, controls, delay]);

  return [ref, controls];
};

export default useScrollAnimation;
