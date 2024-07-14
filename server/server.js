const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const app = express();
const router = require("./router/auth-router") ;
const contactroute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const loginschema = require('./validation/loginschema');
const loginerror = require("./middleware/login-middleware");
const result = dotenv.config({ path: path.resolve(__dirname, './.env') });

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form",contactroute);

app.use(errorMiddleware);
app.use(loginerror);

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
// connectDb().then(()=>{
//     app.listen(PORT,() =>{
//         console.log(`server is run at port: ${PORT}`);
//     });
// });


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`SERVER IS RUNNING AT PORT: ${PORT}`);
    })
})

//module.exports = connectDb;