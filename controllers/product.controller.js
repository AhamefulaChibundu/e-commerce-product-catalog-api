const productModel = require('../models/product.model');
// Ishmael (Ksi)
// Task: Implement createProduct()

const createProduct = async (req, res, next) => {

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
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: `Product with ${req.params.id} not found` });
        }
        return res.status(200).json({
            message: "Product retrieved successfully",
            data: product
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: `Product with ${req.params.id} not found`
            });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};



// Precious Uloh
// Task: Implement deleteProduct()
const deleteProduct = async (req, res, next) => {
try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: `Product with ${req.params.id} not found` });
        }
        return res.status(200).json({
            message: "Product deleted successfully",
            data: deletedProduct
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};