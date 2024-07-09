const express = require("express");
const router = express.Router();
const authcontrollers = require("./auth-controller");

// router.get("/",(req,res)=>{
//     res.send("hello world");
// }) ;
router.route("/").get(authcontrollers.home);

// router.route("/").get((req,res)=>{
//     res.send("hey i am ayushi arora");
// });

router.route("/registration").post(authcontrollers.register);
module.exports = router;
