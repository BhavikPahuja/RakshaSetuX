import React from 'react';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './routes/PrivateRoute';
import SignupPage from './pages/SignupPage';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import BusinessLoginPage from './pages/BusinessLoginPage';
import BusinessSignupPage from './pages/BusinessSignupPage';
import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='bg-gray-100 w-screen h-screen flex flex-col items-center justify-center'>
      <Routes>
        <Route path="/" element={<PrivateRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignupPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/business-login" element={<BusinessLoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/business-signup" element={<BusinessSignupPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}