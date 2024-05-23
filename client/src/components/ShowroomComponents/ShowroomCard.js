import React from 'react';
import ShowroomCarousel from '../ShowroomComponents/showroomCarousel'

const ShowroomCard = ({ imageUrls = [], title }) => {
  return (
    <>
    <div className="bg-white rounded w-max text-center mb-5">
 <h5 className=" text-4xl text-center font-bold  text-black  dark:text-black">
    {title}
  </h5>
    </div>
    <div className=" bg- ">
        
        
        <div className="h-96 w-full"  >
          <ShowroomCarousel imageUrls={imageUrls} />
     
        </div>
   
      </div>
    
 

    </>
    
   
 
  
   
     
  );
};

export default ShowroomCard;