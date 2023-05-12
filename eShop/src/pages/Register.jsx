import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../scss/styles/Register.css';
import { registerUser } from '../redux/userRedux';

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.user);
	const [width, setWidth] = useState(window.innerWidth);
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	// console.log(auth);
	// console.log(user);

	useEffect(() => {
		if (auth.currentUser) {
			navigate('/');
		}
	}, [auth]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(user));
	};

	const breakpoint = 1045;
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="register">
			<div className="register-container">
				{width > breakpoint ? (
					<>
						<div className="image-container">
							<div className="overlay">
								<h2>New Customers</h2>
								<p>
									Ready to Join? Become a member to purchase gear, view orders
									and more.
								</p>
							</div>
						</div>
						<div className="input-container">
							<form className="register-fields" onSubmit={handleSubmit}>
								<div className="title">REGISTER</div>
								<input
									type="text"
									placeholder="Username"
									onChange={(e) =>
										setUser({ ...user, username: e.target.value })
									}
									autoFocus
								/>
								<input
									type="text"
									placeholder="Email"
									onChange={(e) => setUser({ ...user, email: e.target.value })}
								/>
								<input
									type="password"
									placeholder="Password"
									onChange={(e) =>
										setUser({ ...user, password: e.target.value })
									}
								/>
								<button className="submit-btn">Sign Up</button>
								<div className="login">
									Returning Customer?{' '}
									<Link to="/login">
										<span className="reg-link">Sign in here!</span>
									</Link>
								</div>
							</form>
						</div>
					</>
				) : (
					<>
						<div className="input-container">
							<form className="register-fields">
								<div className="title">REGISTER</div>
								<input type="text" placeholder="Username" autoFocus />
								<input type="text" placeholder="Email" />
								<input type="password" placeholder="Password" />
								<button className="submit-btn">Sign Up</button>
								<div className="login">
									Already a member?{' '}
									<Link to="/login">
										<span className="reg-link">Sign in</span>
									</Link>
								</div>
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

export default Register;
