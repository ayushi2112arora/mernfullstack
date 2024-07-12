const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-conroller");
const signupSchema = require("../validation/auth-validator");
const validate = require("../middleware/validate-middleware");

// app.get("/login",(req,res)=>{
//     res.send("hello world");
// }) ;
//router.route("/").get(authcontrollers.home);


router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/login").post(authcontrollers.login);
// router.route("/register").get((req,res)=>{
//     res.send("hey i am ayushi arora");
// });


// router.route("/").get((req,res)=>{
//     res.send("hey i am aaditya sharma");
// });

// router.route("/registration").post(authcontrollers.register);
// router.route("/login").post(authcontrollers.login);

module.exports = router;
