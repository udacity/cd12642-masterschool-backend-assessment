const express =require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

//part I code
//router.get('/', (req, res) => {
//    res.status(200).json({message: 'Welcome to the Unsplash API!'});
//})


router.get('/', photoController.getPhotos);
router.get('/:id', photoController.getPhotoById);
router.get('/users/:username', photoController.getPhotosByUsername);

module.exports = router