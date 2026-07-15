// Ishmael (Ksi): Implement joi schema
const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),

    price:Joi.number().min(0).required(),

    description: Joi.string().trim().allow('').optional(),

     category: Joi.string().trim().valid(
        "Electronics",
        "Clothing",
        "Home",
        "Books",
        "Beauty",
        "Phones",
        "Sports",
        "Toys",
        "Others"
    ).required(),

    inStock: Joi.boolean().default(true)
});

module.exports = { productSchema };
