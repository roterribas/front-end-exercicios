const botao = document.getElementById('botao-principal');
const input = document.getElementById('nome');
const lista = document.getElementById('artistas');

botao.addEventListener('click', addArtista);

function addArtista() {
	let artista = input.value;

	let itemDaLista = document.createElement('li');
	itemDaLista.innerText = artista;

	lista.appendChild(itemDaLista);
}