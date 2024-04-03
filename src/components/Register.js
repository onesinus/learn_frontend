// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Your registration logic here
      navigate('/login'); // Navigate to login page after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      this is register page
    </div>
  );
};

export default Register;
