const precoAgua = 4
const precoRefrigerante = 7
const precoSalgado = 9

let qtdAgua = 2
let qtdRefrigerante = 1
let qtdSalgado = 3

console.log("Itens: agua= " + qtdAgua + ", refri= " + qtdRefrigerante + ", salgado= " + qtdSalgado)

// MULTIPLICAÇÃO: SUBTOTAIS (preco * quantidade)
let subtotalAgua = precoAgua * qtdAgua
let subtotalRefrigerante = precoRefrigerante * qtdRefrigerante
let subtotalSalgado = precoSalgado * qtdSalgado

console.log("Subtotal agua: " + subtotalAgua)
console.log("Subtotal refri: " + subtotalRefrigerante)
console.log("Subtotal salgado: " + subtotalSalgado)

// ADIÇÃO: TOTAL DA COMPRA (somar subtotais)
let totalCompra = subtotalAgua + subtotalRefrigerante + subtotalSalgado
console.log("Total da compra: " + totalCompra)

// SUBTRAÇÃO: DESCONTO FIXO
let desconto = 5
let totalComDesconto = totalCompra - desconto
console.log("Total com desconto: " + totalComDesconto)

// DIVISÃO: VALOR POR PESSOA
let pessoas = 2
let valorPorPessoa = totalComDesconto / pessoas
console.log("Valor por pessoa: " + valorPorPessoa)

// MÓDULO: TROCO EM MOEDAS DE 2 REAIS (resto)
let pagamento = 50
let troco = pagamento - totalComDesconto
let restoParaMoedaDe2 = troco % 2
console.log("Troco: " + troco)
console.log("Resto ao separar em moedas de 2: " + restoParaMoedaDe2)

// INCREMENTO / DECREMENTO: CONTADOR DE CLIENTES
let clientesAtendidos = 0
clientesAtendidos++   // chegou 1º cliente
clientesAtendidos++   // chegou 2º cliente
console.log("Clientes atendidos: " + clientesAtendidos)

clientesAtendidos--   // um cancelou
console.log("Clientes após cancelamento: " + clientesAtendidos)

// ATRIBUIÇÃO COMPOSTA: ESTOQUE SIMPLES
let estoqueAgua = 10
let estoqueSalgado = 8

// vendeu 2 águas e 1 salgado
estoqueAgua -= 2
estoqueSalgado -= 1

// chegou reposição de 3 águas
estoqueAgua += 3

console.log("Estoque agua: " + estoqueAgua)
console.log("Estoque salgado: " + estoqueSalgado)

// REPROCESSAR COM UM PADRÃO FIXO (demonstrando troca de valores)
// Troque as quantidades e recalcule usando o MESMO padrão
qtdAgua = 1
qtdRefrigerante = 2
qtdSalgado = 1

subtotalAgua = precoAgua * qtdAgua
subtotalRefrigerante = precoRefrigerante * qtdRefrigerante
subtotalSalgado = precoSalgado * qtdSalgado

totalCompra = subtotalAgua + subtotalRefrigerante + subtotalSalgado
desconto = 2
totalComDesconto = totalCompra - desconto

console.log("Reprocessamento padrão")
console.log("Itens: agua=" + qtdAgua + ", refri=" + qtdRefrigerante + ", salgado=" + qtdSalgado)
console.log("Subtotais: agua=" + subtotalAgua + ", refri=" + subtotalRefrigerante + ", salgado=" + subtotalSalgado)
console.log("Total final: " + totalComDesconto)
