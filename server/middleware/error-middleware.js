const errorMiddleware = (err,req,res,next) => {

  const message = err.message || "backend error";
  const extraDetails = err.extraDetails || "error from backend";
  
  return res.json({message,extraDetails});
}


// const loginerror = (err,req,res,next) => {

//     const message = err.message || "login error";
//     const extraDetails = err.extraDetails || "error from frontend";
    
//     return res.json({message,extraDetails});
//   }

 module.exports = errorMiddleware;