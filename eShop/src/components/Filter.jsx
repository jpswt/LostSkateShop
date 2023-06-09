import '../scss/styles/Filter.css';

const Filter = ({ setSort, handleFilter, options, category, selected }) => {
	return (
		<div className="filter">
			<h2>{category.toUpperCase()}</h2>
			<div className="filter-container">
				<div className="filter-item">
					<label>Filter Products:</label>
					<select
						name="manufacturer"
						id="manufacturer"
						onChange={handleFilter}
						value={selected}
					>
						<option value="">All Brands</option>
						{options.map((option, index) => (
							<option key={index} value={option.value}>
								{option.value}
							</option>
						))}
					</select>
				</div>
				{category === 'hardware' ? (
					<div className="filter-item">
						<label>Filter Hardware:</label>
						<select name="categories" onChange={handleFilter}>
							<option value="hardware">All Hardware</option>
							<option value="griptape">Griptape</option>
							<option value="bolts">Bolts</option>
							<option value="bushings">Bushings</option>
						</select>
					</div>
				) : null}
				<div className="filter-item">
					<label>Sort Products:</label>
					<select onChange={(e) => setSort(e.target.value)}>
						<option value="latest">Latest</option>
						<option value="asc">Price Asc</option>
						<option value="desc">Price Desc</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filter;
