const ProductManager = require("./productManager");

function testTotalPrice() {
    const manager = new ProductManager();
    manager.addProduct("Pen", 10);
    manager.addProduct("Book", 40);

    const total = manager.getTotalPrice();

    if (total === 50) {
        console.log("PASS: Total price is correct");
    } else {
        console.log("FAIL: Total price is incorrect");
    }
}

testTotalPrice();
