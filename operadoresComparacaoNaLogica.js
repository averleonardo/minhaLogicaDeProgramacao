// ==  → compara apenas o valor
// === → compara valor e tipo (string/number)
// !=  → diferente (só valor)
// !== → diferente (valor e tipo)
// >   → maior que
// <   → menor que
// >=  → maior ou igual
// <=  → menor ou igual

// Comparando nome do curso

let cursoEscolhido = "Informática"
let cursoDisponivel = "Informática"
console.log("O curso é igual? " + (cursoEscolhido == cursoDisponivel))
console.log("O curso é igual e do mesmo tipo? " + (cursoEscolhido === cursoDisponivel))

// Verificando idade mínima para matrícula

let idadeMinima = 16
let idadeAluno = 15
console.log("Pode se matricular? " + (idadeAluno >= idadeMinima))

// Comparando número de vagas restantes

let vagasTotais = 30
let vagasOcupadas = 30
console.log("Ainda há vagas? " + (vagasOcupadas < vagasTotais))

// Verificando se duas turmas têm o mesmo número de alunos

let alunosTurmaA = 25
let alunosTurmaB = "25"
console.log("Mesmo número de alunos? " + (alunosTurmaA == alunosTurmaB))
console.log("Mesmo número e mesmo tipo? " + (alunosTurmaA === alunosTurmaB))

// Testando diferença

let turno = "Noite"
let turnoDesejado = "Manhã"
console.log("Turnos diferentes? " + (turno !== turnoDesejado))
