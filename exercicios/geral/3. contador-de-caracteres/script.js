const textarea = document.getElementById('texto');
const contador = document.getElementById('contador');
const alternar = document.getElementById('alternar');

let modoPalavras = false;

function atualizarContador() {
  if (modoPalavras) {
    const palavras = textarea.value.trim().split(/\s+/).filter(p => p.length > 0);
    contador.innerText = `Palavras: ${palavras.length}`;
  } else {
    contador.innerText = `Caracteres: ${textarea.value.length}`;
  }
}

textarea.addEventListener('input', atualizarContador);

alternar.addEventListener('click', function () {
  modoPalavras = !modoPalavras;
  alternar.innerText = modoPalavras ? 'Contar Caracteres' : 'Contar Palavras';
  atualizarContador();
});
