const axios = require("axios");
const dotenv = require("dotenv").config();

const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;
const ApiUrl = process.env.UNSPLASH_API_URL;

exports.getPhotos = (req, res, next) => {
  axios
    .get(`${ApiUrl}?client_id=${unsplashAccessKey}`)
    .then((response) => {
      const photos = response.data.map((photo) => photo.urls.raw);
      console.log(response.data); //to get the response in terminal for all photos objects
      res.status(200).json({ photos });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Server error. Please try again later." });
    });
};

exports.getPhotoById = (req, res, next) => {
  const id = req.params.id;
  axios
    .get(`${ApiUrl}/${id}?client_id=${unsplashAccessKey}`)
    .then((response) => {
      const photo = response.data;
      res.status(200).json({ photo });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Server error. Please try again later." });
    });
};
