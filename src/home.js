import "./home.css";

// import Diamond from './cafe1.jpg'
import videoSrc from "./video1.mov";
import lavaCake from "./lavaCake.jpg";
import patio from "./sunset.jpg";
import delivery from "./homedelivery.jpg";

function Home() {
  return (
    <div>
      <div class="background">
        {/* <img class="image1" src={Diamond} alt="Description of the image"></img> */}
        <video width="100%" autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="description">
          <div class="text">
            {" "}
            We believe in the simple pleasures of life. Good food, fresh
            ingredients, and awesome vibes.<br></br>
            Welcome to Salt'n Pepper, make yourself at home.
          </div>
        </div>
      </div>

      <div class="sections-container">
        <h1 class="section-header">Savor Every Bite, Cherish Every Moment✨🍽️</h1>
        <div class="home-section">
          <img
            src={lavaCake}
            alt="Chocolate Lava Cake"
            class="section-img"
          />
          <div class="section-text">
            <h2>Chocolate Lava Cake</h2>
            <p>
              Indulge in our rich, warm chocolate lava cake with a molten
              center. Served with a scoop of vanilla ice cream for the perfect
              balance of flavors.
            </p>
          </div>
        </div>

        <div class="home-section">
          <div class="section-text">
            <h2>Outdoor Patio – Sunset Dinners</h2>
            <p>
              Enjoy a cozy dinner with breathtaking sunset views. Perfect for
              romantic dates or relaxing evenings with friends.
            </p>
          </div>
          <img src={patio} alt="Outdoor Patio" class="section-img" />
        </div>

        <div class="home-section">
          <img src={delivery} alt="Home Delivery" class="section-img" />
          <div class="section-text">
            <h2>Home Delivery</h2>
            <p>
              Get your favorite dishes delivered hot and fresh to your doorstep.
              Experience restaurant-quality meals in the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
