// Static means the stuffs that appear on the front end

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("home");
})

module.exports = router;