import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Formula </h1>
        <p className="text-lg text-gray-600">
          This is the ultimate platform for F1 fans and newbies looking to know more about formula 1.
        </p>
      </header>
      
      <section className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">GrandPrix</h2>
        <p className="text-gray-600 mb-4">
        Learn about the tracks for the Formula 1 2024 season 
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">View GrandPrix</button>
      </section>

      <section className="my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Drivers</h2>
        <p className="text-gray-600 mb-4">
         Driver Standings for the 2024 Formula 1 2024 season 
        </p>
        <Link to="/dashboard"> {/* Link to the selection page */}
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">View Drivers</button>
        </Link>
      </section>

      <footer className="text-center my-8">
        <p className="text-gray-500">
          &copy; 2024 New to Formula. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
