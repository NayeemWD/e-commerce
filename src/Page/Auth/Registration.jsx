import React from 'react';

import './style.css';
import { Link } from 'react-router';

const Registration = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
