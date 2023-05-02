import React from 'react';
import Message from '../components/Message';
import Navbar from '../components/Navbar';
import OrderHistory from '../components/OrderHistory';
import Footer from '../components/Footer';

const Account = () => {
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
