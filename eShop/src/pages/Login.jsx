import { useState, useEffect } from 'react';
import '../scss/styles/Login.css';

const Login = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 1000;

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

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
								<input type="text" placeholder="Email" autoFocus />
								<input type="password" placeholder="Password" />
								<button className="submit-btn">Sign Up</button>
							</form>
						</div>
					</>
				) : (
					<>
						<div className="input-container">
							<form className="input-fields">
								<div className="title">Login</div>
								<input type="text" placeholder="Email" autoFocus />
								<input type="password" placeholder="Password" />
								<button className="submit-btn">Sign Up</button>
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
