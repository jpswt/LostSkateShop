import '../scss/styles/Categories.css';
import { categories } from '../assets/data/data';
import CatItems from './CatItems';

const Categories = () => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CatItems category={category} key={category.id} />
			))}
		</div>
	);
};

export default Categories;
