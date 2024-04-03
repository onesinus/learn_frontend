import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; 
import { useParams } from 'react-router-dom';
import Header from './Header';

const UserCourseList = () => {
  const [userCourses, setUserCourses] = useState([]);
  const { user_id } = useParams(); // Extracting user_id from the URL

  useEffect(() => {
    axios.get(`/user-courses/${user_id}`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      setUserCourses(response.data);
    })
    .catch(error => {
      console.error('Error fetching user courses:', error);
    });
  }, [user_id]); // Add user_id to the dependency array to fetch data when it changes

  return (
    <>
      <Header/>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{user_id} Courses</h1>
          {/* Optionally, you can add a link to enroll in new courses */}
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border border-gray-200">ID</th>
              <th className="py-2 px-4 border border-gray-200">Name</th>
              <th className="py-2 px-4 border border-gray-200">Price</th>
              <th className="py-2 px-4 border border-gray-200">Enroll Date</th>
              <th className="py-2 px-4 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userCourses.map(userCourse => (
              <tr key={userCourse._id}>
                <td className="py-2 px-4 border border-gray-200">{userCourse.course_id._id}</td>
                <td className="py-2 px-4 border border-gray-200">{userCourse.course_id.name}</td>
                <td className="py-2 px-4 border border-gray-200">{userCourse.course_id.price}</td>
                <td className="py-2 px-4 border border-gray-200">{userCourse.enroll_date}</td>
                <td className="py-2 px-4 border border-gray-200">
                  {/* Optionally, you can add a button to view course details */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserCourseList;
