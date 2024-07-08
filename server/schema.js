const dotenv = require('dotenv');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8080;
const SECRET_KEY = 'process.env.SECRET_KEY';

const path = require('path');

// Load environment variables from .env file
const result = dotenv.config({ path: path.resolve(__dirname, './.env') });
app.use(express.json());

app.post("/login",(req,res)=>{
  const {username,password} = req.body;

  const payload = {
    username,
    password,
  };

  const token = jwt.sign(
    payload,
    SECRET_KEY,
        {expiresIn:'2h'},
  );
  res.json({ token });
 
});


app.listen(PORT,() => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
    console.log("SECRET_KEY", process.env.SECRET_KEY)

    console.log("password", process.env.KEY)

