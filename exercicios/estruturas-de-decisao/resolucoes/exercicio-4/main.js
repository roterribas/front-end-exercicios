let idade = prompt('Insira a sua idade');

// if ( idade >= 18 && renda >= 3036 ) {
// 	console.log('Está apto a realizar um consórcio');
// } else {
// 	console.log('Infelizmente não está apto');
// }

if ( idade >= 18 ) {
	
	let renda = prompt('Insira a sua renda (R$)');

	if ( renda >= 3036 ) {
		console.log('Está apto');
	} else {
		console.log('Você não tem renda');
	}

} else {
	console.log('Infelizmente você não tem a idade');
}