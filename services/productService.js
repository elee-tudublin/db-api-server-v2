// require the database connection
const productRepository = require('../repositories/productRepository.js');

const productValidator = require('../validators/productValidators.js');

// Input validation package
// https://www.npmjs.com/package/validator
const validator = require('validator');


// Get all products via the repository
// return products
let getProducts = async () => {

    let products = await productRepository.getProducts();
    return products;
};


// Get product by id via the repository
// Validate input
// return product
let getProductById = async (productId) => {

    let product;

    // Validate input - important as a bad input could crash the server or lead to an attack
    // appending + '' to numbers as the validator only works with strings
    if (!validator.isNumeric(productId + '', { no_symbols: true })) {
        console.log("getProducts service error: invalid id parameter");
        return "invalid parameter";
    }

    // get product
    product = await productRepository.getProductById(productId);

    return product;
};

// Get products in a category via the repository
// Validate input
// return products
let getProductByCatId = async (catId) => {

    let products;

    // Validate input - important as a bad input could crash the server or lead to an attack
    // appending + '' to numbers as the validator only works with strings
    if (!validator.isNumeric(catId + '', { no_symbols: true })) {
        console.log("getProductsCatId service error: invalid id parameter");
        return "invalid parameter";
    }

    products = await productRepository.getProductByCatId(catId);

    return products;
};


// Insert a new product
// This function accepts product data as a paramter from the controller.
let createProduct = async (product) => {

    // declare variables
    let newlyInsertedProduct;

    // Call the product validator - kept seperate to avoid clutter here
    let validatedProduct = productValidator.validateNewProduct(product);

    // If validation returned a product object - save to database
    if (validatedProduct != null) {
        newlyInsertedProduct = await productRepository.createProduct(validatedProduct);
    } else {

        // Product data failed validation 
        newlyInsertedProduct = {"error": "invalid product"};

        // debug info
        console.log("productService.createProduct(): form data validate failed");
    }

    // return the newly inserted product
    return newlyInsertedProduct;
};

let updateProduct = async (product) => {

    return true;
};

let deleteProduct = async (id) => {

    return true;
};

// Module exports
// expose these functions
module.exports = {
    getProducts,
    getProductById,
    getProductByCatId,
    createProduct,
    updateProduct,
    deleteProduct
};