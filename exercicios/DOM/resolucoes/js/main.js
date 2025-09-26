// 1. Selecionando o livro O Cortiço pelo seu ID
let livro1 = document.getElementById('o-cortico');
console.log('Typeof livro1: ', typeof livro1);

// 2. Selecionando tags <a>
let links = document.getElementsByTagName('a');
console.log('Links: ', links);

// 3. Selecionando o livro Vidas Secas com querySelector()
let livro2 = document.querySelector('#vidas-secas');
console.log('livro2: ', livro2);

let navListFooter = document.querySelector('.footer-links .nav-list');
console.log('navListFooter: ', navListFooter);

let navListHeader = document.querySelector('.header .nav-list');
console.log('navListHeader: ', navListHeader);

// Modificando elementos
livro1.style.color = '#AA0000';

let paragrafo = livro1.querySelector('p');
paragrafo.style.color = 'red';

// Modificando classe
livro2.className = 'card-livro fora-de-estoque';
console.log('livro2.className: ', livro2.className);

// Modificar imagem de livro
let capaDoLivro = document.querySelector('.capa-livro');
capaDoLivro.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Litoral_entre_a_Praia_del_Rey_e_a_Praia_do_Rei_Corti%C3%A7o_-_Portugal_%2851288013242%29.jpg/640px-Litoral_entre_a_Praia_del_Rey_e_a_Praia_do_Rei_Corti%C3%A7o_-_Portugal_%2851288013242%29.jpg');

let capaDomCasmurro = document.querySelector('#dom-casmurro img');
capaDomCasmurro.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DomCasmurroMachadodeAssis.jpg/640px-DomCasmurroMachadodeAssis.jpg');

let capas = document.querySelectorAll('.capa-livro');
capas[2].setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Vidas_Secas_de_Graciliano_Ramos_-_Capa_da_1%C2%AA_edi%C3%A7%C3%A3o_pela_Jos%C3%A9_Olympio_%281938%29.jpg/640px-Vidas_Secas_de_Graciliano_Ramos_-_Capa_da_1%C2%AA_edi%C3%A7%C3%A3o_pela_Jos%C3%A9_Olympio_%281938%29.jpg')
console.log('capas[2]: ', capas[2]);

// Criando um novo elemento
let novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Clarice Lispector';

let tituloLivro3 = document.querySelector('#dom-casmurro .titulo-livro');
console.log('tituloLivro3: ', tituloLivro3);

tituloLivro3.before(novoParagrafo);