"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Product1',
        createdAt: new Date(),
        stock: 15,
    });
    addProduct({
        title: 'Product2',
        createdAt: new Date(),
        stock: 15,
        size: "L",
    });
    console.log(products);
    products.push({
        title: 'Product3',
        createdAt: new Date(),
        stock: 11,
    });
})();
