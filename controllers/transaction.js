<<<<<<< HEAD
const User = require('../models/user');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'sample@gmail.com',
		pass: 'xxxx',
	},
});

const transFailed = () => {
	var mailOptions = {
		from: 'sample@gmail.com',
		to: sender,
		receiver,
		subject: 'Transaction Failed',
		text: `Opps, your transaction has Failed.`,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email failed to send! ');
		}
	});
};
=======
const Transaction = require('../models/transaction');
const User = require('../models/user');
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa

exports.transfer = (req, res, next) => {
	const sender = req.body.sender;
	const receiver = req.body.receiver;
	const amount = req.body.amount;

<<<<<<< HEAD
	User.findOne({ email: receiver })
		.then((receiver) => {
			if (!receiver) {
				const error = new Error(
					'A user with this email could not be found.'
				);
				transFailed();
				error.statusCode = 401;
				throw error;
			}

			User.findOne({ email: sender })
				.then((sender) => {
					if (!sender) {
						const error = new Error(
							'A user with this email could not be found.'
						);
						transFailed();
						error.statusCode = 401;
						throw error;
					}
					if (sender.balance >= amount) {
						sender.balance -= amount;
						return sender.save();
					} else {
						return 'Balance insufficient';
					}
				})
				.catch((err) => {
					console.log(err);
				});
			receiver.balance += amount;
			return receiver.save();
=======
	User.findOne({ email: sender })
		.then((user) => {
			if (!user) {
				const error = new Error(
					'A user with this email could not be found.'
				);
				error.statusCode = 401;
				throw error;
			}
			let sender = user;
			sender.balance -= amount;
			console.log(sender);
			return user.save();
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
		})
		.catch((err) => {
			console.log(err);
		});

<<<<<<< HEAD
	var mailOptions = {
		from: 'sample@gmail.com',
		to: sender,
		receiver,
		subject: 'Transaction Succeded',
		text: `Congratulations, your transaction has been done.`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent Successfully! ');
		}
	});

	res.send(`To: ${receiver}\n
	From: ${sender}\n
	Amount: ${amount}`);
=======
	User.findOne({ email: receiver })
		.then((user) => {
			if (!user) {
				const error = new Error(
					'A user with this email could not be found.'
				);
				error.statusCode = 401;
				throw error;
			}
			let receiver = user;
			receiver.balance += amount;
			console.log(receiver);
			return user.save();
		})
		.catch((err) => {
			console.log(err);
		});
	res.json(`To: ${receiver}
    From: ${sender}
    Amount: ${amount}`);
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
};
