// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);   
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Private Course App</h1>
        <nav>
          <ul className="flex space-x-4">
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/register" className="hover:text-blue-300">Register</Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-blue-300">Login</Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/" className="hover:text-blue-300">Home</Link>
                </li>

                <li>
                  <Link to="/courses" className="hover:text-blue-300">Courses</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:text-blue-300">Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
