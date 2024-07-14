// await schema.parseAsync(req.body) is the line where u use zod to validate the request body data against the defined schema.





const validate = (schema) => async (req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        //console.log(err);
        const extraDetails = err.errors[0].message;
        const message = "fill  the input properly"
        const error = {
            message,
            extraDetails ,

        }
        console.log(error);
        //res.json({msg: message });
        next(error)
    }
};


const loginvalidate = (schema) => async (req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        //console.log(err);
        const extraDetails = err.errors[0].message;
        const message = "succesfully login"
        const error = {
            message,
            extraDetails ,

        }
        console.log(error);
        //res.json({msg: message });
        next(error)
    }
};

module.exports = (validate,loginvalidate);