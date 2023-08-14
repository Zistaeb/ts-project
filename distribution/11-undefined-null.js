"use strict";
(() => {
    let myNumber = null;
    let myString = undefined;
    let myNull = null; //Tipo de dato: any
    let myUndefined = undefined; //Tipo de dato: any
    let isNull = null;
    let isUndefined = undefined;
    myNumber = 12;
    myString = "hola";
    function hi(name) {
        let hello = "Hola ";
        if (name) {
            hello += name;
        }
        else {
            hello += 'nobody';
        }
        console.log(hello);
    }
    function hi2(name) {
        let hello = "Hola ";
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
        console.log(hello);
    }
    hi("Nicolas");
    hi(null);
    hi2("Nicolas");
    hi2(null);
})();
