// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import './style.css';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'Success!',
          text: 'Logged in successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        navigate('/', { replace: true });
      })
      .catch(error => console.log(error));
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          title: 'Success!',
          text: 'Logged in successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        navigate('/', { replace: true });
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="text-center mt-4">
          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                            < FcGoogle className="text-2xl"/>
            Google Sign In
          </button>
        </div>
        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
