import React from 'react';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Letter from '../components/Letter';
import Footer from '../components/Footer';

const ProductList = () => {
	return (
		<div>
			<Message />
			<Navbar />
			<Filter />
			<Products />
			<Letter />
			<Footer />
		</div>
	);
};

export default ProductList;
