const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 3000;
const app = express();

//part I code
// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Welcome to the Unsplash API!'});
// })

//add middleware to use req.body
 app.use(express.json())
 app.use(express.urlencoded({ extended: false }))

app.use('/api/photos', require('./routes/photoRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

app.listen(port, () => console.log(`Server started on port ${port}`));


