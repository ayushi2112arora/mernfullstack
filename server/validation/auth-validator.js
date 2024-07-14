const { z } = require("zod");


//creating a object schema

const signupSchema = z.object({
    username:z
    .string({required_error:"name is required"})
    .trim()
    .min(5, { message: "username be 5 or more characters long" })
    .max(255,{message:"name must not be more than 255 chars"}),

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

    
    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(10, { message: "phone must be 10 or more characters long" })
    .max(20,{message:"phone must not be more than 20 chars"}),
});


// const loginschema = z.object({
//     username:z
//     .string({required_error:"username is required"})
//     .trim()
//     .min(5, { message: "username be 5 or more characters long" })
//     .max(255,{message:"username must not be more than 255 chars"}),

    
//     email:z
//     .string({required_error:"email is required"})
//     .trim()
//     .email({msg:"invalid email address"})
//     .min(5, { message: "email must be 5 or more characters long" })
//     .max(255,{message:"email must not be more than 255 chars"}),
// });

module.exports = signupSchema;