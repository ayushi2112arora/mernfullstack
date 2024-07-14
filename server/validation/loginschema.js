const { z } = require("zod");


const loginschema = z.object({
    
    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({msg:"invalid email address"})
    .min(5, { message: "email must be 5 or more characters long" })
    .max(255,{message:"email must not be more than 255 chars"}),

    
    password:z
    .string({required_error:"password is required"})
    .min(7, { message: "password 7 or more characters long" })
    .max(1024,{message:"password must not be more than 1024 chars"}),
});

module.exports = loginschema;