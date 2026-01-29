class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(name, price) {
        this.products.push({ name, price });
    }

    listProducts() {
        return this.products;
    }

    getTotalPrice() {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}

module.exports = ProductManager;
