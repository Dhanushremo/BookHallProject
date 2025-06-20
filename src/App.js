// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProduct from './components/admin/AddProduct';
import Books from './components/Books';

// Protected route for ADMIN
const AdminRoute = ({ children }) => {
  const role = localStorage.getItem('role');
  return role === 'ADMIN' ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Books" element={<Books />} />
          <Route
            path="/admin/add-book"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // ✅ Make sure App is exported
