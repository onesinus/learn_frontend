import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './Header'; // Import Header component
// import DeleteUser from './DeleteUser'; // Import DeleteUser component

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
  }, []);

  return (
    <>
      <Header /> {/* Render the Header component */}
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">User List</h1>
          {/* Add a Link to navigate to the add user page */}
          <Link to="/add-user" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add User
          </Link>
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border border-gray-200">ID</th>
              <th className="py-2 px-4 border border-gray-200">Username</th>
              <th className="py-2 px-4 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td className="py-2 px-4 border border-gray-200">{user._id}</td>
                <td className="py-2 px-4 border border-gray-200">{user.username}</td>
                <td className="py-2 px-4 border border-gray-200">
                  <Link to={`/user-courses/${user._id}`} className="text-blue-500 hover:text-blue-700 mr-2">User Courses</Link>
                  {/* Pass user._id to DeleteUser component */}
                   {/*<DeleteUser userId={user._id} setUsers={setUsers} />*/}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
