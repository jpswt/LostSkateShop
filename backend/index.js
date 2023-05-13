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

app.use(cors());

app.use('/api/stripe', stripeWebHookRoute);
app.use((req, res, next) => {
	if (req.originalUrl === '/webhook') {
		next(); // Do nothing with the body because I need it in a raw state.
	} else {
		express.json()(req, res, next); // ONLY do express.json() if the received request is NOT a WebHook from Stripe.
	}
});
app.options('*', cors());

// app.use(function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header(
// 		'Access-Control-Allow-Methods',
// 		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
// 	);
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
// 	);
// 	next();
// });

// app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use(function (req, res, next) {
	if (req.path.length > 1 && /\/$/.test(req.path)) {
		var query = req.url.slice(req.path.length);
		res.redirect(301, req.path.slice(0, -1) + query);
	} else {
		next();
	}
});
app.use('/api/products', productsRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
