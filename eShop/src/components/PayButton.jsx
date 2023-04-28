import axios from 'axios';
import '../scss/styles/PayButton.css';

const PayButton = ({ products }) => {
	const handleCheckOut = () => {
		axios
			.post(`${import.meta.env.VITE_DB_URI}/checkout/payment`, {
				products,
			})
			.then((res) => {
				if (res.data.url) {
					window.location.href = res.data.url;
				}
			})
			.catch((err) => console.log(err.message));
		// console.log(products);
	};
	return (
		<>
			<button className="checkout-btn" onClick={() => handleCheckOut()}>
				Checkout
			</button>
		</>
	);
};

export default PayButton;
