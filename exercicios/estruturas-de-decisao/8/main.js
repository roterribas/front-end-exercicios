let renda = Number(prompt("Digite a renda familiar (em R$):"));
let media = Number(prompt("Digite a média acadêmica do estudante:"));

let pontos = 0;

// Pontos pela renda familiar
if (renda <= 2000) {
  pontos += 30;
} else if (renda >= 2001 && renda <= 4000) {
  pontos += 20;
} else if (renda > 4000) {
  pontos += 10;
}

// Pontos pelo desempenho acadêmico
if (media <= 6.9) {
  pontos += 5;
} else if (media >= 7.0 && media <= 8.4) {
  pontos += 15;
} else if (media >= 8.5 && media <= 10.0) {
  pontos += 25;
}

alert("A pontuação total do estudante é: " + pontos);
