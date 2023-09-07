"use strict";
var Size;
(function (Size) {
    Size["G"] = "Grande";
    Size["M"] = "M\u00E9dio";
    Size["P"] = "Pequeno";
})(Size || (Size = {}));
const camisa = {
    tipo: 'Camisa',
    cor: 'Vermelha',
    size: Size.G
};
console.log(camisa);
