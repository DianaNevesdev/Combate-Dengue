function denunciar() {
    alert("Obrigado por denunciar o foco de Dengue! Juntos podemos combater essa doença.");

    // Adiciona classe para escurecer a página
    document.body.classList.add('dark-overlay');

    // Adiciona classe para mudar a cor do botão
    document.getElementById('denunciar-btn').classList.add('button-clicked');

    // Remove as classes após um tempo para resetar a página
    setTimeout(function() {
        document.body.classList.remove('dark-overlay');
        document.getElementById('denunciar-btn').classList.remove('button-clicked');
    }, 2000); // Tempo em milissegundos
}