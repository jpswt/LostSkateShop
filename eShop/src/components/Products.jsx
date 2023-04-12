import '../styles/Products.css';
import { popProducts } from '../assets/data/data';
import ProductItems from './ProductItems';

const Products = () => {
	return (
		<>
			<div className="trending">TRENDING ITEMS...</div>
			<div className="products-container">
				{popProducts.map((product) => (
					<ProductItems product={product} />
				))}
			</div>
		</>
	);
};

export default Products;
