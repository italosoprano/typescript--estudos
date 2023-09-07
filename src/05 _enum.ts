/*
enum sao objetos que auxiliam na enumeração de um conjunto de objetos que existem e sao utilizados de maneira corriqueira. 

enum Nome {objeto chave = valor} 
*/

enum Size {
    G = 'Grande', 
    M = 'Médio',
    P = 'Pequeno'
}

const camisa = {
    tipo: 'Camisa',
    cor: 'Vermelha',
    size: Size.G
}

console.log(camisa) //{tipo: Camisa, Cor: Vermelha, Size: Grande}