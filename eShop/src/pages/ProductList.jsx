import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Letter from '../components/Letter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[2];

	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('latest');

	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [options, setOptions] = useState([]);

	const handleFilter = (e) => {
		const value = e.target.value;
		setFilters({
			...filters,
			[e.target.name]: value,
		});
	};

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					category
						? `${import.meta.env.VITE_DB_URI}/products?category=${category}`
						: `${import.meta.env.VITE_DB_URI}/products`
				);
				setProducts(response.data);
				const results = [];
				response.data.forEach((item, index) => {
					results.push({
						key: item.manufacturer,
						value: item.manufacturer,
					});

					setOptions([...results]);
				});
			} catch (err) {}
		};
		getProducts();
	}, [category]);

	console.log('Options', options);
	console.log('Sort', sort);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products?.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, category, filters]);

	useEffect(() => {
		if (sort === 'latest') {
			setFilteredProducts((products) =>
				[...products].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
			);
		} else if (sort === 'asc') {
			setFilteredProducts((products) =>
				[...products].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((products) =>
				[...products].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<div>
			<Message />
			<Navbar />
			<Filter
				setSort={setSort}
				handleFilter={handleFilter}
				options={options}
				category={category}
			/>
			<Products
				category={category}
				filters={filters}
				sort={sort}
				products={products}
				filteredProducts={filteredProducts}
			/>
			<Letter />
			<Footer />
		</div>
	);
};

export default ProductList;
