import React, { useContext } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";


const Registration = () => {
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext); // Destructured googleSignIn
  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value; // Splitting into firstName and lastName
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const email = form.email.value;
    const password = form.password.value;
    // const photo = form.photo.value; // Removed as per user change

    if (password.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be at least 8 characters long!',
      });
      return;
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(name, "") // user removed photo input
          .then(() => {
            console.log('User profile updated');
            Swal.fire({
              title: 'Success!',
              text: 'Registered successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            });
            navigate('/');
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'This email is already in use. Please use a different email or login.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: error.message,
          });
        }
      });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          title: 'Success!',
          text: 'Registered successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        navigate('/');
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="flex gap-4">
            <div className="form-group w-1/2">
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div className="form-group w-1/2">
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        <div className="text-center mt-4">
          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
            < FcGoogle className="text-2xl"/>
            Google Sign In</button>
        </div>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
