import React from 'react';
import ScrollToTop from '../components/LayoutComponents/scrollToTop';
import { motion } from 'framer-motion';
import ShowroomCard from '../components/ShowroomComponents/ShowroomCard';
import sounds from "../models/sounds";
import SoundPlayer from '../components/LayoutComponents/soundPlayer';
import '../styles/showroom.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Adjust the import path as needed

const Showroom = () => {
  // Use custom scroll animation hook with increasing delay
  const [ref1, animationControl1] = useScrollAnimation(0.5);
  const [ref2, animationControl2] = useScrollAnimation(0.5);
  const [ref3, animationControl3] = useScrollAnimation(0.5);

  return (
    <div className="flex justify-center  ">
      <ScrollToTop />
      <div className="max-w-2xl px-4 ">
       
 <h1 className="text-7xl text-white font-bold mb-4">Iconic Formula 1 Cars</h1>
        <p className="text-lg text-white mb-6">
          Learn about the most iconic cars in Formula 1 history.
        </p>
        
       

        <div ref={ref1} >
          <motion.div
            initial={{ opacity: 0, x: '0'}}
            animate={animationControl1}
            className="showroom-card"
          >
            <ShowroomCard
              imageUrls={[
                "/F1cars/Ferrari/f00.png",
                "/F1cars/Ferrari/f01.jpeg",
                "/F1cars/Ferrari/f02.jpeg",
                "/F1cars/Ferrari/f03.jpeg"
              ]}
              title="Ferrari's F2004"
            />
            <SoundPlayer selectedSound={sounds[0]} />
          </motion.div>
        </div>

        <div ref={ref2} className="py-5">
          <motion.div
            initial={{ opacity: 0, x: '0'}}
            animate={animationControl2}
            className="showroom-card"
          >
            <ShowroomCard
              imageUrls={[
                "/F1cars/Mercedes/merc00.png",
                "/F1cars/Mercedes/merc01.png",
                "/F1cars/Mercedes/merc02.jpeg",
                "/F1cars/Mercedes/merc03.jpeg"
              ]}
              title="Mercedes' W11"
            />
            <SoundPlayer selectedSound={sounds[1]} />
          </motion.div>
        </div>

        <div ref={ref3} className="py-5">
          <motion.div
            initial={{ opacity: 0, x: '0' }}
            animate={animationControl3}
            className="showroom-card"
          >
            <ShowroomCard
              imageUrls={[
                "/F1cars/Renault/r00.jpeg",
                "/F1cars/Renault/renault01.jpeg",
                "/F1cars/Renault/renault02.png",
                "/F1cars/Renault/renault03.jpeg",
                "/F1cars/Renault/renault04.jpeg"
              ]}
              title="Renault R25-R26"
            />
            <SoundPlayer selectedSound={sounds[2]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Showroom;
