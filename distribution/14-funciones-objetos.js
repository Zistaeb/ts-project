"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    //login('nina@gmail.com', "abc");
    login({
        email: 'nina@gmail.com',
        password: 123,
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Product1',
        createdAt: new Date(),
        stock: 15,
    });
    console.log(products);
})();
