// Variáveis Globais
let aulaAtual = null;
let faceIndex = -1;
let valorProgresso = 0;
let jaValidou = false;
let ordemAtual = [];

// Sistema de tracking
let tempoInicio = null;
let tempoTotal = 0;
let acertos = 0;
let erros = 0;
let intervaloContador = null;
let nomeAulaAtual = '';
let pontuacaoDragDrop = 0;

// Variáveis globais para os minigames
let esq, dir, selected, ordemCorretaAtual;

// Carrega uma aula específica pelo nome
function carregarAula(nomeAula) {
    if (!aulas || !aulas[nomeAula]) {
        console.error('Aula não encontrada:', nomeAula);
        alert('Erro: Aula não encontrada!');
        return;
    }
    
    nomeAulaAtual = nomeAula;
    tempoInicio = new Date();
    tempoTotal = 0;
    acertos = 0;
    erros = 0;
    
    if (intervaloContador) clearInterval(intervaloContador);
    intervaloContador = setInterval(atualizarTempo, 1000);
    
    aulaAtual = aulas[nomeAula];
    
    faceIndex = -1;
    document.title = aulaAtual.titulo;
    proximaFace();
}

// Exibe a tela final da aula
function mostrarTelaFinal() {
    if (!aulaAtual.faces || aulaAtual.faces.length === 0) {
        const facePadrao = {
            tipo: "final",
            botao: "TERMINAR",
            progresso: 0
        };
        document.getElementById("app").innerHTML = criarFaceFinal(facePadrao);
        return;
    }
    const faceFinal = aulaAtual.faces[aulaAtual.faces.length - 1];
    document.getElementById("app").innerHTML = criarFaceFinal(faceFinal);
}

// Avança para a próxima face da aula
function proximaFace() {
    faceIndex++;
    
    if (faceIndex >= aulaAtual.faces.length) {
        if (aulaAtual.faces.length === 0) {
            document.getElementById("app").innerHTML = criarFaceFinal({
                botao: "VOLTAR",
                progresso: 0
            });
            return;
        }
        mostrarTelaFinal();
        return;
    }
    
    const face = aulaAtual.faces[faceIndex];
    let html = '';
    
    switch(face.tipo) {
        case "explicacao":
            html = criarFaceExplicacao(face);
            break;
        case "explicacao_codigo":
            html = criarFaceExplicacaoCodigo(face);
            break;
        case "explicacao_tabela":
            html = criarFaceExplicacaoTabela(face);
            break;
        case "quiz":
            html = criarFaceQuiz(face);
            break;
        case "dragdrop":
            html = criarFaceDragDrop(face);
            break;
        case "encontre_erro":
            html = criarFaceEncontreErro(face);
            break;
        case "qual_tag":
            html = criarFaceQualTag(face);
            break;
        case "correcao":
            html = criarFaceCorrecao(face);
            break;
        case "correcao_dragdrop":
            html = criarFaceCorrecaoDragDrop(face);
            break;
        case "final":
            html = criarFaceFinal(face);
            break;
        default:
            console.error("Tipo de face desconhecido:", face.tipo);
            return;    
    }

    document.getElementById("app").innerHTML = html;

    if (face.tipo === "dragdrop") {
        setTimeout(() => {
            iniciarDragDrop(faceIndex);
        }, 100);
    }
}

// Cria face de explicação com conteúdo textual
function criarFaceExplicacao(face) {
    return face.conteudo + `
        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                    onclick="avancarComProgresso(${face.progresso})">${face.botao}</button>
        </div>
    `;
}

// Cria uma face de explicação com código formatado
function criarFaceExplicacaoCodigo(face) {
    let codigoHTML = '';
    face.codigo.forEach((linha, index) => {
        codigoHTML += `<div class="line"><span class="num">${index + 1}</span><span class="code">${linha}</span></div>`;
    });
    
    return `
        <div class="ctnc">
            <div class="lyt_exp">
                <div class="cdg_exp">
                    <div class="vscode">
                        <div class="title-bar">
                            <span class="dot red"></span> 
                            <span class="dot yellow"></span> 
                            <span class="dot green"></span>
                            <span class="title">${face.arquivo || 'index.html'}</span>
                        </div>
                        <div class="editor">
                            ${codigoHTML}
                        </div>
                    </div>
                </div>
                <div class="dp ded_exp border-3 rounded-4">
                    <p class="text-center text-break">
                        ${face.explicacao}
                    </p>
                </div>
            </div>
        </div>
        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                   onclick="avancarComProgresso(${face.progresso})">${face.botao}</button>
        </div>
    `;
}

