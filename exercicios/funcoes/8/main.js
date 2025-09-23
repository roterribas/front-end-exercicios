function comparaTres(a, b, c) { // Função que compara três valores
  if (isNaN(a) || isNaN(b) || isNaN(c)) { // Verifica se todos são números
    return "Valores inválidos"; // Caso contrário, retorna erro
  }
  if (a === b && b === c) { // Se todos forem iguais
    return "Todos iguais";
  } else if (a === b || a === c || b === c) { // Se apenas dois forem iguais
    return "Dois iguais";
  } else { // Se nenhum for igual
    return "Todos diferentes";
  }
}

let n1 = Number(prompt("Digite o primeiro número:")); // Captura o 1º número
let n2 = Number(prompt("Digite o segundo número:")); // Captura o 2º número
let n3 = Number(prompt("Digite o terceiro número:")); // Captura o 3º número

console.log(comparaTres(n1, n2, n3)); // Exibe no console o resultado
