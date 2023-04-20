const mongoose=require('mongoose');

const favoritePhotoModel= new mongoose.Schema({
    user:{
        type:String,
        required:[true,'Please add a user id.']
    },
    url:{
        type:String,
        required:true,
        unique:[true,'Please add photo url.']
    },
    description:{
        type:String,
        required:[true, 'Please add a description']
    },
    username:{
        type:String,
        required:[true, 'Please add username of photo creator']
    },
    explanation:{
        type:String,
        required:false
    }
},
{
    timestamps:true
}, { collection: 'favoritePhotos' })


const User=mongoose.model('FavoritePhoto', favoritePhotoModel);
module.exports=User