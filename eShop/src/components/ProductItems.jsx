import { useRef, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import '../scss/styles/ProductItems.css';

const ProductItems = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const [storage, setStorage] = useLocalStorage(
		'favorite',
		JSON.stringify([]) || null
	);

	const storeArray = useRef(JSON.parse(storage));
	const isLiked = storeArray.current.includes(product._id);

	const handleToggle = () => {
		if (!isLiked) {
			storeArray.current.push(product._id);
			setStorage(JSON.stringify(storeArray.current));
		} else {
			const indexIsLiked = storeArray.current.indexOf(product._id);
			storeArray.current.splice(indexIsLiked, 1);
			setStorage(JSON.stringify(storeArray.current));
		}
	};

	const dispatch = useDispatch();

	const handleCart = () => {
		dispatch(addProduct({ ...product, quantity }));
	};

	return (
		<div className="product">
			<div className="product-container">
				<img src={product.img} alt="" />
				<div className="btn-container">
					<i className="fa-solid fa-cart-plus fa-lg" onClick={handleCart}></i>

					<i
						onClick={handleToggle}
						class={
							!isLiked ? 'fa-regular fa-heart fa-lg' : 'fa-regular fa-cat fa-lg'
						}
					></i>

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
