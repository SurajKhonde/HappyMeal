const Grocery = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 p-8 rounded-md shadow-lg text-white text-center">
      <h1 className="text-4xl font-bold mb-4">We're Coming Soon!</h1>
      <p className="text-lg mb-6">Exciting things are in the works. Stay tuned for our launch!</p>
      <div className="flex justify-center">
        <button className="bg-white text-indigo-500 py-2 px-6 rounded-full hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring focus:border-indigo-300 transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Grocery;
import React from 'react';


