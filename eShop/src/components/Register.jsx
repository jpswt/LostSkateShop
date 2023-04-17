import { useState, useEffect } from 'react';
import '../scss/styles/Register.css';

const Register = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 1000;

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
							<h2>New Customers</h2>
							<p>
								Ready to Join? Becoming a member allows you to checkout faster,
								view/track orders and more.
							</p>
						</div>
						<div className="input-container">
							<form className="register-fields">
								<div className="title">REGISTER</div>
								<input type="text" placeholder="Username" autoFocus />
								<input type="text" placeholder="Email" />
								<input type="password" placeholder="Password" />
								<button className="submit-btn">Sign Up</button>
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
							</form>
						</div>
						<div className="image-container">
							<h2>New Customers</h2>
							<p>
								Ready to Join? Becoming a member allows you to checkout faster,
								view/track orders and more.
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Register;
