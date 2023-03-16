//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
const FavoritePhoto= require('../models/favoritePhotoModel')



// get Favorite Photos
// GET request to api/favorites

const getFavorites=asyncHandler(async(req,res)=>{
    const favorites= await FavoritePhoto.find({user:req.user.id})
    res.status(200).json(favorites)
})


// add photo to Favorite Photos
// POST request to /api/favorites

const addFavoritePhoto= asyncHandler(async(req,res)=>{
    if(!req.body.url || !req.body.description || !req.body.username || !req.body.explanation){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const favoritePhoto= await FavoritePhoto.create({
        user: req.user.id,
        url: req.body.url,
        description: req.body.description,
        username: req.body.username,
        explanation: req.body.explanation
    })

    res.status(200).json(favoritePhoto)
})

// update explanation
// PUT request to api/favorites/:id

const updateExplanation= asyncHandler(async(req,res)=>{
    const explanation= FavoritePhoto.findById(req.params.id)
    if(!explanation){
        res.status(400)
        throw new Error('Not found')
    }

    const newExplanation= await FavoritePhoto.findByIdAndUpdate(req.params.id, {
        explanation:req.body.explanation,
    }, {new:true})
    res.status(200).json(newExplanation)
})


// delete favorite photo
// DELETE request to /api/favorites/:id

const deleteFavoritePhoto= asyncHandler(async(req,res)=>{
    const favorite=await FavoritePhoto.findById(req.params.id)

    if(!favorite){
        res.status(400)
        throw new Error('Photo not found')
    }

    await favorite.remove()
    res.status(200).json({id:req.params.id})
})



module.exports={
    getFavorites,
    addFavoritePhoto,
    updateExplanation,
    deleteFavoritePhoto
}