/*
Quando se trata de funções existem certos passos a se realizar.

ex: funções com parametros precisam do tipo primitivo sendo passado. 
*/

function sum(a: number, b: number) {
    return a + b
}

console.log(sum(12, 12)); //24

//tambem e possivel tipar o retorno da função

function sayHello(name: string): string {
    return `Olá ${name}`
}

console.log(sayHello('Italo')); //Olá Italo

//funções sem retorno, utilizamos :void como o tipo de retorno nesse caso. 

function logger(msg: string): void{
    console.log(msg)
}

logger('Olá, pessoas!!!') //Olá pessoas!!!

//o greet e uma parametro que se torna opcional a ser passado para a função, nao sendo necessario para sua funcionalidade. 

function greeting(name: string, greet?: string) {
    //função para tratar caso a função tenha ou não passado o parametro greet
    if(greet) {
        console.log(`Olá ${name} ${greet}`)
    } else {
        console.log(`Olá ${name}`)
    }
}

greeting('italo') //Olá italo
greeting('Mochi', 'O vagabundo') //Olá Mochi o vagabundo

