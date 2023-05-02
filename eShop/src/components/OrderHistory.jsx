import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../scss/styles/OrderHistory.css';

const OrderHistory = () => {
	const auth = useSelector((state) => state.user);
	console.log('order', auth);

	useEffect(() => {}, []);

	return (
		<div className="order-container">
			<h2>welcome {auth.currentUser.username}</h2>
		</div>
	);
};

export default OrderHistory;
