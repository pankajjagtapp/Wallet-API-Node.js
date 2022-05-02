const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

<<<<<<< HEAD
=======
// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');
// const transporter = nodemailer.createTransport(
// 	sendgridTransport({
// 	  auth: {
// 		api_key:
// 		  ''
// 	  }
// 	})
//   );

var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =
	'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';

>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
const User = require('../models/user');

exports.signup = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const error = new Error('Validation failed.');
		error.statusCode = 422;
		error.data = errors.array();
		throw error;
	}
	const email = req.body.email;
	const password = req.body.password;

	bcrypt
		.hash(password, 12)
		.then((hashedPw) => {
			const user = new User({
				email: email,
				password: hashedPw,
				balance: 1000,
			});
			return user.save();
		})
		.then((result) => {
			res.status(201).json({
				message: 'User created!',
				userId: result._id,
			});
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

exports.login = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	let loadedUser;
	User.findOne({ email: email })
		.then((user) => {
			if (!user) {
				const error = new Error(
					'A user with this email could not be found.'
				);
				error.statusCode = 401;
				throw error;
			}
			loadedUser = user;
			return bcrypt.compare(password, user.password);
		})
		.then((isEqual) => {
			if (!isEqual) {
				const error = new Error('Wrong password!');
				error.statusCode = 401;
				throw error;
			}
			const token = jwt.sign(
				{
					email: loadedUser.email,
					userId: loadedUser._id.toString(),
				},
				'somesupersecret',
				{ expiresIn: '1h' }
				);
				res.status(200).json({
					token: token,
				userId: loadedUser._id.toString(),
			});
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
<<<<<<< HEAD
};

=======
	// SendTestEmail();
};

exports.transferFunction = (req, res, next) => {};

// async email
// jwt.sign(
	// 	{
		// 		user: _.pick(user, 'id'),
// 	},
// 	EMAIL_SECRET,
// 	{
// 		expiresIn: '1d',
// 	},
// 	(err, emailToken) => {
// 		const url = `http://localhost:3000/confirmation/${emailToken}`;
// 		transporter.sendMail({
// 			to: args.email,
// 			subject: 'Confirm Email',
// 			html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
// 		});
// 	}
// );
// exports.postLogin = (req, res, next) => {
	// 	req.session.isLoggedIn = true;
	// 	res.redirect('/');
	// };
	
	// new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
	// 	sender: { email: 'pankaj@node.com', name: 'Pankaj' },
	// 	subject: 'Sign Up Message',
	// 	templateId: 27,
	// 	params: {
	// 		greeting: 'This is the default greeting',
	// 		headline: 'This is the default headline',
	// 	},
	// 	messageVersions: [
	// 		//Definition for Message Version 1
	// 		{
	// 			to: [
	// 				{
	// 					email: email,
	// 				},
	// 			],
	// 			params: {
	// 				greeting: 'Hello again!',
	// 				headline:
	// 					'Take advantage of our summer deals, taylored just for you',
	// 			},
	// 			subject: 'Some deals worth to be looked at!',
	// 		},
	// 	],
	// });
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
