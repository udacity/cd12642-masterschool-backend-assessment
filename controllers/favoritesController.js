//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
const FavoritePhoto= require('../models/favoritePhotoModel')