// Cria face de explicação com tabela
function criarFaceExplicacaoTabela(face) {
    return `
        <div class="ctnc">
            <div class="lyt_exp">
                ${face.tabela || ''}
                <div class="dp exp border-3 rounded-4">
                    <p class="text-center text-break">
                        ${face.conteudo}
                    </p>
                </div>
            </div>
        </div>
        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                    onclick="avancarComProgresso(${face.progresso})">${face.botao}</button>
        </div>
    `;
}

// Cria face de quiz com múltipla escolha
function criarFaceQuiz(face) {
    let col1HTML = '';
    let col2HTML = '';

    face.alternativas.forEach((alt, index) => {
        const alternativaHTML = `
            <div class="dp cxa border-3 rounded-4">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault${index + 1}">
                    <label class="form-check-label" for="radioDefault${index + 1}">${alt}</label>
                </div>
            </div>
        `;
        
        if (index < 2) {
            col1HTML += alternativaHTML;
        } else {
            col2HTML += alternativaHTML;
        }
    });
    
    return `
        <div class="ctnc">
            <div class="lyt_quz">
                <div class="dp prg border-3 rounded-4">
                    <p class="text-center">${face.pergunta}</p>
                </div>
                <div class="alts">
                    <div class="col1">
                        ${col1HTML}
                    </div>
                    <div class="col2">
                        ${col2HTML}
                    </div>
                </div>
            </div>
        </div>
        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                    onclick="validarQuiz(${face.correta}, ${face.progresso})">${face.botao}</button>
        </div>
    `;
}

