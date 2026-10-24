import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setMessage('Registration form submitted.');
  };

  return (
    <div className="register_container">
      <h1 className="header">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <label htmlFor="register-username">Username</label>
            <input
              id="register-username"
              className="input_field"
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              className="input_field"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              className="input_field"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="submit_panel">
          <button className="submit" type="submit">
            Register
          </button>
        </div>

        {message && <p role="status">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
