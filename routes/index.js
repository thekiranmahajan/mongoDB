var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

// router.get("/create", async function (req, res) {
//   const createdUser = await userModel.create({
//     username: "theRayOP",
//     firstName: "kiran",
//     age: 22,
//     lastName: "Mahajan",
//   });
//   res.send(createdUser);
// });



module.exports = router;
