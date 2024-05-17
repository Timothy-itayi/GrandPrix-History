import React, { useState } from 'react';

import drivers from '../models/drivers'

const SelectionPage = () => {
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  const handleSelectDriver = (driver) => {
    if (selectedDrivers.length < 3 && !selectedDrivers.includes(driver)) {
      setSelectedDrivers([...selectedDrivers, driver]);
    }
  };

  const handleDeselectDriver = (driver) => {
    setSelectedDrivers(selectedDrivers.filter(d => d !== driver));
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Pick Your Podium</h1>
        <p className="text-lg text-gray-600">
          Select three drivers whom you believe will stand on the podium after each race.
        </p>
      </header>
      
      <div className="grid gap-4 md:flex md:flex-row md:flex-wrap justify-center pt-2 pb-3 pl-2 items-center  rounded  ">
        {drivers.map((driver) => (
          <div key={driver.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={driver.image} alt={driver.name} className="object-contain w-48 h-48  rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{driver.name}</h2>
            <p className="text-gray-600">{driver.team}</p>
            {selectedDrivers.includes(driver) ? (
              <button
                onClick={() => handleDeselectDriver(driver)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Deselect
              </button>
            ) : (
              <button
                onClick={() => handleSelectDriver(driver)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                disabled={selectedDrivers.length >= 3}
              >
                Select
              </button>
            )}
          </div>
        ))}
      </div>

      <footer className="text-center my-8">
        <p className="text-gray-500">
          &copy; 2024 Hyper Fantasy League. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SelectionPage;
