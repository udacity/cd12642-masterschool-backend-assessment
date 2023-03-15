//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require("express-async-handler");
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const User=require('../models/userModel')


// Create user
// POST request to /api/users/

const registerNewUser=asyncHandler(
    async(req,res)=>{
        const {username, email, password}=req.body
        if(!username || !email || !password){
            res.status(400)
            throw new Error('Please fill out all fields.')
        }

        const alreadyExists=await User.findOne({email})

        if (alreadyExists){
            res.status(400)
            throw new Error('Email already exists.')
        }

        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password, salt)

        const createUser= await User.create({
            username,
            email,
            password:hashedPassword,
        })

        if(createUser){
            res.status(201).json({
                _id:createUser.id,
                username:createUser.username,
                email:createUser.email,
                token:generateToken(createUser._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
)




// Login user
// POST request to /api/user/login

const loginUser= asyncHandler(async(req, res) =>{
    const {email, password}= req.body

    const user=await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            username:user.username,
            email:user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid login details.')
    }
})
  

// Logout user

const logOut = asyncHandler(async (req, res) => {
    try {
      res.status(200).json({ token: null });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });



// See logged in user
// GET request to /api/user/me

const getMe= asyncHandler(async(req, res) =>{
    const {_id, username, email} = await User.findById(req.user.id)

    res.status(200).json({id:_id, username, email})
})


// Generate JWT token 

const generateToken = (id)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn:'30d'
    })
}


module.exports={registerNewUser, loginUser, getMe, logOut }