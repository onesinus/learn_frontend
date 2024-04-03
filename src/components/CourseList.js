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
