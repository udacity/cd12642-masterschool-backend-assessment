const express = require('express');
const router = express.Router();
const {getPhotos, getPhotosId, getUsersPhotos}=require('../controllers/photoController')

router.get('/', getPhotos);
router.get('/:id', getPhotosId);
router.get('/user/:username', getUsersPhotos);



module.exports = router;
