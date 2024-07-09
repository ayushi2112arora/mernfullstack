// const dotenv = require('dotenv');
// const path = require('path');
// const mongoose = require("mongoose");
// // Load environment variables from .env file
// const result = dotenv.config({ path: path.resolve(__dirname, './.env') });


// //const mongoose = require("mongoose");

// //const URI = "mongodb+srv://mern_db:ayushi2112@cluster0.ztvhlqi.mongodb.net/fullstack";


// if (result.error) {
//     console.error("Error loading .env file:", result.error);
//     process.exit(0);
// } else {
//     console.log(".env file loaded successfully");
// }
// console.log("mongodb: ", process.env.MONGO_DB_URI);
// //module.exports = connectDb;



const dotenv = require('dotenv');
const path = require('path');
const URI = 'process.env.MONGO_DB_URI';
// Load environment variables from .env file
const result = dotenv.config({ path: path.resolve(__dirname, './.env') });

if (result.error) {
    console.error("Error loading .env file:", result.error);
    process.exit(1);
} else {
    console.log(".env file loaded successfully");
}

console.log("MONGODB_URI:", process.env.MONGO_DB_URI);
console.log("All environment variables:", process.env.MONGO_DB_URI);






//const URI = "mongodb+srv://mern_db:ayushi2112@cluster0.ztvhlqi.mongodb.net/fullstack";
// const connectDb = async () => {
//     try {
//         const conn = await mongoose.connect(URI);
//         console.log("Connection successful to the database");
//     } catch (error) {
//         console.error("Error connecting to the database:", error);
//         process.exit(1); // Exit with error code 1
//     }
// };