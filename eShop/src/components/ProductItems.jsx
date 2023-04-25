import { Link } from 'react-router-dom';
import '../scss/styles/ProductItems.css';

const ProductItems = ({ product }) => {
	return (
		<div className="product">
			<div className="product-container">
				<img src={product.img} alt="" />
				<div className="btn-container">
					<i className="fa-solid fa-cart-plus fa-lg"></i>
					<i className="fa-regular fa-heart fa-lg"></i>
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
