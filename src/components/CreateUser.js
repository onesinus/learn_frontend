import React, { useState } from 'react';
import axios from '../axiosConfig'; 
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/register', { username, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('User created successfully:', response.data);
      // Redirect and inform success
      navigate('/users');
      alert('User created successfully!');
    })
    .catch(error => {
      console.error('Error creating user:', error);
      // Show error message
      alert('Failed to create user. Please try again.');
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Create a User</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
