import "./about.css"
import imgA from './peep5.avif'

function About(){
    return(
        <div class="body">  
            <h1 class="aboutUs"> About us </h1>
            <img class="imgAbout" alt="Description of the image" src={imgA}></img>
            <p class="aboutInfo">
Welcome to <strong> Salt n Pepper,</strong> where the rich flavors of Italy come alive on every plate! Nestled at the heart of culinary excellence, we are more than just a restaurant—we are a celebration of authentic Italian cuisine, crafted with love and passion.

At Salt n Pepper, we believe food is an experience that connects people, sparks joy, and creates memories. Our menu reflects the vibrant culture and tradition of Italy, blending classic recipes with a modern twist. From hand-tossed pizzas baked to perfection to creamy pasta dishes, fresh salads, and indulgent desserts, each dish is made with the finest ingredients to ensure an unforgettable dining experience.

We take pride in sourcing high-quality produce, artisanal cheeses, and flavorful herbs to recreate the magic of Italian kitchens. Every bite tells a story of heritage, authenticity, and dedication to quality. Whether you're joining us for a family gathering, a romantic date night, or a casual meal with friends, we promise to make your time at Salt n Pepper truly special.

Step into our cozy ambiance, sip on a glass of fine wine, and let the aroma of fresh basil, garlic, and oregano transport you straight to Italy. At Salt n Pepper, you’re not just a guest—you’re part of our famiglia!

Buon appetito!</p>

        </div>
    )
}
export default About;