import React from 'react';

const LoadingStandings = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="w-full max-w-lg md:w-1/2 lg:w-1/4 p-4 ">
          
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 animate-pulse">
          <div className=" grid grid-1 place-content-center  ">


            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 ml-10 rounded-full mb-4"></div>
            <div className="text-lg md:text-xl font-bold text-gray-800 mb-2 bg-gray-300 h-8 w-40 md:w-48 rounded"></div>
            <div className="grid grid-1 place-content-center">

              <div className="grid grid-1 place-content-center">
                <div className="bg-gray-300 h-4 w-20 md:w-24 mb-1 rounded"></div>
                <div className="bg-gray-300 h-4 w-20 md:w-24 rounded"></div>
              </div>
            </div>
            <div className="grid grid-1 place-content-center">
 
            </div>
            </div>
          </div>
          </div>
       
        
      ))}
    </div>
  );
};

export default LoadingStandings;
