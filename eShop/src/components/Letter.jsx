import React from 'react';
import '../scss/styles/Letter.css';

const Letter = () => {
	return (
		<div className="letter-container">
			<div className="title">
				<h2>Newsletter</h2>
			</div>
			<div className="description">
				<h3>
					Catch the latest updates and shopping tips on your favorite gear.
				</h3>
			</div>
			<div className="input-container">
				<input type="text" placeholder="Email" />
				<i className="fa-regular fa-paper-plane"></i>
			</div>
		</div>
	);
};

export default Letter;
