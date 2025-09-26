// =====================
// Selecionando elementos
// =====================

let cortico = document.getElementById("o-cortico");
console.log("O Cortiço:", cortico);

let capitaes = document.getElementById("capitaes-da-areia");
console.log("Capitães da Areia:", capitaes);

let links = document.getElementsByTagName("a");
console.log("Todos os links:", links);

let vidasSecas = document.querySelector("#vidas-secas");
console.log("Vidas Secas:", vidasSecas);

let navFooter = document.querySelector(".footer-links .nav-list");
console.log("Nav footer:", navFooter);

let navHeader = document.querySelector(".header .nav-list");
console.log("Nav header:", navHeader);


// =====================
// Modificando elementos
// =====================

// O Cortiço: mudar cor
cortico.style.color = "#993300";

// Vidas Secas: marcar como fora de estoque
vidasSecas.className = "card-livro fora-de-estoque";

// Footer: mudar cor de fundo
navFooter.style.backgroundColor = "#e6e6e6";

// Capitães da Areia: mudar cor de fundo do card
capitaes.style.backgroundColor = "#f9f9f9";

// Capitães da Areia: aplicar destaque
capitaes.classList.add("destaque");



// =====================
// Atributos
// =====================

// Trocar capa de Dom Casmurro para versão especial
let imgDom = document.querySelector("#dom-casmurro img");
imgDom.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Open_book_nae_02.svg/512px-Open_book_nae_02.svg.png"
);


// =====================
// Conteúdo
// =====================

// Atualizar título de Dom Casmurro
let tituloDom = document.querySelector("#dom-casmurro .titulo-livro");
tituloDom.innerText = "Dom Casmurro (Edição Especial)";

// Atualizar preço de Capitães da Areia
let precoCapitaes = capitaes.querySelector(".preco-livro");
precoCapitaes.innerText = "R$ 29,90 (Promoção!)";


// =====================
// Criando elementos
// =====================

// Dom Casmurro -> adicionar autor
let autorDom = document.createElement("p");
autorDom.textContent = "Autor: Machado de Assis";
tituloDom.after(autorDom);

// Capitães da Areia -> adicionar autor
let tituloCapitaes = capitaes.querySelector(".titulo-livro");
let autorCapitaes = document.createElement("p");
autorCapitaes.textContent = "Autor: Jorge Amado";
tituloCapitaes.after(autorCapitaes);
