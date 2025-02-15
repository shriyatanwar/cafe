import "./CheckoutProduct.css";
import image3 from "./image3.jpg";

function CheckoutProduct() {
  return (
    <div class="checkoutProduct">
      <img
        src={image3}
        class="checkoutProduct__image"
        // style={{
        //   width: "150px",
        // }}
      ></img>

      <div class="checkoutProduct__info">
        <p class="checkoutProduct__title">
          Bruschetta of the Day : Toasted baguette topped with fresh, seasonal
          ingredients, offering a perfect start to your meal
        </p>
        <p class="checkoutProduct__price" > 581/- </p>
      
      <button class="checkoutProduct__"> Remove from basket</button>
    </div>
    </div>
  );
}
export default CheckoutProduct;
