// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your App!</h1>
      <nav className="flex justify-center space-x-4">
        <Link to="/register" className="text-blue-500 hover:text-blue-700">
          Register
        </Link>
        <Link to="/login" className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Home;
