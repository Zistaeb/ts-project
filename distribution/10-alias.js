"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = "M";
    shirtSize = "L";
    shirtSize = "XL";
    function greeting(userId, shirtSize) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting(73, "M");
    greeting("Hola", "XL");
})();
