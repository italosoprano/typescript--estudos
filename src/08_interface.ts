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