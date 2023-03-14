const express = require('express');
const axios = require('axios');
const router = express.Router();

// /api/photos
router.get('/', async (req, res) => {
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
});

// /api/photos/:id
router.get('/:id', async (req, res) => {
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
});


// /api/photos/user/:username

router.get('/user/:username', async (req,res) =>{
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

});



module.exports = router;
