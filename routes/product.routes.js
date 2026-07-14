const express = require("express");

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/product.controller");

// Ishmael (Ksi): Require Joi validator and validator middleware below this comment.

const router = express.Router();


// Ishmael (Ksi) - POST  /products


// Ahamefula Chibundu - GET /products

// Precious Uloh - GET /products/:id
router.get('/products/:id', getProductById);

// Precious Uloh - PUT /products/:id
router.put('/products/:id', updateProduct);


// Seyram Afake - DELETE  /products/:id


module.exports = router;