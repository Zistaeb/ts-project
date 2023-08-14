"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product-service");
(0, product_service_1.addProduct)({
    title: 'Product1',
    createdAt: new Date(),
    stock: 5,
});
(0, product_service_1.addProduct)({
    title: 'Product2',
    createdAt: new Date(),
    stock: 6,
    size: "L",
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
