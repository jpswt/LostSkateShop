import { useState, useEffect } from 'react';
import { login } from '../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../scss/styles/Login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isFetching, error, user } = useSelector((state) => state.user);
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 1045;

	console.log(user);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		login(dispatch, { email, password });
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
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
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
								{error ? (
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
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
								<button className="submit-btn" onClick={handleSubmit}>
									{' '}
									Sign In
								</button>
								<div className="register">
									Not a member yet?{' '}
									<Link to="/register">
										<span className="reg-link">Sign up now!</span>
									</Link>
								</div>
								{error ? (
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
