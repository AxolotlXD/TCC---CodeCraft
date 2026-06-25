<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft!</title>
    <link rel="icon" type="image/x-icon" href="pad_items/imagens/favicon.png">
    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="pad_Items/comps/pad_JS.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="pad_Items/comps/pad_CSS.css">
    <style>
        .main{ height: 94vh;}
        .lyt_index{ display: flex; flex-direction: row; align-items: center; justify-items: center; height: 100%; width: 100%; margin-top: 0.8% ;}

        .esq{ width: 60%; padding: 3%; font-size: larger; text-align: justify;}
        .dir{ width: 40%; }

        .btn_padrao{ padding: 1.5% 5% 1.5% 5%; border-radius: 20px; margin: 0 1% 0 1%;}
        .esq_buttons{ font-size: medium; display: flex; justify-content: left; margin-top: 5%;}

        #img_index{
            max-width: 100%;
            width: 90%;
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
            filter: drop-shadow(5px 5px 25px rgba(0,0,0,0.9));
        }
        
        /* Responsividade */
        @media screen and (max-width: 1024px) {
            .lyt_index{ flex-direction: column;}

            .btn_padrao{ padding: 2% 5% 2% 5%; border-radius: 10px; margin: 0 1% 0 1%;}
            .esq_buttons{ font-size: medium; display: flex; justify-content: center; margin-top: 5%;}

            .esq{ width: 100%; font-size: x-small; text-align: left;}
            .dir{ width: 100%; }

            #img_index{ max-width: 100%; width: 80%;  margin-top: 7%;}
        }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <div id="header" class="d-flex align-items-center justify-content-between px-3">
        <div class="btns_header d-flex align-items-center">
            <button class=" btn_transparente" onclick=""></button>
        </div>
        <div class="p_header text-center flex-grow-1">
            <p class="mb-0 fs-4 text-center flex-grow-1">BEM-VINDO!</p>
        </div>
        <div class="btns_header d-flex align-items-center">
            <button class=" btn_transparente" onclick=""></button>
        </div>
    </div>
    <!-- Container Geral -->
    <div class="main container-fluid">
        <!-- Div para definir o layout da página index -->
        <div class="lyt_index">
            <!-- Container da esquerda -->
            <div class="esq">
                <p>
                    Na CodeCraft, você desbloqueia o poder de criar com tecnologia! Explore uma variedade de linguagens de programação 
                    e desenvolva habilidades reais em um ambiente prático e imersivo, com uma metodologia que valoriza seu tempo e seu 
                    progresso.
                    <br><br>
                    Domine a criação de websites com HTML e CSS, dê vida às suas páginas com JavaScript e mergulhe no desenvolvimento 
                    back-end com PHP e banco de dados. E vai além: temos até aulas de Hardware para você aprender a escolher peças e 
                    montar o computador ideal, como um verdadeiro especialista!      
                    <br><br>
                    Aqui, aprender é rápido, claro e divertido! Nossa didática é focada no que realmente importa: seu aprendizado eficaz. 
                    Com aulas diretas ao ponto e cheias de exemplos práticos, você evita a dispersão e avança rapidamente — sem complicação.
                    <br><br>
                    <strong>Aqui, você não só aprende: você constrói.</strong>
                </p>
                <!-- Div para os botões -->
                <div class="esq_buttons">
                    <button class="btn_padrao" onclick="link(7)">ENTRAR</button>
                    <button class="btn_padrao" onclick="link(8)">REGISTRAR-SE</button>
                </div>
            </div>
            <!-- Container da direita -->
            <div class="dir">
                <img id="img_index" src="pad_Items/imagens/favicon.png">
            </div>
        </div>
    </div>
</body>
</html>