// Cria face de arrastar e soltar
function criarFaceDragDrop(face) {
    return `
        <div class="ctnc">
            <div class="lyt_ded">
                <div class="dp ded_prg border-3 rounded-4">
                    <h4 class="text-center">${face.titulo}</h2>
                    <h6 id="ded_h5" class="text-center">${face.instrucao}</h4>
                </div>
                <div class="ded">
                    <div class="esq">
                        ${face.blocos.map(bloco => `
                            <div id="${bloco.id}" class="obj_dd" draggable="true">
                                <p>${bloco.conteudo}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="dir"></div>
                </div>
            </div>
        </div>
            <div class="div_logar d-grid gap-2 col-6 mx-auto">
                <button class="btn_padrao btn btn-dark rounded-4" onclick="reiniciarOrdem()">REINICIAR</button>
                <button class="btn_padrao btn btn-dark rounded-4" onclick="validarOrdem(${faceIndex})">VALIDAR ORDEM</button>
            </div>
    `;
}

// Cria face "Encontre o Erro" com código
function criarFaceEncontreErro(face) {
    let alternativasHTML = '';
    
    face.alternativas.forEach((alt, index) => {
        alternativasHTML += `
            <div class="form-check dp cxa border-3 rounded-4" onclick="selecionarAlternativaErro(${index + 1})">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radioErro" id="radioErro${index + 1}">
                    <label class="form-check-label text-wrap" for="radioErro${index + 1}">${alt}</label>
                </div>
            </div>
        `;
    });
    
    let codigoHTML = '';
    face.codigo.forEach((linha, index) => {
        codigoHTML += `<div class="line"><span class="num">${index + 1}</span><span class="code">${linha}</span></div>`;
    });
    
    return `
        <div class="ctnc">
            <div class="lyt_eoe">
                <div class="eoe_cod">
                    <div class="vscode">
                        <div class="title-bar">
                            <span class="dot red"></span> 
                            <span class="dot yellow"></span> 
                            <span class="dot green"></span>
                            <span class="title">ENCONTRE O ERRO</span>
                        </div>
                        <div class="editor">
                            ${codigoHTML}
                        </div>
                    </div>
                </div>

                <div class="eoe_alts">
                    ${alternativasHTML}
                </div>
            </div>
        </div>
        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                    onclick="validarEncontreErro(${face.correta}, ${face.progresso})">VALIDAR</button>
        </div>
    `;
}

// Cria face "Qual é a Tag?" para identificar elementos
function criarFaceQualTag(face) {
    let col1HTML = '';
    let col2HTML = '';

    face.alternativas.forEach((alt, index) => {
        const alternativaHTML = `
            <div class="qeat_cxa dp border-3 rounded-1">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radioQualTag" id="radioQualTag${index + 1}" 
                           onclick="selecionarQualTag(${index + 1})">
                    <label class="code form-check-label" for="radioQualTag${index + 1}">${alt}</label>
                </div>
            </div>
        `;
        
        if (index < 2) {
            col1HTML += alternativaHTML;
        } else {
            col2HTML += alternativaHTML;
        }
    });

    return `
        <div class="ctnc">
            <div class="lyt_qeat">
                <div class="dp qeat_prg border-3 rounded-4">
                    <p class="text-center">Qual ${face.tipoElemento} se encaixa com essa descrição:</p>
                </div>

                <div class="dp elm border-3 rounded-4">
                    <h2 class="text-center">${face.descricao}</h2>
                </div>

                <div class="alts qeat_alts">
                    <div class="col1">
                        ${col1HTML}
                    </div>
                    <div class="col2">
                        ${col2HTML}
                    </div>
                </div>
            </div>
        </div>

        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                onclick="validarQualTag(${face.correta}, ${face.progresso})">VALIDAR</button>
        </div>
    `;
}

// Cria face de correção com explicação
function criarFaceCorrecao(face) {
    return `
        <div class="ctnc">
            <div class="lyt_res">
                <div class="dp resp border-3 rounded-4">
                    <p class="text-center text-wrap fs-1">A ALTERNATIVA CORRETA ERA:</p>
                </div>
                <div class="dp alt_cert border-3 rounded-4">
                    <p class="text-center text-wrap fs-3">${face.textoCorreto}</p>
                </div>
                <div class="dp jus border-3 rounded-4">${face.explicacao}</div>
            </div>
        </div>
        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                    onclick="avancarComProgresso(${face.progresso})">${face.botao}</button>
        </div>
    `;
}

// Cria face de correção para o Drag&Drop
function criarFaceCorrecaoDragDrop(face) {
    return `
        <div class="ctnc">
            <div class="lyt_ded">
                <div class="dp ded_exp border-3 rounded-4">
                    <p class="text-center text-break">
                        ${face.explicacao}
                    </p>
                </div>
                <div class="ded">
                    <div class="esq">
                        ${face.blocos.map(bloco => `
                            <div id="${bloco.id}" class="obj_dd certa" draggable="false">
                                <p>${bloco.conteudo}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
        <div class="div_logar d-grid gap-2 col-6 mx-auto">
            <button class="btn_padrao btn btn-dark rounded-4" type="button" 
                    onclick="avancarComProgresso(${face.progresso})">${face.botao}</button>
        </div>
    `;
}

// Cria tela final de conclusão da aula
function criarFaceFinal(face) {
    if (intervaloContador) {
        clearInterval(intervaloContador);
        intervaloContador = null;
    }
    
    const pontuacao = calcularPontuacao();
    const tempoFormatado = formatarTempo(tempoTotal);
    const usuarioApelido = obterApelidoUsuario();
    
    return `
        <div class="ctnc">
            <div class="lyt_conc">
                <div class="img_perf">
                    <img src="../../pad_Items/imagens/icones/Confete.png" alt="Confetes" height="100%">
                </div>
                <div class="dp msg border-3 rounded-4">
                <h6 class="text-center">AULA CONCLUÍDA!<br></h3> 
                <h3 class="text-center">PARABÉNS!<br></h3>
                <h1 id="u_nome" class="text-center">${usuarioApelido}</h4>
                </div>
                <div class="stts rounded-4">
                    <div class="d_stts"><p class="atributo text-center text-wrap">TEMPO:</p><p id="tempo" class="contadores text-center text-wrap">${tempoFormatado}</p></div>
                    <div class="stts_div rounded-4"></div>
                    <div class="d_stts"><p class="atributo text-center text-wrap">ACERTOS:</p><p id="acertos" class="contadores text-center text-wrap">${acertos}</p></div>
                    <div class="stts_div rounded-4"></div>
                    <div class="d_stts"><p class="atributo text-center text-wrap">ERROS:</p><p id="erros" class="contadores text-center text-wrap">${erros}</p></div>
                    <div class="stts_div rounded-4"></div>
                    <div class="d_stts"><p class="atributo text-center text-wrap">PONTOS:</p><p id="pontuacao" class="contadores text-center text-wrap">${pontuacao}</p></div>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button id="btn_term" class="btn_padrao btn btn-dark rounded-4" type="button" onclick="finalizarAula('${nomeAulaAtual}', ${pontuacao})">${face.botao}</button>
        </div>
    `;
}

// Avança para próxima face atualizando progresso
function avancarComProgresso(progresso) {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.disabled = false;
    });
    document.querySelectorAll('.cxa, .qeat_cxa').forEach(caixa => {
        caixa.style.pointerEvents = 'auto';
    });
    
    alterarProgresso(progresso);
    proximaFace();
}

