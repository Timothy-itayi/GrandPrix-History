import React from 'react';
import ShowroomCarousel from '../ShowroomComponents/showroomCarousel'

const ShowroomCard = ({ imageUrls = [], title }) => {
  return (
    <div className="bg-black">
    <div>
      <div className=" p-4 bg-white rounded-lg">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-black dark:text-black">
          {title}
        </h5>
        
        <div className="h-96 w-full"  >
          <ShowroomCarousel imageUrls={imageUrls} />
     
        </div>
   
      </div>
    </div>
  </div>
  );
};

export default ShowroomCard;