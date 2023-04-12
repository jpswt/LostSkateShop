import '../styles/CatItems.css';

const CatItems = ({ category }) => {
	return (
		<>
			<div className="category-container">
				<div className="overlay"></div>
				<img src={category.img} alt="" />
				<div className="info">
					<div className="title">{category.title}</div>
					<button>SHOP NOW</button>
				</div>
			</div>
		</>
	);
};

export default CatItems;
