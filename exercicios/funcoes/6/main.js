function maiorDeTres(a, b, c) { // Define uma função que recebe três valores
  if (isNaN(a) || isNaN(b) || isNaN(c)) { // Verifica se algum não é número
    return "Valores inválidos"; // Retorna mensagem de erro caso algum não seja numérico
  }
  return Math.max(a, b, c); // Retorna o maior valor entre os três
}

let num1 = Number(prompt("Digite o primeiro número:")); // Pede o 1º número ao usuário e converte para Number
let num2 = Number(prompt("Digite o segundo número:")); // Pede o 2º número
let num3 = Number(prompt("Digite o terceiro número:")); // Pede o 3º número

console.log("Maior valor:", maiorDeTres(num1, num2, num3)); // Mostra no console o maior valor encontrado
