"use strict";
(() => {
    let userId;
    userId = 57;
    userId = 'juguete';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    ;
    greeting('hola');
    greeting(73.123578);
})();
