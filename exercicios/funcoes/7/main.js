function verificaNumero(x) { // Função que recebe um valor e analisa
  if (isNaN(x)) { // Se não for número
    console.log("Não é um número"); // Exibe mensagem
  } else if (x > 0) { // Se for maior que zero
    console.log("Número positivo"); 
  } else if (x < 0) { // Se for menor que zero
    console.log("Número negativo");
  } else { // Se não for maior nem menor → é zero
    console.log("Zero");
  }
}

let valor = (prompt("Digite um número:")); // Solicita um número ao usuário
verificaNumero(valor); // Chama a função passando o valor
