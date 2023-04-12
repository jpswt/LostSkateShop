import React from 'react';
import '../styles/Letter.css';

const Letter = () => {
	return (
		<div className="letter-container">
			<div className="title">
				<h2>Newsletter</h2>
			</div>
			<div className="description">
				<h3>Catch the latest updates of your favorite gear.</h3>
			</div>
			<div className="input-container">
				<input type="text" placeholder="Email" />
				<i class="fa-regular fa-paper-plane"></i>
			</div>
		</div>
	);
};

export default Letter;
