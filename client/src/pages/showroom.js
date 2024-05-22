import React from 'react';
import ScrollToTop from '../components/LayoutComponents/scrollToTop'
import Narrator from '../components/LayoutComponents/soundPlayer';



const Showroom = () => {
    

    return (
        <div className="flex justify-center">
        <ScrollToTop/>
      <div className="max-w-2xl px-4">
        <h1 className="text-7xl text-white font-bold mb-4">Iconic Formula 1 Cars</h1>
        <p className="text-lg text-white mb-6">
          Learn about the Iconic Formula 1 cars
        </p>
        <Narrator/>
        </div>
        </div>

    );
}

export default Showroom;
