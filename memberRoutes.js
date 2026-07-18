const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "HYPA Members Route Working Successfully!"
  });
});

module.exports = router;
