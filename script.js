// Variável para armazenar o botão ativo
let botaoAtivo = null;

// Função que exibe a imagem e altera o texto com base no botão clicado
function exibirImagem(opcao, botao) {
    // Referência para a imagem e o texto no HTML
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");

    // Estrutura de decisão simples para alterar a imagem e o texto
    if (opcao === 'sol') {
        imagem.src = "sol.png"; // URL da imagem do sol
        imagem.style.display = "block"; // Exibe a imagem
        texto.innerText = "Você escolheu o Sol! Uma estrela que ilumina o nosso dia.";
    } else if (opcao === 'lua') {
        imagem.src = "lua.png"; // URL da imagem da lua
        imagem.style.display = "block"; // Exibe a imagem
        texto.innerText = "Você escolheu a Lua! Ela brilha durante a noite.";
    } else if (opcao === 'estrela') {
        imagem.src = "estrela.png"; // URL da imagem de uma estrela
        imagem.style.display = "block"; // Exibe a imagem
        texto.innerText = "Você escolheu uma Estrela! Um dos pontos brilhantes no céu noturno.";
    } else if (opcao === 'cadent') {
        imagem.src = "cadent.png"; // URL da imagem da estrela cadente
        imagem.style.display = "block"; // Exibe a imagem
        texto.innerText = "Você escolheu uma Estrela Cadente! Um fenômeno mágico no céu.";
    } else if (opcao === 'planet') {
        imagem.src = "planet.jpeg"; // URL da imagem do planeta
        imagem.style.display = "block"; // Exibe a imagem
        texto.innerText = "Você escolheu um Planeta! Um dos corpos celestes do nosso sistema solar.";
    } else {
        // Caso a opção não seja válida, uma mensagem de erro é exibida
        imagem.style.display = "none"; // Esconde a imagem
        texto.innerText = "Opção inválida. Escolha entre Sol, Lua, Estrela, Estrela Cadente ou Planeta.";
    }

    // Alterar a cor do botão clicado
    if (botaoAtivo) { 
        botaoAtivo.classList.remove('active'); // Remove a classe do botão anterior
    }
    botao.classList.add('active'); // Adiciona a classe ao botão atual 
    botaoAtivo = botao; // Atualiza o botão ativo
}

