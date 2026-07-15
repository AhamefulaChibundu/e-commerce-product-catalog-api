const express = require("express");

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller");

// Ishmael (Ksi): Require Joi validator and validator middleware below this comment.
const { validateProduct } = require('../middleware/validator');
const router = express.Router();


// Ishmael (Ksi) - POST  /products
router.post('/products', validateProduct, createProduct);



// Ahamefula Chibundu - GET /products


// Precious Uloh - GET  /products/:id


// Precious Uloh - PUT  /products/:id


// Seyram Afake - DELETE  /products/:id


module.exports = router;