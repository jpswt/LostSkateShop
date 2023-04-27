import axios from 'axios';
import { useSelector } from 'react-redux';

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
			<button onClick={() => handleCheckOut()}>PayButton</button>
		</>
	);
};

export default PayButton;
