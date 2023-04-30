const router = require('express').Router();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const Order = require('../models/Order');

const createOrder = async (customer, data, lineItems) => {
	// const products = Items.map((item) => {
	// 	return {
	// 		productId: item.id,
	// 		quantity: item.cartQuantity,
	// 	};
	// });

	const newOrder = new Order({
		userId: customer.metadata.userId,
		customerId: data.customer,
		paymentIntentId: data.payment_intent,
		products: lineItems.data,
		amount: Number(data.amount_subtotal) + Number(data.amount_total),
		address: data.customer_details,
		payment_status: data.payment_status,
	});

	try {
		const savedOrder = await newOrder.save();
		console.log('Processed Order:', savedOrder);
	} catch (err) {
		console.log(err);
	}
};

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
			stripe.customers
				.retrieve(data.customer)
				.then((customer) => {
					console.log(customer);
					console.log('data:', data);
					stripe.checkout.sessions.listLineItems(
						data.id,
						{},
						function (err, lineItems) {
							console.log('line items', lineItems);
							createOrder(customer, data, lineItems);
						}
					);
				})
				.catch((err) => console.log(err.message));
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
