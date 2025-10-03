// Variável de estado para controlar qual Pokémon está sendo exibido
let pokemonId = 1; // Começamos com Bulbasaur

// Constantes para os elementos HTML
const nomeElemento = document.querySelector('#nome-pokemon');
const imagem = document.querySelector('#foto-pokemon');
const botaoAnterior = document.querySelector('#botao-anterior');
const botaoProximo = document.querySelector('#botao-proximo');

// Função auxiliar: Converte a resposta HTTP em JSON e verifica erros
function converterParaJSON(resposta) {
    if (!resposta.ok) {
        // Lança um erro se for 404, 500, etc.
        throw new Error(`Erro na requisição PokéAPI: Status ${resposta.status}`);
    }
    return resposta.json();
}

// Função auxiliar: Atualiza o nome e o sprite do Pokémon
function atualizarPokemon(dados) {
    // 1. Atualiza o nome (capitalizando a primeira letra)
    const nome = dados.name.charAt(0).toUpperCase() + dados.name.slice(1);
    // Adiciona o ID ao nome
    nomeElemento.textContent = `#${pokemonId} - ${nome}`;

    // 2. Atualiza a imagem: o sprite frontal padrão
    const urlSprite = dados.sprites.front_default;
    imagem.src = urlSprite;
    imagem.alt = `Sprite frontal do Pokémon ${nome}`;

    // 3. Atualiza o estado do botão "Anterior"
    // Desabilita o botão se estiver no primeiro Pokémon (ID 1)
    botaoAnterior.disabled = (pokemonId === 1);
}

// Função auxiliar: Lida com erros
function mostrarErro(erro) {
    console.error('Erro ao buscar Pokémon:', erro);
    nomeElemento.textContent = `Erro ao carregar Pokémon de ID ${pokemonId}!`;
    imagem.src = ''; 
    imagem.alt = 'Falha no carregamento.';
}

// Função principal que orquestra a chamada
function buscarPokemon() {
    // ⚠️ Construção Dinâmica da URL
    const URL_DINAMICA = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    
    // Feedback visual enquanto carrega
    nomeElemento.textContent = "Buscando...";
    imagem.src = '';

    fetch(URL_DINAMICA)
        .then(converterParaJSON) 
        .then(atualizarPokemon) 
        .catch(mostrarErro);
}

// --- Funções de Evento ---

// Próximo Pokémon
function proximoPokemon() {
    pokemonId += 1;
    buscarPokemon();
}

// Pokémon Anterior
function anteriorPokemon() {
    if (pokemonId > 1) {
        pokemonId -= 1;
        buscarPokemon();
    }
}

// --- Associa Eventos aos Botões ---
botaoProximo.addEventListener('click', proximoPokemon);
botaoAnterior.addEventListener('click', anteriorPokemon);

// Carrega o primeiro Pokémon (Bulbasaur) ao carregar a página
buscarPokemon();