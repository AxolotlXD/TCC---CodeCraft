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
    .lyt_equipe { width: 100%; height: 100%; margin-top: 0.8%; display: flex; flex-direction: column; justify-content: center; align-items: center; }

    .linha{ width: 90%; height: 45%; display: flex; flex-direction: column; align-items: center; }
    .placas{ width: 30%; height: 7%; background-color: var(--cor3); border: 0.4vh solid var(--cor4); border-radius: 1.5em; text-align: center; margin: 0.3% 0 0.3% 0;}

    .div_pss{ width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 1%; }
    .ps{ width: 35%; height: 100%; padding: 0.1%; background-color: var(--cor3); border-radius: 1em; border: 0.4vh solid var(--cor4); }
    .foto_pessoa { width: 100%; display: flex; justify-content: center; align-items: center; padding-top: 3%;}
    .desc_pessoa { width: 100%; text-align: center; color: white; padding: 2%; }
    .foto{ max-width: 100%; height: 250px; object-fit: cover; object-position: center;  border: 0.4vh solid var(--cor4); border-radius: 1em; }


    /* Responsividade */
    @media screen and (max-width: 1024px) {
        .lyt_equipe{ height: auto; }
        .div_pss{ flex-direction: column; width: 97%;}
        .ps{ width: 100%; height: auto; margin-bottom: 5%; margin-top: 5%;}
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
            <p class="mb-0 fs-4 text-center flex-grow-1">NOSSA EQUIPE</p>
        </div>
        <div class="btns_header d-flex align-items-center">
            <button class="btn_header btn_transparente" onclick="logout()"><img class="img_header" src="pad_Items/imagens/icones/Logout.png" alt="Logout"></button>
            <button style="margin-left: 1%;" class="btn_header btn_transparente" onclick="link(2)"><img class="img_header perfil_imagem" src="<?php echo obterFotoPerfil(); ?>" alt="Foto Perfil"></button>
        </div>
    </div>

    <!-- Container dos botões das aulas -->
    <div class="main container-fluid">
        <div class="lyt_equipe">

            <div class="linha">
                    <div class="div_pss">
                        <div class="ps">
                            <div class="foto_pessoa">
                                <img class="foto" src="pad_items/imagens/equipe/bryan.jpg" alt="Foto Bryan">
                            </div>
                            <div class="desc_pessoa">
                                <h4>Bryan Timoteo de Assis</h4>
                                <h6>Design | Programação</h6>
                            </div>
                        </div>

                        <div class="ps">
                            <div class="foto_pessoa">
                                <img class="foto" src="pad_items/imagens/equipe/caio.jpg" alt="Foto Caio">
                            </div>
                            <div class="desc_pessoa">
                                <h4>Caio Eli dos Santos</h4>
                                <h6>Documentação</h6>
                            </div>
                        </div>

                        <div class="ps">
                            <div class="foto_pessoa">
                                <img class="foto" src="pad_items/imagens/equipe/gustavo.jpg" alt="Foto Gustavo">
                            </div>
                            <div class="desc_pessoa">
                                <h4>Gustavo Pires</h4>
                                <h6> Documentação | Programação</h6>
                            </div>
                        </div>
                </div>
            </div>

            <div class="linha">
                    <div class="div_pss">
                        <div class="ps">
                            <div class="foto_pessoa">
                                <img class="foto" src="pad_items/imagens/equipe/joao.jpg" alt="Foto Joao">
                            </div>
                            <div class="desc_pessoa">
                                <h4>João Laurindo</h4>
                                <h6>Documentação | Banco de Dados</h6>
                            </div>
                        </div>

                        <div class="ps">
                            <div class="foto_pessoa">
                                <img class="foto" src="pad_items/imagens/equipe/pedro.jpg" alt="Foto Pedro">
                            </div>
                            <div class="desc_pessoa">
                                <h4>Pedro Henrique Tiburcio</h4>
                                <h6>Programação | Banco de Dados</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>