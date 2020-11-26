// require the database connection
const productRepository = require('../repositories/categoryRepository.js');

const Category = require('../models/category.js');

// Get all categories via the repository
// return categories
let getCategories = async () => {

    let categories = await productRepository.getCategories();
    return categories;
};

// Module exports
// expose these functions
module.exports = {
    getCategories
};