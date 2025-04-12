function digitar(parametro) {
    // Obter todos os inputs (displays)
    var displays = document.querySelectorAll('.displays input');
    
    // Procurar o primeiro display vazio e adicionar a letra
    for (var i = 0; i < displays.length; i++) {
        if (displays[i].value === "") {
            displays[i].value = parametro;
            break;  // Sai do loop após adicionar a letra no display vazio
        }
    }
}

// Função para limpar o display
function limpar() {
    var displays = document.querySelectorAll('.displays input');
    
    // Limpar todos os displays
    for (var i = 0; i < displays.length; i++) {
        displays[i].value = "";
    }
}

