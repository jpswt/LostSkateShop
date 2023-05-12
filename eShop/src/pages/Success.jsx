import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../redux/cartRedux';
import Message from '../components/Message';
import Navbar from '../components/Navbar';
import SuccessMsg from '../components/SuccessMsg';
import Footer from '../components/Footer';

const Success = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const location = useLocation();
	// console.log(location);

	useEffect(() => {
		dispatch(resetCart());
	}, []);

	return (
		<div>
			<Message />
			<Navbar />
			<SuccessMsg />
			<Footer />
		</div>
	);
};

export default Success;
