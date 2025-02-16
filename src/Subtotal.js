import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useCart } from "./cartContext"; 

function Subtotal() {
  const { cart } = useCart(); // Get cart from context

  const total = cart.reduce((sum, item) => sum + item.price, 0); 

  return (
    <div class="subtotal">  
      <NumericFormat
        value={0} 
        displayType="text"
        thousandSeparator=","
        decimalSeparator="."
        prefix="₹"
        renderText={(value) => (
          <>
             <p>Subtotal ({cart.length} items): <strong>₹{total}</strong></p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button> Proceed to checkout</button>
          </>
        )}
      /> 
    </div>
  );
}

export default Subtotal;
