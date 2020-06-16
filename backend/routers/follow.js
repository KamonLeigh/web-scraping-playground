const express = require("express");
const db = require("../db");
const router = new express.Router();

router.get("/data", (req, res) => {
  const {twitter, instagram}  = db.value();
  res.json({ twitter, instagram})
});

module.exports = router;