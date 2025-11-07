// && → AND (E) → todas as condições precisam ser verdadeiras
// || → OR (OU) → apenas uma das condições precisa ser verdadeira
// !  → NOT (NÃO) → inverte o resultado lógico (true vira false e vice-versa)


// AND ( && )
// O visitante só pode entrar se for maior de 12 anos E estiver acompanhado de um adulto.

let idadeVisitante = 10
let acompanhadoDeAdulto = true
let podeEntrar = (idadeVisitante >= 12) && (acompanhadoDeAdulto === true)
console.log("Pode entrar no parque? " + podeEntrar)


// AND ( && )
// O brinquedo radical exige: altura mínima de 1.40m E ficha médica válida

let altura = 1.35
let fichaMedica = true
let podeBrincar = (altura >= 1.40) && (fichaMedica === true)
console.log("Pode brincar no brinquedo radical? " + podeBrincar)


// OR ( || )
// O ingresso VIP ou o ingresso normal permitem acesso, basta ter um dos dois

let ingressoVIP = false
let ingressoNormal = true
let acessoPermitido = (ingressoVIP === true) || (ingressoNormal === true)
console.log("Acesso permitido ao parque? " + acessoPermitido)


// OR ( || )
// O visitante pode entrar na piscina se estiver calor OU se a piscina estiver coberta

let temperatura = "frio"
let piscinaCoberta = false
let podeEntrarNaPiscina = (temperatura === "quente") || (piscinaCoberta === true)
console.log("Pode entrar na piscina? " + podeEntrarNaPiscina)


// NOT ( ! )
// O segurança precisa impedir a entrada se o parque estiver fechado

let parqueAberto = false
let entradaLiberada = !parqueAberto
console.log("Parque está fechado? " + entradaLiberada)


// NOT ( ! ) com combinação lógica
// Negando uma condição complexa: NÃO (menor de idade E sem acompanhante)

let idade = 15
let comAdulto = false
let negacaoDeCondicao = !((idade < 18) && (comAdulto === false))
console.log("Condição negada (pode entrar mesmo sendo menor)? " + negacaoDeCondicao)
