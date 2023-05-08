import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Trending from '../components/Trending';
import Letter from '../components/Letter';
import Footer from '../components/Footer';
import '../scss/styles/Mobile.css';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<div className="mobile-nav">
				<Message />
				<Navbar />
			</div>
			<Header />
			<Categories />
			<Trending />
			<Letter />
			<Footer />
		</div>
	);
};

export default Home;
