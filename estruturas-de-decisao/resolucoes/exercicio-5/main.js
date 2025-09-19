let experiencia = prompt('Insira a sua experiência como professor');
let pontuacao = 0;

if ( experiencia < 5 ) {
	pontuacao = pontuacao + 10; // Expressão
} else if ( experiencia >= 5 ) {
	pontuacao = pontuacao + 20;
}

let formacao = prompt('Insira a sua formação acadêmica');

if ( formacao == 'graduação' ) {
	// pontuacao = pontuacao + 10;
	pontuacao += 10;
} else if ( formacao == 'especialização' ) {
	pontuacao += 20;
} else if ( formacao == 'mestrado' ) {
	pontuacao += 30;
} else if ( formacao == 'doutorado' ) {
	pontuacao += 40;
}

console.log(`A sua pontuação final é: ${pontuacao}`); // Interpolar variável com string
// console.log('A sua pontuação final é:' + pontuacao); // Concatenação de variável com string

