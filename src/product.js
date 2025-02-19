import React from "react";
import "./product.css";
import { useCart } from "./cartContext";
import { useNavigate } from "react-router-dom";

function Product({id,title,price,image, explaination}) {
    const { addToCart } = useCart(); // Get addToCart from context

    const product = { id, title, price, image, explaination };

    const navigate = useNavigate();
  
    
    return(
        <div class="product">

        <div class="product__info"> 
            <p><strong>  {title} </strong> </p>
            <p> {explaination}</p>
            <p class="product__price">{price}/-</p>
        </div>
        <img src={image}></img>
        <button onClick={() => addToCart(product)}> Add to basket</button>
        <button onClick={()=> navigate("/cart")}> Go to cart </button>
</div>
    )
    
};
export default Product;