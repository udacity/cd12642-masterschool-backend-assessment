//Require axios to make API calls
const axios = require('axios');
const dotenv = require('dotenv').config();

const accessKey = process.env.UNSPLASH_ACCESS_KEY;
// const secretKey = process.env.UNSPLASH_SECRET_KEY
// const callbackUrl = process.env.UNSPLASH_CALLBACK_URL;
// const authorizationCode = process.env.UNSPLASH_AUTHORIZATION_CODE
const apiUrl = 'https://api.unsplash.com/';

exports.getPhotos = async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}?client_id=${accessKey}`);
    const photos = response.data.map((photo) => photo.urls.raw);
    console.log(response.data); 
    res.status(200).json({ photos });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
    console.log(error);
  }
};


// https://unsplash.com/oauth/token
//   ?client_id=YOUR_ACCESS_KEY
//   &client_secret=YOUR_SECRET_KEY
//   &redirect_uri=YOUR_CALLBACK_URL
//   &code=AUTHORIZATION_CODE
//   &grant_type=authorization_code


// exports.getPhotoById = async (req, res, next) => {
//   const id = req.params.id;
//   try {
//     const response = await axios.get(`${ApiUrl}/${id}?client_id=${AccessKey}`);
//     const photo = response.data;
//     res.status(200).json({ photo });
//   } catch (error) {
//     res.status(500).json({ message: "Server error. Please try again later." });
//   }
// };

// exports.getPhotosByUsername = async (req, res, next) => {
//   const { username } = req.params;
//   try {
//     const response = await axios.get(`${ApiUrl}/users/${username}/photos?client_id=${AccessKey}`);
//     const userDetails = response.data.map((user) => ({
//       id: user.id,
//       username: user.user.username,
//       description: user.description || "No description provided.",
//       url: user.urls.raw,
//     }));
//     res.status(200).json({ userDetails });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };




