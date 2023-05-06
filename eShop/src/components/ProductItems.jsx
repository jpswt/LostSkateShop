import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import '../scss/styles/ProductItems.css';

const ProductItems = ({ product }) => {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();

	const handleLike = () => {
		dispatch(addFavorite({ ...product }));
	};

	const handleCart = () => {
		dispatch(addProduct({ ...product, quantity }));
	};

	return (
		<div className="product">
			<div className="product-container">
				<img src={product.img} alt="" />
				<div className="btn-container">
					<i className="fa-solid fa-cart-plus fa-lg" onClick={handleCart}></i>

					<i class="fa-regular fa-heart fa-lg" onclick={handleLike}></i>

					<Link to={`/product/${product._id}`} className="i-links">
						<i className="fa-solid fa-magnifying-glass fa-lg"></i>
					</Link>
				</div>
			</div>
			<div className="details-container">
				<div className="title">{product.manufacturer}</div>
				<div>{product.desc}</div>
			</div>
		</div>
	);
};

export default ProductItems;
