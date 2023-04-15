import '../scss/styles/Footer.css';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-left">
				<i className="fa-brands fa-square-facebook fa-2xl"></i>
				<i className="fa-brands fa-square-instagram fa-2xl"></i>
				<i className="fa-brands fa-square-twitter fa-2xl"></i>
				<i className="fa-brands fa-square-youtube fa-2xl "></i>
			</div>
			<div className="footer-center">
				<div className="links-title">Helpful Links</div>
				<ul className="footer-links">
					<li className="footer-link">Home</li>
					<li className="footer-link">My Account</li>
					<li className="footer-link">Cart</li>
					<li className="footer-link">Order Tracking</li>
					<li className="footer-link">Wishlist</li>
					<li className="footer-link">Audio</li>
					<li className="footer-link">Video</li>
					<li className="footer-link">Photography</li>
				</ul>
			</div>
			<div className="footer-right">
				<ul className="footer-contact">
					<span className="contact-item">
						<i className="fa-solid fa-location-dot"></i>
						<li className="contact-info">123 Main St Anyhere, USA</li>
					</span>
					<span className="contact-item">
						<i className="fa-solid fa-square-phone"></i>
						<li className="contact-info">555-867-5309</li>
					</span>
					<span className="contact-item">
						<i className="fa-solid fa-envelope"></i>
						<li className="contact-info">eShop@eshop.com</li>
					</span>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
