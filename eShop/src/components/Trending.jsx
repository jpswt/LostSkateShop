import '../scss/styles/Trending.css';
import ProductItems from './ProductItems';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Trending = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const shuffled = products.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 7);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					category
						? `${import.meta.env.VITE_DB_URI}/products?category=${category}`
						: `${import.meta.env.VITE_DB_URI}/products`
				);
				setProducts(response.data);
			} catch (err) {}
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, category, filters]);

	// console.log(products);
	return (
		<>
			<div className="trending">
				<h2>TRENDING</h2>
			</div>
			<div className="products-container">
				{selected.map((product) => (
					<ProductItems product={product} key={product._id} />
				))}
			</div>
		</>
	);
};

export default Trending;
