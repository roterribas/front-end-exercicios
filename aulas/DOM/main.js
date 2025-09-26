// Seleção de elementos
let objetoHTML = document.getElementById('title');

objetoHTML.innerText = 'Desafio Fácil';
objetoHTML.innerHTML = 'Desafio <b>Fácil</b>';
objetoHTML.className = 'dark';

let objetosAncora = document.getElementsByTagName('p');
console.log(objetosAncora);

quantidadeDeParagrafos = objetosAncora.length;
objetosAncora[quantidadeDeParagrafos - 1].remove();

// Criando elementos
let novaDiv = document.createElement('div');
novaDiv.innerHTML = '<p>Conteúdo da nova div</p>';
console.log(novaDiv);
objetoHTML.after(novaDiv);

// Remover elementos da página
// objetoHTML.remove();