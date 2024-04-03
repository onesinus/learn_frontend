// src/components/Home.js
import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Your App!</h1>
        <p className="text-lg text-gray-700 text-center">Start your journey by registering or logging in.</p>
      </div>
    </>
  );
};

export default Home;
