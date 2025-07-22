import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BookingPage from './pages/BookingPage';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/booking" /> : <LoginPage />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/booking" /> : <SignupPage />} />
        <Route path="/booking" element={isAuthenticated ? <BookingPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/booking" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
