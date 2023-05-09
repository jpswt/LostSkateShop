import { Link } from 'react-router-dom';
import '../scss/styles/ProductItems.css';

const ProductItems = ({ product }) => {
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
