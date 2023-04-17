import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';

function App() {
	return (
		<div>
			<Home />
			{/* <ProductList /> */}
			<SingleProduct />
			<Register />
			<Login />
		</div>
	);
}

export default App;
