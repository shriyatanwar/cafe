import React from "react";
import "./product.css";

function Product({id,title,price,image, explaination}) {
    return(
        <div class="product">

        <div class="product__info"> 
            <p><strong>  {title} </strong> </p>
            <p> {explaination}</p>
            <p class="product__price">{price}/-</p>
        </div>
        <img src={image}></img>
        <button> Add to basket</button>
</div>
    )
    
};
export default Product;