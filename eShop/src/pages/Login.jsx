import { useState, useEffect } from 'react';
import { loginUser } from '../redux/userRedux';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../scss/styles/Login.css';

const Login = () => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.user);
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 1045;

	console.log(user);
	console.log(auth);

	useEffect(() => {
		if (auth.currentUser) {
			navigate('/cart');
		}
	}, [auth]);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(user));
	};

	return (
		<div className="login">
			<div className="login-container">
				{width > breakpoint ? (
					<>
						<div className="image-container">
							<div className="overlay">
								<h2></h2>
								<p>
									Ready to Join? Becoming a member allows you to checkout
									faster, view/track orders and more.
								</p>
							</div>
						</div>
						<div className="input-container">
							<form className="input-fields">
								<div className="title">Login</div>
								<input
									type="text"
									placeholder="Email"
									autoFocus
									onChange={(e) => setUser({ ...user, email: e.target.value })}
								/>
								<input
									type="password"
									placeholder="Password"
									onChange={(e) =>
										setUser({ ...user, password: e.target.value })
									}
								/>
								<button className="submit-btn" onClick={handleSubmit}>
									Sign In
								</button>
								<div className="register">
									Not a member yet?{' '}
									<Link to="/register">
										<span className="reg-link">Sign up now!</span>
									</Link>
								</div>
								{auth?.error ? (
									<div className="error">
										Email or Password are incorrect. Please try again.
									</div>
								) : null}
							</form>
						</div>
					</>
				) : (
					<>
						<div className="input-container">
							<form className="input-fields">
								<div className="title">Login</div>
								<input
									type="text"
									placeholder="Email"
									autoFocus
									onChange={(e) => setUser({ ...user, email: e.target.value })}
								/>
								<input
									type="password"
									placeholder="Password"
									onChange={(e) =>
										setUser({ ...user, password: e.target.value })
									}
								/>
								<button className="submit-btn" onClick={handleSubmit}>
									Sign In
								</button>
								<div className="register">
									Not a member yet?{' '}
									<Link to="/register">
										<span className="reg-link">Sign up now!</span>
									</Link>
								</div>
								{auth?.error ? (
									<div className="error">
										Email or Password are incorrect. Please try again.
									</div>
								) : null}
							</form>
						</div>
						<div className="image-container">
							<div className="overlay">
								<h2>New Customers</h2>
								<p>
									Ready to Join? Becoming a member allows you to checkout
									faster, view/track orders and more.
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Login;
