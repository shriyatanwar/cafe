import "./orderOnline.css";

import img3 from "./image3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import Product from "./product";

function Online() {
  return (
    <div class="body">
      <center>

        <div class="ordermenu">
          <div class="orderdish">
            <Product 
            id="1"
            image={img3}
            title="Bruschetta of the Day:"
            explaination="Toasted baguette
            topped with fresh, seasonal ingredients, 
            offering a perfect start
            to your meal."
            price={581}>    
            </Product>
          </div>

          <div class="orderdish">
            <Product
              id="2"
              image={img4}
              title="Tomato Caprese:"
              explaination="Juicy tomatoes, 
              creamy mozzarella, and fresh basil drizzled 
              with a balsamic glaze."
              price={581}
            ></Product>
          </div>

          <div class="orderdish">
            <Product
              id="3"
              image={img5}
              title="Grilled Portobello Mushrooms:"
              explaination=" Smoky grilled
               mushrooms marinated
               in herbs and olive oil, served with a garlic aioli."
              price={581}
            ></Product>
            <Product
              id="4"
              image={img6}
              title="Carpaccio:"
              explaination="Thinly sliced raw beef with 
              arugula, 
              shaved Parmesan, and a drizzle of olive oil 
              and lemon."
              price={747}
            ></Product>
          </div>

          <div class="orderdish"> 
            <Product
            id="5"
            image={img7}
            title="Burrata Salad:"
            explaination="Creamy burrata cheese
              served with heirloom tomatoes, 
              arugula, and a balsamic reduction."
            price={747}
            ></Product>
            <Product
            id="6"
            title="Garden Salad:"
            explaination="Crisp mixed greens, 
            cherry tomatoes, cucumbers, and carrots with
            a house vinaigrette."
            price={581}
            image={img8}
            >
            </Product>
          </div>
        </div>
      </center>
    </div>
  );
}
export default Online;
