const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the Unsplash API!'});
})

app.use('/api/photos', require('./routes/photoRoutes.js'));

app.listen(port, () => console.log(`Server started on port ${port}`));


