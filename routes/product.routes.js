const express = require("express");

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller");

// Ishmael (Ksi): Require Joi validator and validator middleware below this comment.
const { validate } = require('../middlewares/validator');
const { productSchema, updateProductSchema } = require("../middlewares/schema");
const router = express.Router();


// Ishmael (Ksi) - POST  /products
router.post('/products', validate(productSchema), createProduct);



// Ahamefula Chibundu - GET /products
router.get('/products', getProducts);

// Precious Uloh - GET  /products/:id


// Precious Uloh - PUT  /products/:id


// Seyram Afake - DELETE  /products/:id


module.exports = router;