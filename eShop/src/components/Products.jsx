import '../scss/styles/Products.css';
import { popProducts } from '../assets/data/data';
import ProductItems from './ProductItems';

const Products = ({ category, filters, sort, products, filteredProducts }) => {
	console.log(category, filters, sort);

	return (
		<div className="products-container">
			{filteredProducts.map((product) => (
				<ProductItems product={product} key={product.id} />
			))}
		</div>
	);
};

export default Products;
