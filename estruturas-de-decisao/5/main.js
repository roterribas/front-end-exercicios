let experiencia = Number(prompt("Digite seus anos de experiência:"));
let formacao = prompt("Digite sua formação (superior, pos, mestrado, doutorado):");

let pontos = 0;

// experiência
if (experiencia < 5) {
  pontos += 10;
} else {
  pontos += 20;
}

// formação
if (formacao.toLowerCase() === "superior") {
  pontos += 10;
} else if (formacao.toLowerCase() === "pos" || formacao.toLowerCase() === "pós-graduação") {
  pontos += 20;
} else if (formacao.toLowerCase() === "mestrado") {
  pontos += 30;
} else if (formacao.toLowerCase() === "doutorado") {
  pontos += 40;
}

alert("Sua pontuação no concurso é: " + pontos);
