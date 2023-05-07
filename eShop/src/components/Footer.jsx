import { useState, useEffect } from 'react';
import '../scss/styles/Footer.css';

const Footer = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 1045;

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="footer-container">
			{width > breakpoint ? (
				<>
					<div className="footer-navlinks">
						<div className="links-title">Helpful Links</div>
						<ul className="footer-links">
							<li className="footer-link">Home</li>
							<li className="footer-link">My Account</li>
							<li className="footer-link">Cart</li>
							<li className="footer-link">Decks</li>
							<li className="footer-link">Trucks</li>
							<li className="footer-link">Wheels</li>
							<li className="footer-link">Bearings</li>
							<li className="footer-link">Hardware</li>
							<li className="footer-link"></li>
						</ul>
					</div>
					<div className="footer-social">
						<div className="links-title">Social</div>
						<div className="social-container">
							<i className="fa-brands fa-square-facebook fa-2xl ">
								<span className="text"></span>
							</i>
							<i className="fa-brands fa-square-instagram fa-2xl"></i>
							<i className="fa-brands fa-square-twitter fa-2xl"></i>
							<i className="fa-brands fa-square-youtube fa-2xl "></i>
						</div>
					</div>
					<div className="footer-contact-info">
						<div className="links-title contact-title">Contact Us</div>
						<ul className="footer-contact">
							<span className="contact-item">
								<i className="fa-solid fa-location-dot"></i>
								<li className="contact-info">123 Main St Anyhere, USA</li>
							</span>
							<a href="tel:555-867-5309">
								<span className="contact-item">
									<i className="fa-solid fa-square-phone"></i>
									<li className="contact-info">555-867-5309</li>
								</span>
							</a>
							<span className="contact-item">
								<i className="fa-solid fa-envelope"></i>
								<li className="contact-info">lost@lostskateshop.com</li>
							</span>
						</ul>
					</div>
				</>
			) : (
				<>
					<div className="footer-navlinks">
						<div className="links-title">Helpful Links</div>

						<ul className="footer-links">
							<li className="footer-link">Home</li>
							<li className="footer-link">My Account</li>
							<li className="footer-link">Cart</li>
							<li className="footer-link">Track Order</li>
							<li className="footer-link">Wishlist</li>
							<li className="footer-link">Decks</li>
							<li className="footer-link">Trucks</li>
							<li className="footer-link">Wheels</li>
							<li className="footer-link">Hardware</li>
						</ul>
					</div>
					<div className="footer-contact-info">
						<div className="links-title">Contact Us</div>
						<ul className="footer-contact">
							<span className="contact-item">
								<i className="fa-solid fa-location-dot"></i>
								<li className="contact-info">123 Main St Anyhere, USA</li>
							</span>
							<a href="tel:555-867-5309">
								<span className="contact-item">
									<i className="fa-solid fa-square-phone"></i>
									<li className="contact-info">555-867-5309</li>
								</span>
							</a>
							<span className="contact-item">
								<i className="fa-solid fa-envelope"></i>
								<li className="contact-info">lost@lostskateshop.com</li>
							</span>
						</ul>
					</div>
					<div className="footer-social">
						<i className="fa-brands fa-square-facebook fa-2xl"></i>
						<i className="fa-brands fa-square-instagram fa-2xl"></i>
						<i className="fa-brands fa-square-twitter fa-2xl"></i>
						<i className="fa-brands fa-square-youtube fa-2xl "></i>
					</div>
				</>
			)}
		</div>
	);
};

export default Footer;
