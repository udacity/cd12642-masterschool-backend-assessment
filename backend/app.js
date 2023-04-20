const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dotenv=require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB= require('./config/db')
const {errorHandler}= require('./middleware/errorMiddleware')

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const photoRoutes = require('./routes/photoRoutes');
const userRoutes= require('./routes/userRoutes');
const favoritesRoutes=require('./routes/favoritesRoutes')

app.use(express.json());
app.use('/api/photos', photoRoutes);
app.use('/api/user', userRoutes);
app.use('/api/favorites', favoritesRoutes)


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Unsplash API!' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
