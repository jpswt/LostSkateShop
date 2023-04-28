const router = require('express').Router();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

router.post('/payment', async (req, res) => {
	const customer = await stripe.customers.create({
		metadata: {
			userId: req.body.userId,
			cart: JSON.stringify(req.body.cartItems),
		},
	});
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

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
	'whsec_da57f8d2ff6f1c87c528513f86b4c208e80e5d05280f262eee45aa6a88271e8e';

router.post(
	'/webhook',
	express.raw({ type: 'application/json' }),
	(request, response) => {
		let data;
		let eventType;
		const sig = request.headers['stripe-signature'];

		let event;

		try {
			event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
			console.log('verified webhook');
		} catch (err) {
			console.log(`Webhook Error: ${err.message}`);
			response.status(400).send(`Webhook Error: ${err.message}`);
			return;
		}

		data = event.data.object;
		eventType = event.type;

		// Handle the event

		if (eventType === 'checkout.session.completed') {
		}
		//   switch (event.type) {
		//     case 'payment_intent.succeeded':
		//       const paymentIntentSucceeded = event.data.object;
		//       // Then define and call a function to handle the event payment_intent.succeeded
		//       break;
		//     // ... handle other event types
		//     default:
		//       console.log(`Unhandled event type ${event.type}`);
		//   }

		// Return a 200 response to acknowledge receipt of the event
		response.send().end();
	}
);

module.exports = router;
