import { useEffect, useState } from 'react';
import '../scss/styles/Filter.css';
import axios from 'axios';

const Filter = ({ filters, sort, setSort, handleFilter, category }) => {
	console.log(filters);
	console.log(sort);

	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					category
						? `${import.meta.env.VITE_DB_URI}/products?category=${category}`
						: `${import.meta.env.VITE_DB_URI}/products`
				);
				setProducts(response.data);
				const results = [];
				response.data.forEach((item, index) => {
					results.push({
						key: item.manufacturer,
						value: item.manufacturer,
					});

					setOptions([{ key: 'Select Manufacturer', value: '' }, ...results]);
				});
			} catch (err) {}
		};
		getProducts();
	}, [category]);
	console.log(options);

	return (
		<div className="filter">
			<h2>Cameras</h2>
			<div className="filter-container">
				<div className="filter-item">
					<label>Filter Products:</label>
					<select name="manufacturer" id="cameras" onChange={handleFilter}>
						{filteredProducts.map((item) => {
							<option value={`${item.manufacturer}`}>
								${item.manufacturer}
							</option>;
						})}
						{/* <option value="">Choose a Manufacturer</option>
						<option value="Santa Cruz">Santa Cruz</option>
						<option value="white">White</option>
						<option value="gray">Gray</option> */}
					</select>
				</div>
				<div className="filter-item">
					<label>Filter Products:</label>
					<select name="color" id="cameras" onChange={handleFilter}>
						<option value="">Choose a Color</option>
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
