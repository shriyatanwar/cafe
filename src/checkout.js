import React from "react";
import "./checkout.css";
import add from "./add.png";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useCart } from "./cartContext.js";


function Checkout() {
  const { cart, removeFromCart } = useCart(); // Get cart and removeFromCart from context

  return (
    <div class="checkout">
      <div class="checkout__left">
        <img
          class="add"
          src={add}
          style={{
            width: "70%",
            height: "40%",
          }}
        ></img>
        <h2 class="checkout__title"> Your Shopping Basket</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <CheckoutProduct key={item.id} {...item} />
          ))
        )}
      </div>
        
      <div class="checkout__right"></div>
      <Subtotal></Subtotal>
    </div>
  );
}
export default Checkout;
