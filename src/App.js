// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'; // Assuming you have a Home component for the "/" route
import CourseList from './components/CourseList';
import CreateCourse from './components/CreateCourse';
import EditCourse from './components/UpdateCourse'; 
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import UserCourses from './components/UserCourses'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Define root route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/add-course" element={<CreateCourse />} />
        <Route path="/courses/:id/edit" element={<EditCourse />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<CreateUser />} />
        <Route path="/user-courses/:user_id" element={<UserCourses />} />
        {/* <Route path="/users/:id/edit" element={<EditUser />} */}
      </Routes>
    </Router>
  );
}

export default App;
