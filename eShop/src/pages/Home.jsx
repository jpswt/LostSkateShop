import React from 'react';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Letter from '../components/Letter';
import Footer from '../components/Footer';
import '../scss/styles/Mobile.css';

const Home = () => {
	return (
		<div>
			<div className="mobile-nav">
				<Message />
				<Navbar />
			</div>
			<Header />
			<Categories />
			<Products />
			<Letter />
			<Footer />
		</div>
	);
};

export default Home;
