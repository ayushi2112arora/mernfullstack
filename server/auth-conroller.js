
const dotenv = require('dotenv');
const User = require("./auth-model");

const home = async (req, res) => {
  try {
    res.json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};


const register = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    // res.status(201).json({ message: "User registered successfully" });
    res.json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.json({ message: "Internal server error" });
  }
};

module.exports = { home, register };











// //home logic
// const home = async(req,res)=>{
//   try {
//       res.send("welcome to our controller page ayushi");      
//   } catch (error) {
//       console.log(error);
//   }
// };


// // const register = async (req,res)=>{
// //     try {
// //         res.send("welcome to register to page our controller again");
// //     } catch (error) {
// //         res.send({msg:'page not find '})
// //     }
// // }

// const register = async (req,res)=>{
//   try {
//       console.log(req.body);
//       res.json({message:req.body});
//   } catch (error) {
//       res.json('page not find ')
//   }
// }
// module.exports={home,register};