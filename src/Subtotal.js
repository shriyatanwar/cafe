import "./Subtotal.css";
import { NumericFormat } from "react-number-format";

function Subtotal() {
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
            <p>Subtotal (0 items): <strong>{value}</strong></p>
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
