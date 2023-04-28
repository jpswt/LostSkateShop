import '../scss/styles/Products.css';
import { popProducts } from '../assets/data/data';
import ProductItems from './ProductItems';

const Products = ({ category, filters, sort, products, filteredProducts }) => {
	console.log(category, filters, sort);

	return (
		<div className="wrapper">
			<div className="products-container">
				{filteredProducts?.length > 0 ? (
					filteredProducts.map((product) => (
						<ProductItems product={product} key={product._id} />
					))
				) : (
					<h2>No Items found</h2>
				)}
			</div>
		</div>
	);
};

export default Products;
