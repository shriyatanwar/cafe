import React from "react";
import "./checkout.css";
import add from "./add.png";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";


function Checkout() {
  return (
    <div class="checkout">
      <div class="checkout__left">
        <img
          class="add"
          src={add}
          style={{
            width: "70%",
            height: "20%",
          }}
        ></img>
        <h2 class="checkout__title"> Your Shopping Basket</h2>
          <CheckoutProduct></CheckoutProduct>

      </div>
        
      <div class="checkout__right"></div>
      <Subtotal></Subtotal>
    </div>
  );
}
export default Checkout;
