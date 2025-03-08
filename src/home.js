import "./home.css";

import videoSrc from "./pasta1.mp4";
import lavaCake from "./choco.jpg";
import patio from "./sunset.jpg";
import delivery from "./delivery.jpg";

function Home() {
  return (
    <div>
      {/* Full-screen Video Section */}
      <div className="parallax parallax-video">
        <video className="video-full" autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="description">
          <div className="text">
            We believe in the simple pleasures of life. Good food, fresh
            ingredients, and awesome vibes.<br></br>
            Welcome to Salt'n Pepper, make yourself at home.
          </div>
        </div>
      </div>

      <div className="sections-container">
        <h1 className="section-header">Savor Every Bite, Cherish Every Moment✨🍽️</h1>
        
        {/* Chocolate Lava Cake Section */}
        <div className="parallax parallax-img large-image" style={{ backgroundImage: `url(${lavaCake})` }}>
          <div className="caption">Chocolate Lava Cake</div>
        </div>
        <div className="text-section limited-width">
          <p>
            Indulge in our rich, warm chocolate lava cake with a molten center.
            Served with a scoop of vanilla ice cream for the perfect balance of flavors.
          </p>
        </div>

        {/* Outdoor Patio Section */}
        <div className="parallax parallax-img large-image" style={{ backgroundImage: `url(${patio})` }}>
          <div className="caption">Outdoor Patio – Sunset Dinners</div>
        </div>
        <div className="text-section limited-width">
          <p>
            Enjoy a cozy dinner with breathtaking sunset views. Perfect for romantic dates
            or relaxing evenings with friends.
          </p>
        </div>

        {/* Home Delivery Section */}
        <div className="parallax parallax-img large-image" style={{ backgroundImage: `url(${delivery})` }}>
          <div className="caption">Home Delivery</div>
        </div>
        <div className="text-section limited-width">
          <p>
            Get your favorite dishes delivered hot and fresh to your doorstep. Experience
            restaurant-quality meals in the comfort of your home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
