const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        index: true
    },
    
    price: {
        type: Number,
        required: true,
        min: 0
    },

    description: {
        type: String,
        trim: true,
        default: ""
    },

    category: {
        type: String,
        required: true,
        trim: true,
        enum: [
            "Electronics",
            "Clothing",
            "Home",
            "Books",
            "Beauty",
            "Phones",
            "Sports",
            "Toys",
            "Others"
        ]
    },

    inStock: {
        type: Boolean,
        default: true
    }
},{timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;