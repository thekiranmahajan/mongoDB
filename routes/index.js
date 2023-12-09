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

// router.get("/allUsers", async function (req, res) {
//   let allUsers = await userModel.find();
//   res.send(allUsers);
// });

router.get("/oneUser", async function (req, res) {
  let oneUser = await userModel.findOne({ username: "chomu" });
  res.send(oneUser);
});

// router.get("/delete", async function (req, res) {
//   let deletedUser = await userModel.findOneAndDelete({ username: "theRayOP" });
//   res.send(deletedUser);
// });

module.exports = router;
