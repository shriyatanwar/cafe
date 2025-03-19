import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useCart } from "./cartContext"; 
import { useState } from "react";
import { useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";


function Subtotal() {
  const { cart } = useCart(); // Get cart from context
  const total = cart.reduce((sum, item) => sum + item.price, 0); 

  const [proceed , setproceed] = useState(false);
  const user = useAuth();
  const navigate = useNavigate(); 

  

  const proceedP = async (e) => {
    e.preventDefault();

    if (!user) {
        setproceed(true);
        return;
    }
    else{
      navigate("/proceedPage");
    
  }
}

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
            <button onClick={proceedP}> Proceed to checkout</button>
          </>
        )}
      /> 

            {proceed && (
                <div class =" overlay">
                  <div class="content"> 
                <h2> You must login first to continue </h2>
                <button onClick={() => setproceed(false)}>Close</button>
                </div>
                </div>
                
            )}
    </div>
  );
}

export default Subtotal;
