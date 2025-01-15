import "./orderOnline.css"

import img3 from './image3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'


function Online(){
    return(
        <div class="body">
            <center>
            <div class="navbarorder">  
            <h1> want to order online </h1>
            

            </div>


<div class="ordermenu"> 
        <div class="orderdish">
            <img class="img" src={img3}></img>
            <p><strong>Bruschetta of the Day</strong>:<br></br> Toasted baguette topped with fresh, seasonal ingredients, offering a perfect start to your meal.</p>
            <p class="pricel">₹581</p>

            <button> Add to cart + </button>
        </div>
        <div class="orderdish">
            <img class="img" src={img4}></img>
            <p><strong>Tomato Caprese</strong>:<br></br> Juicy tomatoes, creamy mozzarella, and fresh basil drizzled with a balsamic glaze.</p>
            <p class="pricel">₹581</p>
            <button>  Add to cart + </button>
        </div>
        <div class="orderdish">
        <img class="img" src={img5}></img>
            <p><strong>Grilled Portobello Mushrooms</strong>: <br></br>Smoky grilled mushrooms marinated in herbs and olive oil, served with a garlic aioli.</p>
            <p class="pricel">₹581</p>
            <button>  Add to cart + </button>
        </div>
        <div class="orderdish">
        <img class="img" src={img6}></img>
            <p><strong>Carpaccio</strong>: <br></br>Thinly sliced raw beef with arugula, shaved Parmesan, and a drizzle of olive oil and lemon.</p>
            <p class="pricel">₹747</p>
            <button> Add to cart + </button>
        </div>
        <div class="orderdish">
        <img class="img" src={img7}></img>
            <p><strong>Burrata Salad</strong>:<br></br> Creamy burrata cheese served with heirloom tomatoes, arugula, and a balsamic reduction.</p>
            <p class="pricel">₹747</p>
            <button>  Add to cart + </button>
        </div>
        <div class="orderdish">
        <img class="img" src={img8}></img>
            <p><strong>Garden Salad</strong>:<br></br> Crisp mixed greens, cherry tomatoes, cucumbers, and carrots with a house vinaigrette.</p>
            <p class="pricel">₹581</p>
            <button>  Add to cart + </button>
        </div>
        </div>
            </center>
        </div>
    )
}
export default Online;