let senha = '1234';
let senhaDoUsuario; // Declaração

do {
	senhaDoUsuario = prompt('Insira a sua senha'); // Atribuição
} while(senha != senhaDoUsuario);

// Alterniva utilizando o operador (!) negação lógica
// do {

// } while(!(senha == senhaDoUsuario));