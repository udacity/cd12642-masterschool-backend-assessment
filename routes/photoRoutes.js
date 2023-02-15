//import dependencies
const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");

router.get("/", photoController.getPhotos);
router.get("/:id", photoController.getPhotoById);

module.exports = router;