// Atualiza a barra de progresso
function alterarProgresso(progresso) {
    valorProgresso += progresso;
    if (valorProgresso < 0) valorProgresso = 0;
    if (valorProgresso > 100) valorProgresso = 100;
    document.documentElement.style.setProperty('--progresso', valorProgresso + '%');
}

// Inicializa funcionalidade de Drag&Drop
function iniciarDragDrop(faceIndex) {
    const face = aulaAtual.faces[faceIndex];
    ordemCorretaAtual = face.ordemCorreta;

    esq = document.querySelector('.esq');
    dir = document.querySelector('.dir');
    selected = null;

    let drags = document.getElementsByClassName('obj_dd');

    for(obj_dd of drags){
        obj_dd.addEventListener("dragstart", function(e){
            selected = e.target;
        });
    }

    dir.addEventListener("dragover", function(e){
        e.preventDefault();
    });
    
    dir.addEventListener("drop", function(e){
        e.preventDefault();
        if (selected !== null){ 
            dir.appendChild(selected); 
            selected = null; 
        }
    });
    
    esq.addEventListener("dragover", function(e){
        e.preventDefault();
    });
    
    esq.addEventListener("drop", function(e){
        e.preventDefault();
        if (selected !== null){ 
            esq.appendChild(selected); 
            selected = null; 
        }
    });
}

// Obtém a ordem atual dos blocos no Drag&Drop
function pegarOrdemAtual() {
    const blocosNaDireita = dir.querySelectorAll('.obj_dd');
    const ordem = [];
    
    for (let i = 0; i < blocosNaDireita.length; i++) {
        ordem.push(blocosNaDireita[i].id);
    }
    
    return ordem;
}

// Valida resposta do quiz
function validarQuiz(indiceCorreto, progresso) {
    const botao = document.querySelector('.btn_padrao');

    if (jaValidou) {
        jaValidou = false;
        avancarComProgresso(progresso);
        return;
    }

    let escolheuAlgo = false;
    let alternativaEscolhida = -1;
    
    for (let i = 1; i <= 4; i++) {
        if (document.getElementById('radioDefault' + i).checked) {
            escolheuAlgo = true;
            alternativaEscolhida = i;
            break;
        }
    }
    
    if (!escolheuAlgo) {
        alert('Por favor, escolha uma alternativa antes de validar!');
        return;
    }

    for (let i = 1; i <= 4; i++) {
        const caixa = document.querySelector('#radioDefault' + i).closest('.cxa');
        caixa.classList.remove('certa', 'errada');
        
        if (i === indiceCorreto + 1) {
            caixa.classList.add('certa');
        } else if (i === alternativaEscolhida) {
            caixa.classList.add('errada');
        }
    }

    if (alternativaEscolhida === indiceCorreto + 1) {
            acertos++;
        } else {
            erros++;
        }

    botao.textContent = 'CONTINUAR';
    jaValidou = true;
    bloquearOpcoes();
}

