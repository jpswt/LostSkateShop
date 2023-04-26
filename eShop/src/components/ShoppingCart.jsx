import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addProduct, increaseCart, decreaseCart } from '../redux/cartRedux';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import '../scss/styles/ShoppingCart.css';
import { removeProduct } from '../redux/cartRedux';

const KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

const ShoppingCart = () => {
	const cart = useSelector((state) => state.cart);
	const [quantity, setQuantity] = useState(1);
	const [stripeToken, setStripeToken] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleShipping = () => {
		let shippingFee = 0;
		if (cart.products.length !== 0) {
			return 5.99;
		} else {
			return shippingFee.toFixed(2);
		}
	};

	console.log(cart.products);

	const subTotalPrice = () => {
		let subtotal = 0;
		if (cart.products.length === 0) {
			return subtotal.toFixed(2);
		} else {
			cart.products.forEach((item) => {
				subtotal += item.quantity * item.price;
			});
			return subtotal.toFixed(2);
		}
	};

	const totalPrice = Number(handleShipping()) + Number(subTotalPrice());

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const postRequest = async () => {
			try {
				const response = await axios.post(
					`${import.meta.env.VITE_DB_URI}/checkout/payment`,
					{
						tokenID: stripeToken.id,
						amount: cart.total * 100,
					}
				);
				navigate('/success', { data: response.data });
				console.log(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		stripeToken !== null && postRequest();
	}, [stripeToken, cart.total, navigate]);

	return (
		<div className="shopping-container">
			<h1>SHOPPING CART</h1>
			<div className="top-container">
				<button className="shopping-btn">BACK TO SHOPPING</button>
				<div className="list-info">
					<p className="list-text"> Shopping Cart (0)</p>
					<p className="list-text"> Wishlist</p>
				</div>
				<button className="shopping-btn">CHECKOUT</button>
			</div>
			<div className="bottom-container">
				{cart.products.length === 0 ? (
					<div className="no-cart">No Items in Cart</div>
				) : (
					<div className="cart-info">
						{cart.products.map((product) => (
							<div className="product-container">
								<div className="product-detail">
									<img className="product-image" src={product.img} alt="" />
									<div className="details-container">
										<div className="product-info">
											<span className="product-keys">Name:</span>
											<span>{product.title}</span>
										</div>
										<div className="product-info">
											<span className="product-keys">Manufacturer:</span>
											<span>{product.manufacturer}</span>
										</div>
										<div className="product-info">
											<span className="product-keys">Dimensions:</span>
											{product.width ? (
												<span>
													{product.width}" Width x {product.length}" Length
												</span>
											) : null}
											{product.length &&
											product.categories[1] === 'bushings' ? (
												<span>{product.length}" Length</span>
											) : null}

											{product.wheelbase ? (
												<span>
													<span>Wheelbase: {product.wheelbase}"</span>
												</span>
											) : null}
											{product.size ? <span>{product.size}mm</span> : null}
										</div>
										<div className="quantity-container">
											<div className="price-amount">
												<div
													className="icons"
													onClick={() =>
														dispatch(decreaseCart({ ...product, quantity }))
													}
												>
													<p>-</p>
												</div>
												<div className="product-quantity">
													{product.quantity}
												</div>
												<div
													className="icons"
													onClick={() =>
														dispatch(increaseCart({ ...product, quantity }))
													}
												>
													<p>+</p>
												</div>
											</div>
											<div
												className="remove"
												onClick={() =>
													dispatch(removeProduct(product._id, product.quantity))
												}
											>
												<i class="fa-regular fa-trash-can fa-xl"> </i>
											</div>
										</div>
									</div>
								</div>
								<div className="price-detail">
									<div className="product-price">
										Item Cost: ${product.price * product.quantity}.00
									</div>
								</div>
							</div>
						))}
					</div>
				)}
				<div className="summary-container">
					<div className="summary-title">SUMMARY</div>
					<div className="summary-section">
						<div className="item-key">Subtotal</div>
						<div className="item-price">${subTotalPrice()}</div>
					</div>
					<div className="summary-section">
						<div className="item-key">Estimated Shipping</div>
						<div className="item-price">${handleShipping()}</div>
					</div>
					<div className="summary-section">
						<div className="item-key">Total Cost</div>
						<div className="item-total"> ${totalPrice.toFixed(2)}</div>
					</div>
					<StripeCheckout
						name="Lost Skate Shop"
						image="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
						billingAddress
						shippingAddress
						description={`Your total is $${subTotalPrice()}.00 `}
						amount={cart.total * 100}
						token={onToken}
						stripeKey={KEY}
					>
						<button>Pay Now</button>
					</StripeCheckout>
					{/* <div className="checkout">
						<button className="check-now-btn">CHECKOUT NOW</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
