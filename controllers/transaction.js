const Transaction = require('../models/transaction');
const User = require('../models/user');

exports.transfer = (req, res, next) => {
	const sender = req.body.sender;
	const receiver = req.body.receiver;
	const amount = req.body.amount;

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
		})
		.catch((err) => {
			console.log(err);
		});

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
};
