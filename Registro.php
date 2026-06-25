<?php
    require_once 'bds/bd_config.php';
        
    $erro = "";

    if (isset($_SESSION["erro_registro"])) {
        $erro = $_SESSION["erro_registro"];
        unset($_SESSION["erro_registro"]);
    }
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CodeCraft - Registro</title>
    <link rel="icon" type="image/x-icon" href="pad_items/imagens/favicon.png">
    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script src="pad_Items/comps/pad_JS.js"></script>
    <link rel="stylesheet" href="pad_Items/comps/pad_CSS.css">
    <style>
        .main{ justify-items: center; padding-top: 3.5%;}

        .registro {
            border: 4px solid #292d41;
            border-radius: 60px;
            width: 100%;
            background-color: #38405d;
            padding: 4% 2% 2% 2%;
        }

        .form_registro { margin-top: 2rem; padding: 2rem; }
        .div_registrar { margin-top: 4.3em; margin-bottom: 1em;}
        .a_registro{ text-align: center; }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
        <div id="header">
            <p class="text-center text-wrap fs-4">REGISTRO</p>
        </div>
        <!-- Container Geral -->
        <div class="main container-sm">
            <!-- Div do Registro -->
            <div class="registro border-3 rounded-5">
                <p class="text-center text-wrap fs-3">CRIE SUA CONTA NO <br>CODECRAFT!</p>
                <!-- Div do formulário de registro -->
                <div class="form_registro">
                    <form id="form_reg" method="POST" action="bds/bd_auth.php">
                        <input type="hidden" name="acao" value="registro">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="apelido" name="apelido" minlength="3" maxlength="16" required>
                            <label for="apelido">Crie um Apelido (Max. 16 caracteres)</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" name="email" required>
                            <label for="email">Informe seu Email</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="senha" name="senha" minlength="6" maxlength="20" required>
                            <label for="senha">Crie uma Senha (Max. 20 caracteres)</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="cnf_senha" name="cnf_senha" minlength="6" maxlength="20" required>
                            <label for="cnf_senha">Confirme sua Senha</label>
                        </div>
                        <div class="div_registrar d-grid gap-2 col-6 mx-auto">
                            <button class="btn_padrao btn btn-dark rounded-4" type="submit">CRIAR</button>
                            <p id="erroForms" class="text-center" style="color:red;"> <?php echo $erro; ?> </p>
                        </div>
                    </form>
                </div>
                
                <!-- Div para redirecionar para redirecionar para o login -->
                <div class="a_registro">
                <a href="Login.php"><i><b><u>JÁ TEM UMA CONTA?</u></b></i></a>
                </div>
            </div>
        </div>

</body>
</html>