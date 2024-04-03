// src/components/Home.js
import React, {useState, useEffect} from 'react';
import Header from './Header';

const Home = () => {
  const [username, setUsername] = useState("")

  useEffect(() => {
    setUsername(localStorage.getItem("username"))
  }, [])

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome {username}, to Your App!</h1>
        <p className="text-lg text-gray-700 text-center">Start your journey by learning from the master.</p>
      </div>
    </>
  );
};

export default Home;
