//require("dotenv").config();
const express = require('express');
const app = express();
const router = require("./router/auth-router") ;
const connectDb = require("./utils/db")

app.use(express.json());

app.use("/api/auth", router);

// app.get('/login',(req,res)=>{
//     res.send('ayushi arora');
// });


// app.get('/register',(req,res)=>{
//     res.send('aaditya arora');
// });


// app.get('/login',(req,res)=>{
//     res.send('rashi arora');
// });


const PORT =8080;
connectDb().then(()=>{
    app.listen(PORT,() =>{
        console.log(`server is run at port: ${PORT}`);
    });
});