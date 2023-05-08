import React, { useEffect } from 'react';
import Message from '../components/Message';
import Navbar from '../components/Navbar';
import OrderHistory from '../components/OrderHistory';
import Footer from '../components/Footer';

const Account = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Message />
			<Navbar />
			<OrderHistory />
			<Footer />
		</div>
	);
};

export default Account;
