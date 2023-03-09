//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
const dotenv = require('dotenv').config();

const FavoritePhoto = require('../models/favoritePhotoModel');
const errorHandler = require('../middleware/errorMiddleware');

// Create a new favorite photo
const createFavoritePhoto = asyncHandler(async (req, res) => {
  const { url, description, explanation } = req.body;
  console.log(req.user)
  const favoritePhoto = await FavoritePhoto.create({
    user: req.user.id,
    url,
    description,
    explanation
  });

  res.status(201).json({ favoritePhoto });
});

// Get all favorite photos for a user
const getAllFavoritePhotos = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const favoritePhotos = await FavoritePhoto.find({ user: userId });

  res.json({ favoritePhotos });
});

// Update a favorite photo
const updateFavoritePhoto = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { explanation } = req.body;
  console.log(id)
  console.log(explanation)
  const favoritePhoto = await FavoritePhoto.findByIdAndUpdate(
    id,
    { explanation },
    { new: true }
  );

  res.json({ favoritePhoto });
});

// Delete a favorite photo
const deleteFavoritePhoto = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await FavoritePhoto.findByIdAndDelete(id);

  res.json({ message: 'Favorite photo deleted' });
});



module.exports = {
  createFavoritePhoto,
  getAllFavoritePhotos,
  updateFavoritePhoto,
  deleteFavoritePhoto,
};