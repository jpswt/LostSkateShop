import '../scss/styles/Filter.css';

const Filter = () => {
	return (
		<div className="filter">
			<h2>Cameras</h2>
			<div className="filter-container">
				<div className="filter-item">
					<label>Filter Products:</label>
					<select name="cameras" id="cameras">
						<option value="" disabled selected>
							Choose a Color
						</option>
						<option value="black">Black</option>
						<option value="white">White</option>
						<option value="gray">Gray</option>
					</select>
				</div>
				<div className="filter-item">
					<label>Sort Products:</label>
					<select name="cameras" id="cameras">
						<option value="" selected>
							Latest
						</option>
						<option>Price Asc</option>
						<option>Price Desc</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filter;
