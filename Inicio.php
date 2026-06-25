<?php require_once 'bds/bd_config.php'; atualizarSessao($pdo); verificarLogin();?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CodeCraft - Início</title>
<link rel="icon" type="image/x-icon" href="pad_items/imagens/favicon.png">
<script src="bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="pad_Items/comps/pad_JS.js"></script>
<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="pad_Items/comps/pad_CSS.css">
<style>
    .main { width: 100%; height: 92%; justify-items: center; }

    .lyt_inicio {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.8% ;
    }

    .geral {
        width: 27%;
        height: 100%;
        margin: 0 1.2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .placas{
        width: 75%;
        height: 5.5%;
        font-family: var(--Font_PixBold);
        padding-top: 2.2%;
        margin-bottom: 1%;
        background-color: var(--cor3);
        border: 0.4vh solid var(--cor4);
        border-radius: 1.5em;
        text-align: center;
    }

    .geral button {
        width: 100%;
        height: 90%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border: solid var(--cor4);
        border-radius: var(--bs-border-radius-xxl);
    }
    .lyt_inicio button:hover { filter: brightness(90%); }
    .HTML button { background-image: url(pad_Items/imagens/fundos/Fundo\ HTML.png); }
    .JS button { background-image: url(pad_Items/imagens/fundos/Fundo\ JS.png); }
    .PhP button { background-image: url(pad_Items/imagens/fundos/Fundo\ PhP.png); }
    .Hardware button { background-image: url(pad_Items/imagens/fundos/Fundo\ Hardware.png); }

    /* Responsividade */
    @media screen and (max-width: 1024px) {

        .lyt_inicio{ flex-direction:column; height: 100%; }

        .geral{
            width: 100%;
            height: 40%;
            margin-bottom: 1%;
            justify-content: center;
        }

        .placas{
            width: 50%;
            height: 22%;
            font-size:large;
            margin-top: 2%;
        }

        .HTML button { background-image: url(pad_Items/imagens/fundos/Fundo\ HTML\ mobile.png); }
        .JS button { background-image: url(pad_Items/imagens/fundos/Fundo\ JS\ mobile.png); }
        .PhP button { background-image: url(pad_Items/imagens/fundos/Fundo\ PhP\ mobile.png); }
        .Hardware button { background-image: url(pad_Items/imagens/fundos/Fundo\ Hardware\ mobile.png); }
    }
</style>
</head>
<body>
    <!-- Cabeçalho -->
    <div id="header" class="d-flex align-items-center justify-content-between px-3">
        <div class="btns_header d-flex align-items-center">
            <button class="btn_header btn_transparente" onclick="link(1)"><img class="img_header" src="pad_Items/imagens/icones/Casa.png" alt="Início"></button>
        </div>
        <div class="p_header text-center flex-grow-1">
            <p class="mb-0 fs-4 text-center flex-grow-1">INICIO</p>
        </div>
        <div class="btns_header d-flex align-items-center">
            <button class="btn_header btn_transparente" onclick="logout()"><img class="img_header" src="pad_Items/imagens/icones/Logout.png" alt="Logout"></button>
            <button style="margin-left: 1%;" class="btn_header btn_transparente" onclick="link(2)"><img class="img_header perfil_imagem" src="<?php echo obterFotoPerfil(); ?>" alt="Foto Perfil"></button>
        </div>
    </div>
    <!-- Container dos botões das aulas -->
    <div class="main container-fluid">
        <div class="lyt_inicio">
            <div class="HTML geral">
                <div class="placas"><p>HTML</p></div>
                <button id="btn_html" onclick="link(3)"></button>
            </div>

            <div class="JS geral">
                <div class="placas"><p>JS</p></div>
                <button id="btn_js" onclick="link(4)"></button>
            </div>

            <div class="PhP geral">
                <div class="placas"><p>PhP</p></div>
                <button id="btn_php" onclick="link(5)"></button>
            </div>

            <div class="Hardware geral">
                <div class="placas"><p>Hardware</p></div>
                <button id="btn_hardware" onclick="link(6)"></button>
            </div>
        </div>
    </div>
</body>
</html>