const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	sender: {
		type: String,
		required: true,
	},
	receiver: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Transaction', transactionSchema);