import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addProduct, increaseCart, decreaseCart } from '../redux/cartRedux';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import PayButton from './PayButton';
import StripeCheckout from 'react-stripe-checkout';
import { removeProduct } from '../redux/cartRedux';
import '../scss/styles/ShoppingCart.css';

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
						headers: {
							'Content-type': 'application/json',
						},
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
			{/* <div className="top-container">
				<button className="shopping-btn">BACK TO SHOPPING</button>
				<div className="list-info">
					<p className="list-text"> Shopping Cart (0)</p>
					<p className="list-text"> Wishlist</p>
				</div>
				<button className="shopping-btn">CHECKOUT</button>
			</div> */}
			<div className="bottom-container">
				{cart.products.length === 0 ? (
					<div className="no-cart">No Items in Cart</div>
				) : (
					<div className="cart-info">
						{cart.products.map((product) => (
							<div className="product-container" key={product._id}>
								<div className="product-detail">
									{/* <img className="product-image" src={product.img} alt="" /> */}
									<div className="image-wrapper">
										<img
											className={
												product?.categories?.[0] === 'decks'
													? 'decks-image'
													: product?.categories?.[0] === 'trucks'
													? 'trucks-image'
													: product?.categories?.[0] === 'wheels'
													? 'wheels-image'
													: product?.categories?.[0] === 'bearings'
													? 'bearings-image'
													: product?.categories?.[1] === 'griptape'
													? 'grip-image'
													: product?.categories?.[1] === 'bolts'
													? 'bolts-image'
													: product?.categories?.[1] === 'bushings'
													? 'bushings-image'
													: 'product-image'
											}
											src={product.img}
											alt=""
										/>
									</div>
									<div className="details-container">
										<div className="product-info">
											<span>{product.title}</span>
										</div>
										<div className="product-info">
											<span className="product-keys">
												Manufacturer:{' '}
												<span className="non-product-key">
													{product.manufacturer}
												</span>
											</span>
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
													<span className="product-keys"> Wheelbase:</span>{' '}
													{product.wheelbase}"
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
												<i className="fa-regular fa-trash-can fa-xl"> </i>
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

					<PayButton products={cart.products} />
					{/* <div className="checkout">
							<button className="check-now-btn" type="submit">
								CHECKOUT NOW
							</button>
						</div> */}
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
