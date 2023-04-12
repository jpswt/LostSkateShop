import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="navbar-left">
					<div className="search">
						<i className="fa-solid fa-magnifying-glass"></i>
						<input type="text" placeholder="Search" autoFocus />
					</div>
				</div>
				<div className="navbar-center">eSHOP</div>
				<div className="navbar-right">
					<ol className="navbar-links">
						<li className="navbar-button">Sign Up</li>
						<li className="navbar-button">Sign In</li>
						<li>
							<i className="fa-solid fa-cart-shopping fa-lg"></i>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
