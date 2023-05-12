import '../scss/styles/Header.css';
import { useRef, useEffect, useState } from 'react';
import { headerContent } from '../assets/data/data';
import { Link } from 'react-router-dom';

const Header = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [slideCount, setSlideCount] = useState(0);
	const ElementRef = useRef(null);

	useEffect(() => {
		const elementCount = ElementRef.current.childNodes.length;
		setSlideCount(elementCount);
		// console.log(elementCount);
	}, []);

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= slideCount) {
			newIndex = 2 - slideCount;
		}
		setSlideIndex(newIndex);
	};

	return (
		<div className="header">
			<div className="arrow" id="left">
				<i
					className="fa-solid fa-circle-arrow-left fa-2x arrow-left"
					onClick={() => updateIndex(slideIndex - 1)}
				></i>
			</div>
			<div
				className="header-container"
				id="slidesCount"
				ref={ElementRef}
				style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
			>
				{headerContent.map((item) => (
					<div
						key={item.id}
						className="slide-container"
						style={{
							background: `url(${item.bg}) no-repeat center center `,
							backgroundSize: 'cover',
							transition: 'height 1000000s ease',
						}}
					>
						<div className="text-container">
							<h2>{item.title}</h2>
							<p>{item.description}</p>
							<Link to="/register">
								<button>Get Started</button>
							</Link>
						</div>
					</div>
				))}
			</div>
			<div
				className="arrow"
				id="right"
				onClick={() => updateIndex(slideIndex + 1)}
			>
				<i className="fa-solid fa-circle-arrow-right fa-2x arrow-right"></i>
			</div>
		</div>
	);
};

export default Header;
