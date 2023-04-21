import { useState } from 'react';
import '../scss/styles/Filter.css';

const Filter = ({ filters, sort, setSort, handleFilter }) => {
	console.log(filters);
	console.log(sort);

	return (
		<div className="filter">
			<h2>Cameras</h2>
			<div className="filter-container">
				<div className="filter-item">
					<label>Filter Products:</label>
					<select name="manufacturer" id="cameras" onChange={handleFilter}>
						<option value="" disabled>
							Choose a Color
						</option>
						<option value="black">Black</option>
						<option value="white">White</option>
						<option value="gray">Gray</option>
					</select>
				</div>
				<div className="filter-item">
					<label>Filter Products:</label>
					<select name="color" id="cameras" onChange={handleFilter}>
						<option value="" disabled>
							Choose a Color
						</option>
						<option value="black">Black</option>
						<option value="white">White</option>
						<option value="gray">Gray</option>
					</select>
				</div>
				<div className="filter-item">
					<label>Sort Products:</label>
					<select
						name="price"
						id="cameras"
						onChange={(e) => setSort(e.target.value)}
					>
						<option value="latest" selected>
							Latest
						</option>
						<option value="asc">Price Asc</option>
						<option value="desc">Price Desc</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filter;
