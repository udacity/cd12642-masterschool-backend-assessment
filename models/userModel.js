const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please add a name.']
    },
    email:{
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


const User=mongoose.model('User', userSchema);
module.exports=User