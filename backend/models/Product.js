const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		manufacturer: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		categories: {
			type: Array,
		},
		width: {
			type: String,
		},
		length: {
			type: String,
		},
		wheelbase: {
			type: String,
		},
		size: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		inStock: {
			type: Boolean,
			default: true,
		},
		img: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
