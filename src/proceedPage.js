import "./proceedPage.css";

import { useCart } from "./components/cartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faPaypal, faGooglePay } from "@fortawesome/free-brands-svg-icons";

function ProceedPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <div className="payment-container">
        <h1>Proceed for Payment</h1>
        <h2>Amount to be Paid: ₹{total}</h2>

        <div className="payment-options">
          <button className="payment-btn">
            <FontAwesomeIcon icon={faCreditCard} size="xl" /> Credit/Debit Card
          </button>
          <button className="payment-btn">
            <FontAwesomeIcon icon={faPaypal} size="xl" />
            PayPal
          </button>
          <button className="payment-btn">
            <FontAwesomeIcon icon={faWallet} size="xl" /> UPI/Wallet
          </button>
          <button className="payment-btn">
            <FontAwesomeIcon icon={faGooglePay} size="xl" /> GooglePay
          </button>
          <button className="payment-btn">
            Cash on delivery
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProceedPage;
