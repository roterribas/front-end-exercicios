let botao = document.getElementById('botao-principal');

botao.addEventListener('click',mostrarAlerta);

// Callback
function mostrarAlerta() {
	alert('Seu computador está com vírus!!! 🦠☢️');
}

botao.addEventListener('mouseover',function () {
	console.log('Usuário ensaiou clicar no botão!');
});

document.addEventListener('keydown', function (evento) {
	if ( evento.code === 'Escape') {
		alert('Tecla Esc pressionada');
	}
});

let campoTexto = document.querySelector('#campo-texto');
campoTexto.addEventListener('change', function () {
	alert('Campo de texto teve seu valor alterado!');
});

function alertaDeFoco() {
	alert('Usuário focou no campo de texto!');
	campoTexto.removeEventListener('focus', alertaDeFoco);
}

campoTexto.addEventListener('focus', alertaDeFoco);

