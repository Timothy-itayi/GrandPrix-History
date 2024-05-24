import React from 'react';
import ShowroomCarousel from '../ShowroomComponents/showroomCarousel'
import '../../styles/font.css'
const ShowroomCard = ({ imageUrls = [], title }) => {
  return (
    <>
    <div className="bg-white filter invert  rounded w-max text-center mb-10 p-4">
 <h5 className=" text-4xl text-center  font-bold text-black  dark:text-black">
    {title}
  </h5>
    </div>

        <div className="h-96 w-full"  >
          <ShowroomCarousel imageUrls={imageUrls} />
    
        </div>

    </>

  );
};

export default ShowroomCard;


