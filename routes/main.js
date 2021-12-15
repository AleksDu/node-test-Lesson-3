const express = require("express");
const router = express.Router();

const localMiddle = (req, res, next) => {
  console.log("local: Post");
  next();
};

router.get("/", (req, res) => {
  console.log(process.version);
  res.send("Hello Aleksandr!");
});

router.post("/", localMiddle, function (req, res) {
  res.send("Got a POST request");
});
module.exports = router;
