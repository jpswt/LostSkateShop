import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../scss/styles/SuccessMsg.css';
import { publicRequest, userRequest } from '../request';

const SuccessMsg = () => {
	const location = useLocation();
	const userId = location.pathname.split('/')[2];
	const [isLoading, setIsLoading] = useState(false);
	console.log(location);
	const [order, setOrder] = useState([]);

	useEffect(() => {
		const getOrder = async () => {
			setIsLoading(true);
			try {
				const response = await userRequest.get(`/orders/${userId}`);
				setOrder(response.data);
			} catch (err) {
				console.log(err.message);
			}
			setIsLoading(false);
		};
		getOrder();
	}, [userId]);
	console.log(order);

	const displayAmt = order?.amount / 100;

	return (
		<>
			{isLoading ? (
				<div className="success-container">
					<p></p>
				</div>
			) : (
				<div className="success-container">
					<div className="success-msg-container">
						<div className="success-icon">
							<i className="fa-regular fa-circle-check"></i>
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
					<div>{displayAmt}</div>
				</div>
			)}
		</>
	);
};

export default SuccessMsg;
