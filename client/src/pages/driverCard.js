import React, { useState } from 'react';

const DriverCard = ({ driver, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col items-center bg-gray-800  shadow-lg rounded-lg p-4 md:p-6 transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ border: `5px double ${hover ? driver.suitColor : 'black'}` }}
    >
      <img
        src={driver.imageUrl}
        alt={`${driver.firstName} ${driver.lastName}`}
        className="w-24 h-24 md:w-32 md:h-32  rounded-full mb-4 border-4"
        style={{ border: `5px double ${hover ? driver.suitColor : 'black'}` }}
      />
      <h2 className="text-lg md:text-xl font-bold text-white mb-2 text-center">{driver.firstName} {driver.lastName}</h2>
      <p className="text-sm md:text-base text-white mb-1 text-center"><span className="font-bold">Driver Number:</span> {driver.driver_number}</p>
      <p className="text-sm md:text-base text-white mb-1 text-center"><span className="font-bold">Team:</span> {driver.teamName}</p>
      <p className="text-sm md:text-base text-white mb-1 text-center"><span className="font-bold">Points:</span> {driver.standing.points}</p>
      <p className="text-sm md:text-base text-white mb-1 text-center"><span className="font-bold">Position:</span> {driver.standing.position}</p>
    </div>
  );
};

export default DriverCard;
