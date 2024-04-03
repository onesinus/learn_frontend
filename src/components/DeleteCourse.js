import React, { useState } from 'react';
import axios from '../axiosConfig'; 

const DeleteCourse = ({ courseId, setCourses, courses }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    if (confirmDelete) {
      axios.delete(`/courses/${courseId}`, {
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log('Course deleted successfully:', response.data);
        setCourses(courses.filter(course => course._id !== courseId));
      })
      .catch(error => {
        console.error('Error deleting course:', error);
      });
    }
  };

  const toggleConfirmation = () => {
    setConfirmDelete(!confirmDelete);
  };

  return (
    <div>
      {confirmDelete ? (
        <div>
          <p className="text-red-500 hover:text-red-700">Are you sure?</p>
          <button className="text-blue-500 hover:text-blue-700" onClick={handleDelete}>Confirm</button>
          <button onClick={toggleConfirmation}>Cancel</button>
        </div>
      ) : (
        <button className="text-red-500 hover:text-red-700" onClick={toggleConfirmation}>Delete</button>
      )}
    </div>
  );
};

export default DeleteCourse;
