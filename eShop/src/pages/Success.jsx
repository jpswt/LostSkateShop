import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../redux/cartRedux';

const Success = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const location = useLocation();
	console.log(location);

	useEffect(() => {
		dispatch(resetCart());
	}, []);

	return <div>Success</div>;
};

export default Success;
