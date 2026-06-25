// Função para o logout
function logout() {
    setBase()
    if (confirm('Tem certeza que deseja sair?')) {
        window.location.href = 'bds/bd_logout.php';
    }
}

// Função para setar a base da função linkar
function setBase() {
    const base = document.createElement('base');
    base.href = '/CodeCraft/';
    document.head.appendChild(base);
}
// Função para simplificar o link com vários diretórios prontos
function link(num) {
    setBase()
    switch(num){
        case 1: //Inicio
        window.location.href = 'Inicio.php';    
        break;
        case 2: //Perfil
        window.location.href = 'Perfil.php';
        break;
        case 3: //Aulas HTML
        window.location.href = 'aulas/html/html_Aulas.php';
        break;
        case 4: //Aulas JS
        window.location.href = 'aulas/js/js_Aulas.php';
        break;
        case 5: //Aulas PhP
        window.location.href = 'aulas/php/php_Aulas.php';
        break; 
        case 6: //Aulas Hardware
        window.location.href = 'aulas/hardware/hardware_Aulas.php';
        break;
        case 7: //Aulas Login
        window.location.href = 'Login.php';
        break;
        case 8: //Aulas Registro
        window.location.href = 'Registro.php';
        break;
        case 9: //Equipe
        window.location.href = 'Equipe.php';
        break;
        default:
            alert('TÁ ERRA O NÚMERO DO LINK MEU CHAPA');
        break;
    }
}