# Exercício: Sistema de organização de Festa Americana

Vamos criar um sistema para organizar uma festa americana, uma festa onde cada pessoa se compromete a trazer um prato ou bebida. Este será nosso primeiro projeto usando eventos em JavaScript.

## Funcionalidades necessárias 🎯

### Adicionar Itens

- Campo para digitar o item (ex: "Pizza", "Refrigerante")
- Botão "Adicionar" ou tecla Enter para confirmar
- Não permitir itens vazios

### Voluntariar-se

- Campo para digitar seu nome
- Botão "Eu trago!" para cada item
- Mostrar quem vai trazer cada item

### Cancelar

- Botão "Cancelar" para desistir de um item que você reservou

### Contador Simples

- Mostrar quantos itens existem no total

## Roteiro de desenvolvimento 📋

### 1. Selecionar elementos

Utilize as funções de seleção de elementos no DOM (`getElementById`, `querySelector`, `querySelectorAll`) para selecionar os elementos da página os quais precisaremos posterirormente adicionar funcionalidades.

```
const inputItem = document.getElementById('novo-item');
const inputNome = document.getElementById('nome-pessoa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaItens = document.getElementById('lista-itens');
const contador = document.getElementById('contador');
```

### 2. Adicionar item

Agora iremos criar a função que será o _callback_ da adição de itens para a festa. Para isso precisaremos:

- Criar a função que adicionará um item;

```javascript
/**
 * Função para adicionar item
 */
function adicionarItem() {
}
```

- Associar a função como callback do evento `click` no botão com `addEventListener()`;

```javascript
btnAdicionar.addEventListener('click', adicionarItem);
```

- Na função, pegar os valores dos _inputs_ para usá-los na construção do elemento HTML que será adicionado na página;

```javascript
/**
 * Função para adicionar item
 */
function adicionarItem() {
    const textoItem = inputItem.value;

    // Criar o HTML do item
    const novoItem = document.createElement('div');
    novoItem.className = 'item disponivel';
    novoItem.innerHTML = `...`; // Utilizando crase você pode criar elementos HTML complexos, quebrando linhas
}
```

Exemplo:
```javascript
const novoItem.innerHTML = `
    <article>
        <h1>Item com HTML complexo</h1>
    </article>
`;

```

- Ainda na função `adicionarItem()` você irá adicionar o HTML gerado do elemento dentro da lista de itens (`appendChild()`). Exemplo:

```javascript
    // ...
    listaItens.appendChild(novoItem);
    // ...
```

### 3. Aumentar contador

Agora iremos aumentar o contador. Para isso crie uma nova função que irá incrementar o valor do contador.

- Crie uma variável `global`, para armazenar a contagem de itens, que esteja fora de todas as funções
- Crie uma função que irá incrementar a quantidade de itens a cada adição de novo item

## Dicas ✳️

- Comece simples: faça funcionar primeiro, depois melhore
- Teste cada passo: sempre teste antes de passar para o próximo
- Use `console.log()`: para ver o que está acontecendo
- Não se preocupe com design a princípio: foque na funcionalidade