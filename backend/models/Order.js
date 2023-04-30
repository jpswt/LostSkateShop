const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		customerId: {
			type: String,
		},
		paymentIntentId: { type: String },
		products: [],
		amount: {
			type: Number,
			required: true,
		},
		address: {
			type: Object,
			required: true,
		},
		status: {
			type: String,
			default: 'pending',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
