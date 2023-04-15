import React from 'react';
import '../scss/styles/SingleProductItem.css';

const SingleProductItem = () => {
	return (
		<div className="products">
			<div className="product-container">
				<div className="image-container">
					<img
						src="https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
				</div>
				<div className="description-container">
					<div className="description">
						<h3>Price: $149.00</h3>
						<h2>Nikon Camera</h2>
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
					<div className="filter-container">
						<h2>Colors:</h2>
						<div className="color-container">
							<div className="colors" id="black"></div>
							<div className="colors" id="white"></div>
							<div className="colors" id="gray"></div>
						</div>
					</div>
					<div className="quantity-container">
						<h2>Quantity:</h2>
						<div className="checkout">
							<div className="counter">
								<div className="minus">-</div>
								<div className="count">2</div>
								<div className="plus">+</div>
							</div>
							<button>Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductItem;
