alert('Boas vindas ao jogo do número secreto');
let numeroMaxino = 1000;
let numeroSecreto;
let chute;
let tentativas;

// Função para iniciar um novo jogo
function novoJogo() {
    numeroSecreto = parseInt(Math.random() * numeroMaxino + 1);
    tentativas = 0;
}

// Função para exibir a mensagem de acerto
function exibirMensagemAcerto() {
    document.getElementById('mensagemAcerto').style.display = 'block';
}

// Função para esconder a mensagem de acerto
function esconderMensagemAcerto() {
    document.getElementById('mensagemAcerto').style.display = 'none';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    esconderMensagemAcerto(); // Corrigido aqui
    novoJogo();
    iniciarJogo();
}

// Função para iniciar o jogo
function iniciarJogo() {
    chute = null;
    //enquanto o chute não for igual ao número secreto
    while (chute != numeroSecreto) {
        chute = prompt(`Escolha um número entre 1 e ${numeroMaxino}`);
        // se chute for igual ao número secreto
        if (chute == numeroSecreto) {
            exibirMensagemAcerto();
            break;
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que o ${chute}`);
            } else {
                alert(`O número secreto é maior que o ${chute}`);
            }
            tentativas++
        }
    }

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
}

// Chamada da função para iniciar um novo jogo
novoJogo();

// Chamada da função para iniciar o jogo
iniciarJogo();
