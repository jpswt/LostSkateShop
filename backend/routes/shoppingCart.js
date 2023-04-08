const router = require('express').Router();
const {
	verifyJWT,
	verifyAdmin,
	verifyToken,
} = require('../middleware/verifyToken');
const Cart = require('../models/ShoppingCart');

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

router.post('/', verifyToken, async (req, res) => {
	const newCart = new Cart(req.body);
	try {
		const savedCart = await newCart.save();
		res.status(200).json(savedCart);
	} catch (err) {
		res.status(500).status(err);
	}
});

router.put('/:id', verifyJWT, async (req, res) => {
	try {
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedCart);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', verifyJWT, async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json('Cart has been deleted');
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
