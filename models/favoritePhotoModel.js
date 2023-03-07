const mongoose = require('mongoose')

const favoritePhotoSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    url: {
        type: String,
        required: [true, 'please add the photo url']
    },
   
    description: {
        type: String,
        required: [true, 'please write a description of the photo']
    },
   
    explanation: {
        type: String,
        required: [true, 'please write an explanation for adding this photo to favorite photo list']
    },


}, {
    timestamps: true
})

const FavoritePhoto = mongoose.model('FavoritePhoto', favoritePhotoSchema);

module.exports = FavoritePhoto;