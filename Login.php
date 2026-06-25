<?php
    require_once 'bds/bd_config.php'; 
    atualizarSessao($pdo);

    $erro = "";

    if (isset($_SESSION["erro_login"])) {
        $erro = $_SESSION["erro_login"];
        unset($_SESSION["erro_login"]);
    }
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CodeCraft - Login</title>
    <link rel="icon" type="image/x-icon" href="pad_items/imagens/favicon.png">
    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script src="pad_Items/comps/pad_JS.js"></script>
    <link rel="stylesheet" href="pad_Items/comps/pad_CSS.css">
    <style>
        .main { justify-items: center; padding-top: 3.5%;}
        .login { border: 4px solid #292d41; border-radius: 60px; width: 100%; background-color: #38405d; padding: 4% 2% 2% 2%; }
        .form_login { margin-top: 2rem; padding: 2rem;}
        .div_logar { margin-top: 12.05em; margin-bottom: 1em;}
        .a_login { text-align: center; }
    </style>
</head>
<body>
    <!-- Cabeçalho -->
    <div id="header">
        <p class="text-center text-wrap fs-4">LOGIN</p>
    </div>
        <!-- Container Geral -->
        <div class="main container-sm">
            <!-- Div do login -->
            <div class="login border-3 rounded-5">
                <p class="text-center text-wrap fs-3">FAÇA LOGIN NO <br>CODECRAFT!</p>
                <!-- Div do Formulário de Login -->
                <div class="form_login">
                    <form id="form_log" method="POST" action="bds/bd_auth.php">
                        <input type="hidden" name="acao" value="login">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" name="email" required>
                            <label for="apelido">Email</label>
                        </div>
                        <br>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="senha" name="senha" required>
                            <label for="senha">Senha</label>
                        </div>
                        <div class="div_logar d-grid gap-2 col-6 mx-auto">
                            <button class="btn_padrao btn btn-dark rounded-4" type="submit">LOGAR</button>
                            <p id="erroForms" class="text-center" style="color:red;"> <?php echo $erro; ?> </p>
                        </div>
                    </form>
                </div>
                <!-- Div para redirecionar para a página de registro -->
                <div class="a_login">
                    <a href="Registro.php"><i><b><u>NÃO TEM UMA CONTA?</u></b></i></a>
                </div>
            </div>
        </div>
</body>
</html>