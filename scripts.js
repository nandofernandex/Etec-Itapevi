$(document).ready(function () {
    // Quando um link de navegação é clicado
    $('.nav-container a').on('click', function (event) {

        // Obter o alvo da seção do link
        var target = $(this).attr('href');

        // Rolar suavemente para a seção alvo
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // 800 é a velocidade da animação em milissegundos
    });
});
