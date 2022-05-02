const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

mongoose
	.connect('Mongodb URL')
	.then((result) => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});
