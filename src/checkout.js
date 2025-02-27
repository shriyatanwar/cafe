import React from "react";
import "./checkout.css";
import add from "./add.png";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useCart } from "./cartContext.js";
import { useNavigate } from "react-router-dom";


function Checkout() {
  const { cart, removeFromCart } = useCart(); // Get cart and removeFromCart from context
  const navigate = useNavigate();
  return (
    <div class="checkout">
      <div class="checkout__left">
        <img
          class="add"
          src={add} alt="Description of the image"
          style={{
            width: "70%",
            height: "40%",
          }}
        ></img>
        <h2 class="checkout__title"> Your Food Cart</h2>
        
        {cart.length === 0 ? (
          <div> 
          <p>Your cart is empty</p>
          <button onClick={() => navigate("/online")} className="checkout-btn">
            Order Now
          </button>
          </div>
          
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
