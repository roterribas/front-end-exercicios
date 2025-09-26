# Exercícios

Faça os exercícios a seguir **copiando** esta pasta e seus conteúdo para a sua pasta `/exercicios-aluno`. (Não modifique estes arquivos aqui diretamente para evitar conflitos ao sincronizar seu fork)

## Selecionando elementos

1. Selecionando elementos por ID
    - Utilizando `document.getElementById()`, selecione a `<div>` que contém o livro "O Cortiço" e armazene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
2. Selecionando elementos por Tag
    - Utilizando `document.getElementsByTagName()`, selecione todos os elementos `<a>` da página , armezene seu retorno em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
3. Selecionando elementos com Query
    - Utilizando `document.querySelector()`, selecione o elemento que possui o ID `vidas-secas`, armezene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
    - Utilizando `document.querySelector()`, selecione o elemento que possui a classe `nav-list` e é filho do elemento com a classe `footer-links`, armezene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
    - Utilizando `document.querySelector()`, selecione o elemento que possui a classe `nav-list` e é filho do elemento com a classe `header`, armezene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido

## Modificando elementos

### Estilos

1. A partir da variável que armazena a referência ao livro "O Cortiço", acesse sua propriedade `style` e modifique a cor de seu texto atribuindo um novo valor à propriedade `color`, exemplo: `cortico.style.color = '#993300'`;
2. A partir da variável que armazena a referência ao livro "Vidas Secas", acesse sua propriedade `className` e modifique a classe atribuída ao card para `card-livro fora-de-estoque`. Crie um estilo no `css/style.css` para estilizar livros que estão fora de estoque de forma distinta;
3. A partir da variável que armazena a referência à `<nav>` do footer, acesse sua propriedade `style` e modifique a cor do seu background;

### Atributos

1. Utilizando `document.querySelector()`, selecione o elemento `<img>` de algum dos três livros. A partir da variável que armazena a referência à imagem, utilize o método `setAttribute` para definir o atributo `src` para uma nova imagem qualquer (sugestão: referenciar uma imagem remota da Wikimedia Commons)

### Conteúdo

1. Utilizando `document.querySelector()`, selecione o elemento que contém o título de algum dos três livros. Utilizando a propriedade `innerText`, modifique o título do livro atribuindo um novo valor

## Criando elementos

1. Utilizando o método `document.createElement()`, crie um novo `<p>` e armazene em uma variável
2. Adicione o nome de um autor como conteúdo desse novo elemento, usando o objeto do elemento criado, ex: `autorP.textContent = 'Clarice Lispector'`;
3. Utilizando `document.querySelector()`, selecione o elemento que contém o título de algum dos três livros. A partir do objeto que referencia este título, invoque o método `after` passando o objeto `<p>` que foi criado como parâmetro para o método, ex: `objetoTitulo.after(objetoParagrafo)`. Seu parágrafo deve estar exibido na página após o título selecionado;
