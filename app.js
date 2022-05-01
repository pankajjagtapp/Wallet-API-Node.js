const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const session = require('express-session');

const authRoutes = require('./routes/auth');

const app = express();

// const User = require('./models/user');

app.use(bodyParser.json());

app.use('/auth', authRoutes);


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
// 	session({ secret: 'my-secret', resave: false, saveUninitialized: false })
// );

app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

mongoose
	.connect(
		'mongodb+srv://pankajjagtapp:pankaj1998@cluster0.ngklq.mongodb.net/users?retryWrites=true&w=majority'
	)
	.then((result) => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});

// User.findOne().then((user) => {
// 	if (!user) {
// 		const user = new User({
// 			email: 'pankaj2@test.com',
// 			password: 'zxcv',
// 		});
// 		user.save();
// 	}
// });
