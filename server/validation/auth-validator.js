const { z } = require("zod");


//creating a object schema

const signupSchema = z.object({
    username:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{msg:"name must be have 3 chars"})
    .max(255,{msg:"name must not be more than 255 chars"}),

    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({msg:"inavalid email address"})
    .min(3,{msg:"name must be have 3 chars"})
    .max(255,{msg:"name must not be more than 255 chars"}),
    
    password:z
    .string({required_error:"password is required"})
    .min(7,{msg:"password must be have at least 5 chars"})
    .max(1024,{msg:"password can't be greater then 1024 chars"}),

    
    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{msg:"phoneno must be atleast 10 chars"})
    .max(20,{msg:"phoneno must not be more than 20 chars"}),
});

module.exports = signupSchema;