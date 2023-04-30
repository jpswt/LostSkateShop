const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPW = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPW,
		});

		const user = await newUser.save();

		const accessToken = jwt.sign(
			{
				id: user._id,
				username: user.username,
				email: user.email,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SECRET
		);

		res.send(accessToken);

		res.status(200);
	} catch (err) {
		res.status(500).json(err);
	}
});

//Login
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(401).json('Incorrect Username/Password');
		}
		const validateUser = await bcrypt.compare(req.body.password, user.password);
		if (!validateUser) {
			return res.status(400).json('Incorrect Username/Password');
		}
		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SECRET
		);
		const { password, ...others } = user._doc;
		res.status(200);
		res.send(accessToken);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
