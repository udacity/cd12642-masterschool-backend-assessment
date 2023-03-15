const mongoose=require('mongoose');

const favoritePhotoModel= new mongoose.Schema({
    user:{
        type:String,
        required:[true,'Please add a username.']
    },
    url:{
        type:String,
        required:true,
        unique:[true,'Please add an email.']
    },
    password:{
        type:String,
        required:[true, 'Please add a password']
    }
},
{
    timestamps:true
}, { collection: 'users' })


const User=mongoose.model('FavoritePhoto', favoritePhotoModel);
module.exports=User