// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold text-center">Hello, Tailwind CSS!</h1>
      <Link to="/register">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Home;
