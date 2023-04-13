import '../styles/Products.css';
import { popProducts } from '../assets/data/data';
import ProductItems from './ProductItems';

const Products = () => {
	return (
		<>
			<div className="trending">
				<h2>TRENDING</h2>
			</div>
			<div className="products-container">
				{popProducts.map((product) => (
					<ProductItems product={product} key={product.id} />
				))}
			</div>
		</>
	);
};

export default Products;
