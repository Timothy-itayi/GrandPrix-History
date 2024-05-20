import React from 'react';

const LoadingDriver = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="mb-4 p-4 bg-gray-100 rounded-md shadow-md">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300  w-24"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
  );
};

export default LoadingDriver;
