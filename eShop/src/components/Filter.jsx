import React from 'react';

const Filter = () => {
	return (
		<div className="filter">
			<h2>Cameras</h2>
			<div className="filter-container">
				<div className="filter-item">
					<label>Filter Products:</label>
					<select name="cameras" id="cameras" defaultValue="Color">
						<option value="Black"></option>
						<option value="White"></option>
						<option value="Gray"></option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filter;
