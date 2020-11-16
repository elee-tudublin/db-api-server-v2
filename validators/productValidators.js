
// Input validation package
// https://www.npmjs.com/package/validator
const { deserializeUser } = require('passport');
const validator = require('validator');

// models
const Product = require('../models/product.js');


let validateNewProduct = (formProduct) => {

    // debug
    if (formProduct === null) {
        console.log("validateNewProduct(): Parameter is null");
    }

    let validatedProduct;

    // Validate form data for new product fields
    if (validator.isNumeric(formProduct.categoryId, { no_symbols: true, allow_negatives: false }) && 
        !validator.isEmpty(formProduct.productName) && 
        !validator.isEmpty(formProduct.productDescription) && 
        validator.isNumeric(formProduct.productStock, { no_symbols: true, allow_negatives: false }) && 
        validator.isCurrency(formProduct.productPrice, { no_symbols: true, allow_negatives: false }))
    {
        
        // a new Product instance based on Product model object
        // no value for product id (passed as null)
        validatedProduct = new Product(
                null,
                formProduct.categoryId,
                // escape is to sanitize - it escapes any html tags
                validator.escape(formProduct.productName),
                validator.escape(formProduct.productDescription),
                formProduct.productStock,
                formProduct.productPrice
            );
    } else {
        // debug
        console.log("validateNewProduct(): Validation failed");
    }

    // return new validated product object
    return validatedProduct;
}


// Module exports
// expose these functions
module.exports = {
    validateNewProduct

}