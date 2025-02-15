import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Footersection() {
  return (
    <div>
      <div>
        <footer
          style={{
            background: "lavender ",
            color: "#fff",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <div>
            <h3
              style={{
                color: "black",
              }}
            >
              {" "}
              Salt’n Pepper{" "}
            </h3>
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
            <br></br>
            <br></br>
            <a
              href=" https://www.facebook.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "5px",
              }}
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
              style={{
                padding: "5px",
              }}
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
              style={{
                padding: "5px",
              }}
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
              style={{
                padding: "5px",
              }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                style={{ color: "white", cursor: "pointer" }}
              />
            </a>
          </div>

          <p>&copy; 2025 Salt'n Pepper. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
export default Footersection;
