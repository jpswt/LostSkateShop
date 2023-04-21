import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Letter from '../components/Letter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import { useState } from 'react';

const ProductList = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[2];

	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('Latest');

	const handleFilter = (e) => {
		const value = e.target.value;
		setFilters({
			...filters,
			[e.target.name]: value,
		});
	};

	return (
		<div>
			<Message />
			<Navbar />
			<Filter
				category={category}
				filter={filters}
				setFilter={setFilters}
				sort={sort}
				setSort={setSort}
				handleFilter={handleFilter}
			/>
			<Products category={category} filters={filters} sort={sort} />
			<Letter />
			<Footer />
		</div>
	);
};

export default ProductList;
