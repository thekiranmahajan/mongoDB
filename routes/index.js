var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */

router.get("/", function (req, res) {
  // req.session.ban = true;
  res.cookie("age", 22);
  res.render("index");
});

router.get("/readCookies", function (req, res) {
  res.send(req.cookies);
});
router.get("/clearCookie", function (req, res) {
  res.clearCookie("age");
  res.send("cleared");
});

router.get("/checkBan", function (req, res) {
  if (req.session.ban == true) {
    res.send("You are banned bro!!");
  } else {
    res.send("You are not banned!!");
  }
});

router.get("/deleteSession", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("You have deleted session");
  });
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

// router.get("/oneUser", async function (req, res) {
//   let oneUser = await userModel.findOne({ username: "chomu" });
//   res.send(oneUser);
// });

// router.get("/delete", async function (req, res) {
//   let deletedUser = await userModel.findOneAndDelete({ username: "theRayOP" });
//   res.send(deletedUser);
// });

module.exports = router;
