const quadrado = function (x) {
  return x * x;
};

const aviso = function (m) {
	m = 'AVISO > ' + m;
	console.log(m);
}

aviso('Hora do intervalo!'); // Argumento
aviso('')

// Invocação da função quadrado passando o argumento 12
// console.log(quadrado(12));
// console.log(quadrado(19));
// console.log(quadrado(100));
// console.log(quadrado(4));

let resultado = quadrado(12);
console.log(resultado);