// Valida ordem do Drag&Drop
function validarOrdem(faceIndex) {
    const face = aulaAtual.faces[faceIndex];
    const ordemAtual = pegarOrdemAtual();
    const totalBlocos = ordemCorretaAtual.length;
    
    if (ordemAtual.length !== totalBlocos) {
        alert("Faltam blocos! Coloque todos na área da direita.");
        return;
    }
    
    let blocosCorretos = 0;
    for (let i = 0; i < totalBlocos; i++) {
        if (ordemAtual[i] === ordemCorretaAtual[i]) {
            blocosCorretos++;
        }
    }
    
    const percentualAcerto = (blocosCorretos / totalBlocos) * 100;

    pontuacaoDragDrop = Math.floor((percentualAcerto / 100) * 100);
    
    let porcentagemMinima;
    if (totalBlocos <= 3) {
        porcentagemMinima = 80;
    } else if (totalBlocos <= 6) {
        porcentagemMinima = 70;
    } else {
        porcentagemMinima = 60;
    }

    const blocos = document.querySelectorAll('.obj_dd');
    for (let i = 0; i < blocos.length; i++) {
        blocos[i].classList.remove('certa', 'errada');
        
        const indexNaOrdem = ordemAtual.indexOf(blocos[i].id);
        if (indexNaOrdem !== -1 && ordemAtual[indexNaOrdem] === ordemCorretaAtual[indexNaOrdem]) {
            blocos[i].classList.add('certa');
        } else if (indexNaOrdem !== -1) {
            blocos[i].classList.add('errada');
        }
    }

    if (percentualAcerto >= porcentagemMinima) {
        acertos += 1;
        
        setTimeout(() => {
            avancarComProgresso(face.progresso);
        }, 2000);
        
        if (blocosCorretos === totalBlocos) {
            alert(`Ordem perfeita! ${totalBlocos}/${totalBlocos} blocos corretos! (+${pontuacaoDragDrop} pontos)`);
        } else {
            alert(`Você acertou ${blocosCorretos} de ${totalBlocos} blocos (${Math.floor(percentualAcerto)}%). Continue assim! (+${pontuacaoDragDrop} pontos)`);
        }
    } else {
        erros += 1;
        pontuacaoDragDrop = 0;
        alert(`${blocosCorretos} de ${totalBlocos} blocos corretos (${Math.floor(percentualAcerto)}%). Tente novamente!`);
    }
}

// Valida resposta do "Encontre o Erro"
function validarEncontreErro(indiceCorreto, progresso) {
    const botoes = document.querySelectorAll('.btn_padrao');
    const botao = botoes[botoes.length - 1];

    if (jaValidou) {
        jaValidou = false;
        avancarComProgresso(progresso);
        return;
    }

    let escolheuAlgo = false;
    let alternativaEscolhida = -1;

    for (let i = 1; i <= 4; i++) {
        if (document.getElementById('radioErro' + i).checked) {
            escolheuAlgo = true;
            alternativaEscolhida = i;
            break;
        }
    }

    if (!escolheuAlgo) {
        alert('Por favor, escolha uma alternativa antes de validar!');
        return;
    }

    for (let i = 1; i <= 4; i++) {
        const caixa = document.querySelector('#radioErro' + i).closest('.cxa');
        caixa.classList.remove('certa', 'errada');

        if (i === indiceCorreto + 1) {
            caixa.classList.add('certa');
        } else if (i === alternativaEscolhida) {
            caixa.classList.add('errada');
        }
    }

    if (alternativaEscolhida === indiceCorreto + 1) {
        acertos++;
    } else {
        erros++;
    }

    botao.textContent = 'CONTINUAR';
    jaValidou = true;
    bloquearOpcoes();
}

// Valida resposta do "Qual é a Tag?"
function validarQualTag(indiceCorreto, progresso) {
    const botao = document.querySelector('.btn_padrao');

    if (jaValidou) {
        jaValidou = false;
        document.querySelectorAll('.qeat_cxa').forEach(caixa => {
            caixa.classList.remove('selecionada', 'certa', 'errada');
        });
        avancarComProgresso(progresso);
        return;
    }

    let escolheuAlgo = false;
    let alternativaEscolhida = -1;
    
    for (let i = 1; i <= 4; i++) {
        if (document.getElementById('radioQualTag' + i).checked) {
            escolheuAlgo = true;
            alternativaEscolhida = i;
            break;
        }
    }
    
    if (!escolheuAlgo) {
        alert('Por favor, escolha uma alternativa antes de validar!');
        return;
    }

    for (let i = 1; i <= 4; i++) {
        const caixa = document.querySelector('#radioQualTag' + i).closest('.qeat_cxa');
        caixa.classList.remove('selecionada', 'certa', 'errada');
        
        if (i === indiceCorreto + 1) {
            caixa.classList.add('certa');
        } else if (i === alternativaEscolhida) {
            caixa.classList.add('errada');
        }
    }

    if (alternativaEscolhida === indiceCorreto + 1) {
        acertos++;
    } else {
        erros++;
    }

    botao.textContent = 'CONTINUAR';
    jaValidou = true;
    bloquearOpcoes();
}

