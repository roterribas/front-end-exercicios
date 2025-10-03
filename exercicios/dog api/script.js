// Constantes para os elementos HTML
const botao = document.querySelector('#botao-dog');
const imagem = document.querySelector('#foto-dog');
const URL_API = 'https://dog.ceo/api/breeds/image/random';

// Função auxiliar: Converte a resposta HTTP em JSON e verifica erros HTTP
function converterParaJSON(resposta) {
    if (!resposta.ok) {
        throw new Error(`Erro na requisição: Status ${resposta.status}`);
    }
    return resposta.json();
}

// Função auxiliar: Atualiza o src da imagem
function atualizarImagem(dados) {
    if (dados.status !== 'success') {
        throw new Error(`Resposta da API inválida: ${dados.status}`);
    }
    // URL da foto está em 'message'
    imagem.src = dados.message;
    imagem.alt = 'Foto de um cachorro aleatório';
}

// Função auxiliar: Lida com erros e avisa o usuário/console
function mostrarErro(erro) {
    console.error('Erro ao buscar foto:', erro);
    imagem.src = ''; 
    imagem.alt = 'Erro ao carregar a foto do cachorro. Tente novamente.';
}

// Função principal que orquestra a chamada assíncrona
function buscarFotoDog() {
    fetch(URL_API)
        .then(converterParaJSON)
        .then(atualizarImagem)
        .catch(mostrarErro);
}

// Evento: Clica no botão → chama buscarFotoDog
botao.addEventListener('click', buscarFotoDog);

// Carrega uma foto inicial ao abrir a página
buscarFotoDog();