const express = require("express");

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts
} = require("../controllers/product.controller");

// Ishmael (Ksi): Require Joi validator and validator middleware below this comment.

const router = express.Router();


// Ishmael (Ksi) - POST  /products


// Ahamefula Chibundu - GET /products


router.get('/products/search', searchProducts);

router.get('/products/:id', getProductById);

router.put('/products/:id', updateProduct);


// Seyram Afake - DELETE  /products/:id


module.exports = router;