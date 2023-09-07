/*
declaração do tipo de variaveis em ts
em ts podemos declarar o tipo de variavel que sera utilizada em uma variavel e ela só poderá ser modificada se utilizarmos o mesmo tipo de valor. 
let variavel: tipo = valor. 

existem duas formas de declarar variaveis:

inferencia

let a = 1 ==> é do tipo number mesmo sem declarar.

anotation

let a:number = 1 ==> tipo number declarado
*/

let nome: string = 'italo'

console.log(nome) //italo

// declara array e o tipo
let arr1: number[] = [1, 2, 3 , 4]

// tupla = array com elementos de tipos determinados que nao pode ser modificado. Pode receber qualquer tipo primitivo.
let myTuple: [string, string, string] = ['fofinho', 'robozao do pix', 'picpoquet'] 

//any é um tipo utilizado para declarar um tipo de uma variavel como sendo um qualquer, sem tipo especifico, deve ser usado com cuidado: 

let a: any = 'italo' //string

a = 23 //number

a = true //boolean