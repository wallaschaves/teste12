// Definição das perguntas e respostas secretas
const perguntasSecretas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        resposta: "brasília"
    },
    {
        pergunta: "Quantos continentes existem?",
        resposta: "sete"
    },
    {
        pergunta: "Quem escreveu 'Dom Quixote'?",
        resposta: "miguel de cervantes"
    },
    {
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        resposta: "júpiter"
    },
    {
        pergunta: "Qual é a cor do cavalo branco de Napoleão?",
        resposta: "branco"
    }
];

// Contadores de tentativas e erros
let tentativasRestantes = 3;
let erros = 0;

// Função para verificar as respostas
function verificarRespostas() {
    for (let i = 0; i < perguntasSecretas.length; i++) {
        const pergunta = perguntasSecretas[i].pergunta;
        const respostaCorreta = perguntasSecretas[i].resposta.toLowerCase(); // Convertendo a resposta para minúsculas para evitar problemas com maiúsculas/minúsculas

        let respostaUsuario;
        let acertou = false;

        while (tentativasRestantes > 0 && !acertou) {
            respostaUsuario = prompt(pergunta + `\nTentativas restantes: ${tentativasRestantes}\nErros acumulados: ${erros}`);

            if (respostaUsuario && respostaUsuario.toLowerCase() === respostaCorreta) {
                acertou = true;
            } else {
                tentativasRestantes--;
                erros++;
                alert("Resposta incorreta! Tente novamente.");
            }
        }

        if (!acertou) {
            alert(`Suas tentativas acabaram para a pergunta: "${pergunta}"`);
            break; // Encerra o questionário se as tentativas acabarem
        }
    }

    if (tentativasRestantes === 0) {
        alert("Você usou todas as tentativas. Acesso negado!");
    } else {
        alert("Parabéns! Você acertou todas as perguntas e ganhou o prêmio!");
    }
}

// Chamando a função para iniciar o questionário
verificarRespostas();
