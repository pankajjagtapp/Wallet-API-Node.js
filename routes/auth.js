const express = require('express');
const { body } = require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');
const transController = require('../controllers/transaction');
<<<<<<< HEAD
const isAuth = require('../middleware/isAuth')
=======
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa

const router = express.Router();

router.post(
	'/signup',
	[
		body('email')
			.isEmail()
			.withMessage('Please Enter a Valid Email.')
			.custom((value, { req }) => {
				return User.findOne({ email: value }).then((userDoc) => {
					if (userDoc) {
						return Promise.reject('E-Mail address already exists!');
					}
				});
			})
			.normalizeEmail(),
		body('password').trim().isLength({ min: 5 }),
	],
	authController.signup
);

router.post('/login', authController.login);

<<<<<<< HEAD
router.post('/login/transfer', isAuth, transController.transfer);
=======
router.post('/login/transfer', transController.transfer);
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa

module.exports = router;
