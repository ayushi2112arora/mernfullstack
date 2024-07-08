
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