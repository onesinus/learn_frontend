import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; 
import { Link } from 'react-router-dom';
import Header from './Header';
import DeleteCourse from './DeleteCourse';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/courses', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      setCourses(response.data);
    })
    .catch(error => {
      console.error('Error fetching courses:', error);
    });
  }, []);

  const handleEnroll = (course_id) => {
    axios.post('/user-courses', { course_id: course_id }, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log('User enrolled in course successfully:', response.data);
      // Optionally, you can update the UI to reflect enrollment
      alert('You have enrolled in the course successfully!');
    })
    .catch(error => {
      console.error('Error enrolling user in course:', error);
      alert('Failed to enroll in the course. Please try again.');
    });
  };

  return (
    <>
      <Header/>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Course List</h1>
          <Link to="/add-course" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Course
          </Link>
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border border-gray-200">ID</th>
              <th className="py-2 px-4 border border-gray-200">Name</th>
              <th className="py-2 px-4 border border-gray-200">Price</th>
              <th className="py-2 px-4 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course._id}>
                <td className="py-2 px-4 border border-gray-200">{course._id}</td>
                <td className="py-2 px-4 border border-gray-200">{course.name}</td>
                <td className="py-2 px-4 border border-gray-200">{course.price}</td>
                <td className="py-2 px-4 border border-gray-200">
                  <Link to={`/courses/${course._id}/edit`} className="text-blue-500 hover:text-blue-700 mr-2">Edit</Link>
                  <DeleteCourse 
                    courseId={course._id} 
                    setCourses={setCourses} 
                    courses={courses}                
                  />
                  <button onClick={() => handleEnroll(course._id)} className="text-green-500 hover:text-green-700 mr-2">
                    Enroll
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourseList;
