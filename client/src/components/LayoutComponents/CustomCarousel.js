import React from 'react';
import { Carousel } from 'flowbite-react';
import ArrowButton from './ArrowButton'; // Adjust the import path as necessary

const CustomCarousel = ({ imageUrls = [] }) => {
  const options = {
    indicators: {
      activeClasses: 'bg-white dark:bg-black',
      inactiveClasses: 'bg-black dark:bg-gray-800/50 hover:bg-white dark:hover:bg-black',
    },
  };

  return (
    <div className="relative h-full w-full">
      <Carousel
        leftControl={<ArrowButton direction="left" className="text-2xl text-white" />}
        rightControl={<ArrowButton direction="right" className="text-2xl text-white" />}
        indicators={true}
        indicatoractiveclasses={options.indicators.activeClasses}
        indicatorinactiveclasses={options.indicators.inactiveClasses}
      >
        {Array.isArray(imageUrls) &&
          imageUrls.map((imageUrl) => (
            <div key={imageUrl}>
              <img
                className="object-cover w-full h-full"
                src={imageUrl}
                alt={`${imageUrl}`}
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
