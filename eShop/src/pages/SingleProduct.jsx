import Footer from '../components/Footer';
import Letter from '../components/Letter';
import Navbar from '../components/Navbar';
import SingleProductItem from '../components/SingleProductItem';
import '../scss/styles/SingleProduct.css';

const SingleProduct = () => {
	return (
		<div>
			<Navbar />
			<SingleProductItem />
			<Letter />
			<Footer />
		</div>
	);
};

export default SingleProduct;
