
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters

function Product(id = 0, cat = 0, name, desc, stock, price) {

    this.productId = id;
    this.categoryId = cat;
    this.productName = name;
    this.productDescription = desc;
    this.productStock = stock;
    this.productPrice = price;
}

module.exports = Product;

