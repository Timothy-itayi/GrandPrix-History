import React, { useEffect } from 'react';
import ScrollToTop from '../components/LayoutComponents/scrollToTop';
import ScrollMagic from 'scrollmagic';
import ShowroomCard from '../components/ShowroomComponents/ShowroomCard';
import sounds from "../models/sounds";
import SoundPlayer from '../components/LayoutComponents/soundPlayer';
import '../styles/showroom.css'

const Showroom = () => {
    useEffect(() => {
        // Initialize ScrollMagic controller
        const controller = new ScrollMagic.Controller();

        // Create ScrollMagic scene for each card
        const cards = document.querySelectorAll(".showroom-card");
        cards.forEach((_, index) => {
            const triggerElement = `#trigger${index }`;
            const revealElement = `#reveal${index }`;

            new ScrollMagic.Scene({
              triggerElement: triggerElement,
              triggerHook: 0.9, // Trigger when 90% of element is visible
              duration: "100%", // Show the element for its full height
              offset: 0  // Adjusted offset for each card
            })
            .setClassToggle(revealElement, "visible") // Add class to reveal
            .addTo(controller);
        });
    }, []);

    return (
        <div className="flex justify-center">
            <ScrollToTop />
            <div className="max-w-2xl px-4">
                <h1 className="text-7xl text-white font-bold mb-4">Iconic Formula 1 Cars</h1>
                <p className="text-lg text-white mb-6">
                    Learn about the Iconic Formula 1 cars
                </p>
                <div className="spacer s0 "></div>
                {/* Add showroom cards with a common class */}
                <div className="py-20 ">
                    <div className="showroom-card">
                        <div id="trigger1" className="spacer s0"></div>
                        <div id="reveal1" className="box1 white visible">
                            <ShowroomCard
                                imageUrls={["/F1cars/Ferrari/f00.png",
                                "/F1cars/Ferrari/f01.jpeg",
                                "/F1cars/Ferrari/f02.jpeg",
                                "/F1cars/Ferrari/f03.jpeg"


                                ]}
                                title="Ferrari's F2004"
                            />
                            <SoundPlayer selectedSound={sounds[0]} />
                        </div>
                    </div>
                    
                    <div className="showroom-card">
                        <div id="trigger2" className="spacer s0"></div>
                        <div id="reveal2" className="box2 white visible">
                            <ShowroomCard
                                imageUrls={["/F1cars/Mercedes/merc00.png",
                                "/F1cars/Mercedes/merc01.png",
                                "/F1cars/Mercedes/merc02.jpeg",
                                "/F1cars/Mercedes/merc03.jpeg"

                                ]}
                                title="Mercedes' W11"
                            />
                            <SoundPlayer selectedSound={sounds[1]} />
                        </div>
                    </div>
                    <div className="showroom-card">
                        <div id="trigger3" className="spacer s0"></div>
                        <div id="reveal3" className="box3 white visible">
                            <ShowroomCard
                                imageUrls={["/F1cars/Renault/r00.jpeg",
                                "/F1cars/Renault/renault01.jpeg",
                                "/F1cars/Renault/renault02.png",
                                "/F1cars/Renault/renault03.jpeg",
                                "/F1cars/Renault/renault04.jpeg"
                         

                                ]}
                                title="Renault R25-R26"
                            />
                            <SoundPlayer selectedSound={sounds[2]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showroom;
