function mudarCor() {
    const titulo = document.getElementById('titulo');

	if ( titulo.style.color === 'blue') {
		 titulo.style.color = 'red';
	} else {
		titulo.style.color = 'blue';
	}
}

let btnCor = document.getElementById('btn-cor');
btnCor.onclick = mudarCor;

/**
 * MUDAR TEXTO
 */
function mudarTexto() {
    const titulo = document.getElementById('titulo');
    titulo.textContent = 'Título Modificado!';
}

let btnTexto = document.getElementById('btn-texto');
btnTexto.onclick = mudarTexto;

/**
 * PEGAR TEXTO DO INPUT E JOGAR NO TÍTULO
 */
function mudarTextoComConteudoDoInput() {
	const titulo = document.getElementById('titulo');
	const nome = document.getElementById('campo-nome');

	titulo.textContent = nome.value;
}

let btnAddNome = document.querySelector('#btn-add-nome');
btnAddNome.onclick = mudarTextoComConteudoDoInput;