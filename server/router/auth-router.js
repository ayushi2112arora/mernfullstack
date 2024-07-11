const express = require("express");
const router = express.Router();
const {home,register, login} = require("../controllers/auth-conroller");

// app.get("/login",(req,res)=>{
//     res.send("hello world");
// }) ;
//router.route("/").get(authcontrollers.home);


router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/register").get((req,res)=>{
//     res.send("hey i am ayushi arora");
// });


// router.route("/").get((req,res)=>{
//     res.send("hey i am aaditya sharma");
// });

// router.route("/registration").post(authcontrollers.register);
// router.route("/login").post(authcontrollers.login);

module.exports = router;
