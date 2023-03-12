const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv=require('dotenv').config();

const photoRoutes = require('./routes/photoRoutes');

app.use(express.json());
app.use('/api/photos', photoRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Unsplash API!' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
