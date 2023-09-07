/*
interfaces são muito comuns e utilizadas em Java e C#, elas servem para definir um padrão que deve ser utilizado, como parametro para funções

funciona similara a um objeto literal, sendo uma relação chave: valor
interface nomeDaInterface {chave: valor, chave: valor [...]}
*/

interface mathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: mathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 12, n2: 42})) //54

function multipleParams(nums: mathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(multipleParams({n1: 23, n2: 54})) //1242

//passando a interface como uma constante para ser usada em uma função

const somaNumbers: mathFunctionParams = {
    n1: 5,
    n2: 5
}

//função de multiplicação recebendo como parametros a variavel que recebeu a interface.
console.log(multipleParams(somaNumbers)); //25
