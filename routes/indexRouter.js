const express = require("express");

//used to create new router object
const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    message: "Welcome to my app",
  });
});

//works with router (express.Router()) to export file data
module.exports = router;
