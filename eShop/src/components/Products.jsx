import '../scss/styles/Products.css';
import { popProducts } from '../assets/data/data';
import ProductItems from './ProductItems';
import { useEffect, useState } from 'react';

const Products = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	// useEffect(() => {}, [cat]);

	return (
		<>
			<div className="trending">
				<h2>NEW ARRIVALS</h2>
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
