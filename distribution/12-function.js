"use strict";
(() => {
    function createProductToJson(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    }
    const product1 = createProductToJson('P1', new Date(), 73, 'M');
    console.log(product1);
    console.log(product1.title);
    console.log(product1.createdAt);
    console.log(product1.stock);
    console.log(product1.size);
    const createProductToJsonV2 = (//Arrow function
    title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size,
        };
    };
    const product2 = createProductToJsonV2('P1', new Date(), 73);
    console.log(product2);
    console.log(product2.title);
    console.log(product2.createdAt);
    console.log(product2.stock);
    console.log(product2.size);
})();
