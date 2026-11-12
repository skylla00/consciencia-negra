/* ==========================================================
   QUIZZES — Consciência Negra
   Cada quiz tem 5 perguntas. Ao clicar numa resposta:
   - certa: o cartão fica verde e soma 1 ponto;
   - errada: o cartão clicado fica vermelho e o certo aparece em verde.
   Nos dois casos aparece o botão "Prosseguir".
   No final mostra a pontuação (de 0/5 a 5/5) e uma frase.
   ========================================================== */

(function () {
    'use strict';

    /* ---------- Perguntas ----------
       "correta" é a posição (começando em 0) da resposta certa. */
    const QUIZZES = {
        tema1: {
            titulo: 'Ancestralidade e Luta',
            estilo: 'claro',
            perguntas: [
                {
                    pergunta: 'Qual foi o papel histórico do Quilombo dos Palmares na luta contra a escravidão no Brasil?',
                    opcoes: [
                        'Foi uma comunidade organizada por pessoas escravizadas que fugiram, mas durou apenas alguns meses antes de ser totalmente destruída.',
                        'Foi o maior símbolo de resistência negra nas Américas, reunindo milhares de pessoas livres e organizando uma sociedade autônoma por quase um século.',
                        'Foi uma fazenda administrada pela Coroa Portuguesa para premiar os colonizadores que capturavam fugitivos.',
                        'Foi apenas um pequeno acampamento temporário na floresta usado para esconder mercadorias contrabandeadas no período colonial.'
                    ],
                    correta: 1
                },
                {
                    pergunta: 'Na luta pelos direitos da população negra, qual é a principal diferença entre "igualdade" e "equidade" racial?',
                    opcoes: [
                        'Os dois termos são sinônimos perfeitos usados apenas para deixar os textos jurídicos e escolares mais bonitos.',
                        'A equidade defende que pessoas negras devem ter mais direitos legais do que o restante da população para dominar o país.',
                        'A igualdade oferece exatamente as mesmas condições a todos, enquanto a equidade oferece apoios diferentes para corrigir desigualdades históricas.',
                        'A equidade busca corrigir desigualdades históricas no acesso a direitos, mas significa dar exatamente a mesma coisa para cada pessoa.'
                    ],
                    correta: 2
                },
                {
                    pergunta: 'Como a cultura afro-brasileira influenciou a formação da identidade do Brasil?',
                    opcoes: [
                        'De forma profunda e estrutural, moldando o vocabulário do português falado aqui, a música, a culinária, as religiões e diversas expressões artísticas.',
                        'Ficou restrita apenas às festas folclóricas de alguns estados do Nordeste, sem se espalhar pelo restante do território brasileiro.',
                        'Influenciou fortemente a música e a culinária regional, mas não teve impacto algum na língua portuguesa ou na história política do país.',
                        'Não deixou marcas relevantes no Brasil atual, pois toda a cultura do país veio exclusivamente da Europa.'
                    ],
                    correta: 0
                },
                {
                    pergunta: 'O que significa afirmar que o racismo no Brasil é "estrutural"?',
                    opcoes: [
                        'É um termo usado apenas para descrever a arquitetura antiga das cidades construídas durante o período do Brasil Império.',
                        'Significa que o racismo está presente na história e na desigualdade econômica, mas ocorre apenas quando alguém comete uma ofensa direta e intencional.',
                        'Significa que a Constituição Brasileira atual possui leis que obrigam as empresas a pagar salários menores para pessoas negras.',
                        'Significa que o preconceito vai além de xingamentos individuais, estando enraizado nas instituições, na economia e nas oportunidades sociais.'
                    ],
                    correta: 3
                },
                {
                    pergunta: 'Qual é a principal determinação da Lei 10.639/2003 para as escolas brasileiras?',
                    opcoes: [
                        'Recomenda que as escolas falem sobre a cultura africana, mas deixa a decisão opcional para cada professor apenas no mês de novembro.',
                        'Torna obrigatório o ensino da história e da cultura afro-brasileira e africana nas redes pública e privada de ensino.',
                        'Proíbe que as escolas ensinem sobre a história da África para focar exclusivamente na história da Europa.',
                        'Cria um feriado escolar nacional para que os alunos não tenham aulas no Dia da Consciência Negra.'
                    ],
                    correta: 1
                }
            ]
        },

        tema2: {
            titulo: 'IA e Racismo',
            estilo: 'escuro',
            perguntas: [
                {
                    pergunta: 'Antes de falarmos sobre como a tecnologia pode reproduzir preconceitos, você sabe o que é um algoritmo?',
                    opcoes: [
                        'Um robô físico que possui sentimentos e toma decisões de forma totalmente independente dos humanos.',
                        'Um programa de computador 100% neutro, que nunca sofre influência dos preconceitos da sociedade.',
                        'Uma sequência de regras e instruções criadas por pessoas para que um computador execute tarefas ou tome decisões.',
                        'Uma peça física instalada dentro do celular para melhorar apenas a velocidade da internet.'
                    ],
                    correta: 2
                },
                {
                    pergunta: 'Como uma Inteligência Artificial acaba aprendendo e reproduzindo comportamentos racistas se ela é feita apenas de códigos matemáticos?',
                    opcoes: [
                        'Porque os algoritmos são treinados com milhões de dados e textos da internet que já carregam os preconceitos históricos da sociedade.',
                        'Porque os computadores desenvolvem preconceitos próprios automaticamente quando ficam conectados à internet por muito tempo.',
                        'Porque a linguagem de programação usada para criar IAs só consegue ler palavras e imagens relacionadas a pessoas brancas.',
                        'Porque toda Inteligência Artificial possui uma trava de fábrica que impede o sistema de reconhecer culturas não europeias.'
                    ],
                    correta: 0
                },
                {
                    pergunta: 'Muitas pessoas acreditam que a Inteligência Artificial é imparcial. No entanto, por que sistemas de reconhecimento facial erram muito mais ao identificar pessoas negras?',
                    opcoes: [
                        'Porque as câmeras dos celulares atuais ainda não possuem lentes avançadas o suficiente para captar tons de pele mais escuros.',
                        'Porque os bancos de dados usados para treinar a IA têm maioria de fotos de pessoas brancas, gerando um aprendizado desigual.',
                        'Porque pessoas negras costumam usar mais filtros e edições nas redes sociais, o que confunde o sistema.',
                        'Porque o código matemático da IA foi programado propositalmente pelos engenheiros para rejeitar rostos negros.'
                    ],
                    correta: 1
                },
                {
                    pergunta: 'O que acontece quando uma empresa usa uma IA treinada com o histórico antigo de contratações (onde quase só pessoas brancas eram escolhidas) para selecionar novos currículos?',
                    opcoes: [
                        'A IA corrige a injustiça do passado sozinha e passa a contratar apenas candidatos negros para equilibrar a equipe.',
                        'A IA ignora completamente a cor da pele e a origem dos candidatos, escolhendo sempre quem tem a melhor nota na prova.',
                        'A IA aprende que o "padrão ideal" de funcionário é branco e passa a descartar currículos de pessoas negras igualmente qualificadas.',
                        'A IA trava e envia uma mensagem de erro avisando ao setor de Recursos Humanos que os dados antigos estão desatualizados.'
                    ],
                    correta: 2
                },
                {
                    pergunta: 'Qual é a forma mais eficaz de combater o racismo algorítmico e tornar as Inteligências Artificiais mais justas?',
                    opcoes: [
                        'Desligar todos os servidores de Inteligência Artificial do mundo e voltar a fazer todas as tarefas manualmente no papel.',
                        'Treinar os algoritmos com bancos de dados diversos, realizar auditorias constantes e incluir equipes multidisciplinares na criação dos sistemas.',
                        'Proibir que pessoas negras utilizem redes sociais e ferramentas de busca para não confundir o aprendizado das máquinas.',
                        'Pedir para que a própria Inteligência Artificial decida sozinha o que é justo ou injusto sem nenhuma supervisão humana.'
                    ],
                    correta: 1
                }
            ]
        }
    };

    /* ---------- Frase final, de acordo com o número de acertos (0 a 5) ---------- */
    const FRASES = [
        'Não foi dessa vez, mas aprender é um processo. Releia os textos do site com calma e tente novamente!',
        'Esse foi só o começo! Ainda há muito a descobrir. Releia os textos e tente de novo.',
        'Você já conhece parte do tema. Com mais uma leitura, você vai longe!',
        'Bom resultado! Você entendeu boa parte do assunto e falta pouco para dominar o tema.',
        'Muito bem! Você quase acertou tudo. Só um detalhe separou você da pontuação máxima.',
        'Parabéns, você acertou tudo! Mostrou que entendeu o tema e pode ajudar a multiplicar esse conhecimento.'
    ];

    /* ---------- Elementos da janela do quiz ---------- */
    const dialogo = document.getElementById('quiz-janela');
    if (!dialogo) return;

    const selo = document.getElementById('quiz-selo');
    const barra = document.getElementById('quiz-barra');
    const corpo = document.getElementById('quiz-corpo');
    const botaoFechar = document.getElementById('quiz-fechar');

    const LETRAS = ['A', 'B', 'C', 'D'];

    let estado = null;   // { quiz, indice, pontos, respondeu }
    let gatilho = null;  // botão que abriu o quiz (o foco volta para ele ao fechar)

    function criar(tag, classe, texto) {
        const no = document.createElement(tag);
        if (classe) no.className = classe;
        if (texto !== undefined) no.textContent = texto;
        return no;
    }

    /* ---------- Abrir e fechar ---------- */
    function abrir(chave, botao) {
        const quiz = QUIZZES[chave];
        if (!quiz) return;

        gatilho = botao;
        estado = { quiz: quiz, indice: 0, pontos: 0, respondeu: false };

        dialogo.classList.remove('quiz-claro', 'quiz-escuro');
        dialogo.classList.add('quiz-' + quiz.estilo);
        selo.textContent = 'Quiz · ' + quiz.titulo;
        document.documentElement.classList.add('quiz-aberto');

        if (!dialogo.open) {
            if (typeof dialogo.showModal === 'function') {
                dialogo.showModal();
            } else {
                dialogo.setAttribute('open', '');
            }
        }
        mostrarPergunta();
    }

    function fechar() {
        if (typeof dialogo.close === 'function') {
            dialogo.close();
        } else {
            dialogo.removeAttribute('open');
            aoFechar();
        }
    }

    function aoFechar() {
        document.documentElement.classList.remove('quiz-aberto');
        estado = null;
        if (gatilho) gatilho.focus({ preventScroll: true });
    }

    /* ---------- Pergunta ---------- */
    function mostrarPergunta() {
        const total = estado.quiz.perguntas.length;
        const pergunta = estado.quiz.perguntas[estado.indice];
        estado.respondeu = false;

        barra.style.width = ((estado.indice + 1) / total * 100) + '%';

        const conteudo = criar('div', 'quiz-conteudo');
        conteudo.appendChild(criar('p', 'quiz-contador',
            'Pergunta ' + (estado.indice + 1) + ' de ' + total));

        const titulo = criar('h2', 'quiz-pergunta', pergunta.pergunta);
        titulo.tabIndex = -1;
        conteudo.appendChild(titulo);

        const lista = criar('div', 'quiz-opcoes');
        lista.setAttribute('role', 'group');
        lista.setAttribute('aria-label', 'Alternativas');
        const botoes = pergunta.opcoes.map(function (texto, i) {
            const b = criar('button', 'quiz-opcao');
            b.type = 'button';
            b.appendChild(criar('span', 'quiz-opcao-letra', LETRAS[i]));
            b.appendChild(criar('span', 'quiz-opcao-texto', texto));
            b.addEventListener('click', function () { responder(i, botoes); });
            lista.appendChild(b);
            return b;
        });
        conteudo.appendChild(lista);

        const feedback = criar('p', 'quiz-feedback');
        feedback.setAttribute('role', 'status');
        conteudo.appendChild(feedback);

        conteudo.appendChild(criar('div', 'quiz-acoes'));

        corpo.replaceChildren(conteudo);
        corpo.scrollTop = 0;
        titulo.focus({ preventScroll: true });
    }

    /* ---------- Resposta ---------- */
    function marcar(botao, classe, simbolo, leitura) {
        botao.classList.add(classe);
        botao.querySelector('.quiz-opcao-letra').textContent = simbolo;
        botao.querySelector('.quiz-opcao-texto')
            .appendChild(criar('span', 'quiz-sr', ' (' + leitura + ')'));
    }

    function responder(escolhida, botoes) {
        if (!estado || estado.respondeu) return;
        estado.respondeu = true;

        const pergunta = estado.quiz.perguntas[estado.indice];
        const acertou = escolhida === pergunta.correta;

        botoes.forEach(function (b) {
            b.classList.add('travada');
            b.setAttribute('aria-disabled', 'true');
        });

        const feedback = corpo.querySelector('.quiz-feedback');

        if (acertou) {
            estado.pontos += 1;
            marcar(botoes[escolhida], 'certa', '✓', 'sua resposta, correta');
            feedback.textContent = 'Resposta correta!';
            feedback.classList.add('ok');
        } else {
            marcar(botoes[escolhida], 'errada', '✕', 'sua resposta, incorreta');
            marcar(botoes[pergunta.correta], 'certa', '✓', 'resposta correta');
            feedback.textContent = 'Resposta incorreta. A alternativa certa está em verde.';
            feedback.classList.add('erro');
        }

        const proximo = criar('button', 'quiz-botao', 'Prosseguir');
        proximo.type = 'button';
        proximo.addEventListener('click', proximaEtapa);
        corpo.querySelector('.quiz-acoes').appendChild(proximo);
        proximo.focus();
    }

    function proximaEtapa() {
        if (!estado) return;
        if (estado.indice + 1 < estado.quiz.perguntas.length) {
            estado.indice += 1;
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }

    /* ---------- Resultado ---------- */
    function mostrarResultado() {
        const total = estado.quiz.perguntas.length;
        const pontos = estado.pontos;

        barra.style.width = '100%';

        const conteudo = criar('div', 'quiz-conteudo quiz-resultado');
        conteudo.appendChild(criar('p', 'quiz-contador', 'Seu resultado'));

        const placar = criar('h2', 'quiz-placar', pontos + '/' + total);
        placar.setAttribute('aria-label', 'Você acertou ' + pontos + ' de ' + total + ' perguntas');
        placar.tabIndex = -1;
        conteudo.appendChild(placar);

        conteudo.appendChild(criar('p', 'quiz-frase', FRASES[pontos]));

        const acoes = criar('div', 'quiz-acoes');
        const refazer = criar('button', 'quiz-botao', 'Refazer quiz');
        refazer.type = 'button';
        refazer.addEventListener('click', function () {
            estado.indice = 0;
            estado.pontos = 0;
            mostrarPergunta();
        });
        const sair = criar('button', 'quiz-botao quiz-botao-secundario', 'Fechar');
        sair.type = 'button';
        sair.addEventListener('click', fechar);
        acoes.appendChild(refazer);
        acoes.appendChild(sair);
        conteudo.appendChild(acoes);

        corpo.replaceChildren(conteudo);
        corpo.scrollTop = 0;
        placar.focus({ preventScroll: true });
    }

    /* ---------- Eventos ---------- */
    document.querySelectorAll('[data-abrir-quiz]').forEach(function (botao) {
        botao.addEventListener('click', function () {
            abrir(botao.getAttribute('data-abrir-quiz'), botao);
        });
    });

    botaoFechar.addEventListener('click', fechar);
    dialogo.addEventListener('close', aoFechar);
})();
