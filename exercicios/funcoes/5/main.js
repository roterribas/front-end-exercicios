// ------------------------------
// Exercício 5
// Função para aplicar desconto
// ------------------------------
function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100));
}

// Capturando dados do usuário (Exercício 5)
let valor = parseFloat(prompt("Exercício 5\nDigite o valor do produto:"));
let desconto = parseFloat(prompt("Exercício 5\nDigite o desconto em %:"));

// Mostrando resultado (Exercício 5)
console.log("Valor com desconto: R$ " + aplicarDesconto(valor, desconto).toFixed(2));