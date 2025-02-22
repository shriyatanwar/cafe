// import "./CheckoutProduct.css";
// import image3 from "./image3.jpg";

// function CheckoutProduct() {
//   return (
//     <div class="checkoutProduct">
//       <img
//         src={image3}
//         class="checkoutProduct__image"
//         // style={{
//         //   width: "150px",
//         // }}
//       ></img>

//       <div class="checkoutProduct__info">
//         <p class="checkoutProduct__title">
//           Bruschetta of the Day : Toasted baguette topped with fresh, seasonal
//           ingredients, offering a perfect start to your meal
//         </p>
//         <p class="checkoutProduct__price" > 581/- </p>
      
//       <button class="checkoutProduct__"> Remove from basket</button>
//     </div>
//     </div>
//   );
// }
// export default CheckoutProduct;


import "./CheckoutProduct.css";
import { useCart } from "./cartContext";

function CheckoutProduct({ id, title, price, image, explaination }) {
  const { removeFromCart } = useCart();

  return (
    <div class="checkoutProduct">
      <img src={image} class="checkoutProduct__image" alt={title} />
      <div class="checkoutProduct__info">
        <p class="checkoutProduct__title">{title}</p>
        <p class="checkoutProduct__explaination">{explaination}</p>
        <p class="checkoutProduct__price">{price}/-</p>
        <button onClick={() => removeFromCart(id)}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
