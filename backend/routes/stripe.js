const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

// router.post('/payment', (req, res) => {
// 	stripe.charges.create(
// 		{
// 			source: req.body.tokenID,
// 			amount: req.body.amount,
// 			currency: 'usd',
// 		},
// 		(stripeErr, stripeRes) => {
// 			if (stripeErr) {
// 				res.status(500).send(stripeErr);
// 			} else {
// 				res.status(200).json(stripeRes);
// 			}
// 		}
// 	);
// });

router.post('/payment', async (req, res) => {
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
		line_items,
		mode: 'payment',
		success_url: `${process.env.CLIENT_URL}/success`,
		cancel_url: `${process.env.CLIENT_URL}/cart`,
	});
	res.send({ url: session.url });
});

module.exports = router;
