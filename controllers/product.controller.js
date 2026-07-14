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
const productSchema = joi.object({
    name: joi.string().min(2).optional(),
    description: joi.string().min(10).optional(),
    price: joi.number().positive().optional(),
    category: joi.string().optional()
});

const {error ,value} = productSchema.validate(req.body);
if (error) {
    return res.status(400).json({ message: "please provide valid product information",});
}

    try {
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
             {...value}, 
             { 
                new: true, 
                runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: `Product with ${req.params.id} not found` });
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



// Seyram Afake
// Task: Implement deleteProduct()
const deleteProduct = async (req, res, next) => {

};

const searchProducts = async (req, res, next) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res.status(400).json({
                message: "Please provide a search keyword."
            });
        }

        const products = await productModel.find({
            $text: { $search: q }
        });

        return res.status(200).json({
            message: "Search successful",
            data: products
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts
};