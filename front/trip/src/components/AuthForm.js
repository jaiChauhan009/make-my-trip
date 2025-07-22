import React, { useState } from 'react';

const AuthForm = ({ title, onSubmit, error }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',       // Only for signup
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h1>{title}</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {title === "Sign Up" && (
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{title}</button>
      </form>
    </div>
  );
};

export default AuthForm;
