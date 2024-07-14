
const loginerror = (err,req,res,next) => {

    const message = err.message || "login error";
    const extraDetails = err.extraDetails || "error from frontend";
    
    return res.json({message,extraDetails});
  }

module.exports = loginerror;