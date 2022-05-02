# Wallet-API-Node.js
This is a basic wallet api made with Node.js

exports.transfer = (req, res, next) => {
	const sender = req.body.sender;
	const receiver = req.body.receiver;
	const amount = req.body.amount;

	User.findOne({ email: sender})
		.then((user) => {
			let sender = user;
			if (!user) {
				const error = new Error(
					'A user with this email could not be found.'
				);
				transFailed();
				error.statusCode = 401;
				throw error;
			} 
			sender.balance -= amount;
			console.log(user);
		})
		.catch((err) => {
			console.log(err);
		});

	User.findOne({ email: receiver })
		.then((user) => {
			let receiver = user;
			if (!user) {
				const error = new Error(
					'A user with this email could not be found.'
				);
				transFailed();
				error.statusCode = 401;
				throw error;
			}
			receiver.balance += amount;
			console.log(receiver);
			return user.save();
		})
		.catch((err) => {
			console.log(err);
		});
  