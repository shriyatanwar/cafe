import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Menu from "./menu";
import Online from "./orderOnline";
import About from "./about";
import Hour from "./hours";
import Login from "./login";
import Checkout from "./checkout";
import Footersection from "./footer";
import Special from "./special";



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

          <a
            href=" https://www.facebook.com/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a
            href="https://x.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
          </a>
          <Link to="/cart"
            style={{
              textDecoration: "none", // Removes underline from the link
              display: "flex",
              alignItems: "center",
              gap: "5px", // Adds space between icon and number
              color: "white",
              cursor: "pointer",
            }}
          >
            <div class="nav__itemBasket">  
              <FontAwesomeIcon
              icon={faShoppingCart}
              size="lg"
              style={{ color: "white", cursor: "pointer" }}
            />
            <span class="nav__itemLineTwo nav__basketCount"style={{ textDecoration: "none", 
              fontWeight: "bold" }}>
              0
            </span>
            </div>
          </Link>

          <button id="login_button">
            <Link to="login">
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                style={{ color: "black", cursor: "pointer" }}
              />
            </Link>
          </button>
        </div>

        <div>
          <h1 class="reshead">
            <Link to="/" style={{ textDecoration: "none", color: "coral" }}>
              Salt'n Pepper <br></br>
              <span style={{ fontSize: "30px" }}>Est. 2001</span>
            </Link>

            <h3
              style={{
                fontSize: "30px",
              }}
            >
              Delicious food, fast service, and unforgettable flavors!
            </h3>
          </h1>
        </div>

        <div class=" navBar">
          <ul class="navBar">
            <li>
              <Link to="menufile"> Menu</Link>
            </li>
            <li>
              <Link to="online">Order Online</Link>
            </li>

            <li>
              <Link to="/special"> Special Moments</Link>
            </li>

            <li>
              <Link to="hour">Hours and Locations</Link>
            </li>

            <li>
              <Link to="about">About</Link>
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
          <Route path="/cart" element={<Checkout></Checkout>} />
          <Route path="/special" element={<Special></Special>}></Route>
        </Routes>

        <Footersection></Footersection>
      </Router>
    </div>
  );
}
export default App;
