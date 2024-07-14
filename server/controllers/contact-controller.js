const contact = require("../model/contact-model");

const contactForm = async (req,res) =>{
    try {
        const response = req.body;
        await contact.create(response);
        return res.json({message:"message send successfully"});
    } catch (error) {
        return res.json({message:"message not delivered"});
    }
};

module.exports = contactForm;