//Require axios to make API calls
const axios = require("axios");
const asyncHandler=require("express-async-handler")


// Get Photos
// Get request to api/photos
const getPhotos= asyncHandler(async (req, res) => {
    try {
      const unsplashResponse = await axios.get('https://api.unsplash.com/photos', {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
      });
      const rawUrls = unsplashResponse.data.map(photo => photo.urls.raw);
      res.json(rawUrls);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  })

// Get Photos by id
// Get request to api/photos/:id

const getPhotosId=asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
      const unsplashResponse = await axios.get(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
      });
      const photoObject = {
        id: unsplashResponse.data.id,
        description: unsplashResponse.data.description,
        url: unsplashResponse.data.urls.raw
      };
      res.json(photoObject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  })

// Get photos by username
// GET request to /api/user/:username
  const getUsersPhotos= asyncHandler(async (req,res) =>{
    const user=req.params.username
    try{
      const unsplashResponse= await axios.get(`https://api.unsplash.com/users/${user}/photos`,{
        headers:{
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        }
      });
      const userPhotos = unsplashResponse.data.map(photo => ({
        id: photo.id,
        username: photo.user.username,
        description: photo.description || "No description provided.",
        url: photo.urls.raw
      }));
      res.json(userPhotos)
    } catch (error) {
      console.error(error);
      res.status(error.response.status).json({message:error.response.data})
    }
  
  })

  module.exports={getPhotos, getPhotosId, getUsersPhotos}