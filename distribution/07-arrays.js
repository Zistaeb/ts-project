"use strict";
(() => {
    let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'hola', true];
    prices.push(12);
    let products = ['hola', false];
    products.push("si");
    products.push(true);
    let mixed = ['hola', false];
    mixed.push(73);
    mixed.push({});
    mixed.push([]);
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.map(item => item * 2);
})();
