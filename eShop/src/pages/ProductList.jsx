import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Letter from '../components/Letter';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { publicRequest } from '../request';
import { createSearchParams } from 'react-router-dom';

const ProductList = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[2];

	const navigate = useNavigate();

	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('latest');

	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [options, setOptions] = useState([]);
	const [selected, setSelected] = useState('');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleFilter = (e) => {
		const value = e.target.value;

		setFilters({
			...filters,
			[e.target.name]: value,
		});
	};

	useEffect(() => {
		navigate({
			pathname: `/products/${category}/`,
			search: `?${createSearchParams(filters)}`,
		});
	}, [filters]);

	window.onpopstate = (e) => {
		navigate(`/products/${category}/`);
		setFilters({});
		// setSelected('');
	};

	useEffect(() => {
		setIsLoading(true);
		const getProducts = async () => {
			try {
				const response = await publicRequest(
					category ? `/products?category=${category}` : `/products`
				);
				setProducts(response.data);
				const results = [];
				response.data.map((item, index) => {
					results.push({
						key: item.manufacturer,
						value: item.manufacturer,
					});
				});

				let filteredCategories = results.reduce((unique, index) => {
					if (!unique.some((obj) => obj.value === index.value)) {
						unique.push(index);
					}
					return unique;
				}, []);

				setOptions(filteredCategories);
			} catch (err) {}
			setIsLoading(false);
		};
		getProducts();
	}, [category, filters]);

	console.log('Options', options);
	console.log('Sort', sort);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products?.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key]?.includes(value)
					)
				) || 'No item found'
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
		} else if (sort === 'desc') {
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
				selected={selected}
			/>
			<Products
				category={category}
				filters={filters}
				sort={sort}
				products={products}
				filteredProducts={filteredProducts}
				isLoading={isLoading}
			/>
			<Letter />
			<Footer />
		</div>
	);
};

export default ProductList;
