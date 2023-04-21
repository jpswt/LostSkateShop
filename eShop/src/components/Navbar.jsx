import React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import '../scss/styles/Navbar.css';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [bodyScroll, setBodyScroll] = useState(true);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	useEffect(() => {
		const handleScroll = () => {
			toggle
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'scroll');
		};
		handleScroll();
	}, [toggle]);

	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="navbar-left">
					<div className="title">lost skate shop</div>
				</div>
				<div className="navbar-center">
					<div className="product-links">
						<ul className="list-links">
							<li className="list-link-items">Decks</li>
							<li className="list-link-items">Trucks</li>
							<li className="list-link-items">Wheels</li>
							<li className="list-link-items">Bearings</li>
							<li className="list-link-items">Hardware</li>
						</ul>
					</div>
				</div>
				<div className="navbar-right">
					<ul className="navbar-links">
						<li>
							<SearchIcon className="navbar-button" />
						</li>
						<li>
							<PersonIcon className="navbar-button" />
						</li>
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
					</ul>

					<ul className={toggle ? 'mobile-links active' : 'mobile-links'}>
						<li className="mobile-link-items">
							<input type="text" placeholder="Search..." />
						</li>
						<li className="mobile-link-items">Decks</li>
						<li className="mobile-link-items">Trucks</li>
						<li className="mobile-link-items">Wheels</li>
						<li className="mobile-link-items">Bearings</li>
						<li className="mobile-link-items">Hardware</li>
						<li className="mobile-link-items login">Sign In/Sign Out</li>
					</ul>
					<div className="mobile-cart">
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
					</div>
					<div className="toggle-btn" onClick={handleToggle}>
						{toggle ? (
							<i className="fa-solid fa-xmark fa-2xl"></i>
						) : (
							<i className="fa-solid fa-bars fa-2xl"></i>
						)}
					</div>
				</div>
			</div>
			<div className="product-link-container"></div>
		</div>
	);
};

export default Navbar;
