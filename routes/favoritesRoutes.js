const express = require('express');
const router = express.Router();

const {
  createFavoritePhoto,
  getAllFavoritePhotos,
  updateFavoritePhoto,
  deleteFavoritePhoto
} = require('../controllers/favoritesController');

const {protect} = require('../middleware/authMiddleware');

// Create a new favorite photo
router.post('/',protect, createFavoritePhoto);


// Get all favorite photos for a user
router.get('/:userId',protect, getAllFavoritePhotos);

// Update a favorite photo
router.put('/:id',protect, updateFavoritePhoto);

// Delete a favorite photo
router.delete('/:id',protect, deleteFavoritePhoto);

module.exports = router;