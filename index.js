const numero1 = 1 // Constantes não podem ser alteradas

var numero2 = 2
numero2 = 3 // Variáveis podem ser alteradas

let numero3 = 3 // Também é uma variável mas com escopo diferente

// Tipos no JS
const string = "Hello World"
const int = 4
const float = 4.5
const boolean = true

// Funções no JS

// Método 1
function somarDoisNumeros(num1, num2) {
    console.log(num1 + num2)
}
somarDoisNumeros(3, 6)

// Método 2
const subtrairDoisNumeros = function (num1, num2) {
    return num1 - num2
}
console.log(subtrairDoisNumeros(10, 5))

// Arrays
var lista = [1, 2, 3, 4, 5]
// Push adiciona um item no final da lista
lista.push(6)
// Remove o último item da lista
lista.pop()
// Acessar items do array
console.log(lista[0])

// Remove um item específico com o map
var listaNova = []

lista.map((num) => {
    // "=" - Atribuição / Recebimento
    // "==" - Igualdade de valores
    // "===" - Igualdade de valores e de tipo
    if (num !== 3) {
        listaNova.push(num)
    }
})
console.log(listaNova)

// Dicionário / Objeto
const aluno = { nome: "João", idade: 16, cidade: "Salvador" }

// Retornando os valores do objeto/dicionário

// console.log(aluno[nome]) - É assim no Python

// No JS:
console.log(aluno.nome)

const frutas = [
    { nome: "banana", preco: 4.99 }, { nome: "Abacate", preco: 5 }, { nome: 'Maçã', preco: 5 }, { nome: "Uva", preco: 10 }
]

// Exibindo informações
console.log("O nome da fruta é: " + frutas[3].nome)
console.log(`O nome da fruta é: ${frutas[3].nome}`)

// Exibindo console
console.log("Olá")
console.error("Erro")
console.info("informativo")
console.warn("atenção!")
