import React from 'react';
import ScrollToTop from '../components/LayoutComponents/scrollToTop';
import { motion } from 'framer-motion';
import ShowroomCard from '../components/ShowroomComponents/ShowroomCard';
import sounds from "../models/sounds";
import SoundPlayer from '../components/ShowroomComponents/soundPlayer';

import useScrollAnimation from '../hooks/useScrollAnimation'; 

const Showroom = () => {
  // Custom hook animation for SHowroom cards 
  const [ref1, animationControl1] = useScrollAnimation(0.3);
  const [ref2, animationControl2] = useScrollAnimation(0.3);
  const [ref3, animationControl3] = useScrollAnimation(0.3);
  const [ref4, animationControl4] = useScrollAnimation(0.3);
  return (
    <div className="flex justify-center">
      <ScrollToTop />
      <div className="max-w-2xl px-4">
        <h1 className="text-7xl text-white font-bold mb-4">Iconic Formula 1 Cars</h1>
        <p className="text-lg text-white mb-6">
        Discover the Legends: Dive into the thrilling world of iconic Formula 1 cars and uncover the stories behind their unforgettable journeys.
        </p>

<div ref={ref1} >
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationControl1}
            className="showroom-card"
          >
            <ShowroomCard
              imageUrls={[
                "/F1cars/Ferrari/f05.jpeg",
                "/F1cars/Ferrari/f00.png",
                "/F1cars/Ferrari/f01.jpeg",
                "/F1cars/Ferrari/f02.jpeg",
                "/F1cars/Ferrari/f03.jpeg",
                "/F1cars/Ferrari/f04.jpeg",
                "/F1cars/Ferrari/f06.png"

            
              ]}
              title="Ferrari's Favorite: The F2004"
            />
            <SoundPlayer selectedSound={sounds[0]} />
          </motion.div>
        </div>

        

        <div ref={ref2} >
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationControl2}
            className="showroom-card"
          >
            <ShowroomCard
              imageUrls={[
                "/F1cars/Mercedes/merc06.jpeg",
                "/F1cars/Mercedes/merc01.png",
                "/F1cars/Mercedes/merc04.png", 
                "/F1cars/Mercedes/merc00.png",  
                "/F1cars/Mercedes/merc02.jpeg",
                "/F1cars/Mercedes/merc03.png",
              
                "/F1cars/Mercedes/merc05.jpeg",
              
              ]}
              title="Mercedes Final Flash: The W11"
            />
            <SoundPlayer selectedSound={sounds[1]} />
          </motion.div>
        </div>

       
        <div ref={ref3} >
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationControl3}
            className="showroom-card"
          >
            <ShowroomCard
              imageUrls={[
                "/F1cars/Renault/renault00.jpg",
                "/F1cars/Renault/renault01.jpeg",
                "/F1cars/Renault/renault02.jpeg",
                "/F1cars/Renault/renault03.jpeg",
                "/F1cars/Renault/renault05.png",
                "/F1cars/Renault/renault04.jpg",
                "/F1cars/Renault/renault06.jpeg",
                
                
              ]}
              title="Renault's Reign: The R25/R26   "
            />
            <SoundPlayer selectedSound={sounds[2]} />
          </motion.div>
        </div>
        <div ref={ref4} >
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationControl4}
            className="showroom-card"
          >
            <ShowroomCard
              imageUrls={[
                "/F1cars/RedBull/rb00.jpeg",
                "/F1cars/RedBull/rb01.jpeg",
                "/F1cars/RedBull/rb02.png",
                "/F1cars/RedBull/rb03.png",
                "/F1cars/RedBull/rb04.png",
                "/F1cars/RedBull/rb05.png",
                "/F1cars/RedBull/rb06.png",
       
                
              ]}
              title="The RB19: Unleashing The Beast"
            />
            <SoundPlayer selectedSound={sounds[3]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Showroom;
