<?php 
    require_once 'bds/bd_config.php'; 
    atualizarSessao($pdo); 
    verificarLogin();

    // Variáveis para o sistema de tracking de pontos e meda
    $usuario = $_SESSION['usuario_dados'];
    $apelido = $usuario['apelido'] ?? 'Usuário';
    $pontos = $usuario['pontos'] ?? 0;
    $foto_atual = $_SESSION['usuario_foto'] ?? 'pad_items/imagens/perfil/foto1.png';
    $medalhas = [];
    $secreta = "0";
    if ($pontos >= 10000){ $secreta = "1"; };
    if (!isset($_SESSION['foto_perfil_index'])) {
        $_SESSION['foto_perfil_index'] = 0;
    }

    // Mapeamentos
    $fotos_perfil = [
        'pad_items/imagens/perfil/foto1.png', 
        'pad_items/imagens/perfil/foto2.png',
        'pad_items/imagens/perfil/foto3.png',
        'pad_items/imagens/perfil/foto4.png'
    ];

    $classesPatentes = [
        0 => 'patente-basica broto-floresta',
        1 => 'patente-basica raizes-jabuti',
        2 => 'patente-intermedia habituante-floresta',
        3 => 'patente-intermedia explorador-javali',
        4 => 'patente-avancada nativo-montanhas',
        5 => 'patente-avancada construtor-castor',
        6 => 'patente-elite guardiao-savana',
        7 => 'patente-elite sabio-elefante',
        8 => 'patente-mestre alpha-ecossistema',
        9 => 'patente-lenda universo-digital'
    ];

    $totalAulasPorModulo = [
        'html' => 12,
        'js' => 9,
        'php' => 13,
        'hardware' => 7 
    ];

    // Foreach para pegar o progresso das aulas e passar para as medalhas
    foreach ($totalAulasPorModulo as $modulo => $totalAulas) {
        $aulasCompletas = $usuario['a_' . $modulo] ?? 0;
        $progresso = ($aulasCompletas / $totalAulas) * 100;
        $medalhas[$modulo] = [
            'aulas_completas' => $aulasCompletas,
            'total_aulas' => $totalAulas,
            'progresso' => $progresso,
            'bronze' => $progresso >= 50,
            'ouro' => $progresso >= 100
        ];
    }
    // Função para calcular as patentes
    function calcularPatenteDetalhada($medalhas, $secreta) {
        $bronzeCount = 0;
        $ouroCount = 0;
        
        foreach ($medalhas as $modulo => $dados) {
            if ($dados['bronze']) $bronzeCount++;
            if ($dados['ouro']) $ouroCount++;
        }

        $medalhaSecretaCount = ($secreta === "1") ? 1 : 0;
        $totalMedalhas = $bronzeCount + $ouroCount + $medalhaSecretaCount;
        
        $patentes = [
            0 => [
                'nome' => 'Broto da Floresta :', 
                'desc' => '- Primeiros passos no mundo da programação!'
            ],
            1 => [
                'nome' => 'Raízes do Jabuti :',
                'desc' => '- Paciência e constância começam a dar frutos!'
            ],
            2 => [
                'nome' => 'Habituante da Floresta :',
                'desc' => '- Já se sente em casa entre os códigos!'
            ],
            3 => [
                'nome' => 'Explorador do Javali :', 
                'desc' => '- Força e determinação para explorar novos conceitos!'
            ],
            4 => [
                'nome' => 'Nativo das Montanhas :',
                'desc' => '- Domina os terrenos mais elevados do conhecimento!'
            ],
            5 => [
                'nome' => 'Construtor do Castor :',
                'desc' => '- Constrói sistemas sólidos e complexos!'
            ],
            6 => [
                'nome' => 'Guardião da Savana :',
                'desc' => '- Protege e guia outros no ecossistema!'
            ],
            7 => [
                'nome' => 'Sábio do Elefante :',
                'desc' => '- Sabedoria e memória excepcionais em múltiplas linguagens!'
            ],
            8 => [
                'nome' => 'Alpha do Ecossistema :',
                'desc' => '- Domina todos os habitats do desenvolvimento!'
            ],
            9 => [
                'nome' => 'LENDA DO UNIVERSO DIGITAL :',
                'desc' => '- Conquistou até os segredos mais profundos do ecossistema!'
            ]
        ];
        
        $nivel = min($totalMedalhas, 10);
        
        return $patentes[$nivel];
    }

    // Variáveis para as medalhas
    $infoPatente = calcularPatenteDetalhada($medalhas, $secreta);
    $patenteUsuario = $infoPatente['nome'];
    $descricaoPatente = $infoPatente['desc'];
    $bronzeCount = 0;
    $ouroCount = 0;

    // Foreach para incrementar o número de medalhas
    foreach ($medalhas as $modulo => $dados) {
        if ($dados['bronze']) $bronzeCount++;
        if ($dados['ouro']) $ouroCount++;
    }

    // Variáveis finais do sistema
    $nivel = min($bronzeCount + $ouroCount + ($secreta === "1" ? 1 : 0), 10);
    $classePatente = $classesPatentes[$nivel];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft - Perfil</title>
    <link rel="icon" type="image/x-icon" href="pad_items/imagens/favicon.png">
    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="pad_Items/comps/pad_JS.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="pad_Items/comps/pad_CSS.css">
    <style>
        .main{ justify-items: center; max-width: 1760px; margin-top: 2%; }
        .Bloqueada{ border-radius: 20px; }
        
        .lyt_perfil{ display:flex; align-items: center;}
        .lyt_perfil{ flex-direction: column; width: 100%; }
        .btn_equipe{ margin: 2% 0 2% 0; padding: 1% 1.5%; width: 50%; font-size: x-large;}
        
        .div_Info, .div_badges, .div_pontuacao{ background-color:  #38405d; border: #292d41 solid; width: 90%; }
        .div_Info{ display: flex; flex-direction: row; padding: 1% }

        #Imagem_perfil{ width: 150px; height: 100%; }
        #apl { font-size: xxx-large; font-weight: lighter; color: #fffb00; }
        #pat { font-size: large;}
        #desc {font-size: medium;}

        #Info_textos{ margin: 1.5% 0 0 2%; font-size: small;}
        #Info_textos p{ margin: 0; padding: 0;}
        .div_divisao { height: 80%; border: 2px #181923 solid; border-radius: 10px; margin: 0 7%; }

        .linha1, .linha2{ display: flex; justify-content: center; align-items: center; width: 100%; }

        .div_pontuacao{ margin-top: 1%; padding: 1%; display: flex; flex-direction: column; justify-content: center; height: 21vh; }

        .foto-clicavel { cursor: pointer; transition: all 0.3s ease; border-radius: 10px; overflow: hidden; position: relative; }
        .foto-clicavel:hover { transform: scale(1.01); }

        .foto-clicavel:hover::after {
            content: "Clique para trocar!";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            text-align: center;
            padding: 5px;
            font-size: 12px;
            opacity: 0;
            transition: opacity 0.2s ease;
        }

        .foto-clicavel:hover::after { opacity: 1;}
        #foto_perfil_img { transition: all 0.3s ease; border-radius: 8px; }
        .div_pontuacao h3{ margin-top: 1%; color: #03f490;}

        .div_badges{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1%;
            background-color:  #38405d;
            border: #292d41 solid;
        }

        .Img_badge {
            width: 120px;
            height: 120px;
            aspect-ratio: 1/1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .Img_badge img { width: 100%; height: 100%; object-fit: cover; }

        .bdg_div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0.5%;
            height: 180px;
            background-color:  #292d41;
            border: 3px #181923 solid;
            border-radius: 8px;
            padding: 5%;
            width: 30%;
        }
        .bdg_div p{ margin: 0; }

        .ctnc_badge{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .broto-floresta { color: #32CD32; font-weight: lighter; }
        .raizes-jabuti {  color: #228B22; font-weight: lighter; }
        .habituante-floresta { color: #228B22;font-weight: lighter; }
        .explorador-javali { color: #D2691E; font-weight: lighter; }
        .nativo-montanhas {  color: #696969; }
        .construtor-castor { color: #CD853F; }
        .guardiao-savana { color: #DAA520; }
        .sabio-elefante { font-weight: bold; background: linear-gradient(270deg, #192A51, #2C3E76, #415A9B, #5D7BC0, #415A9B, #2C3E76, #192A51 ); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 600% 100%; animation: loopColor 8s linear infinite; } 
        .alpha-ecossistema { font-weight: bold; background: linear-gradient(270deg, #FF4500, #FF6347, #FF7F50, #FFA500, #FF7F50, #FF6347, #FF4500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 600% 100%; animation: loopColor 8s linear infinite; } 
        .universo-digital { font-weight: bold; background: linear-gradient(270deg, red, orange, yellow, green, blue, indigo, violet, red, orange, yellow, green, blue, indigo, violet, red); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-size: 300% 100%; animation: loopColor 3s linear infinite; box-shadow} 
        @keyframes loopColor { 0% { background-position: 0% 0%; } 100% { background-position: 100% 0%; } }

        #html_bronze img, #js_bronze img, #php_bronze img, #hardware_bronze img{ animation: sombraBronze 3s infinite alternate; }
        #html_ouro img, #js_ouro img, #php_ouro img, #hardware_ouro img{ animation: sombraOuro 3s infinite alternate; }
        #pontos_secreta{animation: sombraPonto 1s infinite alternate;}

        @keyframes sombraBronze { 0% { filter: drop-shadow(0px 0px 10px rgba(110, 53, 0, 0.80)); } 100% { filter: drop-shadow(0px 0px 13px rgba(246, 156, 71, 0.75)); } }
        @keyframes sombraOuro { 0% { filter: drop-shadow(0px 0px 10px rgba(152, 127, 0, 0.75)); } 100% { filter: drop-shadow(0px 0px 13px rgba(255, 222, 58, 0.75)); }}
        @keyframes sombraPonto { 0% { filter: drop-shadow(0px 0px 20px rgba(144, 0, 169, 0.95)); } 100% { filter: drop-shadow(0px 0px 25px rgba(165, 0, 220, 0.95)); }}

        /* Responsividade */
        @media screen and (max-width: 1024px) {

            .btn_equipe{ width: 80%; font-size: large;}
            #Imagem_perfil{ width: 90px; height: 100%; }
            .div_Info, .div_badges, .div_pontuacao{ width: 100%; }
            .div_Info{ margin-top: 5%; }
            .div_pontuacao{ height: 20vh; margin-top: 5%; }
            
            .bdg_div { height: 100px; width: 60%; padding: 0;}
            .div_badges{ margin-top: 5%; font-size: smaller;}
            .bdg_div p{ margin-bottom: 2%;}
            .Img_badge { width: 55px; height: 55px; }
            
            .Bloqueada{ border-radius: 10px; }
            .Bloqueada::after { width: 35px; height: 35px; }

            #apl { font-size: medium; font-weight: bolder; }
            #pat, #desc { font-size: small; font-weight: lighter; }
            
            #Info_textos{ margin: 1.5% 0 0 4%;}
        }
        
    </style>
</head>
<script>
    // Array de fotos (deve ser igual ao PHP)
    const fotosPerfil = [
        'pad_items/imagens/perfil/foto1.png', 
        'pad_items/imagens/perfil/foto2.png',
        'pad_items/imagens/perfil/foto3.png',
        'pad_items/imagens/perfil/foto4.png'
    ];
    let fotoIndex = <?php echo array_search($foto_atual, $fotos_perfil) !== false ? array_search($foto_atual, $fotos_perfil) : 0; ?>;

    // Função para trocar a foto
    function trocarFoto() {
        fotoIndex = (fotoIndex + 1) % fotosPerfil.length;
        const imgElement = document.getElementById('foto_perfil_img');

        imgElement.style.opacity = '0.7';
        imgElement.style.transform = 'scale(0.95)';
            
        setTimeout(() => {
            imgElement.src = fotosPerfil[fotoIndex];
                
            setTimeout(() => {
                imgElement.style.opacity = '1';
                imgElement.style.transform = 'scale(1)';
            }, 50);
        }, 200);

        atualizarFotoNoServidor(fotoIndex);
    }
    // Função para atualizar no servidor sem recarregar
    function atualizarFotoNoServidor(novoIndex) {
        fetch('bds/bd_config.php?atualizar_foto=' + novoIndex)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                return response.text();
            })
            .then(data => {
                console.log('Foto atualizada:', data);
                const headerFoto = document.querySelector('.btns_header .img_header[alt="Foto Perfil"]');
                if (headerFoto) {
                    headerFoto.src = fotosPerfil[fotoIndex];
                }
            })
            .catch(error => {
                console.log('Erro:', error);
                alert('Erro ao atualizar foto. Tente novamente.');
            });
    }
</script>
<body>
    <!-- Cabeçalho -->
    <div id="header" class="d-flex align-items-center justify-content-between px-3">
        <div class="btns_header d-flex align-items-center">
            <button class="btn_header btn_transparente" onclick="link(1)"><img class="img_header" src="pad_Items/imagens/icones/Casa.png" alt="Início"></button>
        </div>
        <div class="p_header text-center flex-grow-1">
            <p class="mb-0 fs-4 text-center flex-grow-1">PERFIL</p>
        </div>
        <div class="btns_header d-flex align-items-center">
            <button class="btn_header btn_transparente" onclick="logout()"><img class="img_header" src="pad_Items/imagens/icones/Logout.png" alt="Logout"></button>
            <button style="margin-left: 1%;" class="btn_header btn_transparente" onclick="link(2)"><img class="img_header perfil_imagem" src="<?php echo obterFotoPerfil(); ?>" alt="Foto Perfil"></button>
        </div>
    </div>
    <!-- Container das divs do perfil -->
    <div class="main container">
        <!-- Div para formatar o as divs de info e badges -->
        <div class="lyt_perfil">
            <!-- Div para mostar as informações do caba -->
            <div class="div_Info border-3 rounded-4">
                <div id="Imagem_perfil" class="foto-clicavel" onclick="trocarFoto()">
                    <img id="foto_perfil_img" src="<?php echo $foto_atual; ?>" alt="Perfil" height="100%" width="100%">
                </div>

                <div id="Info_textos">
                    <p id="apl"><?php echo htmlspecialchars($apelido); ?></p>
                    <p id="pat" class="<?php echo $classePatente; ?>"><?php echo $patenteUsuario; ?></p>
                    <p id="desc"><?php echo $descricaoPatente; ?></p>
                </div>
            </div>

        <!-- Div para mostrar a pontuação -->
        <div class="div_pontuacao border-3 rounded-4">
            <h2 class="text-center">Sua Pontuação atual é:</h2>
            <h3 class="text-center"><?php echo $pontos; ?></h3>
        </div>

        <!-- Div para mostar as badges -->
        <div class="div_badges border-3 rounded-4">
            <!-- Container da Linha 1 -->
            <div class="linha1"> 
                <!-- Medalhas HTML -->
                <div class="bdg_html bdg_div">
                    <p>HTML (<?php echo $medalhas['html']['aulas_completas']; ?>/<?php echo $medalhas['html']['total_aulas']; ?>)</p>
                    <div class="ctnc_badge">
                        <div id="html_bronze" class="Img_badge <?php echo !$medalhas['html']['bronze'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/html_bronze.png" alt="html-bronze-badge" height="17%" width="17%"> </div>
                        <div class="div_divisao"></div>
                        <div id="html_ouro" class="Img_badge <?php echo !$medalhas['html']['ouro'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/html_ouro.png" alt="html-ouro-badge" height="17%" width="17%"> </div>
                    </div>
                </div>

                <!-- Medalhas JS -->
                <div class="bdg_js bdg_div">
                    <p>JAVASCRIPT (<?php echo $medalhas['js']['aulas_completas']; ?>/<?php echo $medalhas['js']['total_aulas']; ?>)</p>
                    <div class="ctnc_badge">
                        <div id="js_bronze" class="Img_badge <?php echo !$medalhas['js']['bronze'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/javascript_bronze.png" alt="js-bronze-badge" height="17%" width="17%"> </div>
                        <div class="div_divisao"></div>
                        <div id="js_ouro" class="Img_badge <?php echo !$medalhas['js']['ouro'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/javascript_ouro.png" alt="js-ouro-badge" height="17%" width="17%"> </div>
                    </div>
                </div>
            </div>
            <!-- Container da Linha 2 -->
            <div class="linha2">
                <!-- Medalhas PHP -->
                <div class="bdg_php bdg_div">
                    <p>PHP (<?php echo $medalhas['php']['aulas_completas']; ?>/<?php echo $medalhas['php']['total_aulas']; ?>)</p>
                    <div class="ctnc_badge">
                        <div id="php_bronze" class="Img_badge <?php echo !$medalhas['php']['bronze'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/php_bronze.png" alt="php-bronze-badge" height="17%" width="17%"> </div>
                        <div class="div_divisao"></div>
                        <div id="php_ouro" class="Img_badge <?php echo !$medalhas['php']['ouro'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/php_ouro.png" alt="php-ouro-badge" height="17%" width="17%"> </div>
                    </div>
                </div>
                <!-- Medalhas HARDWARE -->
                <div class="bdg_hardware bdg_div">
                    <p>HARDWARE (<?php echo $medalhas['hardware']['aulas_completas']; ?>/<?php echo $medalhas['hardware']['total_aulas']; ?>)</p>
                    <div class="ctnc_badge">
                        <div id="hardware_bronze" class="Img_badge <?php echo !$medalhas['hardware']['bronze'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/hardware_bronze.png" alt="php-bronze-badge" height="17%" width="17%"> </div>
                        <div class="div_divisao"></div>
                        <div id="hardware_ouro" class="Img_badge <?php echo !$medalhas['hardware']['ouro'] ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/hardware_ouro.png" alt="php-ouro-badge" height="17%" width="17%"> </div>
                    </div>
                </div>
            </div>
            <!-- Medalhas SECRETAS -->
            <div class="bdg_hardware bdg_div">
                <p>SECRETA (<?php echo"$secreta" ?>/1)</p>
                <div class="ctnc_badge">
                    <div id="pontos_secreta" class="Img_badge <?php echo ($secreta !== "1") ? 'Bloqueada' : ''; ?>"> <img src="pad_Items/imagens/medalhas/pontos_secreta.png" alt="pontos-secreta-badge" height="17%" width="17%"> </div>
                </div>
            </div>
        </div>
        <div></div><button class="btn_equipe btn_padrao btn btn-dark rounded-4" onclick="link(9)">CONHEÇA A NOSSA EQUIPE!</button>
    </div>
</div>
</body>
</html>