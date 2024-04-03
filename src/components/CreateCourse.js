import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/courses', { name }, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('Course created successfully:', response.data);
      // Optionally, you can redirect to the course list page or update the course list state
    })
    .catch(error => {
      console.error('Error creating course:', error);
    });
  };

  return (
    <div>
      <h1>Create Course</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCourse;
