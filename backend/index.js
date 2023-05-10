require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/user');
const productsRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const stripeWebHookRoute = require('./routes/stripeWebhook');
const app = express();
let PORT = process.env.PORT || 6000;

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log('Connected to MongoDB'))
	.catch((err) => console.error(err));

app.use(
	cors({
		origin: [
			'https://lostskateshop.onrender.com',
			'https://lostskateshop.onrender.com/cart',
			'https://dashboard.stripe.com/',
			'https://checkout.stripe.com/',
		],
	})
);
app.use('/api/stripe', stripeWebHookRoute);
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
