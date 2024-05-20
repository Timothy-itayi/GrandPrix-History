import React, { useState, useEffect, useRef } from 'react';


const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const projectsRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-10 right-10 py-2 px-4 rounded-lg name-font text-white bg-red-900 z-50"
          onClick={scrollToTop}
        >
           Return to Top
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
