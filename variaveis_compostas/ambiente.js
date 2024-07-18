/*
let frutas = ["Banana", "maça"];

frutas.push("laranja", "uva"); // adiciona valores no FINAL do seu array ou logo apos o ultimo valor ja adicionado

frutas.unshift("caqui", "abacaxi")//  Adiciona valores no INICIO do seu array  

let ultimaFruta = frutas.pop()// remove o ultimo elemento do array frutas

console.log(frutas)
console.log(frutas.length) // Retorna o numero de elementos dentro do array frutas, mas pode retornar tambem o numeros de string em uma palavra
console.log(ultimaFruta)  // Mostrando para o usuario a fruta removida

*/

let num = [ 1, 5, 2, 8, 7 ]

num.sort() // Ordena os valores do meu array em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostrando o primeiro valor do nosso array

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