// Reinicia ordem do Drag&Drop
function reiniciarOrdem() {
    const todosBlocos = document.querySelectorAll('.obj_dd');

    for (let i = 0; i < todosBlocos.length; i++) {
        todosBlocos[i].classList.remove('certa', 'errada');
    }

    for (let i = 0; i < todosBlocos.length; i++) {
        esq.appendChild(todosBlocos[i]);
    }
}

// Seleciona alternativa no "Encontre o Erro"
function selecionarAlternativaErro(numero) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('radioErro' + i).checked = false;
    }
    document.getElementById('radioErro' + numero).checked = true;
}

// Seleciona alternativa no "Qual é a Tag?"
function selecionarQualTag(numero) {
    document.querySelectorAll('.qeat_cxa').forEach(caixa => {
        caixa.classList.remove('selecionada');
    });
    
    const caixaSelecionada = document.querySelector('#radioQualTag' + numero).closest('.qeat_cxa');
    caixaSelecionada.classList.add('selecionada');
    document.getElementById('radioQualTag' + numero).checked = true;
}

// Bloqueia opções após validação
function bloquearOpcoes() {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.disabled = true;
    });
    document.querySelectorAll('.cxa, .qeat_cxa').forEach(caixa => {
        caixa.style.pointerEvents = 'none';
    });
}

// Função para atualizar o tempo decorrido
function atualizarTempo() {
    if (tempoInicio) {
        const agora = new Date();
        tempoTotal = Math.floor((agora - tempoInicio) / 1000); // tempo em segundos
    }
}

// Calcula pontuação baseada em tempo e acertos
function calcularPontuacao() {
    const basePorAcerto = 100;
    const bonusTempo = Math.max(0, 100 - tempoTotal);
    
    const pontuacaoBase = Math.floor(acertos * basePorAcerto);
    const pontuacaoTotal = pontuacaoBase + pontuacaoDragDrop + bonusTempo;
    
    return Math.max(0, pontuacaoTotal);
}

// Formata tempo de segundos para MM:SS
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRest = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRest.toString().padStart(2, '0')}`;
}

// Função para obter o apelido do usuário
function obterApelidoUsuario() {
    if (typeof usuarioApelido !== 'undefined') {
        return usuarioApelido;
    }
    
    const apelidoElement = document.getElementById('usuario_apelido');
    if (apelidoElement) {
        return apelidoElement.value;
    }
    
    return "ESTUDANTE";
}

// Função para finalizar a aula via AJAX
function finalizarAula(aulaNome, pontuacao) {
    console.log("Finalizando aula:", aulaNome, "Pontos:", pontuacao);
    
    const dados = {
        h_aula: aulaNome,
        h_pontos: pontuacao
    };

    const mapeamentoPaginas = {
        'html': 'html_Aulas.php',
        'css': 'html_Aulas.php',
        'js': 'js_Aulas.php',
        'php': 'php_Aulas.php',
        'sql': 'php_Aulas.php',
        'hardware': 'hardware_Aulas.php',
        'teste': 'html_Aulas.php'
    };

    const moduloMatch = aulaNome.match(/^[a-zA-Z]+/);
    const modulo = moduloMatch ? moduloMatch[0] : 'html';
    const paginaRetorno = mapeamentoPaginas[modulo] || 'html_Aulas.php';

    console.log(`Aula: ${aulaNome} → Módulo: ${modulo} → Página: ${paginaRetorno}`);

    fetch('../../bds/bd_funcoes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(dados)
    })
    .then(response => {
        console.log("Sucesso! Redirecionando para:", paginaRetorno);
        setTimeout(() => {
            window.location.href = paginaRetorno;
        }, 500);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        window.location.href = paginaRetorno;
    });
}