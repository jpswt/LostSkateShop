import axios from 'axios';
import '../scss/styles/PayButton.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PayButton = ({ products }) => {
	let cart = JSON.parse(localStorage.getItem('products'));
	const auth = useSelector((state) => state.user);
	const navigate = useNavigate();

	const handleCheckOut = () => {
		if (cart) {
			axios
				.post(`${import.meta.env.VITE_DB_URI}/checkout/payment`, {
					userId: auth.currentUser.id,
					products,
				})
				.then((res) => {
					if (res.data.url) {
						window.location.href = res.data.url;
					}
				})
				.catch((err) => console.log(err.message));
		}
		// console.log(JSON.parse(localStorage.getItem('products')).length);
	};
	return (
		<>
			{auth.currentUser ? (
				<button className="checkout-btn" onClick={() => handleCheckOut()}>
					CHECKOUT
				</button>
			) : (
				<button
					className="checkout-btn logged-out"
					onClick={() => navigate('/login')}
				>
					LOGIN TO CHECKOUT
				</button>
			)}
		</>
	);
};

export default PayButton;
