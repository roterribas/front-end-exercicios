let senha = prompt('Insira sua senha'); // sempre retorna uma string
let senhaArmazenada = '123456'; // camel-case
// let senha_armezanda = '123456'; // snake-case

if ( senha == senhaArmazenada ) {
	console.log('Login efetuado com sucesso');
} else {
	console.log('Senha incorreta');
}