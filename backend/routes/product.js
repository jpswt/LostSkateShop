const router = require('express').Router();
const { verifyJWT, verifyAdmin } = require('../middleware/verifyToken');
const Product = require('../models/Product');

router.get('/', async (req, res) => {
	const newQuery = req.query.new;
	const catQuery = req.query.category;
	try {
		let products;

		if (newQuery) {
			products = await Product.find().sort({ createdAt: -1 }).limit(1);
		} else if (catQuery) {
			products = await Product.find({
				categories: {
					$in: [catQuery],
				},
			});
		} else {
			products = await Product.find();
		}

		res.status(200).json(products);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', verifyAdmin, async (req, res) => {
	const newProduct = new Product(req.body);
	try {
		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);
	} catch (err) {
		res.status(500).status(err);
	}
});

router.put('/:id', verifyAdmin, async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedProduct);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', verifyAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('Product has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
