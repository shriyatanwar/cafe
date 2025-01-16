import "./App.css"

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./home";
import Menu from "./menu";
import Online from "./orderOnline";
import About from "./about";
import Hour from "./hours";
import Login from "./login";


//new add
import Registration from "./registration";
import Logged from "./success";



function App (){
  return(
    
    <div>
      <Router>
      <div id="loginLine"> 
        <h3 class="firstLine">Join the Salt’n Pepper club &  get 10% off on your next booking   </h3>
        <button id="login_button"> <Link to="login"> LOGIN </Link> </button>
      </div>

      <div>
        <h1 class="reshead"> <Link to="/" style={{ textDecoration: 'none',color:'coral' }}>Salt'n Pepper <br></br><span style={{fontSize:'30px'}}>Est. 2001</span></Link></h1>
      </div>
    
      <div class=" navBar"> 
        <ul class="navBar">
          <li> <Link to="menufile"> Menu</Link></li>
          <li> <Link to="online">Order Online</Link> </li>
          <li> <Link to="about">About</Link> </li>
          <li> <Link to="hour">Hours and Locations</Link> </li>
          </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="menufile" element={<Menu></Menu>}></Route>
        <Route path="online" element={<Online></Online>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="hour" element={<Hour></Hour>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration />} />
        <Route path="/success" element={<Logged/>}/>
      </Routes>
      </Router>

      
    </div>
  )
}
export default App;