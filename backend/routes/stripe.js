const router = require('express').Router();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

router.post('/payment', async (req, res) => {
	const customer = await stripe.customers.create({
		metadata: {
			userId: req.body.userId.toString(),
			// cart: JSON.stringify(req.body.products),
		},
	});
	console.log(customer);
	const line_items = req.body.products.map((product) => {
		return {
			price_data: {
				currency: 'usd',
				product_data: {
					name: product.title,
					images: [product.img],
					metadata: {
						id: product._id,
					},
				},
				unit_amount: product.price * 100,
			},
			quantity: product.quantity,
		};
	});

	const session = await stripe.checkout.sessions.create({
		shipping_address_collection: { allowed_countries: ['US', 'CA'] },
		shipping_options: [
			{
				shipping_rate_data: {
					type: 'fixed_amount',
					fixed_amount: { amount: 599, currency: 'usd' },
					display_name: 'Standard shipping',
					delivery_estimate: {
						minimum: { unit: 'business_day', value: 5 },
						maximum: { unit: 'business_day', value: 7 },
					},
				},
			},
		],
		phone_number_collection: {
			enabled: true,
		},
		customer: customer.id,
		line_items,
		mode: 'payment',
		success_url: `https://lostskateshop.onrender.com/success/${customer.metadata.userId}`,
		cancel_url: `https://lostskateshop.onrender.com/cart`,
	});
	res.send(
		JSON.stringify({
			url: session.url,
		})
	);
});

module.exports = router;
