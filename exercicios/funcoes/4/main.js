// ------------------------------
// Exercício 4
// 4 funções para operações matemáticas
// ------------------------------
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

// Capturando dados do usuário (Exercício 4)
let num1 = parseFloat(prompt("Exercício 4\nDigite o primeiro número:"));
let num2 = parseFloat(prompt("Exercício 4\nDigite o segundo número:"));

// Mostrando resultados no console (Exercício 4)
console.log("Soma: " + somar(num1, num2));
console.log("Subtração: " + subtrair(num1, num2));
console.log("Multiplicação: " + multiplicar(num1, num2));
console.log("Divisão: " + dividir(num1, num2));
