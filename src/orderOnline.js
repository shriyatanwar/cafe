import "./orderOnline.css";

import img3 from "./image3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import carpaccioImg from "./chef1.jpg";
import margheritaImg from "./chef2.jpg";
import carbonaraImg from "./chef3.jpg";
import lasagnaImg from "./chef4.jpg";
import chickenMarsalaImg from "./chef5.jpg";
import chefsSelectionImg from "./chef6.jpg";
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
              price={581}
            ></Product>
            <Product
              id="2"
              image={img4}
              title="Tomato Caprese:"
              explaination="Juicy tomatoes, 
              creamy mozzarella, and fresh basil drizzled 
              with a balsamic glaze."
              price={400}
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
              price={300}
            ></Product>
            <Product
              id="4"
              image={img6}
              title="Carpaccio:"
              explaination="Thinly sliced raw beef with 
              arugula, 
              shaved Parmesan, and a drizzle of olive oil 
              and lemon."
              price={700}
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
              price={800}
            ></Product>
            <Product
              id="6"
              title="Garden Salad:"
              explaination="Crisp mixed greens, 
            cherry tomatoes, cucumbers, and carrots with
            a house vinaigrette."
              price={200}
              image={img8}
            ></Product>
          </div>

          <div class="orderdish">
            <Product
              id="7"
              image={carpaccioImg}
              title="Carpaccio"
              explaination="Thinly sliced raw beef with arugula, Parmesan, olive oil, and lemon."
              price={581}
            ></Product>

            <Product
              id="8"
              image={margheritaImg}
              title="Margherita Pizza"
              explaination="Classic pizza with fresh tomatoes, mozzarella, basil, and olive oil."
              price={699}
            ></Product>
          </div>

          <div class="orderdish">
            <Product
              id="9"
              image={carbonaraImg}
              title="Pasta Carbonara"
              explaination="Creamy pasta with pancetta, egg yolk, Parmesan, and black pepper."
              price={749}
            ></Product>

            <Product
              id="10"
              image={lasagnaImg}
              title="Lasagna Bolognese"
              explaination="Layered pasta with rich beef ragu, béchamel, and melted cheese."
              price={820}
            ></Product>
          </div>

          <div class="orderdish">
            <Product
              id="11"
              image={chickenMarsalaImg}
              title="Chicken Marsala"
              explaination="Pan-seared chicken with Marsala wine sauce and mushrooms."
              price={899}
            ></Product>

            <Product
              id="12"
              image={chefsSelectionImg}
              title="Chef's Selection - Per Person"
              explaination="A curated three-course meal showcasing signature dishes."
              price={1200}
            ></Product>
          </div>
        </div>
      </center>
    </div>
  );
}
export default Online;
