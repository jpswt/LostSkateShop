import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../scss/styles/OrderHistory.css';
import { userRequest } from '../request';
import { useLocation } from 'react-router-dom';
import ItemsModal from './ItemsModal';

const OrderHistory = () => {
	const auth = useSelector((state) => state.user);
	const location = useLocation();
	const userId = location.pathname.split('/')[2];
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	// console.log('order', auth);

	useEffect(() => {
		const getOrders = async () => {
			setIsLoading(true);
			try {
				const response = await userRequest.get(`/orders/${userId}?all=true`);
				setOrders(response.data);
			} catch (err) {}
			setIsLoading(false);
		};
		getOrders();
	}, []);

	console.log('Here is the order', orders);

	return (
		<div className="order-container">
			<h2>welcome {auth.currentUser.username}</h2>
			<div className="order-history">
				<table>
					<caption>Order History</caption>
					<thead>
						<tr>
							<th scope="col">Order #</th>
							<th scope="col">Order Date</th>
							<th scope="col">Amount</th>
							<th scope="col">Items</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((item) => {
							let date = new Date(item?.createdAt);
							let index = item._id;
							return (
								<tr key={item._id}>
									<td data-label="Order #">
										{item?._id?.slice(-10).toUpperCase()}
									</td>
									<td data-label="Order Date">{date.toLocaleDateString()}</td>
									<td data-label="Amount">${(item.amount / 100).toFixed(2)}</td>
									<td>
										<ItemsModal item={item} index={index} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderHistory;
