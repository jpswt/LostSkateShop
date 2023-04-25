import React from 'react';
import { useSelector } from 'react-redux';
import '../scss/styles/ShoppingCart.css';

const ShoppingCart = () => {
	const cart = useSelector((state) => state.cart);

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
										{product.length && product.categories[1] === 'bushings' ? (
											<span>{product.length}" Length</span>
										) : null}

										{product.wheelbase ? (
											<span>
												<span>Wheelbase: {product.wheelbase}"</span>
											</span>
										) : null}
										{product.size ? <span>{product.size}mm</span> : null}
									</div>
									<div className="price-amount">
										<div className="icons">
											<p>-</p>
										</div>
										<div className="product-quantity">{product.quantity}</div>
										<div className="icons">
											<p>+</p>
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
				<div className="summary-container">
					<div className="summary-title">SUMMARY</div>
					<div className="summary-section">
						<div className="item-key">Subtotal</div>
						<div className="item-price">${cart.total.toFixed(2)}</div>
					</div>
					<div className="summary-section">
						<div className="item-key">Estimated Shipping</div>
						<div className="item-price">$5.99</div>
					</div>
					<div className="summary-section">
						<div className="item-key">Total Cost</div>
						<div className="item-total">$ {cart.total.toFixed(2)}</div>
					</div>
					<div className="checkout">
						<button className="check-now-btn">CHECKOUT NOW</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
