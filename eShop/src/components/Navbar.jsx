import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../scss/styles/Navbar.css';

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
					<div className="hamburger"></div>
					<ol className="navbar-links">
						<li className="navbar-button">Sign Up</li>
						<li className="navbar-button">Sign In</li>
						<li>
							<Badge
								badgeContent={1}
								sx={{
									'& .MuiBadge-badge': {
										backgroundColor: ' hsl(168, 99%, 28%)',
									},
								}}
								className="badge"
							>
								<ShoppingCartIcon color="action" className="cart" />
							</Badge>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
