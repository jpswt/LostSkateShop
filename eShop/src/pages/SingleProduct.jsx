import Footer from '../components/Footer';
import Message from '../components/Message';
import Letter from '../components/Letter';
import Navbar from '../components/Navbar';
import SingleProductItem from '../components/SingleProductItem';
import { useLocation } from 'react-router';
import { publicRequest } from '../request';
import '../scss/styles/SingleProduct.css';
import { useEffect, useState } from 'react';

const SingleProduct = () => {
	const location = useLocation();
	const productID = location.pathname.split('/')[2];
	// console.log(productID);

	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getProduct = async () => {
			try {
				setIsLoading(true);
				const response = await publicRequest.get(`/products/${productID}`);
				setProduct(response.data);
				setIsLoading(false);
			} catch {}
		};
		getProduct();
	}, [productID]);

	// console.log(product);

	if (isLoading) {
		<h2>Loading...</h2>;
	} else
		return (
			<div>
				<Message />
				<Navbar />
				<SingleProductItem product={product} isLoading={isLoading} />
				<Letter />
				<Footer />
			</div>
		);
};

export default SingleProduct;
