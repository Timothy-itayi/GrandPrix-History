import React, { useState } from 'react';
import DriverData from '../components/DriverComponents/driverData';
import DriverCard from '../pages/driverCard';
import DriverDetail from '../components/DriverComponents/driverDetail';
import LoadingSpinner from '../components/LayoutComponents/loadingSpinner';

const DriverStanding = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <DriverData>
      {({ drivers, isLoading, error }) => (
        <div className="flex flex-col items-center p-4">
          {selectedDriver ? (
            <DriverDetail
              driver={selectedDriver}
              onBack={() => setSelectedDriver(null)}
            />
          ) : (
            <>
              <p className="text-2xl font-bold text-white mb-4">Driver Standings</p>

              {isLoading ? (
                <LoadingSpinner />
              ) : error ? (
                <div className="text-xl font-semibold text-red-500">{error}</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                  {drivers.map((driver) => (
                    <DriverCard
                      key={driver.id}
                      driver={driver}
                      onClick={() => setSelectedDriver(driver)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </DriverData>
  );
};

export default DriverStanding;
