// Declaração nomeada
function soma(numA, numB) {
	return numA + numB;
}

// Atribuição de função anônima
const subtracao = function(numA, numB) {
	return numA - numB;
}

// Arrow Function
const multiplicacao = (numA, numB) => numA * numB; // Não é necessário return pois é uma função de uma linha, sem chaves

// Arrow Function
const divisao = (numA, numB) => {
	return numA / numB;
}

console.log(soma(12,19));
console.log(subtracao(90,10));
console.log(multiplicacao(22,2));
console.log(divisao(500,4));