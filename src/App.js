// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home'; // Assuming you have a Home component for the "/" route

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Define root route */}
        <Route path="/register" element={<Register />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
