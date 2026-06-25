// Cada array do "aulas" é uma aula completa convertida em arrays para eu não ter de ficar fazendo 1001 arquivos para cada aula.
// Funções que mesclam com esse sistema estão no sistemaAulas.js (Se eu juntasse os dois arquivos ia ficar uma bagunça total.)

const aulas = {

  teste: {
    titulo: "teste",
    faces: [

    ],
  },

  html1: {
    titulo: "HTML5 - História do HTML5",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    O HTML surgiu no início da internet como uma forma simples de estruturar
                                    conteúdo. Desde o HTML 1.0 nos anos 90 até o HTML4 nos anos 2000, a
                                    linguagem foi se adaptando. O HTML5 surgiu oficialmente em 2014 como uma
                                    resposta à evolução da web, integrando recursos multimídia, acessibilidade e
                                    compatibilidade com dispositivos móveis
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 12,
      },

      {
        tipo: "quiz",
        pergunta:
          "O HTML surgiu como uma evolução das linguagens para estruturar páginas web, quais as mudanças foram integradas nesta versão?",
        alternativas: [
          "Estilização e personalização das páginas.",
          "Banco de dados e organização de variáveis.",
          "Multimidia e acessibilidade com dispositivos móveis.",
          "Conexão com API's de localização e mapeamento.",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 11.11,
      },

      {
        tipo: "correcao",
        textoCorreto: "Multimidia e acessibilidade com dispositivos móveis.",
        explicacao:
          "As atualizações do HTML possibilitaram integração de multimídia e acessibilidade aos dispositivos móveis",
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    HTML5 trouxe novas tags semânticas como &lt;article&gt;, &lt;section&gt; e &lt;nav&gt;, além de
                                    elementos para áudio e vídeo, reduzindo a necessidade de plugins externos.
                                    Também facilitou a integração com CSS3 e JavaScript. Em resumo, o HTML5
                                    marcou uma virada na construção de sites modernos, mais acessíveis, funcionais e
                                    adaptáveis, sendo até hoje o padrão da web.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "quiz",
        pergunta:
          "Quais foram as funções introduzidas nesta nova versão do HTML5?",
        alternativas: [
          "Tags semânticas, elementos de áudio e vídeo.",
          "Tags de finalização, que permitiam terminar um código.",
          "Acesso a criação de fontes, cores e estilo para personalização.",
          "Possibilidade de guardar e alterar dados em um banco.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 11.11,
      },

      {
        tipo: "correcao",
        textoCorreto: "Tags semânticas, elementos de áudio e vídeo.",
        explicacao:
          "No HTML5, foram introduzidas as tags semânticas, o que permitiu um grande avanço no quesito de organização e planejamento de uma página.",
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    A Semântica é um dos pontos principais dessa nova versão do HTML, que permite
                                    organizar de uma melhor forma as páginas web, já que antes de mais tags com
                                    funções específicas, tudo era feito apenas com poucas tags e de forma repetitiva e
                                    confusa. Tornando tudo mais claro e eficaz para a estruturação de uma página web.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "quiz",
        pergunta: "O que é a semântica das tags no HTML5?",
        alternativas: [
          "Semântica define um valor numérico para uma tag.",
          "Semântica define a função de uma tag.",
          "Semântica define o tamanho de uma imagem.",
          "Semântica cria um caminho para uma página.",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 11.11,
      },

      {
        tipo: "correcao",
        textoCorreto: "Semântica define a função de uma tag.",
        explicacao:
          "A semântica nada mais é do que uma função atribuída à uma tag, isso permitiu com que um código fosse melhor estruturado, sem confusão em relação às funções de cada coisa.",
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  html2: {
    titulo: "HTML5 - Primeiros Passos",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    O HTML5 é a base da estrutura de qualquer site. Ele organiza o conteúdo usando
                                    tags, que são comandos entre colchetes angulares. Essas tags indicam que tipo de
                                    conteúdo está sendo exibido: títulos, parágrafos, imagens, links, listas, tabelas, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função das Tags?",
        alternativas: [
          "Exibir ou executar a função atribuída à ela.",
          "Guardar dados para processamento.",
          "Permitir acesso direto à outras páginas web.",
          "Localizar uma função de estilo.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "Exibir ou executar a função atribuída à ela.",
        explicacao:
          "Cada tag tem sua função única, definida através de sua semântica, apesar disso, é certo dizer que, a função da tag é exibir ou executar sua função.",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "A tag possui uma Tag de Abertura à esquerda, formada pelos sinais de menor e maior com o nome da tag dentro. No meio ficam os conteúdos, como textos em uma div. Já à direita temos a Tag de Fechamento, iniciada por menor, seguida de barra e finalizada por maior.",
        codigo: ["&lt;p&gt; Texto para aulas &lt;/p&gt;"],
        arquivo: "exemplo.html",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize a estrutura da tag de Parágrafo",
        instrucao: "Arraste os blocos para a área da direita na ordem correta",
        blocos: [
            { id: "texto", conteudo: "Um texto aleatório" },
            { id: "fechamento", conteudo: "&lt;/p&gt;" },
            { id: "abertura", conteudo: "&lt;p&gt;" },
        ],
        ordemCorreta: ["abertura", "texto", "fechamento"],
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Com o HTML5, o uso de tags semânticas como &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;,
                                    &lt;section&gt; e &lt;footer&gt; melhorou muito a organização do código, tornando-o mais
                                    compreensível de maneira geral, no momento da estruturação por parte do
                                    desenvolvedor, para a leitura web entre outros.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função da tag &lt;h1&gt;?",
        alternativas: [
          "Criar um espaçamento entre textos.",
          "Exibir uma imagem.",
          "Criar uma lista sem ordem.",
          "Alterar um texto qualquer para um título.",
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "Alterar um texto qualquer para um título.",
        explicacao:
          "Como explicado anteriormente, a tag h1 permite criar um título, em específico, aquele com maior importância na página.",
        botao: "TERMINAR",
        progresso: 12.5,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  html3: {
    titulo: "HTML5 - Formatação dos Textos",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    A formatação de texto em HTML5 pode ser feita com várias tags inline, que são tags
                                    colocadas diretamente dentro de blocos de textos, feitos desta forma para não
                                    alterar a estrutura de um código tão bruscamente. Alguns exemplos são: &lt;b&gt; para
                                    deixar um texto em negrito, &lt;i&gt; para deixar um texto em itálico, e &lt;small&gt; para
                                    deixar um texto menor.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 12,
      },

      {
        tipo: "quiz",
        pergunta: "O que é uma tag inline?",
        alternativas: [
          "Tags localizadas dentro de um script.",
          "Tags localizadas dentro de um bloco de texto.",
          "Tags dentro de uma lista ordenada em linhas.",
          "Tags de alteração de texto.",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 11.11,
      },

      {
        tipo: "correcao",
        textoCorreto: "Tags localizadas dentro de um bloco de texto.",
        explicacao:
          "As tags inline são nada mais que uma tag aplicada unicamente em uma linha do código ou em um bloco de texto.",
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Parágrafos são blocos de texto definidos com a tag &lt;p&gt;. Por padrão, os
                                    navegadores aplicam um pequeno espaçamento antes e depois deles, dando
                                    respiro visual à leitura. Parágrafos têm a função de criar um espaço imaginário,
                                    onde nesse espaço serão inseridos e exibidos textos na página web.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "qual_tag",
        pergunta: "Qual a tag que cria um espaço para textos?",
        tipoElemento: "tag",
        descricao:
          "Cria um espaço específico para disposição de textos",
        alternativas: ["&ltsmall&gt", "&lth1&gt", "&ltp&gt", "&lttext&gt"],
        correta: 2,
        botao: "VALIDAR",
        progresso: 11.11,
      },

      {
        tipo: "correcao",
        textoCorreto: "&ltp&gt",
        explicacao:
          "A tag p permite criar um espaço onde pode ser disposto qualquer texto, seu nome vem da palavra parágrafo, que é exatamente isso.",
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Os títulos em HTML5 vão de &lt;h1&gt; (mais importante) a &lt;h6&gt; (menos importante), e
                                    devem ser usados em ordem hierárquica. O &lt;h1&gt; normalmente aparece apenas
                                    uma vez, como título principal da página. Isso ajuda tanto a leitura humana quanto o
                                    ranqueamento em buscadores.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 11.11,
      },

      {
        tipo: "quiz",
        pergunta: "Qual dos títulos tem a maior importância? E qual a menor?",
        alternativas: [
          "h0 tem maior importância, e h5 a menor.",
          "h1 tem maior importância, e h6 a menor.",
          "h1 tem maior importância, e h5 a menor.",
          "h6 tem maior importância, e h1 a menor.",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 11.11,
      },

      {
        tipo: "correcao",
        textoCorreto: "h1 tem maior importância, e h6 a menor.",
        explicacao:
          "Os títulos se organizam em numeração entre 1 e 6, onde o 1 é o mais importante, já o 6 é o menor importante.",
        botao: "TERMINAR",
        progresso: 11.11,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  html4: {
    titulo: "HTML5 - Body e Head",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    O HTML é dividido em duas seções principais: Head e Body. O &lt;head&gt; contém
                                    metadados, que são informações sobre a página que não são exibidas diretamente
                                    ao usuário. Nele ficam o &lt;title&gt; (título da página), &lt;meta&gt; (caracteres, descrição,
                                    palavras-chave), links para CSS com &lt;link&gt;, scripts Java com &lt;script&gt;, fontes e
                                    outros.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 17,
      },

      {
        tipo: "quiz",
        pergunta: "O que é Head e que conteúdos estão presentes nele?",
        alternativas: [
          "Uma seção onde dispõe informações e tags não-visíveis.",
          "Uma seção que permite alteração de dados.",
          "Uma seção onde dispões informações e tags visíveis.",
          "Uma seção que permite formatar as tags.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Uma seção onde dispõe informações e tags não-visíveis.",
        explicacao:
          "Head é uma seção do código onde encontram-se informações e tags que não são visíveis aos usuários da página, chamados de metadados.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Já o &lt;body&gt; contém tudo o que o usuário vê: textos, imagens, botões, vídeos,
                                    menus e formulários. É nele que colocamos o conteúdo visual e interativo.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "O que é Body e que conteúdos estão presentes nele?",
        alternativas: [
          "Uma seção onde podem ser inseridos apenas textos e imagens.",
          "Uma seção onde dispõe informações e tags não-visíveis.",
          "Uma seção que pode ser preenchida com dados e metadados juntos.",
          "Uma seção onde dispões informações e tags visíveis.",
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Uma seção onde dispões informações e tags visíveis.",
        explicacao:
          "Diferente do Head, o Body agrupa informações e tags que são visíveis aos usuários da página, como textos, imagens, tabelas e listas.",
        botao: "TERMINAR",
        progresso: 16.66,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  html5: {
    titulo: "HTML5 - Links e Imagens",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Imagens são inseridas com a tag &lt;img&gt;, que exige o atributo src (endereço da
                                    imagem) e alt (texto alternativo para acessibilidade).
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "encontre_erro",
        codigo: [
            '&lt;div class="imagem"&gt;',
            'ㅤㅤ&lt;img src="foto.html" alt="Descrição da imagem"&gt;',
            '&lt;/div&gt;'
        ],
        alternativas: [
          "A tag está escrita incorretamente",
          "Falta o atributo src",
          "A extensão do arquivo da imagem está errada",
          "O atributo alt está vazio",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "A extensão do arquivo da imagem está errada",
        explicacao:
          "Aqui nesse código o erro está na extensão usada na foto, que deveria ser .png ou outras para fotos, mas que no exemplo é .html, impedindo que o código interprete o conteúdo como uma imagem.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "A estrutura do link contém é uma das poucas exceções das tags, pois o link não possui uma tag de fechamento. Dentro da tag de abertura, temos dois atributos essenciais: rel e href. Rel identifica o tipo de conteúdo de um arquivo, já href indica o caminho do link.",
        codigo: [
            '&lt;head&gt;',
            'ㅤㅤ&lt;link rel="stylesheet" href="style.css"&gt;',
            '&lt;/head&gt;'
        ],
        arquivo: "index.html",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Juntamente com a inserção de imagens, apresentamos a tag &lt;a&gt; que cria um link
                                    para locais e conteúdos na página. Sua diferença com a tag &lt;link&gt;, é que o
                                    &lt;link&gt; pode ser utilizado apenas no Head, não sendo visual, e tendo como função
                                    principal apenas criar um link entre documentos HTML. Já a tag &lt;a&gt; tem função de
                                    criar links com conteúdos visuais e destinos, como o Youtube.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "TERMINAR",
        progresso: 16.66,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize um link para o youtube",
        instrucao:
          "Arraste os blocos para criar um link funcional para o YouTube",
        blocos: [
            { id: "fechamento", conteudo: "&lt;/a&gt;" },
            { id: "texto", conteudo: "Ir para o Youtube" },
            { id: "fbody", conteudo: '&lt;/body&gt;'},
            { id: "abertura", conteudo: '&lt;a href="https://www.youtube.com"&gt;'},
            { id: "body", conteudo: '&lt;body&gt;'},
        ],
        ordemCorreta: ["body","abertura", "texto", "fechamento","fbody"],
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  html6: {
    titulo: "HTML5 - Listas e Tabelas",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Listas e Tabelas são um dos principais conteúdos utilizados para a disposição e
                                    organização de conteúdo em páginas web, sua importância se dá pelo fato de que é
                                    simples estruturar as informações dessas formas.
                                    As Listas ajudam a organizar informações de forma clara. As listas ordenadas &lt;ol&gt;
                                    usam números, e as não ordenadas &lt;ul&gt; usam marcadores. Cada item da lista é
                                    inserido com &lt;li&gt;.
                                    Listas ordenadas são aquelas que possuem um número de indicação antes
                                    do item, já as não ordenadas são aquelas que possuem símbolos quaisquer.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 25,
      },

      {
        tipo: "dragdrop",
        titulo:
          "Organize as tags para criar uma lista ordenada embaixo de uma não ordenada",
        instrucao:
          "Ordem: Não ordenada, Ordenada. <br> Cada lista deve ter dois itens, na Não Ordenada vem primeiro o com o mais letras.",
        blocos: [
            { id: "li_banana", conteudo: "&lt;li&gt;Banana&lt;/li&gt;" },
            { id: "ol_fecha", conteudo: "&lt;/ol&gt;" },
            { id: "h2_nao", conteudo: "&lt;h2&gt;Lista Não Ordenada&lt;/h2&gt;" },
            { id: "h2_ord", conteudo: "&lt;h2&gt;Lista Ordenada&lt;/h2&gt;" },
            { id: "ul_abre", conteudo: "&lt;ul&gt;" },
            { id: "li_lavar", conteudo: "&lt;li&gt;Lavar a Louça&lt;/li&gt;" },
            { id: "ol_abre", conteudo: "&lt;ol&gt;" },
            { id: "li_melao", conteudo: "&lt;li&gt;Melão&lt;/li&gt;" },
            { id: "li_secar", conteudo: "&lt;li&gt;Secar a Louça&lt;/li&gt;" },
            { id: "ul_fecha", conteudo: "&lt;/ul&gt;" },
        ],
        ordemCorreta: [
          "h2_nao",
          "ul_abre",
          "li_banana",
          "li_melao",
          "ul_fecha",
          "h2_ord",
          "ol_abre",
          "li_lavar",
          "li_secar",
          "ol_fecha",
        ],
        botao: "VALIDAR",
        progresso: 25,
      },

      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    Já as Tabelas são usadas para apresentar dados. A tag &lt;table&gt; contém &lt;tr&gt; (linha),
                                    &lt;th&gt; (cabeçalho) e &lt;td&gt; (dados).
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 25,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize as tags para criar uma tabela com nomes de alunos",
        instrucao: "<br> Sequencia para os dados: Nome, Idade e Serie <br><br> Lembre-se: th é cabeçalho, td é dado e tr é linha",
        blocos: [
            { id: "th_nome", conteudo: "&lt;th&gt;Nome&lt;/th&gt;" },
            { id: "td_ana", conteudo: "&lt;td&gt;Ana Souza&lt;/td&gt;" },
            { id: "tr_fecha", conteudo: "&lt;/tr&gt;" },
            { id: "th_serie", conteudo: "&lt;th&gt;Série&lt;/th&gt;" },
            { id: "table_fecha", conteudo: "&lt;/table&gt;" },
            { id: "tr_abre", conteudo: "&lt;tr&gt;" },
            { id: "th_idade", conteudo: "&lt;th&gt;Idade&lt;/th&gt;" },
            { id: "table_abre", conteudo: "&lt;table&gt;" },
            { id: "td_7", conteudo: "&lt;td&gt;7&lt;/td&gt;" },
            { id: "tr_abre", conteudo: "&lt;tr&gt;" },
            { id: "td_2ano", conteudo: "&lt;td&gt;2º Ano&lt;/td&gt;" },
            { id: "tr_fecha", conteudo: "&lt;/tr&gt;" },
        ],
        ordemCorreta: [
          "table_abre",
          "tr_abre",
          "th_nome",
          "th_idade",
          "th_serie",
          "tr_fecha",
          "tr_abre",
          "td_ana",
          "td_7",
          "td_2ano",
          "tr_fecha",
          "table_fecha",
        ],
        botao: "VALIDAR",
        progresso: 25,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  html7: {
    titulo: "HTML5 - Atalhos Úteis",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                O VS Code é um dos, senão o principal editor usado para codificar e estruturar
                                projetos web, a sua leveza, extensões e praticidade o tornam muito utilizado. E uma
                                de suas vantagens são seus atalhos, que aceleram e otimizam a estruturação e
                                codificação web. Conhecê-los é muito importante para uma melhor experiência.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 33.33,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-right text-break">
                                <strong>Atalhos MUITO úteis:</strong>
                                <br><br>
                                • ! + Tab: Cria a estrutura básica do HTML5
                                <br><br>
                                • Ctrl K + Ctrl C: Comenta o código selecionado
                                <br><br>
                                • Shift + Alt + ↓ ou ↑: Duplica a linha atual para baixo ou para cima
                                <br><br>
                                • Alt + ↓ ou ↑: Move a linha atual para baixo ou para cima
                                <br><br>
                                • Para buscar, use Ctrl + F, e para Substituir termos, use Ctrl + H
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 33.33,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                Além disso, existe os Emmet, que são os atalhos de escrita, basicamente abreviações
                                no HTML, como mostrado acima ! gera a estrutura HTML5 básica, mas para inserir
                                uma tag rapidamente, escreva apenas o "nome" da mesma, como h2 para
                                &lt;h2&gt;&lt;/h2&gt;
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 34,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  //================================================= CSS =================================================//

  css1: {
    titulo: "CSS - Um Pouco Sobre",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p class="text-center text-break">
                                    O CSS (Cascading Style Sheets ou Folha de Estilo em Cascata) foi criado para
                                    resolver uma limitação do HTML, que era uma ausência em recursos de alteração
                                    visual em uma página web, antes do CSS, tudo era feito diretamente no HTML,
                                    gerando confusão e desordem nos códigos.
                                    O CSS permitiu separar o conteúdo (HTML) do estilo (CSS), dando uma maior
                                    personalização às páginas, de forma centralizada e reaproveitável. Com o tempo o
                                    CSS evoluiu, trazendo cada vez mais opções para a personalização visual, como
                                    bordas arredondadas, sombras e outros.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 33.33,
      },

      {
        tipo: "quiz",
        pergunta: "Qual é a função do CSS?",
        alternativas: [
          "Estilização e personalização das páginas.",
          "Banco de dados e organização de variáveis.",
          "Multimidia e acessibilidade com dispositivos móveis.",
          "Conexão com API's de localização e mapeamento.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 33.33,
      },

      {
        tipo: "correcao",
        textoCorreto: "Estilização e personalização das páginas.",
        explicacao:
          "O CSS foi criado e pensado para possibilitar a organização e estilização visual de uma página web, permitindo separar os código de conteúdo e estilo.",
        botao: "TERMINAR",
        progresso: 34,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  css2: {
    titulo: "CSS - Apresentando o CSS",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                    <div class="ctnc">
                        <div class="lyt_exp">
                            <div class="dp exp border-3 rounded-4">
                                <p id="exp-grande" class="text-center text-break">
                                    O CSS é uma linguagem de estilo que descreve a apresentação de elementos
                                    HTML. Ele define como os elementos devem ser exibidos, permitindo alterar cores,
                                    fontes, tamanhos, posições, animações, espaçamentos e muito mais. Para a
                                    aplicação do CSS, existem três formas:
                                    <br><br>
                                    <strong>Inline:</strong> Similar ao que era feito com tags de formatação, na mesma linha do
                                    conteúdo é inserido sua formatação, mas dessa vez usando o atributo style.
                                    <br><br>
                                    <strong>Interno:</strong> É quando criamos um CSS diretamente no HTML, usando a tag
                                    style no head do HTML, funcionando como o CSS, mas sem criar um arquivo próprio.
                                    <br><br>
                                    <strong>Externo:</strong> É quando criamos um arquivo externo, com a extensão .css,
                                    vinculando o seu arquivo HTML com &lt;link rel=\"stylesheet\" href=\"estilo.css\"&gt;.
                                    <br><br>
                                    O recomendado é que você utilize a forma externa, já que a mesma permite manter
                                    seu código organizado, além de reaproveitamento e fácil manutenção.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "quiz",
        pergunta: "Quais as formas de aplicação do CSS?",
        alternativas: [
          "Interno e Externo.",
          "Inline, Exline, e Disposto.",
          "Inline e Externo.",
          "Inline, Interno e Externo.",
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "correcao",
        textoCorreto: "Inline, Interno e Externo.",
        explicacao:
          "As formas de aplicação do CSS variam entre Inline, Interno e Externo, sendo que inline já foi explicada nas aulas de HTML. Interno é quando usamos a tag style dentro do head do html, já externo é quando criamos um arquivo especial para o css.",
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "encontre_erro",
        codigo: ['&lt;link rel="stylesheet" src="estilo.css"&gt;'],
        alternativas: [
          "A tag está escrita incorretamente",
          "Falta o atributo rel",
          "O atributo src deveria ser href",
          "Falta fechar a tag",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "correcao",
        textoCorreto: "O atributo src deveria ser href",
        explicacao:
          "Nesse exemplo, temos um problema direto no atributo que direciona o arquivo do link, que deveria ser href, e não src.",
        botao: "TERMINAR",
        progresso: 20,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  css3: {
    titulo: "CSS - Estilização de Conteúdos (Textos e Imagens)",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                No desenvolvimento de projetos, o conteúdo visual é de extrema importância, sendo
                                a base de comunicação com os usuários. O HTML fornece estrutura, mas o CSS
                                define a aparência, por isso, é muito importante que a estilização de textos e
                                imagens seja conhecida e treinada.
                                <br><br>
                                Dentre os pontos importantes devemos nos atentar à: fonte, alinhamento e
                                espaçamento, já para imagens, o tamanho, posição, bordas e até mesmo efeitos.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "A cor é definida através de um código Héxadecimal, código RGB ou com uma roda de cores, já a família da fonte, tem várias nativas, mas você pode baixar outras para utilizar no VS Code, podendo também mudar o tamanho.",
        codigo: [
          ".texto {",
          "ㅤㅤcolor: #333;",
          "ㅤㅤfont-family: Arial, sans-serif;",
          "ㅤㅤfont-size: 16px;",
          "}"
        ],
        arquivo: "style.css",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "encontre_erro",
        codigo: [
            ".texto-colorido {",
            "ㅤㅤcolor: 18px;",
            "ㅤㅤfont-size: #89004;",
            "}"
        ],
        alternativas: [
          "Os valores estão trocados entre color e font-size",
          "Faltam ponto e vírgula no final",
          "A sintaxe das propriedades está incorreta",
          "As propriedades não existem no CSS",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "correcao",
        textoCorreto: "Os valores estão trocados entre color e font-size",
        explicacao:
          "Aqui temos erros simples, basicamente a informação que deveria ser atribuída para cores e tamanho de fonte está invertida.",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "O peso e estilo de texto são também pontos importantes, que dão harmonia à sua página, se bem escolhidos, sendo o estilo a sua formatação, e o peso a 'grossura' do texto.",
        codigo: [
            ".negrito-italico {",
            "ㅤㅤfont-weight: bold;", 
            "ㅤㅤfont-style: italic;",
            "}"
        ],
        arquivo: "style.css",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "quiz",
        pergunta: "Como alterar o estilo de um texto?",
        alternativas: ["font-style", "text-style", "font-size", "font-family"],
        correta: 0,
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "correcao",
        textoCorreto: "font-style",
        explicacao:
          "Aqui dentre todas as opções a única correta é essa pois as outras tem função de mudar o tamanho, a família e a opção text-style está incorreta.",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "Um dos principais pontos para organização dos textos, esses que definem diretamente a posição desse tipo de conteúdo, os textos.",
        codigo: [
            ".alinhado-espacado {",
            "ㅤㅤtext-align: center;", 
            "ㅤㅤletter-spacing: 2px;",
            "}"
        ],
        arquivo: "style.css",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p id="exp-grande-mobile" class="text-center text-break">
                                Agora entramos em outro assunto deveras importante: A Imagem!
                                <br><br>
                                <strong>Tamanho e Proporção:</strong> O tamanho de elementos é definido por width (largura) e height (altura), isso é essencial para manter a proporção de imagens e uma boa resolução. O componente auto, faz com que a altura seja definida automaticamente em um valor para manter a proporção.
                                <br><br>
                                <strong>Bordas e Arredondamento:</strong> Já as bordas e arredondamento são um aspecto visual que não é essencial, mas pode demonstrar um aspecto importante para projetos. O elemento das bordas são definidos pelo tamanhos (em pixel), seguido pelo componente solid, que torna a borda visível, e um código Hex que define cor.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Exemplos de estilização de imagens com CSS",
        codigo: [
          "#imagem-fundo {",
          "ㅤㅤwidth: 300px;",
          "ㅤㅤheight: auto;",
          "ㅤㅤborder: 2px solid #000;",
          "ㅤㅤborder-radius: 15px;",
          "}"
        ],
        arquivo: "style.css",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "qual_tag",
        pergunta: "Qual o atributo que torna uma borda visível?",
        tipoElemento: "propriedade",
        descricao:
          "Deixa a borda vísivel.",
        alternativas: ["border", "width", "solid", "color"],
        correta: 2,
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "correcao",
        textoCorreto: "solid",
        explicacao:
          "Nesse caso, todas elas podem alterar as bordas, mas a única que tem função de tornar uma borda visível é solid, todo o resto muda as bordas, mas não dessa forma.",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                <strong>Posicionamento Responsivo:</strong> Aqui não apresentei nenhum novo elemento ou componente, mas sim uma lógica. A de que é possível definir tamanho por porcentagem, permitindo que atributos como a altura ou largura de imagem sejam responsivos em relação com tamanho de telas. Indo de 0% à 100%.
                                <br><br>
                                Por fim, nesta aula mostramos os principais elementos para definir o aspecto visual da página, que vai além da estética, melhorando a legibilidade, a experiência do usuário e adaptação a diferentes dispositivos.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "TERMINAR",
        progresso: 8,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  css4: {
    titulo: "CSS - Id e Class",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                Seletores CSS são padrões utilizados para identificar e selecionar elementos HTML,
                                permitindo uma estilização visual focada e direcionada, seletores permitem que
                                você controle a aparência de elementos específicos ou um grupo de elementos.
                                <br><br>
                                Dois dos principais seletores são: Id e Class.
                                <br><br>
                                <strong>ID:</strong> É único por página e serve para identificar um elemento específico.
                                <br><br>
                                <strong>Class:</strong> Pode ser usada em vários elementos, e diferente do ID, um mesmo elemento pode ter várias classes.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função de seletores CSS?",
        alternativas: [
          "Dar funções as tags CSS",
          "Identificar e selecionar elementos HTML",
          "Criar links entre páginas de forma responsiva",
          "Configurar API's para o HTML",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "correcao",
        textoCorreto: "Identificar e selecionar elementos HTML",
        explicacao:
          "A função dos seletores é identificar e selecionar elementos HTML, sendo pelo nome das tags ou uma classe adicionada.",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "Para colocar um ID em um elemento HTML, é necessário usar essa estrutura dentro da tag escolhida. Já para chamá-lo no CSS, use # seguido do nome do ID.",
        codigo: [
          '// no index.html:',
          '&lt;div id="menu"&gt;&lt;/div&gt;',
          "",
          '// no style.css:',
          "#menu {",
          "ㅤㅤbackground-color: black;",
          "}",
        ],
        arquivo: "CÓDIGO COM MULTIPLOS ARQUIVOS",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "qual_tag",
        pergunta: "Como chamar um ID no CSS?",
        tipoElemento: "seletor",
        descricao: "Seletor de ID no CSS",
        alternativas: [
          "Seletor $",
          "Seletor .",
          "Seletor *",
          "Seletor #",
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "correcao",
        textoCorreto: "Seletor #",
        explicacao:
          "Como o indicado nas explicações sobre o Id, para chamá-los você deve usar o sinal de #.",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "Para colocar uma Class em um elemento HTML, é necessário essa estrutura. Já para chamá-la no CSS, use . seguido do nome da class.",
        codigo: [
          '// no index.html:',
          '&lt;div class="carro"&gt;&lt;/div&gt;',
          "",
          '// no style.css:',
          ".caixa {",
          "ㅤㅤborder: 1px solid gray;",
          "}",
        ],
        arquivo: "CÓDIGO COM MULTIPLOS ARQUIVOS",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "qual_tag",
        pergunta: "Como chamar uma Class no CSS?",
        tipoElemento: "seletor",
        descricao: "Seletor de Class no CSS",
        alternativas: [
          "Seletor $",
          "Seletor .",
          "Seletor *",
          "Seletor #",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "correcao",
        textoCorreto: "Seletor .",
        explicacao:
          "Assim como o indicado nas explicações da Class, devemos chamá-la com . (ponto final).",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a diferença entre ID e Class?",
        alternativas: [
          "ID e Class funcionam iguais para identificar",
          "ID identifica um nome criado, Class identifica o nome da tag",
          "ID identifica o nome da tag, Class identifica um nome criado",
          "ID identifica uma tag por sua numeração, Class cria uma numeração",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "correcao",
        textoCorreto:
          "ID identifica o nome da tag, Class identifica um nome criado",
        explicacao:
          "O ID de uma tag não pode ser alterado já que é o nome da tag, já Class é um nome criado para identificar uma ou mais tags.",
        botao: "CONTINUAR",
        progresso: 7.69,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize a class Cabeçalho com alguns atributos",
        instrucao:
          "Arraste os blocos para criar uma classe CSS corretamente formatada <br><br> Sequencia: Cor, Cor de Fundo, Tamanho da Fonte",
        blocos: [
            { id: "color", conteudo: "color: #1299f;" },
            { id: "bg_color", conteudo: "background-color: #f1ff2;" },
            { id: "nome", conteudo: "cabecalho" },
            { id: "ponto", conteudo: "." },
            { id: "fecha_chave", conteudo: "}" },
            { id: "abre_chave", conteudo: "{" },
            { id: "font_size", conteudo: "font-size: 12px;" },
        ],
        ordemCorreta: [
          "ponto",
          "nome",
          "abre_chave",
          "color",
          "bg_color",
          "font_size",
          "fecha_chave",
        ],
        botao: "VALIDAR",
        progresso: 7.69,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                O uso correto desses dois seletores, ID e Class, torna o código mais organizado,
                                compreensível e reutilizável, permitindo aplicar estilos de forma eficiente e modular,
                                sem se preocupar com a necessidade de escrever mais e mais linhas de código.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "TERMINAR",
        progresso: 8,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  css5: {
    titulo: "CSS - O Layout mais a Fundo",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                O layout de uma página define como os elementos são organizados visualmente,
                                sendo muito importante saber deixar um site mais acessível e confortável possível.
                                Com o CSS podemos organizar, ajustar, alinhar conteúdos e espaçamentos.
                                <br><br>
                                Três Pilares são fundamentais para um bom layout: Box Model, Posicionamento e Sistemas de Layout.
                                <br><br>
                                <strong>Box Model (ou Modelo de Caixa):</strong> Todo elemento HTML é representado em uma caixa, sendo ele invisível, ainda sim, sendo essencial para tudo, essa caixa tem: Content (conteúdo), Padding (espaço interno), Margin (espaço externo entre caixas) e Border (borda ao redor).
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Exemplo prático do Box Model em CSS",
        codigo: [
          ".caixa {",
          "ㅤㅤwidth: 200px;",
          "ㅤㅤpadding: 20px;",
          "ㅤㅤborder: 2px solid black;",
          "ㅤㅤmargin: 10px;",
          "}",
        ],
        arquivo: "style.css",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "quiz",
        pergunta: "Quais são os principais elementos no Box Model?",
        alternativas: [
          "Content, Padding e Margin",
          "Margin, Images e Border",
          "Content, Class e ID",
          "Content, Padding, Margin e Border",
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 9.09,
      },

      {
        tipo: "correcao",
        textoCorreto: "Content, Padding, Margin e Border",
        explicacao:
          "Os principais conteúdos do Box Model são quatro: Content, o conteúdo da página, Padding, o espaço interno e Margin, o espaço externo, que melhoram a página no aspecto visual, assim como Border, as bordas ao redor de conteúdos.",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                <strong>Posicionamento:</strong> O CSS permite controlar o posicionamento dos elementos com propriedades, isso sendo de extrema importância visualmente, definindo posição e alinhamento. Sendo essas as principais propriedades:
                                <br><br>
                                • text-align → alinha o texto, com certas variações: left, center, right
                                <br><br>
                                • margin: auto → centraliza as caixas
                                <br><br>
                                • display → controla o tipo de caixa: block, inline, flex, grid
                                <br><br>
                                • position → define como um elemento se posiciona: static, relative, fixed, absolute
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "qual_tag",
        pergunta: "Qual o atributo que altera as margens?",
        tipoElemento: "propriedade",
        descricao:
          "Controla o espaço externo dos elementos",
        alternativas: ["Padding", "Margin", "Content", "Border"],
        correta: 1,
        botao: "VALIDAR",
        progresso: 9.09,
      },

      {
        tipo: "correcao",
        textoCorreto: "Margin",
        explicacao:
          "Quando você traduz o termo, essa questão fica óbvia, mas mesmo assim, devemos saber e lembrar que o atributo margin pode receber diversas informações para alterar o tamanho em todas as direções de uma margem, incluindo auto, que por padrão centraliza a margem.",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                <strong>Sistemas de Layout:</strong> Com dois principais exemplos de layout a serem usados, todos dispostos no elemento display, que como dito, controla as caixas. Sendo eles: Flexbox e Grid.
                                <br><br>
                                <strong>Flexbox:</strong> Permite organizar, alinhar e distribuir os elementos dentro de um espaço, mesmo quando as dimensões desses elementos são desconhecidas.
                                <br><br>
                                <strong>Grid:</strong> Usada para criar layouts como grades, permitindo que você organize os elementos em linhas e colunas de forma simples e eficiente.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "Exemplo de Flexbox - Permite organizar, alinhar e distribuir os elementos dentro de um espaço",
        codigo: [
          ".container {",
          "ㅤㅤdisplay: flex;",
          "ㅤㅤjustify-content: space-between;",
          "ㅤㅤalign-items: center;",
          "}",
        ],
        arquivo: "style.css",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao_codigo",
        explicacao:
          "Exemplo de Grid - Usada para criar layouts como grades, permitindo organização em linhas e colunas",
        codigo: [
          ".grid {",
          "ㅤㅤdisplay: grid;",
          "ㅤㅤgrid-template-columns: 1fr 2fr;",
          "ㅤㅤgap: 20px;",
          "}",
        ],
        arquivo: "style.css",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao",
        conteudo: `
                <div class="ctnc">
                    <div class="lyt_exp">
                        <div class="dp exp border-3 rounded-4">
                            <p class="text-center text-break">
                                Por fim, devemos sempre pensar na estrutura de seu projeto, antes de sequer
                                começar a codar, começando por um esboço de layout, definindo toda estrutura
                                visual, isso permite um projeto bem estruturado, sem necessitar refazer diversas
                                vezes, com clareza e organização.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        botao: "TERMINAR",
        progresso: 10,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  //================================================= JAVASCRIPT =================================================//
  
  js1: {
    titulo: "JavaScript - História do JavaScript",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
        <div class="ctnc">
        <div class="lyt_exp">
        <div class="dp exp border-3 rounded-4">
        <p class="text-center text-break">
        A linguagem de programação JavaScript teve origem em 1995, com função de
        interatividade para páginas web, e sua evolução com o passar dos anos, trouxe
        assuntos que expandiram as capacidades dessa linguagem, como módulos, classes
        sintáticas, arrow functions e mais.
        <br><br>
                  Conforme o tempo passa, o JavaScript expande-se ainda mais, e com isso,
                  tornou-se uma das mais bem sucedidas linguagens, sendo capaz de sustentar
                  diversas funções.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 33.33,
      },

      {
        tipo: "quiz",
        pergunta: "Qual foi a grande mudança que o JavaScript trouxe?",
        alternativas: [
          "Interação com Links.",
          "Interatividade para a página.",
          "Interação com Dados",
          "Codificação de Estilos.",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 33.33,
      },

      {
        tipo: "correcao",
        textoCorreto: "Interatividade para a página.",
        explicacao: "O JavaScript trouxe uma grande inovação, interatividade para a página como um todo, tornando tudo mais simples e útil, não só apenas os links.",
        botao: "TERMINAR",
        progresso: 34,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js2: {
    titulo: "JavaScript - O Básico Sobre",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande" class="text-center text-break">
                  O JavaScript é uma das três linguagens fundamentais da web, ao lado do HTML e
                  do CSS. Enquanto o HTML organiza a estrutura e o CSS define o estilo, o
                  JavaScript é responsável por trazer dinamismo e interatividade às páginas. Ele
                  permite que o conteúdo responda a ações do usuário, manipule elementos visuais e
                  execute lógicas programadas.
                  <br>
                  Já sobre a conexão do JavaScript com HTML pode ocorrer de três formas: Inline,
                  Interno e Externo.
                  <br><br>
                    <p id="exp-grande" class="text-left text-break">
                      <strong>• Inline</strong>: é quando atribui-se o JavaScript dentro de atributos HTML.
                      <br><br>
                      <strong>• Interno</strong>: é quando usa-se a tag script no arquivo HTML.
                      <br><br>
                      <strong>• Externo</strong>: isso quando cria-se um arquivo .js separado, sendo importado para
                      o HTML, através da estrutura: &lt;script src="script.js"&gt;&lt;/script&gt;.
                    </p>
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "quiz",
        pergunta: "O que é um script de acordo com JavaScript?",
        alternativas: [
          "Um bloco de código para funcionalidades Js.",
          "Um bloco de código para estilização Js.",
          "Um bloco de código para banco de dados.",
          "Um bloco de código para matrizes Js.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "correcao",
        textoCorreto: "Um bloco de código para funcionalidades Js.",
        explicacao: "Esta é a opção correta, porque apesar de algumas das outras opções terem haver com o Js, as mesmas não englobam todas as funções que essa opção indica.",
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          '&lt;!doctype html&gt;',
          '&lt;html lang="pt-BR"&gt;',
          '&lt;head&gt;',
          'ㅤㅤ&lt;title&gt;Código para JavaScript&lt;/title&gt;',
          'ㅤㅤ&lt;script img="script.js"&gt;&lt;/script&gt;',
          '&lt;/head&gt;',
          '&lt;html&gt;',
        ],
        alternativas: [
          "A tag está escrita incorretamente",
          "Falta o atributo src",
          "O atributo img deveria ser src",
          "Falta fechar a tag",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "correcao",
        textoCorreto: "O atributo img deveria ser src",
        explicacao: "O erro está dentro do código que cria um link para o Js, onde no script, que deveria ser src='script.js', nesse caso está img='script.js' que impede que essa conexão aconteça.",
        botao: "TERMINAR",
        progresso: 20,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js3: {
    titulo: "JavaScript - Tipos Primitivos",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Começamos com um assunto essencial: Tipos Primitivos, que são a base de toda
                  a linguagem JS, com função de representar valores mais simples e diretos, sua
                  vantagem se tem por serem leves, apesar de imutáveis, tornando ideais para
                  armazenar dados.
                  <br><br>
                  Os principais tipos são: <strong>Number, String, Boolean, Undefined e Null.</strong>
                  <br><br>
                  <p id="exp-grande" class="text-left text-break"> 
                    <strong>Number:</strong> Representa valores numéricos (inteiros e decimais)
                    <br><br>
                    <strong>String:</strong> Representa textos entre aspas simples, duplas ou crase.
                    <br><br>
                    <strong>Boolean:</strong> Valores lógicos: verdadeiro ou falso.
                    <br><br>
                    <strong>Undefined:</strong> Um valor ainda não definido.
                    <br><br>
                    <strong>Null:</strong> Valor propositalmente vazio, com ausência de dados.
                  </p>
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função dos tipos primitivos?",
        alternativas: [
          "Armazenar grande quantidade de dados.",
          "Armazenam valores de forma simples e leve.",
          "Codificar dados em tempo real.",
          "Armazenar valores imutáveis.",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Armazenam valores de forma simples e leve.",
        explicacao: "A função dos tipos primitivos é armazenar valores, e sua grande vantagem foi ser simples e direto, por isso essa é a alternativa correta.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "qual_tag",
        pergunta: "Qual tipo representa valores numéricos?",
        tipoElemento: "tipo primitivo",
        descricao: "Representa valores numéricos (inteiros e decimais)",
        alternativas: ["Boolean", "String", "Null", "Number"],
        correta: 3,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Number",
        explicacao: "Essa justificativa é até um pouco óbvia, o tipo que representa e armazena valores numéricos é o number, sua tradução para portugues deixa isso escancarado.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "qual_tag",
        pergunta: "Qual tipo representa textos?",
        tipoElemento: "tipo primitivo",
        descricao: "Representa textos entre aspas simples, duplas ou crase",
        alternativas: ["String", "Boolean", "Number", "Undefined"],
        correta: 0,
        botao: "VALIDAR",
        progresso: 17,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js4: {
    titulo: "JavaScript - O que são Variáveis",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande" class="text-center text-break">
                  Variáveis são um conteúdo essencial no JavaScript, isso acontece porque variáveis
                  são o meio para declarar valores, esse processo é feito de três formas: var, let e
                  const. Ambos os três têm a função de declarar uma variável, mas mudando seu
                  escopo no código e sua modulação.
                  <br><br>
                  <strong>var:</strong> Declara variáveis de forma muito geral, tendo um escopo global ou de
                  função, não se limitando a estruturas de função.
                  <br><br>
                  <strong>let:</strong> Possui escopo de bloco, ou seja, diferente de var, o valor declarado se
                  mantém em uma estrutura, e não permitindo atribuir novos valores.
                  <br><br>
                  <strong>const:</strong> Assim como let, possui escopo de bloco, mas permite atribuir novos
                  valores, sendo bastante versátil.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "quiz",
        pergunta: "O que as variáveis fazem?",
        alternativas: [
          "Resolvem operações numéricas",
          "Armazenam textos para exibição.",
          "Guardam dados para processamento.",
          "Armazenam números inteiros e imaginários.",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "correcao",
        textoCorreto: "Guardam dados para processamento.",
        explicacao: "A função das variáveis é armazenar dados, ou seja, informações de todo tipo, tudo isso para um processo, de forma simples como exibir ou complexas como funções.",
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Para declarar uma variável no JS é necessário seguir esta estrutura sempre que for fazer isso. O recomendado é sempre usar let para declarar. Além de saber declarar uma variável, devemos saber exibir informações, desde as próprias variáveis, como também números e textos. E isso é feito com console.log(), onde inserimos as informações dentro dos parênteses.",
        codigo: [
          "var a = 1;",
          "let b = 2;",
          "const c = 3;",
          "",
          "let nome = \"José\";",
          "console.log(\"Meu nome é:\" + nome);"
        ],
        arquivo: "script.js",
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize uma estrutura onde declaremos uma variável e depois exibimos",
        instrucao: "Arraste os blocos para a área da direita na ordem correta <br> Lembre-se, Duas Barras indicam um comentário, que não é lido pelo código",
        blocos: [
          { id: "declaracao", conteudo: "let a = \"Tiburcio\";" },
          { id: "fim", conteudo: "// Fim do código" },
          { id: "console", conteudo: "console.log(\"O nome é do aluno é:\", a);" }
        ],
        ordemCorreta: ["declaracao", "console", "fim"],
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js5: {
    titulo: "JavaScript - Vetores e Posições (Parte I)",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Agora vamos para um assunto particularmente especial: vetores, que permitem
                  guardar dados em forma de lista ordenada de elementos. Cada um desses dados
                  são itens, que ocupam uma posição numérica, iniciando em 0. O que foi explicado é
                  chamado de Array, e entendê-lo é de grande importância para armazenar, percorrer
                  e mudar conjuntos de dados.
                  <br><br>
                  Para criar vetores, devemos seguir essa estrutura:
                  <br>
                  let nomes = ["Ana", "Bruno", "Antonio"];
                  <br><br>
                  Usando como exemplo o array de números, é possível localizar cinco posições,
                  iniciando na posição 0, o valor 10.
                  <br>
                  let numeros = [10, 15, 20, 25, 30];
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 25,
      },

      {
        tipo: "quiz",
        pergunta: "Qual número encontramos na segunda posição do array [10, 15, 20, 25, 30]?",
        alternativas: [
          "10",
          "15",
          "20",
          "30",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 25,
      },

      {
        tipo: "correcao",
        textoCorreto: "20",
        explicacao: "Mesmo que não pareça, a resposta correta é essa, tudo isso porque um array inicia com a posição 0, e não com 1. Nessa caso, a segunda posição é o número 20.",
        botao: "CONTINUAR",
        progresso: 25,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          'let numeros = [10, 15, 20, 25, 30];',
          'console.log(numeros(10));'
        ],
        alternativas: [
          "A variável está declarada incorretamente",
          "Falta ponto e vírgula no final",
          "Os parênteses deveriam ser colchetes",
          "O número 10 não existe no array",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 25,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js6: {
    titulo: "JavaScript - Vetores e Posições (Parte 2)",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande" class="text-center text-break">
                  Com o conhecimento da lógica por trás dos vetores, agora vamos entender algumas
                  formas para alterar os vetores e suas informações. Começando com como alterar
                  um valor em uma posição específica, sendo feito dessa forma:
                  <br><br>
                  numeros[1] = 25;
                  <br><br>
                  Pensando naquele mesmo array anterior, tínhamos na posição 1, o valor 15, já com
                  essa nova estrutura, informando o nome do array, e sua posição dentro de
                  colchetes,e com isso podemos mudar o valor na posição, de 15 para 25.
                  <br><br>
                  Assim como alterar informações, também podemos inserir novas informações ou
                  remover as informações, tudo isso seguindo essa estrutura de código:
                  <br><br>
                  numeros.unshift(5); // Adiciona no início
                  <br>
                  numeros.push(45); // Adiciona no final
                  <br><br>
                  Da mesma forma, podemos remover informações, tanto no início, quanto no final de
                  um array, sendo feito dessa forma:
                  <br><br>
                  numeros.shift(); // Remove do início
                  <br>
                  numeros.pop(); // Remove do final
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "Com o que aprendemos, é possível alterar o valor de um vetor?",
        alternativas: [
          "Sim, identificando e mudando a partir de uma posição.",
          "Não, os vetores são invariáveis, e possuem um único valor.",
          "Sim, mas apenas se for o primeiro ou o último valor.",
          "Não, vetores são apenas para armazenar dados.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Sim, identificando e mudando a partir de uma posição.",
        explicacao: "Vetores nada mais são do que variáveis especiais, então sim, os valores de um vetor podem ser alterados.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "Com unshift, podemos adicionar um dado...",
        alternativas: [
          "Em uma posição aleatória.",
          "Em uma posição escolhida.",
          "No início do array.",
          "No final do array.",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "No início do array.",
        explicacao: "O unshift é usado nos casos onde é necessário inserir uma informação no inicio de um array. Então essa é a resposta correta.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "Com pop, podemos remover um dado...",
        alternativas: [
          "Em uma posição aleatória.",
          "Em uma posição escolhida.",
          "No início do array.",
          "No final do array.",
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 17,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js7: {
    titulo: "JavaScript - Operadores",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Operadores formam expressões, como: aritméticos, relacionais, lógicos entre
                  outros; são a base para cálculos e decisões. Os principais operadores são estes, e
                  estas são suas funções:
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "explicacao_tabela",
        tabela: `
          <table class="tabela">
            <thead>
              <tr>
                <th colspan="2" class="text-center">Operadores Aritméticos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Adição (+)</td><td>Resto da Divisão (%)</td></tr>
              <tr><td>Subtração (-)</td><td>Incremento (++)</td></tr>
              <tr><td>Multiplicação (*)</td><td>Decremento (--)</td></tr>
              <tr><td>Divisão (/)</td><td>Exponenciação (**)</td></tr>
            </tbody>
          </table>
        `,
        conteudo: 
        `<strong>Aritméticos:</strong> São os operadores mais simples de se relacionar 
        com conhecimento básico os operadores aritméticos são matemáticos, 
        permitindo realizar somas subtrações, divisões e mais.`,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função dos operadores aritméticos?",
        alternativas: [
          "Servem para realizar cálculos matemáticos diretos.",
          "Permitem atribuir valores a variáveis.",
          "Usados para comparar valores.",
          "Combinam expressões lógicas.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 4.54,
      },

      {
        tipo: "correcao",
        textoCorreto: "Servem para realizar cálculos matemáticos diretos.",
        explicacao: "Cada operador tem sua função, e os operadores aritméticos servem para montar e realizar expressões matemáticas, das mais simples, às mais complexas.",
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          '12 + 25 = "Jóse";'
        ],
        alternativas: [
          "A operação está incompleta",
          "Falta ponto e vírgula no final",
          "O resultado não deveria ser um texto",
          "A sintaxe da adição está incorreta",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 4.54,
      },

      {
        tipo: "correcao",
        textoCorreto: "O resultado não deveria ser um texto",
        explicacao: "Aqui o erro está na comparação de igual com José, já que sendo uma operação aritmética, o resultado não deveria ser um texto, e sim 37.",
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  <strong>Operadores de Atribuição:</strong> Esses operadores têm a função de atribuir valores às
                  variáveis, de forma simples ou com função específicas e práticas. A lógica desses
                  operadores é similar aos aritméticos.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "explicacao_tabela",
        tabela: `
          <table class="tabela">
            <thead>
              <tr>
                <th colspan="2" class="text-center">Operadores de Atribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Atribuição Simples (=)</td><td>Atribuição com Multiplicação (*=)</td></tr>
              <tr><td>Atribuição com Adição (+=)</td><td>Atribuição com Divisão (/=)</td></tr>
              <tr><td>Atribuição com Subtração (-=)</td><td>Atribuição com Resto (%=)</td></tr>
            </tbody>
          </table>
        `,
        conteudo: 
        `<strong>Aritméticos:</strong> São os operadores mais simples de se relacionar 
        com conhecimento básico os operadores aritméticos são matemáticos, 
        permitindo realizar somas subtrações, divisões e mais.`,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função dos operadores de atribuição?",
        alternativas: [
          "Usados para comparar valores.",
          "Servem para realizar cálculos matemáticos diretos.",
          "Combinam expressões lógicas.",
          "Permitem atribuir valores a variáveis.",
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 4.54,
      },

      {
        tipo: "correcao",
        textoCorreto: "Permitem atribuir valores a variáveis.",
        explicacao: "A função dele está no nome, esse tipo de operador atribui valores às variáveis, fazendo com que elas armazenem dados.",
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "qual_tag",
        tipoElemento: "Operador",
        descricao: "Atribui com adição",
        alternativas: [
            "+=",
            "===", 
            "%=",
            "-="
            ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 4.54,
      },

      {
        tipo: "correcao",
        textoCorreto: "+=",
        explicacao: "Com um pouco de lógica, podemos perceber que para atribuirmos usamos “=” e para adicionar “+”. Então logo fica óbvio que essa é a opção correta.",
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "explicacao_tabela",
        tabela: `
          <table class="tabela">
            <thead>
              <tr>
                <th colspan="2" class="text-center">Operadores de Relacionais</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Igualdade (==)</td><td>Menor que (<)</td></tr>
              <tr><td>Igualdade Estrita (===)</td><td>Menor ou igual a (<=)</td></tr>
              <tr><td>Desigualdade (!=)</td><td>Maior que (>)</td></tr>
              <tr><td>Desigualdade Estrita (!==)</td><td>Maior ou igual a (>=)</td></tr>
            </tbody>
          </table>
        `,
        conteudo: 
        `<strong>Relacionais:</strong> Operadores Relacionais têm função de comparar valores e retornar
        um valor boolean, ou seja, verdadeiro e falso. São especialmente úteis para
        situações de comparação de dados como: idade, valor, peso e coisas do tipo. <br>
        Quando tratamos de igualdade e desigualdade restritas, isso quer dizer que não
        apenas o valor da variável importa na comparação, mas também o tipo da variável`,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função dos operadores relacionais",
        alternativas: [
            "Permitem atribuir valores a variáveis.",
            "Usados para comparar valores.",
            "Combinam expressões lógicas.",
            "Servem para realizar cálculos matemáticos diretos."
        ],
        correta: 1,
        explicacao: "Explicação",
        botao: "VALIDAR",
        progresso: 4.54,
      },

      
      {
        tipo: "correcao",
        textoCorreto: "Usados para comparar valores.",
        explicacao: `Os operadores relacionais têm a função de comparar valores,
        como se um é igual ao outro, ou se é menor. Então dentre as opções essa era a
        única correta.`,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "encontre_erro",
        codigo: [
            "20 + 15 === “35",
        ],
        alternativas: [
            "O erro está no operador que compara os valores.",
            "O erro está no operador utilizado para somar.",
            "O erro está na definição do tipo de valor comparado.",
            "O erro está na falta de uma variável."
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 4.54,
      },

      {
        tipo: "correcao",
        textoCorreto: "Usados para comparar valores.",
        explicacao: `Aqui mesmo que 35 realmente seja o resultado dessa soma,
        nos inserimos ele com aspas, mudando seu tipo de número para texto. E com três
        iguais, fazemos uma comparação não só de valor, mas também de tipo, com isso
        essa comparação é falsa, e não daria certo.`,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "explicacao_tabela",
        tabela: `
          <table class="tabela">
            <thead>
              <tr>
                <th colspan="2" class="text-center">Operadores Lógicos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Operador Lógico: E (&&) - Uma expressão só funciona se duas informações forem verdadeiras.</td></tr>
              <tr><td>Operador Lógico: OU (||) - A expressão funciona se pelo menos uma informação forverdade.</td></tr>
              <tr><td>Operador Lógico: NÃO (!) - A expressão verdadeira se torna falsa.</td></tr>
            </tbody>
          </table>
        `,
        conteudo: 
        `<strong>Operadores Lógicos:</strong> Estes operadores são utilizados para combinar as
        expressões lógicas, a função deles é adicionar uma camada a mais de comparação
        entre informações.`,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a função dos operadores lógicos?",
        alternativas: [
            "Servem para realizar cálculos matemáticos diretos.",
            "Combinam expressões lógicas.",
            "Permitem atribuir valores a variáveis.",
            "Usados para comparar valores."
        ],
        correta: 1,
        explicacao: "Explicação",
        botao: "VALIDAR",
        progresso: 4.54,
      },

      {
        tipo: "correcao",
        textoCorreto: "Usados para comparar valores.",
        explicacao: `Aqui também podemos avaliar com lógica, que os operadores
        lógicos, fazem uma combinação de expressões lógicas, criando verificações com
        outras expressões.`,
        botao: "CONTINUAR",
        progresso: 4.54,
      },

      {
        tipo: "qual_tag",
        tipoElemento: "operador",
        descricao: " operador que faz a expressão só funcionar se os dois valores forem verdadeiros?",
        alternativas: [
            "&&",
            "||", 
            "!",
            "="
            ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 4.54
      },

      {
        tipo: "correcao",
        textoCorreto: "&&",
        explicacao: `O operador que faz isto é o duplo e comercial, que verifica se
        duas informações são verdadeiras e se sim, exibe ou permite uma função continuar.`,
        botao: "CONTINUAR",
        progresso: 5,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js8: {
    titulo: "JavaScript - Condições",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  As condições representam a capacidade de uma linguagem de programação tomar
                  decisões. Na vida real, fazemos isso o tempo todo: "Se estiver chovendo, levo
                  guarda-chuva, senão saio sem ele." Em JavaScript, esta ideia é feita através de um
                  código, possibilitando um código não linear de acordo com circunstâncias.
                  <br><br>
                  Com os conceitos dos operadores em mente, as condições funcionam baseadas na
                  lógica do verdadeiro ou falso, como em "o usuário está logado?". Dependendo da
                  resposta, o código segue por caminhos diferentes.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "quiz",
        pergunta: "O que são condições?",
        alternativas: [
          "São estruturas de processamento.",
          "São estruturas de laço.",
          "São estruturas condicionais de dados.",
          "São estruturas de repetição.",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 9.09,
      },

      {
        tipo: "correcao",
        textoCorreto: "São estruturas condicionais de dados.",
        explicacao: "Mesmo que algumas outras opções pareçam corretas, por definição, podemos explicar as condições como estruturas que verificam e moldam os resultados a partir dos dados.",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Agora partimos para a aplicação real das condições. Para estruturar um código condicional, o mais básico, usamos o famoso 'Else If'. O Else If funciona com base em uma condição que será analisada, e de acordo com o resultado, o mesmo prossegue ou muda de finalidade.",
        codigo: [
          "let n = 5;",
          "",
          "if (n == 5) {",
          "ㅤㅤalert(\"O Valor da Variável é 5\");",
          "}"
        ],
        arquivo: "script.js",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "quiz",
        pergunta: "Como funciona o If?",
        alternativas: [
          "Exibe um resultado se o dado corresponder a condição.",
          "Exibe um resultado em sequência.",
          "Exibe um resultado em casos específicos.",
          "Verifica condições, e posteriormente funciona em casos.",
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 9.09,
      },

      {
        tipo: "correcao",
        textoCorreto: "Exibe um resultado se o dado corresponder a condição.",
        explicacao: "No if, o código apenas segue dentro da estrutura se um valor obedecer às condições, não apenas em casos específicos.",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Mas isso é apenas uma decisão simples, agora, demonstraremos uma decisão com alternativa, ou seja, dois resultados. Aqui temos uma diferença, else, que cria uma segunda saída do caso.",
        codigo: [
          "let n = 6;",
          "",
          "if (n == 5) {",
          "ㅤㅤalert(\"O Valor da Variável é 5\");",
          "}",
          "else {",
          "ㅤㅤalert(\"O Valor da Variável é diferente de 5\");",
          "}"
        ],
        arquivo: "script.js",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "quiz",
        pergunta: "O que o else faz?",
        alternativas: [
          "Verifica os dados uma segunda vez, mantendo as primeiras condições.",
          "Adiciona uma segunda saída condicional.",
          "Adiciona uma saída geral, que não tem condições.",
          "Adiciona um novo laço de repetição.",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 9.09,
      },

      {
        tipo: "correcao",
        textoCorreto: "Adiciona uma saída geral, que não tem condições.",
        explicacao: "A função do else é ser uma saída geral, ou seja, para todos os casos que não sigam as condições do if.",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Assim como temos casos de dois resultados, também podemos expandir isso para ainda mais casos usando else if, criando um novo espaço para uma nova condição.",
        codigo: [
          "let n = 5;",
          "",
          "if (n == 5) {",
          "ㅤㅤalert(\"O Valor da Variável é 5\");",
          "}",
          "else if (n < 4) {",
          "ㅤㅤalert(\"O Valor é menor que 4\");",
          "}",
          "else {",
          "ㅤㅤalert(\"O Valor é diferente de 5\");",
          "}"
        ],
        arquivo: "script.js",
        botao: "CONTINUAR",
        progresso: 9.09,
      },

      {
        tipo: "dragdrop",
        titulo: "Estruture uma função ElseIf para verificar notas",
        instrucao: "Arraste os blocos para criar uma estrutura condicional completa",
        blocos: [
          { id: "else_if_boa", conteudo: "else if (nota >= 7) {" },
          { id: "if_excelente", conteudo: "if (nota >= 9) {" },
          { id: "close_if", conteudo: "}" },
          { id: "console_boa", conteudo: "console.log(\"Boa\");" },
          { id: "close_if", conteudo: "}" },
          { id: "close_if", conteudo: "}" },
          { id: "else_if_regular", conteudo: "else if (nota >= 5) {" },
          { id: "function", conteudo: "function verificarNota(nota) {" },
          { id: "close_if", conteudo: "}" },
          { id: "console_regular", conteudo: "console.log(\"Regular\");" },
          { id: "console_excelente", conteudo: "console.log(\"Excelente\");" },
          { id: "close_if", conteudo: "}" },
          { id: "close_if", conteudo: "else {" },
          { id: "console_insuficiente", conteudo: "console.log(\"Insuficiente\");" }
        ],
        ordemCorreta: [
          "function",
          "if_excelente",
          "console_excelente",
          "close_if",
          "else_if_boa",
          "console_boa",
          "close_if",
          "else_if_regular",
          "console_regular",
          "close_if",
          "close_if",
          "console_insuficiente",
          "close_if",
          "close_if"
        ],
        botao: "VALIDAR",
        progresso: 10,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  js9: {
    titulo: "JavaScript - Repetição",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Agora entraremos num assunto tão importante quanto as condições, as estruturas de repetição. 
                  Dentre elas, exploraremos as mais essenciais: for, while, do while e as ferramentas para 
                  controle de repetição: break e continue.
                  <br><br>
                  A repetição é a capacidade de um programa realizar uma ação diversas vezes de
                  forma automática. Isso serve para resolver situações que seriam cansativas ou até
                  mesmo impossíveis de realizar manualmente.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "quiz",
        pergunta: "O que são estruturas de repetição?",
        alternativas: [
          "Estruturas que se repetem uma vez antes da condição.",
          "Estruturas que repetem até um resultado esperado.",
          "Estruturas que se repetem infinitamente.",
          "Estruturas que se repetem sem condições.",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 6.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Estruturas que repetem até um resultado esperado.",
        explicacao: "As estruturas de repetição são estruturas que ficam em repetição até atender um requisito, uma condição e por fim, param.",
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "FOR - Usamos o for quando pensamos em uma contagem controlada, normalmente com um limite delimitado. No exemplo, o for possui parênteses com uma variável (n), uma condição que verifica se n é menor que 5 e um incremento. <br> <strong> LEMBRE-SE DESTE CÓDIGO </strong>",
        codigo: [
          "for (let n = 0; n < 5; n++) {",
          "ㅤㅤconsole.log(n);",
          "}"
        ],
        arquivo: "script.js",
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "quiz",
        pergunta: "Nesse caso, até onde esse código conta?",
        alternativas: [
          "2",
          "3",
          "4",
          "5",
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 6.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "4",
        explicacao: "Esse código conta somente até quatro, isso por conta de sua condição, que limita que a variável n só recebe incremento numérico se for menor que 5.",
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "WHILE - Já o while usamos quando queremos uma execução contínua, enquanto a condição for verdadeira. Aqui temos um caso mais complexo, após a declaração das variáveis e condição, temos um incremento direcionado a n.",
        codigo: [
          "let n = 0;",
          "let x = 0;",
          "",
          "while (n < 3) {",
          "ㅤㅤn++;",
          "ㅤㅤx += n;",
          "}"
        ],
        arquivo: "script.js",
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          "while (n < 3) {",
          "ㅤㅤn++;",
          "ㅤㅤx += n;",
          "}",
          "let n = 0;",
          "let x = 0;"
        ],
        alternativas: [
          "A condição está incorreta",
          "As variáveis foram declaradas depois do while",
          "Falta ponto e vírgula no final",
          "O incremento está errado",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 6.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "As variáveis foram declaradas depois do while",
        explicacao: "Aqui temos um erro bobo, mas que não pode ser ignorado ou repetido. Nesse caso inserimos as variáveis depois da estrutura de repetição, isso faz com que a estrutura busque um valor ainda não criado, já que o código é lido de cima para baixo pelo navegador.",
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "DO WHILE - Diferentemente do while, o do while executa seu código pelo menos uma vez antes da verificação da condição, mesmo que inicialmente seja falsa. Sua estrutura é essa:",
        codigo: [
          "let i = 1;",
          "do {",
          "ㅤㅤconsole.log(i);",
          "ㅤㅤi++;",
          "} while (i <= 3);"
        ],
        arquivo: "script.js",
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a diferença entre while e do while?",
        alternativas: [
          "São iguais.",
          "O do while executa pelo menos uma vez.",
          "O do while é mais rápido.",
          "O do while não aceita incrementos.",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 6.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "O do while executa pelo menos uma vez.",
        explicacao: "No while, a condição é testada antes da execução. Já no do while, o bloco roda primeiro e só depois a condição é verificada, garantindo ao menos uma execução.",
        botao: "CONTINUAR",
        progresso: 6.66,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize os conteúdos para que forme uma estrutura de repetição correta",
        instrucao: "Sequencia: Nome, Nota, Recuperação e Aprovado",
        blocos: [
          { id: "while_aprovado", conteudo: "while (nota >= 5) {" },
          { id: "let_nota", conteudo: "let nota = 4;" },
          { id: "close", conteudo: "}" },
          { id: "break", conteudo: "break;" },
          { id: "close", conteudo: "}" },
          { id: "break", conteudo: "break;" },
          { id: "let_nome", conteudo: "let nome = \"Jéssica\";" },
          { id: "while", conteudo: "while (nota < 5) {" },
          { id: "console_recuperacao", conteudo: "console.log(nome + \" está em recuperação.\");" },
          { id: "console_aprovado", conteudo: "console.log(nome + \" foi aprovado(a).\");" }
        ],
        ordemCorreta: [
          "let_nome",
          "let_nota",
          "while",
          "console_recuperacao",
          "break",
          "close",
          "while_aprovado",
          "console_aprovado",
          "break",
          "close"
        ],
        botao: "VALIDAR",
        progresso: 6.66,
      },

      {
        tipo: "quiz",
        pergunta: "Qual o atributo das estruturas de repetição que finaliza um código antes do esperado?",
        alternativas: [
          "Proceed",
          "Break",
          "Pause",
          "Continue",
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 6.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Break",
        explicacao: "Dentre as opções, tinham apenas duas que existem: Break e Continue, mas dentre estas duas, apenas o break interrompe uma estrutura de repetição, ao contrário do continue.",
        botao: "CONTINUAR",
        progresso: 7,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  //================================================= PHP =================================================//

  php1: {
    titulo: "PHP - Introdução ao PhP",
    faces: [

      {
        tipo: "explicacao",
        conteudo: `
            <div class="ctnc">
                <div class="lyt_exp">
                    <div class="dp exp border-3 rounded-4">
                        <p class="text-center text-break">
                            O PHP surgiu em 1994, criado por Rasmus Lerdorf, inicialmente como um conjunto de scripts simples para monitorar acessos a páginas pessoais. Com o tempo, foi evoluindo até se tornar uma das linguagens mais importantes da web. Hoje, é usado em sites famosos como Facebook, Wikipédia e WordPress, por sua simplicidade e versatilidade.
                            <br><br>
                            Essa evolução mostra como o PHP deixou de ser apenas um recurso auxiliar para se tornar um pilar do desenvolvimento web moderno.
                        </p>
                    </div>
                </div>
            </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09
      },

      {
        tipo: "quiz",
        pergunta: "Qual foi o objetivo inicial do PHP",
        alternativas: [
            "Criar animações gráficas.",
            "Monitorar acessos a páginas pessoais.",
            "Substituir linguagens de estilo.",
            "Armazenar dados em planilhas."
        ],
        correta: 1,
        explicacao: "Explicação",
        botao: "VALIDAR",
        progresso: 9.09
      },

      {
        tipo: "correcao",
        textoCorreto: "Monitorar acessos a páginas pessoais.",
        explicacao: "O PHP nasceu como ferramenta simples para exibir dados de sites pessoais, antes de evoluir para uma linguagem completa.",
        botao: "PRÓXIMA PERGUNTA",
        progresso: 9.09
      },

      {
        tipo: "explicacao",
        conteudo: `
            <div class="ctnc">
                <div class="lyt_exp">
                    <div class="dp exp border-3 rounded-4">
                        <p class="text-center text-break">
                            Ao entender essa trajetória, fica claro que o PHP não é apenas histórico, mas atual e prático. E para aproveitá-lo, precisamos saber como prepará-lo e executá-lo em um ambiente real. Isso quer dizer que para executá-lo da forma correta precisamos de um servidor web, como por exemplo Apache, e um banco de dados, como por exemplo o MySQL, que será explicado ao fim dessas aulas, e por um local que interprete o código, por exemplo o XAMPP.
                        </p>
                    </div>
                </div>
            </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09
      },

      {
        tipo: "explicacao",
        conteudo: `
            <div class="ctnc">
                <div class="lyt_exp">
                    <div class="dp exp border-3 rounded-4">
                        <p class="text-center text-break">
                            O PHP é uma linguagem de servidor, processando os arquivos antes de enviar o resultado ao navegador. Mas não só isso, um ponto importante que deve-se saber, para poder programar em PhP devemos obedecer uma simples, mas importante estrutura, que é esta:
                            <br><br>
                              <strong>&lt;?php ?&gt;</strong>
                            <br><br>
                            Dentro dessas duas tags, podemos programar em PhP, começando com a Abertura, que é &lt?php, e a de Fechamento ?&gt.

                        </p>
                    </div>
                </div>
            </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09
      },

      {
        tipo: "qual_tag",
        tipoElemento: "tag",
        descricao: "Executa o código PhP",
        alternativas: [
            "&lt;php /&gt;",
            "&lt;!php !&gt;", 
            "&lt;?php /&gt;",
            "&lt;?php ?&gt;"
            ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 9.09
      },
      
      {
        tipo: "correcao",
        textoCorreto: "&lt;?php ?&gt;",
        explicacao: "Essa é a única opção que nos dá acesso direto para programar em PhP, nas opções existe uma pegadinha, já que a opção C se parece muito com o certo, mas ao invés de terminar com ?$gt;, a opção termina errado, com /$gt;.",
        botao: "PRÓXIMA PERGUNTA",
        progresso: 9.09
      },

      {
        tipo: "explicacao",
        conteudo: `
            <div class="ctnc">
                <div class="lyt_exp">
                    <div class="dp exp border-3 rounded-4">
                        <p class="text-center text-break">
                          Outros conceitos importantes para o PhP são as Variáveis, um ponto tão importante na programação, que abordamos mais de uma vez em nossas aulas, tanto aqui, quanto nas aulas de JavaScript.
                          <br><br>
                          Começando pelo conceito, as variáveis nada mais são do que espaços de memória onde podemos guardar dados de vários tipos. Diferente de outras linguagens, no PhP o processo de chamar uma variável é único e bem simples.
                        </p>
                    </div>
                </div>
            </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09
      },

      {
        tipo: "explicacao",
        conteudo: `
            <div class="ctnc">
                <div class="lyt_exp">
                    <div class="dp exp border-3 rounded-4">
                        <p class="text-center text-break">
                          Quando digo chamar, quero dizer que vamos dar um nome a essa variável e atribuir um valor à ela, e para fazer isso usamos $, seguido do nome dessa variável e seu valor, como por exemplo:
                          <br><br>
                          <strong>$idade = 16;</strong>
                        </p>
                    </div>
                </div>
            </div>
            `,
        botao: "CONTINUAR",
        progresso: 9.09
      },

      {
        tipo: "qual_tag",
        tipoElemento: "simbolo",
        descricao: "Declara uma Variável",
        alternativas: [
            "$",
            "#", 
            "var",
            "div"
            ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 9.09
      },
            
      {
        tipo: "correcao",
        textoCorreto: "$",
        explicacao: "Assim como indicado agorinha, para chamar um valor devemos usar o cifrão ($) e logo após informar seus dados. Nos outros exemplos é possível ver outras formas de chamar variáveis e funções específicas, mas apenas em outras linguagens.",
        botao: "PRÓXIMA PERGUNTA",
        progresso: 10
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ]
  },

  php2: {
    titulo: "PHP - Constantes e Tipos de Dados",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Com os conteúdos da aula anterior na cabeça, vamos pensar em outro tipo de valor
                  no PhP, as constantes, que são valores que não podem mudar durante a execução
                  de um código, como por exemplo a soma de um número a idade.
                  <br>
                  Para chamá-los, não usamos $, mas sim uma estrutura especial: <strong>define()</strong>,
                  onde dentro dos parênteses informamos os valores que queremos. Como por exemplo, 
                  para criar uma constante como uma taxa, deveríamos a estruturar desta forma:
                  <br><br>
                  <strong>define(“Taxa”, 0.5);</strong>
                  <br><br>
                  Nesse exemplo, o valor da taxa é 0.5, e se caso quiséssemos criar uma operação matemática 
                  com uma taxa como essa, poderíamos apenas inseri-la na operação. Mas você deve se perguntar, 
                  porque a Taxa está entre aspas? Por que existem os <strong>Tipos de Dados</strong>.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  No PhP, assim como em outras linguagens de programação, temos tipos de dados, que nesse caso se separam 
                  entre esses principais: <strong>Integer ou Int, Float, String, Boolean e Object</strong>.
                  O Integer ou Int representa os números inteiros, enquanto o Float os números decimais, já o String representa 
                  os textos e caracteres sequenciais e o Boolean se separa entre valores de comparação, verdadeiro e falso. Além disso, 
                  temos o Object, um tipo de valor especial, que será explicado futuramente em outras aulas.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },


      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Nesse exemplo, o valor da taxa é 0.5, e se caso quiséssemos criar uma operação
                  matemática com uma taxa como essa, poderíamos apenas inseri-la na operação.
                  Mas você deve se perguntar, porque a Taxa está entre aspas? Por que existem os
                  <strong>Tipos de Dados.</strong>
                  <br><br>
                  No PhP, assim como em outras linguagens de programação, temos tipos de dados,
                  que nesse caso se separam entre esses principais: <strong>Integer ou Int, Float, String, Boolean e Object.</strong>
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          '$idade = "16";',
          'define(Valor, 12);'
        ],
        alternativas: [
          "A variável idade está com aspas",
          "Falta ponto e vírgula na constante",
          "Faltam aspas no nome da constante",
          "A constante deveria usar $"
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "Faltam aspas no nome da constante",
        explicacao: "Aqui para a constante, faltam aspas no nome, que deveria ser “Valor” e não apenas Valor. Já para a idade não há erro, já que o PhP é uma linguagem fracamente tipada.",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  <strong>Mas o que Significa Isso?</strong>
                  <br><br>
                  Isso significa que não é necessário declarar o tipo de uma variável anteriormente. O
                  PhP interpreta automaticamente, seja um número inteiro, um texto (string), número
                  decimal (float) ou valores booleanos (verdadeiro/falso).
                  <br><br>
                  Esse comportamento torna a linguagem prática e rápida de usar, mas também exige
                  atenção, pois conversões implícitas podem gerar resultados inesperados.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "quiz",
        pergunta: "Por que o PHP é considerado fracamente tipado?",
        alternativas: [
          "Porque não exige declarar o tipo de dado ao criar uma variável.",
          "Porque aceita apenas textos.",
          "Porque não possui variáveis.",
          "Porque precisa de constantes para funcionar."
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "Porque não exige declarar o tipo de dado ao criar uma variável.",
        explicacao: "Diferente do Js que tem uma atenção com os tipos de valores, aqui ocorre uma interpretação do valor automaticamente. Por exemplo, se escrever uma operação aritmética somando 2 + 2, e informar o valor '4', o resultado será verdadeiro, mesmo que esteja entre aspas.",
        botao: "TERMINAR",
        progresso: 12.5,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  php3: {
  titulo: "PHP - Operadores e Expressões",
  faces: [
    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Operadores formam expressões, como: aritméticos, relacionais, lógicos entre
                outros; são a base para cálculos e decisões. Os principais operadores são estes, e
                estas são suas funções:
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "explicacao_tabela",
      tabela: `
        <table class="tabela">
          <thead>
            <tr>
              <th colspan="2" class="text-center">Operadores Aritméticos</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Adição (+)</td><td>Resto da Divisão (%)</td></tr>
            <tr><td>Subtração (-)</td><td>Incremento (++)</td></tr>
            <tr><td>Multiplicação (*)</td><td>Decremento (--)</td></tr>
            <tr><td>Divisão (/)</td><td>Exponenciação (**)</td></tr>
          </tbody>
        </table>
      `,
      conteudo: "<strong>Aritméticos:</strong> São os operadores mais simples de se relacionar com conhecimento básico, os operadores aritméticos são matemáticos, permitindo realizar somas, subtrações, divisões e mais.",
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "explicacao_tabela",
      tabela: `
        <table class="tabela">
          <thead>
            <tr>
              <th colspan="2" class="text-center">Operadores de Atribuição</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Atribuição Simples (=)</td><td>Atribuição com Multiplicação (*=)</td></tr>
            <tr><td>Atribuição com Adição (+=)</td><td>Atribuição com Divisão (/=)</td></tr>
            <tr><td>Atribuição com Subtração (-=)</td><td>Atribuição com Resto (%=)</td></tr>
          </tbody>
        </table>
      `,
      conteudo: "<strong>Operadores de Atribuição:</strong> Esses operadores têm a função de atribuir valores às variáveis, de forma simples ou com função específicas e práticas. A lógica desses operadores é similar aos aritméticos.",
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "explicacao_tabela",
      tabela: `
        <table class="tabela">
          <thead>
            <tr>
              <th colspan="2" class="text-center">Operadores Relacionais</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Igualdade (==)</td><td>Menor que (<)</td></tr>
            <tr><td>Igualdade Estrita (===)</td><td>Menor ou igual a (<=)</td></tr>
            <tr><td>Desigualdade (!=)</td><td>Maior que (>)</td></tr>
            <tr><td>Desigualdade Estrita (!==)</td><td>Maior ou igual a (>=)</td></tr>
          </tbody>
        </table>
      `,
      conteudo: "<strong>Relacionais:</strong> Operadores Relacionais têm função de comparar valores e retornar um valor boolean, ou seja, verdadeiro e falso. São especialmente úteis para situações de comparação de dados como: idade, valor, peso e coisas do tipo.",
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Quando tratamos de igualdade e desigualdade restritas, isso quer dizer que não
                apenas o valor da variável importa na comparação, mas também o tipo da variável.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "explicacao_tabela",
      tabela: `
        <table class="tabela">
          <thead>
            <tr>
              <th colspan="1" class="text-center">Operadores Lógicos</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Operador Lógico: E (&&) - Uma expressão só funciona se duas informações forem verdadeiras.</td></tr>
            <tr><td>Operador Lógico: OU (||) - A expressão funciona se pelo menos uma informação for verdade.</td></tr>
            <tr><td>Operador Lógico: NÃO (!) - A expressão verdadeira se torna falsa.</td></tr>
          </tbody>
        </table>
      `,
      conteudo: "<strong>Operadores Lógicos:</strong> Estes operadores são utilizados para combinar as expressões lógicas, a função deles é adicionar uma camada a mais de comparação entre informações.",
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "dragdrop",
      titulo: "Organize os operadores em sequência",
      instrucao: "Relacionais -> Atribuição -> Aritméticos -> Lógicos",
      blocos: [
        { id: "aritmeticos", conteudo: "Capaz de somar ou subtrair valores à vontade." },
        { id: "relacionais", conteudo: "Capaz de comparar valores iguais." },
        { id: "logicos", conteudo: "Capaz de comparar se dois valores são verdadeiros." },
        { id: "atribuicao", conteudo: "Capaz de atribuir um valor juntamente de uma soma. " },
      ],
      ordemCorreta: ["relacionais", "atribuicao", "aritmeticos", "logicos"],
      botao: "VALIDAR",
      progresso: 7.69,
    },

    {
      tipo: "encontre_erro",
      codigo: [
        '// Afirmação:',
        '"Os Operadores Relacionais têm a função de verificar de valores são ou não verdadeiros com base em comparação"'
      ],
      alternativas: [
        "A afirmação está correta",
        "Falta mencionar os operadores lógicos",
        "A função descrita pertence aos operadores lógicos",
        "Os operadores relacionais não comparam valores"
      ],
      correta: 2,
      botao: "VALIDAR",
      progresso: 7.69,
    },

    {
      tipo: "correcao",
      textoCorreto: "A função descrita pertence aos operadores lógicos",
      explicacao: "A afirmação erra ao empregar a função de um operador à outro operador, já que essa função pertence aos Operadores Lógicos, não aos Relacionais. Na realidade, os Relacionais também comparam, mas no caso desse operador, a comparação é entre valores e não se são verdadeiros.",
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Agora entramos em um outro importante assunto: As Expressões, que nada mais
                são do que os conceitos dos operadores aplicados na prática, como nesse exemplo:
                <br><br>
                <strong>$resto = 10 % 3;</strong>
                <br><br>
                Nesse caso temos uma expressão aritmética, ou seja, envolvendo o mais puro
                cálculo matemático. Que nesse caso busca o resto da divisão entre 10 e 3, que
                resultará em 1.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Outro exemplo é uma expressão de atribuição, que inicia com a atribuição do número 10 à variável $valor, logo após isso, temos uma atribuição com soma, que faz com que nossa variável some mais 10 ao seu valor original, totalizando 20.",
      codigo: [
        '&lt;?php',
        'ㅤㅤ$valor = 10;',
        'ㅤㅤ$valor += 10;',
        '// Resultado: $valor = 20',
        '?&gt;',
      ],
      arquivo: "exemplo.php",
      botao: "CONTINUAR",
      progresso: 7.69,
    },

    {
      tipo: "qual_tag",
      tipoElemento: "operador",
      descricao: "Comparar dois valores em uma variável",
      alternativas: [
        "Operador Aritmético",
        "Operador de Atribuição", 
        "Operador Relacional",
        "Operador Lógico"
      ],
      correta: 2,
      botao: "VALIDAR",
      progresso: 7.69,
    },

    {
      tipo: "correcao",
      textoCorreto: "Operador Relacional",
      explicacao: "O Operador Relacional, já que o mesmo conta com diversas formas de comparar, desde uma comparação simples (==) até uma restritiva (===), assim como também comparar valores maiores e menores.",
      botao: "TERMINAR",
      progresso: 8,
    },

    {
      tipo: "final",
      botao: "TERMINAR",
      progresso: -101,
    },
  ],
},

  php4: {
  titulo: "PHP - Controle de Fluxo",
  faces: [
    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                O controle de fluxo torna os códigos mais direcionados e modulares às situações,
                com estruturas como else if e switch, podemos modelar um código para seguir um
                certo caminho através de condições, e com estruturas como foreach, podemos criar
                laços de repetição, que permitem realizar tarefas que antes poderiam parecer muito
                complicadas.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "quiz",
      pergunta: "O que é o controle de fluxo no PhP?",
      alternativas: [
        "São condições que alteram a disposição visual web.",
        "É uma função que organiza dados de várias formas.",
        "São estruturas que direcionam e moldam o código.",
        "É uma função que direciona o código."
      ],
      correta: 2,
      botao: "VALIDAR",
      progresso: 7.14,
    },

    {
      tipo: "correcao",
      textoCorreto: "São estruturas que direcionam e moldam o código.",
      explicacao: "Essa é quase que a definição do que é controle de fluxo, apesar da opção D também se aproximar da descrição, mas o grande ponto é que o controle de fluxo não é apenas uma função, mas sim muitas estruturas e também bastante variadas.",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "O Else If funciona com base em uma condição que será analisada, e de acordo com o resultado, o mesmo prossegue ou muda de finalidade.",
      codigo: [
        '$idade = 16;',
        'if ($idade >= 18) {',
        'ㅤㅤecho "Maior de idade";',
        '} else {',
        'ㅤㅤecho "Menor de idade";',
        '}'
      ],
      arquivo: "index.php",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Primeiro, declara-se a variável $idade. Em seguida, é feita a verificação: se o valor
                for maior ou igual a 18, o programa mostra "Maior de idade". Caso contrário, ou
                seja, se a condição não for atendida, ele exibe "Menor de idade". Essa estrutura
                permite controlar qual mensagem será mostrada de acordo com a idade, tornando o
                código simples e direto.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "encontre_erro",
      codigo: [
        'let idade = 16;',
        'if (idade >= 18) {',
        'ㅤㅤecho "Maior de idade";',
        '}',
        'else {',
        'ㅤㅤecho "Menor de idade";',
        '}'
      ],
      alternativas: [
        "A variável não está com cifrão ($)",
        "Falta ponto e vírgula no echo",
        "A condição está incorreta",
        "O else deveria ser else if"
      ],
      correta: 0,
      botao: "VALIDAR",
      progresso: 7.14,
    },

    {
      tipo: "correcao",
      textoCorreto: "A variável não está com cifrão ($)",
      explicacao: "Aqui encontramos erros na hora de inserir as variáveis, em primeiro lugar no momento em que a variável é criada, não está sendo usado $, e após isso, dentro do if, a variável também não é identificada com $.",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Seguindo, temos a estrutura condicional Switch, que diferente do Else If, que segue
                comparações com intervalos de valores, no switch existe uma comparação de caso
                por caso.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Aqui temos a declaração da variável $dia como 3, e após isso, no switch é possível ver que pedimos entre parênteses uma informação, que nesse caso tem que ser a variável usada na comparação de casos. Como a variável informa o valor 3, o único caso correspondente é 'Terça-feira', sendo esse o resultado final exibido.",
      codigo: [
        '$dia = 3;',
        '',
        'switch ($dia) {',
        'ㅤㅤcase 1:',
        'ㅤㅤㅤㅤecho "Domingo";',
        'ㅤㅤㅤㅤbreak;',
        '// Resto do Código...',
        'ㅤㅤcase 4:',
        'ㅤㅤㅤㅤecho "Quarta-feira";',
        'ㅤㅤㅤㅤbreak;',
        'ㅤㅤdefault:',
        'ㅤㅤㅤㅤecho "Dia inválido";',
        '}',
      ],
      arquivo: "exemplo.php",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "dragdrop",
      titulo: "Organize essa estrutura switch",
      instrucao: "Ordem dos cases: <br> Banana <br> Melância <br> Uvas ",
      blocos: [
        { id: "variavel", conteudo: '$fruta = 2;' },
        { id: "echo3", conteudo: 'echo "Uvas";' },
        { id: "switch_abre", conteudo: 'switch ($fruta) {' },
        { id: "echo1", conteudo: 'echo "Banana";' },
        { id: "switch_fecha", conteudo: '}' },
        { id: "break", conteudo: 'break;' },
        { id: "php_abre", conteudo: "&lt;?php" },
        { id: "case2", conteudo: 'case 2:' },
        { id: "echo2", conteudo: 'echo "Melância";' },
        { id: "php_fecha", conteudo: "?&gt;" },
        { id: "break", conteudo: 'break;' },
        { id: "case1", conteudo: 'case 1:' },
        { id: "case3", conteudo: 'case 3:' },
        { id: "break", conteudo: 'break;' }
      ],
      ordemCorreta: [
        "php_abre",
        "variavel",
        "switch_abre", 
        "case1",
        "echo1",
        "break",
        "case2",
        "echo2",
        "break",
        "case3",
        "echo3",
        "break",
        "switch_fecha",
        "php_fecha"
      ],
      botao: "VALIDAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                E por fim, chegamos às Estruturas de Repetição, que exploraremos em específico o
                ForEach. Mas antes, explicarei o que são estruturas de repetição: como o próprio
                nome diz, são estruturas onde dados vão percorrer um caminho em repetição, sem
                fim até que atendam uma certa condição específica.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Usando o ForEach como exemplo, temos essa estrutura. Nesse caso, o ForEach tem uma função bem específica, mas que pode ser útil: ele tem a capacidade de pegar as informações armazenadas em um objeto, e organiza conforme o pedido. Nessa estrutura, o que ele faz é exibir 'Fruta: Maça' e depois 'Fruta: Banana' e por fim 'Fruta: Laranja', organizando as informações, e mantendo as posições originais.",
      codigo: [
        '&lt;?php',
        'ㅤㅤ$frutas = ["Maçã", "Banana", "Laranja"];',
        '',
        'ㅤㅤforeach ($frutas as $fruta) {',
        'ㅤㅤㅤㅤecho "Fruta: $fruta &lt;br&gt;";',
        'ㅤㅤ}',
        '?$gt;'
      ],
      arquivo: "exemplo.php",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "qual_tag",
      tipoElemento: "função",
      descricao: "Exibe textos",
      alternativas: [
        'foreach ();',
        'echo"";',
        'switch ();',
        'break;'
      ],
      correta: 1,
      botao: "VALIDAR",
      progresso: 7.14,
    },

    {
      tipo: "correcao",
      textoCorreto: 'echo"";',
      explicacao: "Apenas o Echo se encaixa com a descrição, pois ele faz exatamente o que ela descreve.",
      botao: "CONTINUAR",
      progresso: 8,
    },

    {
      tipo: "final",
      botao: "TERMINAR",
      progresso: -101,
    },
  ],
},

  php5: {
  titulo: "PHP - Formulários e Integração com HTML",
  faces: [
    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                O PHP brilha ao receber dados de formulários HTML. É possível capturar informações que o 
                usuário digita e processá-las. Isso viabiliza sistemas de login, cadastros e pesquisas.
                Não só criando uma conexão com melhorias visuais graças ao HTML e CSS, mas também dando
                mais funções práticas ao HTML por si só, com os formulários.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p id="exp-grande-mobile" class="text-center text-break">
                Quando um usuário interage com uma página, geralmente o faz por meio de formulários. 
                Esses formulários enviam informações ao servidor, e o PHP as interpreta usando dois
                métodos principais: GET e POST.
                <br><br>
                <p id="exp-grande-mobile" class="text-left">
                  <strong>GET:</strong> Envia os dados pela URL. Isso significa que, ao preencher um formulário e
                  enviá-lo, os valores aparecem diretamente na barra de endereço, tornando os dados
                  visíveis e gerando pouca segurança.
                  <br><br>
                  <strong>POST:</strong> Envia os dados de forma invisível, dentro da requisição. Dessa forma, os
                  valores não ficam expostos na URL. É usado em logins, cadastros e sempre que há
                  necessidade de maior privacidade.
                  <br><br>
                  Além disso, um ponto que é ainda mais importante do que conhecer esses métodos, 
                que é conhecer a estrutura por trás dos formulários.
                </p>
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "quiz",
      pergunta: "Get e Post possuem diferenças?",
      alternativas: [
        "Sim, Get é pouco segura e Post é mais seguro",
        "Sim, Get é mais seguro e Post é pouco seguro",
        "Não, a função dos dois é a mesma, apenas são diferentes por versões",
        "Não, a segurança não depende desse envio, mas sim de outros fatores"
      ],
      correta: 0,
      botao: "VALIDAR",
      progresso: 10,
    },

    {
      tipo: "correcao",
      textoCorreto: "Sim, Get é pouco segura e Post é mais seguro",
      explicacao: "Essa era a opção correta, porque sim, os dois têm diferenças, já que o Post envia os dados de forma invisível, enquanto o get envia os dados de forma que os mesmo sejam exibidos na barra de navegação.",
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Formulário com GET - Nesse caso, usamos um método com Get, sendo possível identificar isso logo na primeira linha, logo após 'method='.",
      codigo: [
        '&lt;form action="pagina.php" method="get"&gt;',
        'ㅤㅤNome: &ltinput type="text" name="nome"&gt;',
        'ㅤㅤIdade: &ltinput type="number" name="idade"&gt;',
        'ㅤㅤ&lt;button type="submit"&gt;Enviar&lt;/button&gt;',
        '&lt;/form&gt;'
      ],
      arquivo: "formulario.html",
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Formulário com POST - Aqui a mesma coisa se repete, mas agora com Post, sendo possível identificar ele logo na primeira linha, logo após 'method='.",
      codigo: [
        '&lt;form action="pagina.php" method="post"&gt;',
        'ㅤㅤNome: &lt;input type="text" name="nome"&gt;',
        'ㅤㅤIdade: &lt;input type="number" name="idade"&gt;',
        'ㅤㅤ&lt;button type="submit"&gt;Enviar&lt;/button&gt;',
        '&lt;/form&gt;'
      ],
      arquivo: "formulario.html",
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Para entendermos melhor, podemos separar essa estrutura em partes, começando
                por:
                <br><br>
                <strong>&lt;form action="pagina.php" method="post"&gt;&lt;/form&gt;</strong>
                <br><br>
                Essas duas tags, de abertura e de fechamento, são responsáveis por criar um
                formulário no HTML, e dentro dessas tags existem outros conteúdos.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                <strong>Nome: &lt;input type="text" name="nome"&gt;</strong>
                <br><br>
                Aqui informamos o nome de um campo, que nesse caso é Nome mesmo, e logo a
                frente temos um input type, que indica o tipo de valor inserido, que nesse caso é um
                texto, e mais a frente, temos o name, que também dá nome ao campo, mas esse
                nome serve apenas de identificação para outros códigos.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                <strong>&lt;button type="submit"&gt;Enviar&lt;/button&gt;</strong>
                <br><br>
                Aqui temos uma tag de botão, que segue a lógica do campo, com seu tipo sendo
                indicado mais à frente, que nesse caso, submit indica que esse é um botão que
                envia valores.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "dragdrop",
      titulo: "Faça um Formulário para o cadastro de um aluno",
      instrucao: "Arraste os blocos de um lado para o outro. <br> Sequência: <br> Nome -> R.A",
      blocos: [
        { id: "botao", conteudo: '&lt;button type="submit"&gt;Enviar&lt;/button&gt;' },
        { id: "campo_ra", conteudo: 'R.A do Aluno: &lt;input type="number" name="registro"&gt;' },
        { id: "form_abre", conteudo: '&lt;form action="pagina.php" method="get"&gt;' },
        { id: "campo_nome", conteudo: 'Nome do Aluno: &lt;input type="text" name="aluno"&gt;' },
        { id: "form_fecha", conteudo: '&lt;/form&gt;' },
      ],
      ordemCorreta: ["form_abre", "campo_nome", "campo_ra", "botao", "form_fecha"],
      botao: "VALIDAR",
      progresso: 10,
    },

    {
      tipo: "final",
      botao: "TERMINAR",
      progresso: -101,
    },
  ],
},

  php6: {
  titulo: "PHP - Programação Orientada a Objetos (Parte I)",
  faces: [
    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                A Programação Orientada a Objetos (POO) é um dos pilares mais importantes da
                programação moderna. Em PHP, ela permite organizar o código em torno de
                entidades do <strong>mundo real</strong>, representadas por classes e objetos. Isso é chamado de
                Abstração, um processo que nos permite representar características e ações do
                mundo real na programação.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "quiz",
      pergunta: "O que é a Abstração?",
      alternativas: [
        "É o processo de representar animais e suas ações na programação.",
        "É o processo de exibir de forma visual o modelo de algo real.",
        "É representar conceitos da programação na vida real através de programas visuais.",
        "É representar características e ações da vida real na programação."
      ],
      correta: 3,
      botao: "VALIDAR",
      progresso: 7.14,
    },

    {
      tipo: "correcao",
      textoCorreto: "É representar características e ações da vida real na programação.",
      explicacao: "A Abstração é a capacidade de transformar coisas do nosso mundo real e representá-las através de um código, e essa era a respostas que melhor se encaixa nessa descrição.",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Uma classe é como um molde ou modelo. Ela define características (atributos) e
                comportamentos (métodos) de algo. Já o objeto é a instância dessa classe, ou seja,
                o resultado concreto criado a partir do molde. Se pensarmos em uma classe Carro,
                ela define que todo carro tem atributos como cor e modelo, além de métodos como
                acelerar(). Mas só quando criamos um objeto, como um carro vermelho modelo
                sedan, é que temos algo real para usar.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Então: Usando um Relógio como exemplo para uma classe, teriamos essas
                informações:
                <br><br>
                <strong>Características:</strong> Cor, Preço, Modelo, Data de Lançamento e etc.
                <br><br>
                <strong>Métodos:</strong> ExibirHorário(), ContarPassos() e etc.
                <br><br>
                É importante lembrar que métodos sempre devem seguir essa estrutura, com seu
                nome seguido por parênteses. Além disso, uma boa prática é sempre escrever um
                método que possua duas palavras, colocar as iniciais em maiúsculo, como em
                ContarPassos().
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "encontre_erro",
      codigo: [
        'Classe: Peixe',
        'Características: Nadar(), Comer(), Dormir().',
        'Métodos: Cor, Peso, Tamanho, Raça.'
      ],
      alternativas: [
        "A classe está com nome errado",
        "As características e métodos estão trocados",
        "Faltam os parênteses nos métodos",
        "A classe deveria ser abstrata"
      ],
      correta: 1,
      botao: "VALIDAR",
      progresso: 7.14,
    },

    {
      tipo: "correcao",
      textoCorreto: "As características e métodos estão trocados",
      explicacao: "O que acontece aqui é que as características e os métodos estão trocados, ou seja, o que deveria ser um método é uma característica e vice-versa.",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Esse é um exemplo de uma estrutura de código que permite criar uma classe, como cobaia escolhemos um carro.",
      codigo: [
        'class Carro {',
        'ㅤㅤpublic $cor;',
        'ㅤㅤpublic $modelo;',
        '',
        'ㅤㅤpublic function acelerar() {',
        'ㅤㅤㅤㅤreturn "O carro está acelerando!";',
        'ㅤㅤ};',
        '};'
      ],
      arquivo: "Carro.php",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                E podemos observar com essa estrutura, logo após a criação da classe, dados
                como cor e modelo, como public. Mas o que é isso?
                <br><br>
                Bem, esses são os níveis de segurança de uma informação, um dado. Eles são
                separados em três níveis: Public, Protected e Private. Public é público, ou seja,
                pode ser acesso por qualquer um; Protected pode ser acessado apenas por aqueles
                que têm permissão, e Private, só alguns raros casos.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "qual_tag",
      tipoElemento: "modificador de acesso",
      descricao: "Apenas algumas classes o acessam.",
      alternativas: [
        "Private",
        "Secure",
        "Protected",
        "Public"
      ],
      correta: 2,
      botao: "VALIDAR",
      progresso: 7.14,
    },

    {
      tipo: "correcao",
      textoCorreto: "Protected",
      explicacao: "Diferente do Private, que é muito restrito e do Public que é nada restrito, o Protected tem certo nível de proteção, mas ainda sim, mantém certo nível de abertura para outras classes.",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Agora, voltando ao assunto de classes e objetos, já visualizamos a criação de uma
                classe, o que seria um objeto? Um Objeto é a virtualização de uma classe em um
                exemplo real, ou seja, faríamos com que as informações criadas na classe agora
                carregassem dados.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Aqui, criamos uma variável que é meuCarro, e fazemos com que ela receba new Carro(), isso cria um objeto com base naquela classe. Seguindo adiante, temos a mesma variável definindo a cor como Vermelho, feito através de ->. Após isso, temos um Echo, que exibe uma informação, que nesse caso é um método, mais específico o método acelerar().",
      codigo: [
        '&lt;?php',
        '$meuCarro = new Carro();',
        '$meuCarro->cor = "Vermelho";',
        '$meuCarro->modelo = "Sedan";',
        '',
        'echo $meuCarro->acelerar();',
        '?&gt;'
      ],
      arquivo: "index.php",
      botao: "CONTINUAR",
      progresso: 7.14,
    },

    {
      tipo: "dragdrop",
      titulo: "Organize o objeto Gato",
      instrucao: "Arraste os blocos para criar um objeto Gato corretamente <br> Cor -> Raça -> Método",
      blocos: [
        { id: "raca", conteudo: '$novoGato->raça = "Sem Raça";' },
        { id: "novo_gato", conteudo: '$novoGato = new Gato();' },
        { id: "cor", conteudo: '$novoGato->cor = "Laranja";' },
        { id: "php_fecha", conteudo: "?&gt;" },
        { id: "miar", conteudo: 'echo $novoGato->Miar();' },
        { id: "php_abre", conteudo: "&lt;?php" },
      ],
      ordemCorreta: ["php_abre", "novo_gato", "cor", "raca", "miar", "php_fecha"],
      botao: "VALIDAR",
      progresso: 8,
    },

    {
      tipo: "final",
      botao: "TERMINAR",
      progresso: -101,
    },
  ],
},

  php7: {
  titulo: "PHP - Programação Orientada a Objetos (Parte II)",
  faces: [
    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Depois de entender o que são classes e objetos, o próximo passo é compreender
                como elas podem se relacionar. Em projetos grandes, não basta criar moldes
                isolados: muitas vezes precisamos de uma hierarquia, em que uma classe principal
                (pai) serve como base para outras classes mais específicas (filhas). Esse conceito é
                chamado de herança, e dele também surge o polimorfismo, que permite que
                métodos sejam reutilizados ou redefinidos de acordo com cada subclasse.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "quiz",
      pergunta: "O que é a Herança na Programação Orientada a Objetos?",
      alternativas: [
        "Capacidade de uma classe herdar a outra.",
        "Capacidade de uma classe ser independente de outras.",
        "São objetos que compartilham de um mesmo método.",
        "São objetos que compartilham de uma mesma característica."
      ],
      correta: 0,
      botao: "VALIDAR",
      progresso: 10,
    },

    {
      tipo: "correcao",
      textoCorreto: "Capacidade de uma classe herdar a outra.",
      explicacao: "Nesse caso, a única aplicável é essa opção, pois a Herança em POO, nada mais é do que a capacidade de uma classe, no caso a classe filha, herdar a classe pai, e isso não se limite a apenas métodos, mas se expande a todas as partes da classe pai.",
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Uma hierarquia organiza classes de forma que uma classe pai transmite seus
                atributos e métodos para subclasses. Isso evita repetição e promove reutilização de
                código. Por exemplo, uma classe Animal pode ter métodos como comer() e dormir(),
                que servem para todos os animais.
                <br><br>
                A partir dela, podemos criar subclasses como Cachorro e Gato, que herdam essas
                funções, mas ainda podem ter comportamentos próprios.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Nesse caso, o que acontece é que criamos uma classe Animal, com certo método, e logo embaixo, criamos uma classe Cachorro, mas usando a propriedade Extends, que permite uma classe acessar Métodos e Características da classe Animal nesse caso. Isso permite reaproveitamento, já que a classe Animal pode ser usada em outras classes como Gato() ou até mesmo Pessoa().",
      codigo: [
        'class Animal {',
        'ㅤㅤpublic function comer() {',
        'ㅤㅤㅤㅤreturn "Este animal está comendo.";',
        'ㅤㅤ};',
        '};',
        '',
        'class Cachorro extends Animal {',
        'ㅤㅤpublic function latir() {',
        'ㅤㅤㅤㅤreturn "O cachorro está latindo!";',
        'ㅤㅤ};',
        '};'
      ],
      arquivo: "Animal.php",
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "quiz",
      pergunta: "Como fazemos uma classe herdar outra?",
      alternativas: [
          "Indicando a classe pai com #",
          "Com o atributo inherit",
          "Com o atributo extends",
          "Indicando a classe pai com $"
      ],
      correta: 2,
      explicacao: "Explicação",
      botao: "VALIDAR",
      progresso: 11.11
    },

    {
      tipo: "correcao",
      textoCorreto: "Com o atributo extends",
      explicacao: "Aqui a opção correta é essa, pois tanto o cifrão quanto a cerquilha, não tem essa capacidade, e inherit mesmo que signifique algo como herdar, também não é o que faz uma classe herdar a outra.",
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao",
      conteudo: `
        <div class="ctnc">
          <div class="lyt_exp">
            <div class="dp exp border-3 rounded-4">
              <p class="text-center text-break">
                Com essa ideia na mente, avançamos para o conteúdo de Polimorfismo, que
                ocorre quando subclasses alteram ou redefinem métodos herdados da classe pai.
                Isso significa que uma mesma ação pode ter comportamentos diferentes à depender
                do objeto que a executa.
              </p>
            </div>
          </div>
        </div>
      `,
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "explicacao_codigo",
      explicacao: "Exemplo de polimorfismo: ambas as classes Gato e Cachorro herdam de Animal, mas redefinem o método emitirSom() com comportamentos diferentes.",
      codigo: [
        'class Gato extends Animal {',
        'ㅤㅤpublic function emitirSom() {',
        'ㅤㅤㅤㅤreturn "Miau!";',
        'ㅤㅤ};',
        '};',
        '',
        'class Cachorro extends Animal {',
        'ㅤㅤpublic function emitirSom() {',
        'ㅤㅤㅤㅤreturn "Au au!";',
        'ㅤㅤ};',
        '};'
      ],
      arquivo: "Animal.php",
      botao: "CONTINUAR",
      progresso: 10,
    },

    {
      tipo: "dragdrop",
      titulo: "Organize a hierarquia de classes",
      instrucao: "Arraste os blocos de um lado para o outro <br> Sequencia: <br> Comer -> Classe herdada -> Latir",
      blocos: [
        { id: "close", conteudo: '};' },
        { id: "function_comer", conteudo: 'public function comer() {' },
        { id: "close", conteudo: '};' },
        { id: "return_latir", conteudo: 'return "Au au!";' },
        { id: "class_cachorro", conteudo: 'class Cachorro extends Animal {' },
        { id: "close", conteudo: '};' },
        { id: "class_animal", conteudo: 'class Animal {' },
        { id: "return_comer", conteudo: 'return "Comendo...";' },
        { id: "close", conteudo: '};' },
        { id: "function_latir", conteudo: 'public function latir() {' }
      ],
      ordemCorreta: [
        "class_animal",
        "function_comer", 
        "return_comer",
        "close",
        "close",
        "class_cachorro",
        "function_latir",
        "return_latir",
        "close",
        "close"
      ],
      botao: "VALIDAR",
      progresso: 10,
    },

    {
      tipo: "final",
      botao: "TERMINAR",
      progresso: -101,
    },
  ],
},

  //================================================= MYSQL =================================================//

  sql1: {
    titulo: "MySQL - Introduzindo e Conectando o MySQL ao PHP",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Compreendendo como unir duas linguagens para armazenar informações.
                  Antes de começarmos a manipular dados em um banco, precisamos entender como
                  o PHP se conecta ao MySQL, que é o sistema de banco de dados mais utilizado no
                  desenvolvimento web. Essa conexão é essencial para que possamos enviar, buscar
                  ou alterar informações em nossas tabelas.
                  <br><br>
                  Para isso, usamos uma função fundamental: mysqli_connect(), responsável por
                  estabelecer a ligação entre o servidor MySQL e o PHP. Dentro dos parênteses,
                  informamos parâmetros como o host, o usuário, a senha e o nome do banco de
                  dados, nesta ordem.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Um exemplo prático de conexão seria:",
        codigo: [
          "&lt;?php",
          "$conexao = mysqli_connect(\"localhost\", \"root\", \"\", \"escola\");",
          "",
          "if (!$conexao) {",
          "ㅤㅤdie(\"Erro na conexão: \". mysqli_connect_error());",
          "}",
          "echo \"Conexão bem-sucedida!\";",
          "?&gt;"
        ],
        arquivo: "conexao.php",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          "$conexao = mysqli_connect(\"localhost\", root, \"\", \"escola\");"
        ],
        alternativas: [
          "Faltam aspas no nome do usuário",
          "Falta ponto e vírgula no final",
          "O nome do banco está incorreto",
          "A função mysqli_connect não existe"
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Faltam aspas no nome do usuário",
        explicacao: "O erro está na falta de aspas no nome do usuário, que deveria ser \"root\". Sem aspas, o PHP não reconhece como texto (string).",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "Por que é importante verificar se a conexão ao MySQL foi bem-sucedida?",
        alternativas: [
          "Para evitar erros de execução e identificar falhas na comunicação.",
          "Para exibir mensagens ao usuário.",
          "Porque o MySQL exige senha sempre.",
          "Porque o PHP não funciona sem echo."
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Para evitar erros de execução e identificar falhas na comunicação.",
        explicacao: "Verificar a conexão garante que o sistema identifique falhas antes de tentar qualquer operação com o banco de dados, evitando erros graves e perda de informações.",
        botao: "CONTINUAR",
        progresso: 17,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  sql2: {
    titulo: "MySQL - Conceitos Básicos do MySQL e Workbench",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Para começar a trabalhar com <strong>bancos de dados</strong>, precisamos entender o que é o
                  SQL (Structured Query Language). Ele é uma linguagem usada para criar, consultar,
                  alterar e excluir dados em bancos relacionais. O MySQL é um dos sistemas mais
                  populares que utilizam SQL, sendo gratuito e muito usado em conjunto com PHP e
                  outras linguagens de programação.
                  <br><br>
                  No MySQL, utilizamos o programa MySQL Workbench, uma ferramenta visual que
                  facilita a criação e o gerenciamento de bancos de dados. Ao abri-lo, você se
                  conecta ao servidor local (geralmente "Local Instance MySQL"), e, a partir daí, pode
                  criar e manipular bancos com comandos SQL ou por interface gráfica.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: `Para criar um banco de dados, usamos o comando da linha 1. <br>
        Após isso, é possível selecionar o banco que será usado usamos o comando da linha 2. <br>
        Dentro dele, criamos as tabelas, que armazenam os dados organizados em colunas e linhas, 
        com o comando das linhas 4 a 9.`,
        codigo: [
          "CREATE DATABASE escola;",
          "USE escola;",
          "",
          "CREATE TABLE alunos (",
          "ㅤㅤid INT AUTO_INCREMENT PRIMARY KEY,",
          "ㅤㅤnome VARCHAR(100),",
          "ㅤㅤidade INT,",
          "ㅤㅤnota DECIMAL(3,1)",
          ");"
        ],
        arquivo: "Banco.sql",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          "CREATE DATABASE escola;",
          "USE escola;",
        ],
        alternativas: [
          "O nome do banco está incorreto",
          "Faltou ponto e vírgula após o USE",
          "O banco não existe",
          "O Workbench precisa ser reiniciado"
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "Faltou ponto e vírgula após o USE",
        explicacao: "O comando USE também precisa terminar com ponto e vírgula, assim como todos os comandos SQL.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "Qual comando é usado para criar um novo banco de dados?",
        alternativas: [
          "NEW DATABASE",
          "MAKE DATABASE",
          "CREATE DATABASE",
          "INSERT DATABASE"
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 16.66,
      },

      {
        tipo: "correcao",
        textoCorreto: "CREATE DATABASE",
        explicacao: "O comando correto para criar um banco de dados no MySQL é CREATE DATABASE.",
        botao: "CONTINUAR",
        progresso: 17,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  sql3: {
    titulo: "MySQL - Tipos de Dados e Alterações no MySQL Workbench",
    faces: [

      {
        tipo: "explicacao_tabela",
        tabela: `
          <table class="tabela">
            <thead>
              <tr>
                <th colspan="2" class="text-center">Tipos de Dados no MySQL</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>INT</strong></td><td>Números inteiros, como: Idades, contadores.</td></tr>
              <tr><td><strong>DECIMAL OU FLOAT</strong></td><td>Números com decimais</td></tr>
              <tr><td><strong>VARCHAR(n)</strong></td><td>Textos com limite de caracteres, definido por n.</td></tr>
              <tr><td><strong>TEXT</strong></td><td>Textos longos, sem limite de caracteres.</td></tr>
              <tr><td><strong>DATE</strong></td><td>Datas, em formato de: Ano, mês e dia.</td></tr>
              <tr><td><strong>DATETIME</strong></td><td>Data e hora completas.</td></tr>
              <tr><td><strong>BOOLEAN</strong></td><td>Valores de comparação, verdadeiro ou falso.</td></tr>
            </tbody>
          </table>
        `,
        conteudo: `Depois de criar o banco, é fundamental entender os tipos de valores que o MySQL aceita. Cada coluna em uma
        tabela precisa de um tipo que define o tipo de dadoque será armazenado. Os principais são os acima. Com esses exemplos 
        de valores, vamos observar uma aplicação prática desses valores em um banco de dados.`,
        botao: "CONTINUAR",
        progresso: 14.28,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Este é um banco de dados com alguns dos Tipos de Dados aplicados.",
        codigo: [
          "CREATE DATABASE mercado;",
          "USE mercado;",
          "",
          "CREATE TABLE produtos (",
          "ㅤㅤid INT AUTO_INCREMENT PRIMARY KEY,",
          "ㅤㅤnome VARCHAR(80),",
          "ㅤㅤpreco DECIMAL(5,2),",
          "ㅤㅤdisponível BOOLEAN",
          ");"
        ],
        arquivo: "tabela_produtos.sql",
        botao: "CONTINUAR",
        progresso: 14.28,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Dentro do Workbench, podemos alterar esses valores tanto com comandos SQL quanto pela interface visual.",
        codigo: [
          "-- Modificar o tipo de uma coluna",
          "ALTER TABLE produtos MODIFY nome VARCHAR(150);",
          "",
          "-- Adicionar uma nova coluna",
          "ALTER TABLE produtos ADD descricao TEXT;",
          "",
          "-- Renomear uma coluna",
          "ALTER TABLE produtos CHANGE preco valor DECIMAL(6,2);"
        ],
        arquivo: "alteracoes.sql",
        botao: "CONTINUAR",
        progresso: 14.28,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          "ALTER TABLE produtos MODIFY nome TEXT(200);"
        ],
        alternativas: [
          "TEXT não aceita limite de tamanho entre parênteses",
          "O comando ALTER TABLE está errado",
          "Faltou vírgula no final",
          "TEXT deveria estar em minúsculo"
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 14.28,
      },

      {
        tipo: "correcao",
        textoCorreto: "TEXT não aceita limite de tamanho entre parênteses",
        explicacao: "O tipo TEXT não aceita especificação de tamanho entre parênteses. Para textos com tamanho limitado, deve-se usar VARCHAR.",
        botao: "CONTINUAR",
        progresso: 14.28,
      },

      {
        tipo: "quiz",
        pergunta: "Qual tipo de dado é mais adequado para armazenar preços com centavos?",
        alternativas: [
          "INT",
          "DECIMAL",
          "VARCHAR",
          "TEXT"
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 14.28,
      },

      {
        tipo: "correcao",
        textoCorreto: "DECIMAL",
        explicacao: "O tipo DECIMAL é ideal para valores monetários e outros números que precisam de precisão decimal, como preços com centavos.",
        botao: "CONTINUAR",
        progresso: 15,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  sql4: {
    titulo: "MySQL - Inserindo e Lendo Dados (CRUD - Parte 1)",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Agora que já sabemos criar bancos e tabelas dentro do MySQL, chegou o momento
                  de aprender como colocar dados dentro delas e depois consultá-los. É aqui que
                  começam os primeiros passos do CRUD, um conjunto de operações fundamentais
                  no banco de dados: <strong>Create (criar), Read (ler), Update (atualizar) e Delete (excluir)</strong>. 
                  Nesta aula, veremos os dois primeiros, o Create e Read.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "O comando INSERT INTO é usado para inserir informações em uma tabela, da forma que esta implicita acima.",
        codigo: [
          "INSERT INTO alunos (nome, idade, nota)",
          "VALUES ('Lucas', 17, 8.5);"
        ],
        arquivo: "inserir_dados.sql",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Também é possível inserir vários registros de uma só vez.",
        codigo: [
          "INSERT INTO alunos (nome, idade, nota)",
          "VALUES ('Ana', 16, 9.0), ('Pedro', 18, 7.5), ('Maria', 17, 8.0);"
        ],
        arquivo: "inserir_multiplos.sql",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Depois de inserir os dados, é hora de visualizá-los. Para isso, usamos o comando SELECT.",
        codigo: [
          "-- Selecionar todas as colunas",
          "SELECT * FROM alunos;",
          "",
          "-- Selecionar colunas específicas",
          "SELECT nome, nota FROM alunos;",
          "",
          "-- Filtrar resultados",
          "SELECT * FROM alunos WHERE nota >= 8;"
        ],
        arquivo: "consultas.sql",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          "INSERT alunos (nome, idade, nota) VALUES ('Paulo', 18, 7.5);"
        ],
        alternativas: [
          "Faltou o ponto e vírgula",
          "O valor está incorreto",
          "Faltou a palavra 'INTO' após INSERT",
          "O nome da tabela está errado"
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "Faltou a palavra 'INTO' após INSERT",
        explicacao: "No MySQL, o comando correto é INSERT INTO. A ausência dessa palavra faz o código ser inválido.",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "qual_tag",
        tipoElemento: "comando",
        descricao: "Exibe a estrutura de uma Tabela.",
        alternativas: [
          "SELECT",
          "INSERT INTO",
          "DESCRIBE",
          "USE"
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "Exibe a estrutura da tabela, com tipos e restrições",
        explicacao: "O comando DESCRIBE (ou DESC) é usado para visualizar detalhes da estrutura de uma tabela existente, listando nomes de colunas, tipos de dados e chaves. Ele não exibe valores nem faz modificações.",
        botao: "CONTINUAR",
        progresso: 13,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  sql5: {
    titulo: "MySQL - Atualizando e Excluindo Dados (CRUD - Parte 2)",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Nesta etapa, continuaremos o aprendizado do CRUD, conhecendo as duas últimas
                  operações: Update e Delete. Elas servem, respectivamente, para atualizar dados
                  existentes e excluir registros de uma tabela.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "O comando UPDATE é utilizado quando precisamos alterar alguma informação de um registro já existente.",
        codigo: [
          "UPDATE alunos SET nota = 8.0 WHERE nome = 'Pedro';"
        ],
        arquivo: "atualizar.sql",
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Perceba o uso do SET, que indica qual coluna será alterada, e o WHERE, que
                  define qual linha receberá a mudança.
                  <br><br>
                  <strong><u>Sem o WHERE, todos os registros da tabela seriam modificados, o que pode causar grandes problemas.</u></strong>
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Já o comando DELETE é usado para remover dados do banco.",
        codigo: [
          "DELETE FROM alunos WHERE nome = 'Maria';"
        ],
        arquivo: "excluir.sql",
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize a estrutura SQL que insere um novo registro na tabela 'alunos' com nome e idade",
        instrucao: "Arraste os blocos para criar o comando INSERT INTO corretamente",
        blocos: [
          { id: "insert", conteudo: "INSERT INTO alunos" },
          { id: "colunas", conteudo: "(nome, idade)" },
          { id: "values", conteudo: "VALUES" },
          { id: "dados", conteudo: "('João', 18);" }
        ],
        ordemCorreta: ["insert", "colunas", "values", "dados"],
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "quiz",
        pergunta: "Qual comando é usado para apagar dados de uma tabela?",
        alternativas: [
          "ERASE",
          "DELETE",
          "REMOVE",
          "CLEAR"
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 20,
      },

      {
        tipo: "correcao",
        textoCorreto: "DELETE",
        explicacao: "O comando DELETE é o responsável pela exclusão de registros no MySQL, sempre acompanhado do WHERE para evitar a exclusão de todos os dados.",
        botao: "CONTINUAR",
        progresso: 20,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  sql6: {
    titulo: "MySQL - Relações e Boas Práticas no MySQL e Workbench",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Chegamos à parte final do aprendizado: entender como as tabelas se relacionam e
                  como trabalhar com boas práticas dentro do MySQL.
                  Em bancos reais, é comum que uma informação em uma tabela dependa de outra.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao_codigo",
        explicacao: "Exemplo de tabelas relacionadas com chave estrangeira.",
        codigo: [
          "CREATE TABLE turmas (",
          "ㅤㅤid INT AUTO_INCREMENT PRIMARY KEY,",
          "ㅤㅤnome_turma VARCHAR(50)",
          ");",
          "",
          "CREATE TABLE alunos (",
          "ㅤㅤid INT AUTO_INCREMENT PRIMARY KEY,",
          "ㅤㅤnome VARCHAR(100),",
          "ㅤㅤidade INT,",
          "ㅤㅤid_turma INT,",
          "ㅤㅤFOREIGN KEY (id_turma) REFERENCES turmas(id)",
          ");"
        ],
        arquivo: "tabelas_relacionadas.sql",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Nesse exemplo, cada aluno pertence a uma turma, e isso é garantido pela chave
                  estrangeira (FOREIGN KEY). Ela impede que sejam inseridos valores incorretos,
                  mantendo a integridade dos dados.
                  <br><br>
                  Essas relações também podem ser visualizadas no MySQL Workbench, através do
                  <strong>EER Diagram</strong>, que mostra graficamente como as tabelas estão conectadas.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Agora que dominamos o CRUD e as relações, é importante conhecer boas práticas:
                  <br><br>
                    <p class="text-left">
                      • Use nomes claros e padronizados para tabelas e colunas.
                      <br>
                      • Nunca use UPDATE ou DELETE sem o WHERE.
                      <br>
                      • Sempre defina uma chave primária (PRIMARY KEY).
                      <br>
                      • Mantenha os tipos de dados adequados para cada coluna.
                      <br>
                      • Evite duplicar informações desnecessariamente.
                      <br>
                      • Faça backups frequentes do banco (Export no Workbench).
                      <br>
                      • Comente códigos importantes com "--".
                    </p>
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "encontre_erro",
        codigo: [
          "ALTER TABLE alunos ADD FOREIGN KEY (id_turma) REFERENCES turma(id);"
        ],
        alternativas: [
          "O nome da chave está incorreto",
          "A tabela referenciada não existe com esse nome",
          "Faltou o comando SET",
          "A coluna não é numérica"
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "A tabela referenciada não existe com esse nome",
        explicacao: "A tabela correta se chama 'turmas', mas o comando está tentando referenciar 'turma', que não existe. O MySQL gera erro automaticamente quando isso ocorre.",
        botao: "CONTINUAR",
        progresso: 12.5,
      },

      {
        tipo: "quiz",
        pergunta: "Qual prática é recomendada ao atualizar ou excluir dados de uma tabela?",
        alternativas: [
          "Fazer sem WHERE, para garantir que tudo seja atualizado",
          "Usar WHERE sempre, para limitar os registros afetados",
          "Não usar chaves primárias",
          "Evitar fazer backup"
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 12.5,
      },

      {
        tipo: "correcao",
        textoCorreto: "Usar WHERE sempre, para limitar os registros afetados",
        explicacao: "O uso do WHERE é essencial para garantir que apenas os dados necessários sejam alterados ou apagados, evitando erros graves.",
        botao: "CONTINUAR",
        progresso: 13,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  //================================================= HARDWARE =================================================//

  hardware1: {
    titulo: "Hardware - Analisando Requisitos",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Antes de montar um computador, é essencial entender para que ele será
                  utilizado. Esse processo é conhecido como análise de requisitos, e consiste
                  em levantar as necessidades do usuário para definir quais componentes
                  atenderão melhor ao uso pretendido.
                  <br><br>
                  Por exemplo, um computador voltado para trabalho não precisará da mesma
                  configuração de um voltado para jogos ou edição de vídeo. Nesse caso,
                  analisamos fatores como: tipo de processador, quantidade de memória,
                  capacidade de armazenamento e até mesmo a potência da fonte.
                  <br><br>
                  Essa análise evita gastos desnecessários e garante equilíbrio entre custo e
                  desempenho. Em resumo, montar um computador começa no planejamento,
                  não na montagem física.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 33.33,
      },

      {
        tipo: "quiz",
        pergunta: "Por que é importante analisar os requisitos antes de montar um computador?",
        alternativas: [
          "Para escolher peças que combinem com a cor do gabinete.",
          "Para garantir compatibilidade e desempenho conforme a necessidade.",
          "Porque o computador não liga sem isso.",
          "Para gastar mais dinheiro."
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 33.33,
      },

      {
        tipo: "correcao",
        textoCorreto: "Para garantir compatibilidade e desempenho conforme a necessidade.",
        explicacao: "A análise de requisitos garante equilíbrio entre compatibilidade, desempenho e custo, evitando erros de montagem e compras equivocadas.",
        botao: "CONTINUAR",
        progresso: 34,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  hardware2: {
    titulo: "Hardware - Componentes I: CPU, Fonte e Placa-Mãe",
    faces: [

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Esses três componentes formam o núcleo funcional de qualquer computador.
                  A CPU (Unidade Central de Processamento), também chamada de
                  processador, é o "cérebro" da máquina, responsável por processar instruções
                  e cálculos. A placa-mãe é a base que liga todos os componentes, ela tem a
                  função de definir as conexões de todos sistemas. Já a fonte de alimentação é
                  quem fornece energia de forma estável e segura para todo o sistema.
                  <br><br>
                  Por exemplo, uma CPU da linha Ryzen precisa de uma placa-mãe com
                  soquete AM4, e uma fonte de 500W pode ser suficiente para sistemas
                  médios, mas insuficiente para placas de vídeo potentes. Então a escolha de
                  cada componente reflete nas capacidades finais de um computador.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 25
      },

      {
        tipo: "quiz",
        pergunta: "'Fonte de 300W foi instalada em um PC gamer com placa de vídeo dedicada e processador de alto desempenho.' <br> O que tem de errado com essa frase?",
        alternativas: [
            "A fonte tem baixa potência para o consumo do sistema.",
            "Placa de vídeo incompativel para o processador.",
            "A Fonte tem uma potência muito alta para o sistema.",
            "O Processador está puxando muito do computador."
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 25
      },

      {
        tipo: "correcao",
        textoCorreto: "A fonte tem baixa potência para o consumo do sistema.",
        explicacao: "A escolha dos componentes foi errada, sendo incompatíveis no funcionamento, nesse caso a fonte não é capaz de alimentar um sistema de alto desempenho como citado.",
        botao: "CONTINUAR",
        progresso: 25
      },

      {
        tipo: "qual_tag",
        tipoElemento: "componente",
        descricao: "Interliga e comunica todos os componentes do computador.",
        alternativas: [
          "Fonte",
          "Placa-mãe",
          "Memória",
          "Processador"
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 25
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101
      },
    ],
  },

  hardware3: {
    titulo: "Hardware - Componentes II: Memória, HDD e SSD",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Depois de energia e processamento, o computador precisa de memória e
                  espaço para guardar dados. A memória RAM é variável é usada para
                  armazenar informações temporárias enquanto o sistema está ligado,
                  garantindo uma execução veloz das tarefas. Já os HDDs e os SSDs têm a
                  função de armazenar dados de forma permanente.
                  <br><br>
                  O HDD utiliza discos magnéticos, oferecendo grande capacidade a menor
                  custo, mas menor velocidade. O SSD, por outro lado, utiliza memória flash,
                  sendo muito mais rápido, o que reduz o tempo de inicialização e melhora o
                  desempenho geral. A combinação de ambos é comum: SSD para o sistema
                  operacional e HDD para arquivos grandes.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 25,
      },

      {
        tipo: "quiz",
        pergunta: "Um técnico instalou o sistema operacional em um HDD, mesmo possuindo um SSD disponível, qual foi o erro?",
        alternativas: [
            "O HDD consome muita energia.",
            "O SSD é o mais indicado para o sistema operacional.",
            "O HDD não suporta drivers.",
            "O SSD não armazena arquivos grandes."
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 25
      },

      {
        tipo: "correcao",
        textoCorreto: "O SSD é o mais indicado para o sistema operacional.",
        explicacao: "O SSD oferece desempenho superior, sendo o ideal para o sistema operacional, reduzindo e agilizando o tempo de inicialização da máquina e sistema operacional.",
        botao: "CONTINUAR",
        progresso: 25,
      },

      {
        tipo: "quiz",
        pergunta: "Qual a principal vantagem do SSD em relação ao HDD?",
        alternativas: [
          "Maior capacidade de armazenamento.",
          "Maior velocidade de leitura e escrita.",
          "Menor durabilidade.",
          "Preço mais acessível."
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 25,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  hardware4: {
    titulo: "Hardware - Periféricos e Gabinetes",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Os periféricos são os dispositivos que permitem a entrada e saída de
                  informações, como teclado, mouse, monitor, impressora e caixas de som.
                  Eles conectam o usuário à máquina, sendo essenciais para o uso cotidiano.
                  Já o gabinete é como uma cápsula que abriga e protege os componentes
                  internos, além de garantir ventilação adequada e organização dos cabos.
                  <br><br>
                  Um bom gabinete deve possuir ventoinhas, bom espaço interno e fluxo de ar
                  eficiente, prevenindo superaquecimento. Além disso, o tipo de gabinete deve
                  ser compatível com o formato da placa-mãe (ATX, Micro ATX, Mini ITX).
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 25
      },

      {
        tipo: "quiz",
        pergunta: "O usuário instalou uma placa-mãe ATX em um gabinete Mini ITX., no que ele errou?",
        alternativas: [
            "O gabinete é pequeno demais para a placa-mãe.",
            "A placa-mãe é muito pequena para o gabinete.",
            "Instalou a placa-mãe errado.",
            "Ele não errou em nada."
        ],
        correta: 0,
        botao: "VALIDAR",
        progresso: 25
      },

      {
        tipo: "correcao",
        textoCorreto: "O gabinete é pequeno demais para a placa-mãe.",
        explicacao: "Há incompatibilidade física, o gabinete é menor e não comporta o tamanho da placa-mãe.",
        botao: "CONTINUAR",
        progresso: 25
      },

      {
        tipo: "quiz",
        pergunta: "Um bom gabinete deve possuir ventoinhas, um espaço limitado, e muito fluxo de ar. <br> O que está errado com essa afirmação?",
        alternativas: [
            "O gabinete deve possuir ventoinhas.",
            "O gabinete deve ter um espaço limitado.",
            "O gabinete precisa de um bom fluxo de ar.",
            "Todas as opções estão erradas."
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 25
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101
      },
    ],
  },

  hardware5: {
    titulo: "Hardware - Softwares e Preparação para Windows",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande" class="text-center text-break">
                  Depois da montagem física, o computador ainda não "funciona" como
                  esperamos. Para isso, é necessário instalar softwares fundamentais,
                  começando pelo sistema operacional — o intermediário entre o hardware e o
                  usuário. No caso mais comum, utilizamos o Windows, que exige preparação
                  adequada de hardware e dispositivos antes da instalação.
                  <br><br>
                  O primeiro passo é verificar se o computador reconhece corretamente os
                  componentes através do BIOS/UEFI, acessado ao ligar o PC (geralmente
                  pelas teclas Del ou F2). Nele, é possível configurar a ordem de boot,
                  definindo o dispositivo de inicialização, geralmente um pendrive ou DVD com
                  o instalador do Windows.
                  <br><br>
                  É importante que o computador esteja com todas as conexões internas
                  firmes, memória RAM e armazenamento reconhecidos e dispositivos de
                  entrada (teclado e mouse) funcionando. Com o pendrive de instalação criado
                  — que pode ser feito pelo Media Creation Tool da Microsoft, inicia-se o
                  processo de instalação do sistema.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p class="text-center text-break">
                  Após a instalação, vêm os drivers, que são programas que permitem a
                  comunicação entre o sistema e o hardware. Cada placa-mãe, placa de vídeo
                  e periférico podem exigir seus próprios drivers, normalmente disponíveis nos
                  sites dos fabricantes. Sem eles, o desempenho pode ser reduzido ou certas
                  funções podem nem funcionar.
                  <br><br>
                  Por fim, instala-se os softwares de produtividade e segurança, como
                  navegadores, pacotes de escritório e antivírus. Isso completa a preparação
                  para o uso pleno do computador.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "Durante a instalação do Windows, o sistema não reconhece o disco SSD novinho.",
        alternativas: [
            "O SSD está queimado.",
            "O BIOS está configurado no modo errado ou faltam drivers.",
            "A memória RAM está com defeito.",
            "O teclado está desconectado."
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 16.66
      },

      {
        tipo: "correcao",
        textoCorreto: "O BIOS está configurado no modo errado ou faltam drivers.",
        explicacao: "É possível que o modo SATA esteja configurado incorretamente no BIOS (por exemplo, em IDE ao invés de AHCI), ou faltem drivers do controlador de armazenamento. Ele poderia estar queimado também, mas é novinho...",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "quiz",
        pergunta: "O que pode ser nomeado de intermédio entre o hardware e o usuário?",
        alternativas: [
            "Os drivers das placas-mãe e de vídeo.",
            "Os componentes e periféricos.",
            "O sistema operacional.",
            "O armazenamento e memória RAM."
        ],
        correta: 2,
        botao: "VALIDAR",
        progresso: 16.66
      },

      {
        tipo: "correcao",
        textoCorreto: "O BIOS está configurado no modo errado ou faltam drivers.",
        explicacao: "Aqui a resposta de fato é o sistema operacional, capaz de fazer com que o computador de fato seja funcional, porque apesar da máquina comos componentes e periféricos corretos, a mesma necessita de um sistema operacional.",
        botao: "CONTINUAR",
        progresso: 16.66,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  hardware6: {
    titulo: "Hardware - Montando um Computador (Parte I)",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande" class="text-center text-break">
                  Com os componentes definidos e os requisitos analisados, chega o momento
                  da montagem física do computador. Essa etapa requer cuidado, organização
                  e atenção aos detalhes. Antes de começar, é fundamental trabalhar em um
                  ambiente limpo e sem eletricidade estática, utilizando, se possível, pulseira
                  antiestática.
                  <br><br>
                  O primeiro passo é preparar a placa-mãe fora do gabinete, facilitando a
                  instalação inicial. Nela, encaixa-se o processador (CPU) no soquete
                  correspondente, o encaixe deve ser firme, sem força excessiva. Depois,
                  aplica-se uma fina camada de pasta térmica sobre o processador e instala-se
                  o cooler (ventoinha do processador), travando corretamente suas presilhas.
                  <br><br>
                  Em seguida, instala-se os módulos de memória RAM nos slots adequados,
                  observando o encaixe correto da trava e a posição do entalhe. A partir daí, a
                  placa-mãe está pronta para ser posicionada dentro do gabinete, com os
                  espaçadores metálicos (standoffs) fixados para evitar curto-circuitos.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 33.33,
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande" class="text-center text-break">
                  Depois disso, conecta-se à fonte de alimentação, fixando-a com os parafusos
                  traseiros do gabinete. É importante organizar os cabos, separando o conector
                  de 24 pinos da placa-mãe e o de 8 pinos da CPU. A organização dos cabos
                  não é apenas um fator estético, ele garante melhor ventilação e facilita futuras
                  manutenções.
                  <br><br>
                  Por fim, adiciona-se o dispositivo de armazenamento (SSD ou HDD),
                  fixando-o nas baias adequadas e conectando os cabos SATA de dados e de
                  energia.
                  <br><br>
                  <strong>Ou seja de forma resumida podemos separar em exatas 7 etapas, como:</strong>
                  <br><br>
                  <p id="exp-grande" class="text-left">
                  • 1ª Etapa – Preparar a placa-mãe e instalar o processador.<br>
                  • 2ª Etapa – Aplicar a pasta térmica e instalar o cooler.<br>
                  • 3ª Etapa – Instalar a memória RAM.<br>
                  • 4ª Etapa – Fixar a placa-mãe no gabinete.<br>
                  • 5ª Etapa – Instalar a fonte de alimentação.<br>
                  • 6ª Etapa – Conectar e organizar os cabos.<br>
                  • 7ª Etapa – Instalar o dispositivo de armazenamento.
                  <br><br>
                  <strong>*LEMBRE-SE DA SEQUÊNCIA*</strong>
                  </p>
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 33.33,
      },

      {
        tipo: "dragdrop",
        titulo: "Organize as etapas de montagem em ordem correta",
        instrucao: "Arraste os blocos de um lado para o outro",
        blocos: [
          { id: "etapa5", conteudo: "Instalar a fonte de alimentação." },
          { id: "etapa3", conteudo: "Instalar a memória RAM." },
          { id: "etapa7", conteudo: "Instalar o dispositivo de armazenamento." },
          { id: "etapa1", conteudo: "Preparar a placa-mãe e instalar o processador." },
          { id: "etapa6", conteudo: "Conectar e organizar os cabos." },
          { id: "etapa2", conteudo: "Aplicar a pasta térmica e instalar o cooler." },
          { id: "etapa4", conteudo: "Fixar a placa-mãe no gabinete." },
        ],
        ordemCorreta: ["etapa1", "etapa2", "etapa3", "etapa4", "etapa5", "etapa6", "etapa7"],
        botao: "VALIDAR",
        progresso: 34,
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101,
      },
    ],
  },

  hardware7: {
    titulo: "Hardware - Montando um Computador (Parte II)",
    faces: [
      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande-mobile" class="text-center text-break">
                  Com os componentes principais instalados, é hora de finalizar a montagem e
                  realizar os testes de inicialização. Essa etapa é decisiva, pois garante que o
                  computador foi montado corretamente e está pronto para receber o sistema
                  operacional.
                  <br><br>
                  Primeiramente, conectam-se os cabos frontais do gabinete: botões de energia
                  (Power SW), reset (Reset SW), LEDs de atividade (HDD LED e Power LED) e
                  portas USB frontais. Esses conectores devem ser ligados nos pinos
                  específicos da placa-mãe, geralmente identificados no manual.
                  <br><br>
                  Em seguida, instala-se a placa de vídeo (GPU) no slot PCI Express x16,
                  fixando-a com parafusos e conectando os cabos de energia dedicados, se
                  necessários. Também podem ser conectadas placas de expansão (como de
                  rede ou som) conforme a necessidade.
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66
      },

      {
        tipo: "explicacao",
        conteudo: `
          <div class="ctnc">
            <div class="lyt_exp">
              <div class="dp exp border-3 rounded-4">
                <p id="exp-grande" class="text-center text-break">
                  <strong>Após isso, realiza-se uma revisão completa das conexões:</strong>
                  <br><br>
                    <p id="exp-grande" class="text-left">
                    • Cabos de alimentação da CPU e da placa-mãe devidamente firmes;<br>
                    • Cabos SATA bem conectados aos dispositivos;<br>
                    • Coolers e ventoinhas ligados aos conectores corretos (CPU_FAN, SYS_FAN);<br>
                    • Nenhum cabo bloqueando o fluxo de ar.
                  <br><br>
                  Ao finalizar, fecha-se o gabinete e conecta-se o monitor, teclado e mouse.
                  Liga-se a máquina e observa-se se há vídeo, ruídos anormais ou mensagens
                  de erro. Caso o sistema não inicie, o ideal é testar o mínimo de componentes
                  possíveis (CPU, uma RAM e vídeo) para identificar falhas.
                  <br><br>
                  Se tudo ocorrer bem, acessa-se o BIOS/UEFI para confirmar o
                  reconhecimento de todos os dispositivos e ajustar configurações básicas,
                  como data, hora e ordem de boot. Após isso, o computador está pronto para
                  receber o sistema operacional, concluindo o processo de montagem.
                  </p>
                </p>
              </div>
            </div>
          </div>
        `,
        botao: "CONTINUAR",
        progresso: 16.66
      },

      {
        tipo: "quiz",
        pergunta: "Durante o teste, o computador liga, mas não aparece a imagem no monitor. O que ele pode fazer para arrumar isto?",
        alternativas: [
          "Verificar se o HDD está cheio.",
          "Verificar se o cooler está girando rápido.",
          "Verificar se o gabinete está fechado.",
          "Verificar se a GPU está bem encaixada e o cabo de vídeo está no local correto."
        ],
        correta: 3,
        botao: "VALIDAR",
        progresso: 16.66
      },

      {
        tipo: "correcao",
        textoCorreto: "Verificar se a GPU está bem encaixada e o cabo de vídeo está no local correto.",
        explicacao: "Pode ser que a placa de vídeo não esteja corretamente encaixada ou o cabo de vídeo esteja conectado na saída errada (integrada ao invés da GPU).",
        botao: "CONTINUAR",
        progresso: 16.66
      },

      {
        tipo: "quiz",
        pergunta: "O que deve ser feito antes de instalar o sistema operacional?",
        alternativas: [
          "Fechar o gabinete e entregar ao cliente.",
          "Testar o hardware e verificar se todos os componentes estão reconhecidos.",
          "Colocar a pasta térmica novamente.",
          "Instalar os drivers da placa de vídeo."
        ],
        correta: 1,
        botao: "VALIDAR",
        progresso: 16.66
      },
      
      {
        tipo: "correcao",
        textoCorreto: "Testar o hardware e verificar se todos os componentes estão reconhecidos.",
        explicacao: "Testar o hardware antes da instalação garante que não há falhas físicas ou incompatibilidades, evitando retrabalhos e garantindo estabilidade.",
        botao: "CONTINUAR",
        progresso: 17
      },

      {
        tipo: "final",
        botao: "TERMINAR",
        progresso: -101
      },
    ],
  },

};