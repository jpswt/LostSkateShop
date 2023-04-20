import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />}></Route>
			<Route path="/products/:category" element={<ProductList />}></Route>
			<Route path="/product/:category" element={<SingleProduct />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/register" element={<Register />}></Route>
		</Routes>
	);
};

export default Router;
