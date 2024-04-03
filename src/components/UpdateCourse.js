import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; 
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

const EditCourse = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/courses/${id}`, {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    })
    .then(response => {
      const { name, price } = response.data;
      setName(name);
      setPrice(price);
    })
    .catch(error => {
      console.error('Error fetching course:', error);
    });
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`/courses/${id}`, { name, price }, {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('Course updated successfully:', response.data);
      // Redirect and inform success
      navigate('/courses');
      alert('Course updated successfully!');
    })
    .catch(error => {
      console.error('Error updating course:', error);
      // Show error message
      alert('Failed to update course. Please try again.');
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Edit Course</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Course Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Course Price</label>
            <input 
              type="number" 
              id="price" 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Update
          </button>
          <button onClick={() => navigate('/courses')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCourse;
