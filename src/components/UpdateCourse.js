import React, { useState } from 'react';
import axios from 'axios';

const UpdateCourse = ({ courseId, initialName }) => {
  const [name, setName] = useState(initialName);

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3000/courses/${courseId}`, { name }, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('Course updated successfully:', response.data);
      // Optionally, you can redirect to the course list page or update the course list state
    })
    .catch(error => {
      console.error('Error updating course:', error);
    });
  };

  return (
    <div>
      <h1>Update Course</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCourse;
