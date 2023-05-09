import React, { useState } from 'react';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import '../scss/styles/SingleProductItem.css';

const SingleProductItem = ({ product }) => {
	const input = product?.description?.split('.').filter(Boolean);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const handleQuantity = (val) => {
		if (val === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleCart = () => {
		dispatch(addProduct({ ...product, quantity }));
	};

	return (
		<>
			<div className="products">
				<div className="product-container">
					<div className="description-mobile">
						<div className="description">
							<h3>{product.title}</h3>
							<h2>Price: ${product.price}</h2>
						</div>
					</div>
					<div className="image-container">
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
					<div className="description-container">
						<div className="description">
							<h2>Price: ${product.price}</h2>
							<h3>{product.title}</h3>
						</div>
						<div
							className={
								product.width ||
								product.length ||
								product.size ||
								product.wheelbase
									? 'dimensions'
									: 'dimensions inactive'
							}
						>
							<div className="dim-title">Dimensions:</div>
							{product.width ? (
								<div>
									{product.width}" Width x {product.length}" Length
								</div>
							) : null}
							{product.length && product.categories[1] === 'bushings' ? (
								<div>{product.length}" Length</div>
							) : null}

							{product.wheelbase ? (
								<div>
									<span>Wheelbase: {product.wheelbase}"</span>
								</div>
							) : null}
							{product.size ? <div>{product.size}mm</div> : null}
						</div>
						<div className="mobile">
							<div className="quantity-container">
								<h2>Quantity:</h2>
								<div className="checkout">
									<div className="counter">
										<div
											className="minus icons "
											onClick={() => handleQuantity('dec')}
										>
											-
										</div>
										<div className="count">{quantity}</div>
										<div
											className="icons"
											onClick={() => handleQuantity('inc')}
										>
											+
										</div>
									</div>
									<button className="cart-btn" onClick={handleCart}>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
						<div className="mobile-btn">
							<button className="cart-btn-mobile" onClick={handleCart}>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="features-container">
				<h3>Features</h3>
				<ul className="details-container">
					{input?.map((item, index) => (
						<li className="details" key={index}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default SingleProductItem;
