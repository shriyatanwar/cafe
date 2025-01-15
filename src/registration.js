import React, { useRef, useState } from "react";
import { signup } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css"; 
// useRef reading current value, e.target.value can also be used 
function Registration() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const mobileRef = useRef();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
//update current value using setState, using async function  
  async function handleRegister() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const mobile = mobileRef.current.value;
     
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await signup(name, mobile , email, password);
      navigate("/login") // Redirect to login page
    } catch (error) {
      alert("details incorrect"); // Display Firebase error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h1>Register Here</h1>
        <label>Name:</label>
        {/* in input we will pas these useref value using attribute ref */}
        <input type="text" placeholder="Enter your name" required ref={nameRef} />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required ref={emailRef} />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required ref={passwordRef} />
        <label>Confirm Password:</label>
        <input type="password" placeholder="Confirm your password" required ref={confirmPasswordRef} />
        <label>Mobile Number:</label>
        <input type="text" placeholder="Enter your mobile number" required ref={mobileRef} />
        <button onClick={handleRegister} disabled={loading}>Register</button>
        <button onClick={() => navigate("/login")}>Sign In</button>
      </div>
    </div>
  );
}

export default Registration;
