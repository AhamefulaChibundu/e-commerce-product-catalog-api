// Ishmael (Ksi): Implement joi validation
const { productSchema } = require('./schema');


const validateProduct = (req, res, next) => {

    const { error, value } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
         const errorMessages = error.details.map(detail => detail.message);
         return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errorMessages
            });
    }
    req.body = value;
    next();
};

module.exports = { validateProduct };


    


    
