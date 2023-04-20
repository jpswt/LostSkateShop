import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			{/* <Home /> */}
			{/* <ProductList /> */}
			{/* <SingleProduct /> */}
			{/* <Register /> */}
			{/* <Login /> */}
			{/* <Cart /> */}
		</div>
	);
}

export default App;
