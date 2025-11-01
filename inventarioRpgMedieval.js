// Lista de heróis disponíveis no reino
let heroisDisponiveis = ["Arqueiro", "Guerreiro", "Mago", "Assassino"];

// Equipe atual de aventureiros
// Estrutura: [Classe, Sexo, Nível]
let equipeAventureiros = [
  ["Arqueiro", "M", 7],
  ["Mago", "F", 12],
  ["Guerreiro", "M", 10]
];

// Seleciona qual aventureiro mostrar (0, 1 ou 2)
let escolhido = 2;

// Exibe dados do aventureiro selecionado
console.log(
  `Aventureiro escolhido:
   Classe: ${equipeAventureiros[escolhido][0]}
   Sexo: ${equipeAventureiros[escolhido][1]}
   Nível: ${equipeAventureiros[escolhido][2]}`
);

// Exibe toda a equipe
console.log("\nEquipe completa:");
for (let i = 0; i < equipeAventureiros.length; i++) {
  console.log(
    ` - ${equipeAventureiros[i][0]} | Sexo: ${equipeAventureiros[i][1]} | Nível: ${equipeAventureiros[i][2]}`
  );
}
