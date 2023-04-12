import React from 'react';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Letter from '../components/Letter';

const Home = () => {
	return (
		<div>
			<Message />
			<Navbar />
			<Header />
			<Categories />
			<Products />
			<Letter />
		</div>
	);
};

export default Home;
