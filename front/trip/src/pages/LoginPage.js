import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { login } from '../api/api';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    setError('');
    try {
      const response = await login(data);
      localStorage.setItem('token', response.data.token);
      navigate('/booking');
    } catch (e) {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <AuthForm title="Login" onSubmit={handleLogin} error={error} />
      <p style={{textAlign: 'center'}}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </>
  );
};

export default LoginPage;
