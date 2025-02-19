import "./login.css" 

import { signin } from "./firebase";
// import { logout } from "./firebase";
import { useAuth } from "./firebase";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//useref

function Login() {
  //initial value by usestate
  const [loading,setLoading]= useState(false)

  const currentuser= useAuth()
  const emailRef= useRef()
  const passwordRef=useRef()
  const navigate = useNavigate(); 

  async function mysignin() {
    try{
      setLoading(true)
    await signin(emailRef.current.value, passwordRef.current.value)
    alert("Sign In Successful")
    navigate("/success")
    }
    catch{
      alert("Details incorrect")
    }  
  }
  
  // async function mysignout() {
  //   setLoading(true)
  //   await logout()  
  // }
  return (
    <div class="login-container">
      <div class="login-box">
        <h1> {currentuser?.email} </h1>
        <h1>Login To Awail Offer</h1>
        <label>Email:</label>
        <input placeholder="Enter your email" type="text" class="input-field" ref={emailRef}  required/><br /><br />
        <label>Password:</label>
        <input placeholder="Enter your password" type="password" class="input-field" ref={passwordRef} required/><br /><br />
        <div class="button-group">
          
          <button class="btn" onClick={mysignin}>Sign In</button>
          {/* <button class="btn" onClick={mysignout}>Sign Out</button> */}
          <br></br> 
        </div>
        <h1 id="clickhere">Don't have an account? Click here</h1>
        <button className="btn" onClick={() => navigate("/register")}>Sign Up</button>


      </div>
    </div>
  );
}
export default Login;

