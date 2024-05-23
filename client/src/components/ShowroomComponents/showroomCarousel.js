import React from 'react';
import { Carousel } from 'flowbite-react';


const ShowroomCarousel = ({ imageUrls = [] }) => {
 
  return (
    <div className="relative h-full w-full">
      <Carousel
     
        pauseOnHover={true}
        slideInterval={8000}
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

export default ShowroomCarousel;
