import React from 'react';
import axios from 'axios';

const DeleteCourse = ({ courseId }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/courses/${courseId}`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('Course deleted successfully:', response.data);
      // Optionally, you can redirect to the course list page or update the course list state
    })
    .catch(error => {
      console.error('Error deleting course:', error);
    });
  };

  return (
    <div>
      <h1>Delete Course</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteCourse;
