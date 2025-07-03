import { Link } from "react-router-dom";
import "./OrderSuccess.css"


const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <h2 className="order-success-title">🎉 Order Placed Successfully!</h2>
      <p className="order-success-message">Thank you for your purchase. Your order is being processed.</p>
      <Link to="/" className="order-success-link">
        Go back to Home
    </Link>
    </div>
  );
};

export default OrderSuccess;