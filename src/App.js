import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Menu from "./menu";
import Online from "./orderOnline";
import About from "./about";
import Hour from "./hours";
import Login from "./login";


import peep1 from "./peep1.avif";
import peep2 from "./peep2.avif";
import peep3 from "./peep3.avif";
import peep4 from "./peep4.avif";
import peep5 from "./peep5.avif";
import peep6 from "./peep6.avif";
// icon file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//new add
import Registration from "./registration";
import Logged from "./success";

function App() {
  return (
    <div>
      <Router>
        <div id="loginLine">
          <h3 class="firstLine">
            Join the Salt’n Pepper club & get 10% off on your next booking{" "}
          </h3>

          <a href=" https://www.facebook.com/login/">
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a href="https://x.com/i/flow/login">
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a href="https://www.instagram.com/accounts/login/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>

          <FontAwesomeIcon
            icon={faShoppingCart}
            size="lg"
            style={{ color: "white", cursor: "pointer" }}
          />

          <button id="login_button">
            {" "}
            <Link to="login">
              {" "}
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                style={{ color: "black", cursor: "pointer" }}
              />{" "}
            </Link>{" "}
          </button>
        </div>

        <div>
          <h1 class="reshead">
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "coral" }}>
              Salt'n Pepper <br></br>
              <span style={{ fontSize: "30px" }}>Est. 2001</span>
            </Link>
            
            <h3 style={{
              fontSize:"30px"
            }}>Delicious food, fast service, and unforgettable flavors!</h3>
          </h1>
        </div>

        <div class=" navBar">
          <ul class="navBar">
            <li>
              {" "}
              <Link to="menufile"> Menu</Link>
            </li>
            <li>
              {" "}
              <Link to="online">Order Online</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="about">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="hour">Hours and Locations</Link>{" "}
            </li>
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
          <Route path="/success" element={<Logged />} />
        </Routes>

        <div id="momentsS">
          <h1 id="special"> Special Moments at Salt'n Pepper</h1>
          <div class="imagepart">
            <img class="imgS" src={peep1}></img>
            <img class="imgS" src={peep2}></img>
            <img class="imgS" src={peep3}></img>
            <img class="imgS" src={peep4}></img>
            <img class="imgS" src={peep5}></img>
            <img class="imgS" src={peep6}></img>
          </div>
        </div>

        <div>
          <footer
            style={{
              background: "lavender ",
              color: "#fff",
              textAlign:"center",
              padding: "10px",
            }}
          >
            <div>
              <h3 style={{
                color:"black"
              }}> Salt’n Pepper </h3>
              <p>Delicious food, fast service, and unforgettable flavors!</p>
            </div>

            {/* <div>
            <h3>Our Services</h3>
            <ul style={{
              textAlign:"center",
              padding: "10px",
            }}>
              <li>Dine-In Experience</li>
              <li>Takeaway</li>
              <li>Home Delivery</li>
              <li>Catering Services</li>
              <li>Private Dining</li>
              <li>Live Cooking & Chef’s Special</li>
              <li>Online Table Reservation</li>
              <li>Customized Orders</li>
            </ul>
          </div> */}

          <div> 
            <h3> Subscribe Us </h3>
            <input type="email" placeholder="Enter Your Email Address"></input>
            <br></br><br></br>
            <a href=" https://www.facebook.com/login/" style={{
              padding: "5px",
            }}>
                <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "white", cursor: "pointer" }}/>
                </a>
                <a href="https://x.com/i/flow/login" style={{
              padding: "5px",
            }}>
                <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: "white", cursor: "pointer" }}/>
                </a>
                <a href="https://www.instagram.com/accounts/login/" style={{
              padding: "5px",
            }}>
                <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "white", cursor: "pointer" }}/>
                </a>
                <a href="https://www.linkedin.com/" style={{
              padding: "5px",
            }}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "white", cursor: "pointer" }} />
                </a>
            </div>


            <p>&copy; 2025 Salt'n Pepper. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </div>
  );
}
export default App;
