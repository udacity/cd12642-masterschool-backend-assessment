//import dependencies
const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController.js");

router.get("/photos", photoController.getPhotos);
router.get("/photos/:id", photoController.getPhotoById);
router.get("/user/:username", photoController.getPhotosByUsername);
module.exports = router;
