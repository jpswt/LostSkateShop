import React from 'react';
import '../scss/styles/ShoppingCart.css';

const ShoppingCart = () => {
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
					<div className="product-container">
						<div className="product-detail">
							<img
								className="product-image"
								src="https://cdn.shopify.com/s/files/1/0519/1388/3831/products/193172410231-2_1280x.jpg?v=1679705068"
								alt=""
							/>
							<div className="details-container">
								<div className="product-info">
									<span className="product-keys">Name:</span>
									<span>Marc Gator Board</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Id:</span>
									<span>12345</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Dimensions:</span>
									<span>8.25in</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Manufacturer:</span>
									<span>Thrasher</span>
								</div>
								<div className="price-amount">
									<div className="icons">
										<p>-</p>
									</div>
									<div className="product-quantity">2</div>
									<div className="icons">
										<p>+</p>
									</div>
								</div>
							</div>
						</div>
						<div className="price-detail">
							<div className="product-price">Item Cost: $70.00</div>
						</div>
					</div>
					<div className="product-container">
						<div className="product-detail">
							<img
								className="product-image"
								src="https://cdn.shopify.com/s/files/1/0519/1388/3831/products/193172410231-2_1280x.jpg?v=1679705068"
								alt=""
							/>
							<div className="details-container">
								<div className="product-info">
									<span className="product-keys">Name:</span>
									<span>Marc Gator Board</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Id:</span>
									<span>12345</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Dimensions:</span>
									<span>8.25in</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Manufacturer:</span>
									<span>Thrasher</span>
								</div>
								<div className="price-amount">
									<div className="icons">
										<p>-</p>
									</div>
									<div className="product-quantity">2</div>
									<div className="icons">
										<p>+</p>
									</div>
								</div>
							</div>
						</div>
						<div className="price-detail">
							<div className="product-price">Item Cost: $70.00</div>
						</div>
					</div>
					<div className="product-container">
						<div className="product-detail">
							<img
								className="product-image"
								src="https://cdn.shopify.com/s/files/1/0519/1388/3831/products/193172410231-2_1280x.jpg?v=1679705068"
								alt=""
							/>
							<div className="details-container">
								<div className="product-info">
									<span className="product-keys">Name:</span>
									<span>Marc Gator Board</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Id:</span>
									<span>12345</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Dimensions:</span>
									<span>8.25in</span>
								</div>
								<div className="product-info">
									<span className="product-keys">Manufacturer:</span>
									<span>Thrasher</span>
								</div>
								<div className="price-amount">
									<div className="icons">
										<p>-</p>
									</div>
									<div className="product-quantity">2</div>
									<div className="icons">
										<p>+</p>
									</div>
								</div>
							</div>
						</div>
						<div className="price-detail">
							<div className="product-price">Item Cost: $70.00</div>
						</div>
					</div>
				</div>
				<div className="summary-container">
					<div className="summary-title">SUMMARY</div>
					<div className="summary-section">
						<div className="item-key">Subtotal</div>
						<div className="item-price">$70.00</div>
					</div>
					<div className="summary-section">
						<div className="item-key">Estimated Shipping</div>
						<div className="item-price">$5.99</div>
					</div>
					<div className="summary-section">
						<div className="item-key">Total Cost</div>
						<div className="item-total">$75.99</div>
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
