import { Link } from 'react-router-dom';
import '../scss/styles/SuccessMsg.css';

const SuccessMsg = () => {
	return (
		<div className="success-container">
			<div className="success-msg-container">
				<div className="success-icon">
					<i class="fa-regular fa-circle-check"></i>
				</div>
				<div className="success-msg">
					<span>Thank You! </span>Your order has been processed.
				</div>
				<div className="checkout-btn-container">
					<Link to="/cart">
						<button className="checkout-btn">Return to Cart</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SuccessMsg;
