import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import '../scss/styles/Navbar.css';
import { logoutUser } from '../redux/userRedux';
import { resetCart } from '../redux/cartRedux';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [bodyScroll, setBodyScroll] = useState(true);
	const auth = useSelector((state) => state.user);
	const quantity = useSelector((state) => state.cart.quantity);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	console.log('navbar', auth);

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
					<Link to="/">
						<div className="title">lost skate shop</div>
					</Link>
				</div>
				<div className="navbar-center">
					<div className="product-links">
						<ul className="list-links">
							<Link to="/products/decks">
								<li className="list-link-items">Decks</li>
							</Link>
							<Link to="/products/trucks">
								<li className="list-link-items">Trucks</li>
							</Link>
							<Link to="/products/wheels">
								<li className="list-link-items">Wheels</li>
							</Link>
							<Link to="/products/bearings">
								<li className="list-link-items">Bearings</li>
							</Link>
							<Link to="/products/hardware">
								<li className="list-link-items">Hardware</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="navbar-right">
					<ul className="navbar-links">
						{/* <li>
							<SearchIcon className="navbar-button" />
						</li> */}
						{auth.currentUser ? (
							<Link
								to="/"
								onClick={() => {
									dispatch(logoutUser(null));
									dispatch(resetCart(cart));
								}}
							>
								<li>LOGOUT</li>
							</Link>
						) : (
							<>
								{/* <Link to="/register">
									<li>REGISTER</li>
								</Link> */}
								<Link to="/login">
									<li>LOGIN</li>
								</Link>
							</>
						)}

						<Link
							to={
								auth.currentUser
									? `/account/${auth?.currentUser?.id}`
									: `/login`
							}
						>
							<li>
								<PersonIcon className="navbar-button" />
							</li>
						</Link>
						<Link to="/cart">
							<li>
								<Badge
									badgeContent={quantity}
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
						</Link>
					</ul>

					<ul className={toggle ? 'mobile-links active' : 'mobile-links'}>
						{/* <li className="mobile-link-items">
							<input type="text" placeholder="Search..." />
						</li> */}
						<Link to="/products/decks">
							<li className="mobile-link-items">Decks</li>
						</Link>
						<Link to="/products/trucks">
							<li className="mobile-link-items">Trucks</li>
						</Link>
						<Link to="/products/wheels">
							<li className="mobile-link-items">Wheels</li>
						</Link>
						<Link to="/products/bearings">
							<li className="mobile-link-items">Bearings</li>
						</Link>
						<Link to="/products/hardware">
							<li className="mobile-link-items">Hardware</li>
						</Link>
						<Link
							to={
								auth.currentUser
									? `/account/${auth?.currentUser?.id}`
									: `/login`
							}
						>
							<li className="mobile-link-items">My Account</li>
						</Link>

						{auth?.currentUser ? (
							<Link
								to="/"
								onClick={() => {
									dispatch(logoutUser(null));
								}}
							>
								<li className="mobile-link-items">LOGOUT</li>
							</Link>
						) : (
							<>
								{/* <Link to="/register">
									<li>REGISTER</li>
								</Link> */}
								<Link to="/login">
									<li className="mobile-link-items">LOGIN</li>
								</Link>
							</>
						)}
					</ul>
					<div className="mobile-cart">
						<Link to="/cart">
							<Badge
								badgeContent={quantity}
								sx={{
									'& .MuiBadge-badge': {
										backgroundColor: ' hsl(168, 99%, 28%)',
									},
								}}
								className="badge"
							>
								<ShoppingCartIcon color="action" className="cart" />
							</Badge>
						</Link>
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
