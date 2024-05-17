import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Hyper Fantasy League</h1>
        <p className="text-lg text-gray-600">
          This is the ultimate platform for F1 fans to test their knowledge, strategy, and luck in a thrilling fantasy league.
        </p>
      </header>
      
      <section className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Pick your Point</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          Cras venenatis euismod malesuada.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Get Started</button>
      </section>

      <section className="my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Pick your Podium</h2>
        <p className="text-gray-600 mb-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <Link to="/selection"> {/* Link to the selection page */}
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Pick Your Podium</button>
        </Link>
      </section>

      <footer className="text-center my-8">
        <p className="text-gray-500">
          &copy; 2024 Hyper Fantasy League. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
