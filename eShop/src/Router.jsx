import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './components/NotFound';
import { useSelector } from 'react-redux';
import Account from './pages/Account';

const Router = () => {
	const user = useSelector((state) => state.user.currentUser);
	console.log(user);

	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/products/:category" element={<ProductList />}></Route>
			<Route path="/product/:category" element={<SingleProduct />}></Route>
			<Route path="/account/:userId" element={<Account />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
			<Route path="/pay" element={<Pay />}></Route>
			<Route path="/success/:orderId" element={<Success />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
};

export default Router;
