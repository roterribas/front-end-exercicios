function calculaDesconto(valor, percentualDeDesconto) {
	if ( typeof valor == 'number' && typeof percentualDeDesconto == 'number' ) {
		// percentualDeDesconto: 0 - 100
		let valorDoDesconto	= (valor * percentualDeDesconto) / 100;
		let valorFinal = valor - valorDoDesconto;
		return valorFinal;
	} else {
		console.log('Não foi possível calcular o desconto para', valor);
	}
}

console.log(calculaDesconto(2000,20));
console.log(calculaDesconto('Azul',50));
