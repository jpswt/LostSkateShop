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
	const shippingRate = 5.99;
	const phone = order?.address?.phone;

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

						<div className="order-container">
							<h2>Order Summary</h2>
							<p>Order #: {order?._id?.slice(-10).toUpperCase()}</p>
							{order?.products?.map((product) => (
								<div className="order-wrapper">
									<div className="order-summary">
										<div className="order-info">
											<h3>{product.description}</h3>
											<p>Quantity: {product.quantity}</p>
										</div>
										<div className="order-price">
											<p>${(product.amount_total / 100).toFixed(2)}</p>
										</div>
									</div>
								</div>
							))}
							<div className="subtotal">
								<p>Subtotal</p>
								<p>${(displayAmt - shippingRate).toFixed(2)}</p>
							</div>
							<hr />
							<div className="shipping">
								<p>Shipping</p>
								<p>${shippingRate}</p>
							</div>
							<hr />
							<div className="total">
								<p>Total</p>
								<p>
									<span>${displayAmt}</span>
								</p>
							</div>
						</div>
						<div className="shipping-details">
							<h2>Order Details</h2>
							<div className="details-container">
								<div className="address">
									<h3 className="title">Shipping Address</h3>
									<p>{order?.address?.name}</p>
									<p>{order?.address?.address.line1}</p>
									<p>
										{order?.address?.address.city},{' '}
										{order?.address?.address.state}{' '}
										{order?.address?.address.postal_code}
									</p>
								</div>
								<div className="contact">
									<h3 className="title">Contact Information</h3>
									<p>{order?.address?.email}</p>
									<p>
										{phone.slice(2, 5)}-{phone.slice(5, 8)}-{phone.slice(8)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SuccessMsg;
