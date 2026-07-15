const productModel = require('../models/product.model');
// Ishmael (Ksi)
// Task: Implement createProduct()

const createProduct = async (req, res, next) => {
      try {
         const { name, price, description, category, inStock } = req.body;

         const newProduct = await productModel.create({
             name,
             price,
             description,
             category,
             inStock
              });
              res.status(201).json({
                success: true,
                message: 'Product created successfully',
                product: newProduct
                 });
             } catch (error) {
                next(error);
                 }
            





};


// Chibundu
// Task: Implement getProducts()
// Requirements:
//  Pagination, Search, Sorting, Category filtering
const getProducts = async (req, res, next) => {

};



// Precious Uloh
// Task:
// - Implement getProductById()
// - Implement updateProduct()
const getProductById = async (req, res, next) => {

};

const updateProduct = async (req, res, next) => {

};



// Seyram Afake
// Task: Implement deleteProduct()
const deleteProduct = async (req, res, next) => {

};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};