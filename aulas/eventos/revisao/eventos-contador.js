// Elementos HTML
const botao = document.getElementById('botao-principal');
const input = document.getElementById('nome');
const lista = document.getElementById('artistas');
const contador = document.getElementById('contador');

// Variáveis auxiliares
let numeroDeArtistas = 2;

botao.addEventListener('click', addArtista);

function addArtista() {
	// Criar e adiciona novo elemento na lista
	let artista = input.value;
	input.value = ''; // Limpar campo de input
	input.focus();

	let itemDaLista = document.createElement('li');
	itemDaLista.innerText = artista;

	lista.appendChild(itemDaLista);

	// Incrementa contador
	numeroDeArtistas = numeroDeArtistas + 1;
	contador.innerText = `${numeroDeArtistas} artistas`;
}