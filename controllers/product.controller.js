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
    try {
        const { page = 1, limit = 10, search, name, category, sort } = req.query;
            
        const skip = (page - 1) * limit;
            
        let query = {};
            
        // Search term can come from either ?search= or ?name=
        const searchTerm = search || name;

        // Category filtering
        if (category) {
            query.category = category;
        }

        // Search by product name
        if (searchTerm) {
            query.name = {
                $regex: searchTerm,
                $options: "i"
            };
        }

        // Sorting
        let sortOption = { createdAt: -1 };

        if (sort) {
            sortOption = {};
            sortOption[sort] = 1;
        }

        const products = await productModel
            .find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        const totalProducts = await productModel.countDocuments(query);

        return res.status(200).json({
            message: "Products fetched successfully",
            data: products,
            currentPage: (page),
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts
        });

    } catch (error) {
        console.error(error);
        next(error);
    }
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