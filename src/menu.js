import "./menu.css";

import bruschettaImg from "./image3.jpg";
import carpaccioImg from "./chef1.jpg";
import margheritaImg from "./chef2.jpg";
import carbonaraImg from "./chef3.jpg";
import lasagnaImg from "./chef4.jpg";
import chickenMarsalaImg from "./chef5.jpg";
import chefsSelectionImg from "./chef6.jpg";


function Dish({ name, description,image }) {
    return (
        <div class="dish">
            <img src={image} alt={name} class="dish-image" />
            <p><strong>{name}</strong>:<br /> {description}</p>
            
        </div>
    );
}

function Menu() {
    const dishes = [
        { name: "Bruschetta of the Day", description: "Toasted baguette topped with fresh, seasonal ingredients.",  image: bruschettaImg },
        { name: "Carpaccio", description: "Thinly sliced raw beef with arugula, Parmesan, olive oil, and lemon.",  image:carpaccioImg },
        { name: "Margherita Pizza", description: "Classic pizza with fresh tomatoes, mozzarella, basil, and olive oil.",  image: margheritaImg },
        { name: "Pasta Carbonara", description: "Creamy pasta with pancetta, egg yolk, Parmesan, and black pepper.",  image: carbonaraImg},
        { name: "Lasagna Bolognese", description: "Layered pasta with rich beef ragu, béchamel, and melted cheese.",  image: lasagnaImg },
        { name: "Chicken Marsala", description: "Pan-seared chicken with Marsala wine sauce and mushrooms.", image: chickenMarsalaImg},
        { name: "Chef's Selection - Per Person", description: "A curated three-course meal showcasing signature dishes.",  image: chefsSelectionImg }
    ];

    return (
        <div class="body"> 
            <div> 
                <h1 class="ourMenu"> Chef's Special <br />Handpicked Signature Dishes </h1>
            </div>

            <div class="section">
                <h2 class="dishType">Chef's Special Selections</h2>
                <div class="menuItems"> 
                    {dishes.map((dish, index) => (
                        <Dish key={index} name={dish.name} description={dish.description}image={dish.image} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;



// import "./menu.css"

// function Menu(){
//     return(
//         <div class="body"> 
//             <div> 
//             <h1 class="ourMenu"> Our Menu <br></br>Italian Inspired Kitchen </h1>
//             </div>

//             <div class="section">
//         <h2 class="allDay">All Day, Every Day</h2>
//         <h2 class="dishType">Starters</h2>

//         <div class="menuItems"> 
//         <div class="dish">
//             <p><strong>Bruschetta of the Day</strong>:<br></br> Toasted baguette topped with fresh, seasonal ingredients, offering a perfect start to your meal.</p>
//             <p class="price">₹581</p>
//         </div>
//         <div class="dish">
//             <p><strong>Tomato Caprese</strong>:<br></br> Juicy tomatoes, creamy mozzarella, and fresh basil drizzled with a balsamic glaze.</p>
//             <p class="price">₹581</p>
//         </div>
//         <div class="dish">
//             <p><strong>Grilled Portobello Mushrooms</strong>: <br></br>Smoky grilled mushrooms marinated in herbs and olive oil, served with a garlic aioli.</p>
//             <p class="price">₹581</p>
//         </div>
//         <div class="dish">
//             <p><strong>Carpaccio</strong>: <br></br>Thinly sliced raw beef with arugula, shaved Parmesan, and a drizzle of olive oil and lemon.</p>
//             <p class="price">₹747</p>
//         </div>
//         <div class="dish">
//             <p><strong>Burrata Salad</strong>:<br></br> Creamy burrata cheese served with heirloom tomatoes, arugula, and a balsamic reduction.</p>
//             <p class="price">₹747</p>
//         </div>
//         <div class="dish">
//             <p><strong>Garden Salad</strong>:<br></br> Crisp mixed greens, cherry tomatoes, cucumbers, and carrots with a house vinaigrette.</p>
//             <p class="price">₹581</p>
//         </div>
//         </div>
//     </div>

//     <div class="section">
//         <h2 class="dishType">It’s Pizza Time</h2>
//         <div class="menuItems"> 
//         <div class="dish">
//             <p><strong>Margherita</strong>:<br></br> Classic pizza with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil.</p>
//             <p class="price">₹581</p>
//         </div>
//         <div class="dish">
//             <p><strong>Spicy Arrabbiata</strong>: <br></br>Bold tomato sauce with chili flakes, mozzarella, and fresh basil for a fiery kick.</p>
//             <p class="price">₹581</p>
//         </div>
//         <div class="dish">
//             <p><strong>Pepperoni</strong>:<br></br> Topped with zesty pepperoni slices, mozzarella, and marinara sauce.</p>
//             <p class="price">₹581</p>
//         </div>
//         </div>
    
//     </div>

//     <div class="section">
//         <h2 class="dishType">Main Course</h2>

//         <div class="menuItems"> 
//         <div class="dish">
//             <p><strong>Pasta Carbonara</strong>: <br></br>Classic creamy pasta with pancetta, egg yolk, Parmesan, and black pepper.</p>
//             <p class="price">₹1,245</p>
//         </div>
//         <div class="dish">
//             <p><strong>Lasagna Bolognese</strong>:<br></br> Layered pasta with rich beef ragu, creamy béchamel, and melted cheese.</p>
//             <p class="price">₹1,245</p>
//         </div>
//         <div class="dish">
//             <p><strong>Spaghetti Marinara</strong>:<br></br> Spaghetti tossed in a fresh tomato and seafood sauce with herbs.</p>
//             <p class="price">₹1,577</p>
//         </div>
//         <div class="dish">
//             <p><strong>Cheese Tortellini</strong>:<br></br> Pasta filled with cheese and served in a creamy Alfredo or tomato sauce.</p>
//             <p class="price">₹1,245</p>
//         </div>
//         <div class="dish">
//             <p><strong>Chicken Marsala</strong>:<br></br> Pan-seared chicken with a rich Marsala wine sauce and mushrooms.</p>
//             <p class="price">₹1,577</p>
//         </div>
//         <div class="dish">
//             <p><strong>Fish of the Day</strong>:<br></br> Chef's choice of fresh fish prepared with seasonal flavors.</p>
//             <p class="price">₹1,577</p>
//         </div>
//         </div>
//     </div>

//     <div class="section">
//         <h2 class="dishType">Kids Favorites</h2>
//         <div class="menuItems"> 
//         <div class="dish">
//             <p><strong>Spaghetti Pomodoro</strong>:<br></br> Kid-sized portion of spaghetti with a fresh tomato sauce and grated cheese.</p>
//             <p class="price">₹913</p>
//         </div>
//         <div class="dish">
//             <p><strong>Mac & Cheese</strong>: <br></br>Creamy macaroni and cheese, a favorite for all ages.</p>
//             <p class="price">₹913</p>
//         </div>
//         <div class="dish">
//             <p><strong>Cheese Ravioli</strong>:<br></br> Tender pasta pillows filled with cheese and topped with marinara sauce.</p>
//             <p class="price">₹913</p>
//         </div>
//         <div class="dish">
//             <p><strong>Salt'n Pepper Meatballs</strong>: <br></br>Juicy meatballs seasoned with salt and pepper, served with marinara sauce.</p>
//             <p class="price">₹913</p>
//         </div>
//         <div class="dish">
//             <p><strong>Chicken Strips</strong>:<br></br> Crispy breaded chicken strips served with a side of ketchup or ranch.</p>
//             <p class="price">₹913</p>
//         </div>
//         <div class="dish">
//             <p><strong>Crispy Mozzarella</strong>:<br></br> Gooey mozzarella sticks coated in a golden crispy batter, served with marinara.</p>
//             <p class="price">₹913</p>
//         </div>
//         </div>
//     </div>

//     <div class="section">
//         <h2 class="dishType">Special Offers</h2>
//         <div class="menuItems"> 
//         <div class="dish">
//             <p><strong>Daily Meal Deal</strong>:<br></br> A complete meal featuring a main, side, and dessert to satisfy your cravings.</p>
//             <p class="price">₹1,411</p>
//         </div>
//         <div class="dish">
//             <p><strong>Family Bundle</strong>:<br></br> Shareable feast with starters, mains, and dessert perfect for a family of four.</p>
//             <p class="price">₹1,826</p>
//         </div>
//         <div class="dish">
//             <p><strong>Chef's Selection - Per Person</strong>: <br></br>A curated three-course meal showcasing the chef’s signature dishes.</p>
//             <p class="price">₹1,494</p>
//         </div>
//         </div>
//     </div>
//         </div>
//     )
// }
// export default Menu;

