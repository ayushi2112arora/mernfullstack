const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
const result = dotenv.config({ path: path.resolve(__dirname, './.env') });

if (result.error) {
    console.error("Error loading .env file:", result.error);
    process.exit(1);
} else {
    console.log(".env file loaded successfully");
}

console.log("port:", process.env.PORT);
