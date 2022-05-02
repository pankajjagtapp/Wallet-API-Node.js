const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
<<<<<<< HEAD
=======
// const session = require('express-session');
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa

const authRoutes = require('./routes/auth');

const app = express();

<<<<<<< HEAD
=======
// const User = require('./models/user');

>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
app.use(bodyParser.json());

app.use('/auth', authRoutes);

<<<<<<< HEAD
=======

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
// 	session({ secret: 'my-secret', resave: false, saveUninitialized: false })
// );

>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

mongoose
<<<<<<< HEAD
	.connect('Mongodb URL')
=======
	.connect(
		'mongodb+srv://pankajjagtapp:pankaj1998@cluster0.ngklq.mongodb.net/users?retryWrites=true&w=majority'
	)
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
	.then((result) => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});
<<<<<<< HEAD
=======

// User.findOne().then((user) => {
// 	if (!user) {
// 		const user = new User({
// 			email: 'pankaj2@test.com',
// 			password: 'zxcv',
// 		});
// 		user.save();
// 	}
// });
>>>>>>> 63a32408c380f17e93eae6f8749ffb565d110ffa
