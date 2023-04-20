const express = require('express')
const { getFavorites,
        addFavoritePhoto, 
        updateExplanation,
        deleteFavoritePhoto} = require('../controllers/favoritesController')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect,getFavorites).post(protect,addFavoritePhoto)
router.route('/:id').put(protect, updateExplanation).delete(protect, deleteFavoritePhoto)

module.exports=router