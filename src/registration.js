import React, { useRef, useState } from "react";
import { signup } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./registration.css"; 

function Registration() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const mobileRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const mobile = mobileRef.current.value;

    if (!name || !email || !password || !confirmPassword || !mobile) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await signup(email, password);
      alert("Registration successful. Please log in.");
      console.log("Registration complete, navigating...");
      navigate("login"); // Redirect to login page
    } catch (error) {
      alert(error.message); // Display Firebase error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h1>Register Here</h1>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" ref={passwordRef} />
        <label>Confirm Password:</label>
        <input type="password" placeholder="Confirm your password" ref={confirmPasswordRef} />
        <label>Mobile Number:</label>
        <input type="text" placeholder="Enter your mobile number" ref={mobileRef} />
        <button onClick={handleRegister} disabled={loading}>Register</button>
        <button onClick={() => navigate("/login")}>Sign In</button>
      </div>
    </div>
  );
}

export default Registration;
