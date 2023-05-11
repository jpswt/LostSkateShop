import React from 'react';
import '../scss/styles/Letter.css';

const Letter = () => {
	return (
		<div className="letter-container">
			<img
				className="banner-img"
				src="https://images.unsplash.com/photo-1607639694361-fe08243bf70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt=""
			/>
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
