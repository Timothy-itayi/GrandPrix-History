import React from 'react';

import BlogCard from '../components/GrandprixComponents/blogCardComponent';
import ScrollToTop from '../components/LayoutComponents/scrollToTop';

const Grandprix = () => {
  return (
    
    <div className="flex justify-center">
        <ScrollToTop/>
      <div className="max-w-2xl px-4">
        <h1 className="text-3xl text-white font-bold mb-4">Explore the Formula 1 Tracks for 2024</h1>
        <p className="text-lg text-white mb-6">
          Explore the iconic Formula 1 tracks scheduled for the 2024 season. From the historic streets of Monaco to the thrilling corners of Suzuka, each track offers its own unique challenges and breathtaking moments.
        </p>
        <div className="overflow-hidden animate-fade-up ">
      
        <div>
      
  <BlogCard 
  imageUrls={[
    "/f1Tracks/Bahrain-circuit.png",
    
    "/grandprix/BahrainGP/bahrain01.jpeg",
   
    

  ]}
  title="Bahrain Grand Prix"
  
 description="The Bahrain Grand Prix, held annually at the Bahrain International Circuit, is a prominent fixture on the Formula 1 calendar, renowned for its thrilling races and unique setting. One of the distinctive features of the Bahrain Grand Prix is its status as Formula 1's first-ever night race in the Middle East. Beyond its innovative racing format, the Bahrain Grand Prix holds historical significance as the first Formula 1 race to be held in the Middle East, paving the way for the region's growing influence in motorsport. 

 The Circuit boasts 15 challenging turns, offering drivers a mix of high-speed straights and technical corners to navigate. With a track length of approximately 5.4 kilometers, the circuit provides ample opportunities for overtaking and wheel-to-wheel racing. Additionally, the circuit features two designated DRS (Drag Reduction System) zones strategically placed along the track to facilitate overtaking maneuvers. Drivers push their cars to the limit, reaching top speeds of over 320 kilometers per hour on the circuit's long straights. As one of the most thrilling races on the Formula 1 calendar, the Bahrain Grand Prix continues to captivate audiences worldwide with its adrenaline-fueled action and unforgettable moments."
>

  </BlogCard>
  <div className="py-10">
  <BlogCard
  imageUrls={[
    "/f1Tracks/JeddahCircuit.png",

    "/grandprix/Saudi_ArabianGP/jeddah.jpg"
  ]}
  title="Saudi Arabian Grand Prix"
description="The race between Max Verstappen and Lewis Hamilton at the Saudi Arabian Grand Prix was nothing short of intense and captivating. With both drivers vying for the championship title, every maneuver and strategy became crucial in determining the outcome of the race. As the lights went out, Verstappen and Hamilton engaged in a fierce battle, exchanging positions multiple times throughout the race. The high-speed nature of the Jeddah Corniche Circuit added an extra layer of excitement, with drivers reaching top speeds exceeding 320 kilometers per hour on the long straights. With 27 challenging corners and two strategically placed DRS zones, the circuit provided ample opportunities for overtaking and daring maneuvers. In the end, it was Verstappen who emerged victorious, clinching a crucial victory in the championship battle. However, the race served as a reminder of the fierce rivalry between Verstappen and Hamilton, setting the stage for more thrilling battles in the races to come.">
    

  </BlogCard>
  </div>
 <div>
 <BlogCard
  imageUrls={[
    "/f1Tracks/AusGp.png",

    "/grandprix/AustralianGP/ausGP.avif"
  ]}
  title="Melbourne Grand Prix"
  description="The Melbourne Grand Prix Circuit has evolved over the years, 
  adapting to meet modern standards while retaining its unique character.
   It has witnessed iconic moments, including Ralf Schumacher's dramatic crash in 2002, 
   highlighting the circuit's role in Formula 1 history. Despite changes, its allure remains, 
   attracting fans worldwide to witness thrilling races on its challenging track.
   The Melbourne Grand Prix Circuit spans approximately 5.3 kilometers, 
   featuring 16 challenging turns. With top speeds reaching over 320 kilometers per hour,
    it offers a blend of fast straights and technical corners.
     The circuit typically includes two DRS (Drag Reduction System) 
     zones strategically positioned to facilitate overtaking opportunities,
      adding excitement to races.">
    

  </BlogCard>
 </div>
</div>
   
        </div>
      </div>
    </div>
  );
};



export default Grandprix;
