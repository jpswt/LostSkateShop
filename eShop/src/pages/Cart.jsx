import React, { useEffect } from 'react';
import '../scss/styles/Cart.css';
import '../components/Message';
import Message from '../components/Message';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';

const Cart = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="cart-container">
			<Message />
			<Navbar />
			<ShoppingCart />
			<Footer />
		</div>
	);
};

export default Cart;
