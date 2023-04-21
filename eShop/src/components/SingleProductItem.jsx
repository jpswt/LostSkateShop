import React from 'react';
import '../scss/styles/SingleProductItem.css';

const SingleProductItem = () => {
	return (
		<div className="products">
			<div className="product-container">
				<div className="image-container">
					<img
						className="product-image"
						src="https://cdn.shopify.com/s/files/1/0519/1388/3831/products/888560000049-1_1280x.jpg?v=1621319734"
						alt=""
					/>
				</div>
				<div className="description-container">
					<div className="description">
						<h2>Price: $149.00</h2>
						<h3>Nikon Camera</h3>
						<p className="details">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
							libero recusandae neque, inventore molestias cupiditate, aliquam
							molestiae eos repudiandae officiis magni optio saepe voluptas
							doloremque quidem vitae delectus nobis maxime veniam ratione
							debitis voluptatem assumenda. Iusto, voluptate blanditiis aliquid,
							ipsum magnam repellat quibusdam architecto rerum ut nulla error
							fugit deleniti?
						</p>
					</div>
					<div className="mobile">
						<div className="filter-container">
							{/* <h2>Colors:</h2>
							<div className="color-container">
								<div className="colors" id="black"></div>
								<div className="colors" id="white"></div>
								<div className="colors" id="gray"></div>
							</div> */}
						</div>
						<div className="quantity-container">
							<h2>Quantity:</h2>
							<div className="checkout">
								<div className="counter">
									<div className="minus">-</div>
									<div className="count">2</div>
									<div className="plus">+</div>
								</div>
								<button className="cart-btn">Add to Cart</button>
							</div>
						</div>
					</div>
					<div className="mobile-btn">
						<button className="cart-btn-mobile">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductItem;
