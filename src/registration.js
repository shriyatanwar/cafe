import React, { useRef, useState } from "react";
import { signup } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css"; 
// useRef reading current value, e.target.value can also be used 
function Registration() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
//update current value using setState, using async function  
  async function handleRegister() {
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

     
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await signup( email, password);
      navigate("/success") 
    } catch (error) {
      alert("details incorrect"); 
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h1>Register Here</h1>
        {/* in input we will pas these useref value using attribute ref */}
        <label>Email:<span style={{ color: 'red' }}>*</span></label>
        <input type="email" placeholder="Enter your email" required ref={emailRef} />
        <label>Password:<span style={{ color: 'red' }}>*</span></label>
        <input type="password" placeholder="Enter your password" required ref={passwordRef} />
        <label>Confirm Password:<span style={{ color: 'red' }}>*</span></label>
        <input type="password" placeholder="Confirm your password" required ref={confirmPasswordRef} />
        <p> By creating an account you agree to our Terms & Privacy.</p>
        <button onClick={handleRegister} disabled={loading}>Register</button>
        <button onClick={() => navigate("/login")}>Sign In</button>
      </div>
    </div>
  );
}

export default Registration;
