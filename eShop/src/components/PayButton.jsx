import axios from 'axios';
import '../scss/styles/PayButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PayButton = ({ products }) => {
	let cart = JSON.parse(localStorage.getItem('products')).length;
	const auth = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCheckOut = () => {
		if (cart > 0) {
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
		}
		console.log(JSON.parse(localStorage.getItem('products')).length);
	};
	return (
		<>
			{auth.currentUser ? (
				<button className="checkout-btn" onClick={() => handleCheckOut()}>
					Checkout
				</button>
			) : (
				<button className="checkout-btn" onClick={() => navigate('/login')}>
					Login to Checkout
				</button>
			)}
		</>
	);
};

export default PayButton;
