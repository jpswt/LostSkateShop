// import { useRef, useState } from 'react';
// import useLocalStorage from 'react-use-localstorage';
import { Link } from 'react-router-dom';
// import { addProduct } from '../redux/cartRedux';
// import { useDispatch } from 'react-redux';
import '../scss/styles/ProductItems.css';

const ProductItems = ({ product }) => {
	// const [quantity, setQuantity] = useState(1);
	// const [storage, setStorage] = useLocalStorage(
	// 	'favorite',
	// 	JSON.stringify([]) || null
	// );

	// const storeArray = useRef(JSON.parse(storage));
	// const isLiked = storeArray.current.includes(product._id);

	// const handleToggle = () => {
	// 	if (!isLiked) {
	// 		storeArray.current.push(product._id);
	// 		setStorage(JSON.stringify(storeArray.current));
	// 	} else {
	// 		const indexIsLiked = storeArray.current.indexOf(product._id);
	// 		storeArray.current.splice(indexIsLiked, 1);
	// 		setStorage(JSON.stringify(storeArray.current));
	// 	}
	// };

	// const dispatch = useDispatch();

	// const handleCart = () => {
	// 	dispatch(addProduct({ ...product, quantity }));
	// };

	return (
		<div className="product">
			<div className="product-container">
				<img src={product.img} alt="" />
				<Link to={`/product/${product._id}`}>
					<div className="product-container">
						<div className="product-title">{product.title}</div>
					</div>
				</Link>
			</div>
			<div className="details-container">
				<div className="title">{product.manufacturer}</div>
			</div>
		</div>
	);
};

export default ProductItems;
