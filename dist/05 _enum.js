"use strict";
/*
enum sao objetos que auxiliam na enumeração de um conjunto de objetos que existem e sao utilizados de maneira corriqueira.

enum Nome {objeto chave = valor}
*/
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
console.log(camisa); //{tipo: Camisa, Cor: Vermelha, Size: Grande}
