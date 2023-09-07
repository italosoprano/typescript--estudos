"use strict";
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHello(name) {
    return `Olá ${name}`;
}
console.log(sayHello('Italo'));
function logger(msg) {
    console.log(msg);
}
logger('Olá, pessoas!!!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${name} ${greet}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting('italo');
greeting('Mochi', 'O vagabundo');
