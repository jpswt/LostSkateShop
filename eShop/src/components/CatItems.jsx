import '../scss/styles/CatItems.css';
import { Link } from 'react-router-dom';

const CatItems = ({ category }) => {
	return (
		<>
			<div className="category-container">
				<Link to={`/products/${category.name}`}>
					<div className="overlay"></div>
					<img src={category.img} alt="" />
					<div className="info">
						<div className="title">{category.title}</div>
						<button>SHOP NOW</button>
					</div>
				</Link>
			</div>
		</>
	);
};

export default CatItems;
