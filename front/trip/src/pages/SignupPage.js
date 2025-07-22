import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signup } from '../api/api';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    setError('');
    try {
      await signup(data);
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (e) {
      setError('Signup failed. Username may be taken.');
    }
  };

  return (
    <>
      <AuthForm title="Sign Up" onSubmit={handleSignup} error={error} />
      <p style={{textAlign: 'center'}}>Already have an account? <Link to="/login">Login</Link></p>
    </>
  );
};

export default SignupPage;
